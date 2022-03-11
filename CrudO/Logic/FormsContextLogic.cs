using CrudO.Attributes;
using CrudO.Data;
using CrudO.Abstract;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;


namespace CrudO.Logic
{
    public static class FormsContextLogic
    {
        public static FormsContext GetFormsContext(string typeOfTargetEntity, string title, object targetPrimaryKey = null, object targetParentPrimaryKey = null)
        {
            FormsContext formsContext = new FormsContext();
            var typeName = typeOfTargetEntity;
            var type = ReflectionHelper.GetType(typeName);
            var formsContextAttribute = ReflectionHelper.GetAttribute<FormsContextAttribute>(type) as FormsContextAttribute;
            formsContext = Mapping.Mapper.Map<FormsContext>(formsContextAttribute);
            formsContext.Id = targetPrimaryKey;
            formsContext.ParentId = targetParentPrimaryKey;
            formsContext.Menu = GetMenu(typeOfTargetEntity, targetPrimaryKey);
            formsContext.NavRoutes = GetNavRoutes(type);
            formsContext.Title = title;
            return formsContext;
        }

        public static FormBase GetForm(string typeOfTargetEntity, DbContext db, object targetEntityId = null, object targetParentId = null)
        {
            Type instanceType = typeof(Abstract.Form<>);
            Type genericType = ReflectionHelper.GetType(typeOfTargetEntity);
            Abstract.FormBase formBase;
            if (targetEntityId != null)
            {
                var pkType = GetTypeOfPrimaryKey(genericType);
                var pkValue = ReflectionHelper.GetTypedValue(pkType, targetEntityId.ToString());

                //create a generic repository, for example Repository<Site>
                var repositoryType = typeof(Repository<>);
                var genericRepository = ReflectionHelper.CreateGenericInstance(repositoryType, genericType, db) as IRepository;
                var dbItem = genericRepository.Find(pkValue);
                formBase = ReflectionHelper.CreateGenericInstance(instanceType, genericType, dbItem) as FormBase;
            }
            else
            {
                formBase = ReflectionHelper.CreateGenericInstance(instanceType, genericType) as FormBase;
            }
            return formBase;
        }

        public static Menu GetMenu(string typeOfTargetEntity, object targetEntityPrimaryKey)
        {
            Menu menu = new Menu();
            List<ItemBase> items = new List<ItemBase>();
            string typeName = typeOfTargetEntity;
            Type type = ReflectionHelper.GetType(typeName);
            var typeInfo = type.GetTypeInfo();
            var pis = typeInfo.GetProperties();
            foreach (var pi in pis)
            {

                var navCollectionAttr = ReflectionHelper.GetAttribute(pi, typeof(ItemAttribute)) as ItemAttribute;
                if (navCollectionAttr != null && navCollectionAttr.IsNavigationCollection)
                {
                    var navCollectionType = pi.PropertyType.GetGenericArguments()[0];
                    var navFormsAttribute = ReflectionHelper.GetAttribute<FormsContextAttribute>(navCollectionType) as FormsContextAttribute;
                    ItemBase menuItem = new ItemBase()
                    {
                        Title = navFormsAttribute.Title ?? navCollectionType.Name + " Items",
                        Type = navCollectionType.FullName,
                        ParentId = targetEntityPrimaryKey,
                        NavRoutes = GetNavRoutes(navCollectionType)

                    };
                    items.Add(menuItem);
                }
            }
            menu.Items = items;
            return menu;
        }

        public static Abstract.Data GetData(string typeOfTargetEntity, DbContext db, object targetEntityId, int page = 1, int pageSize = 50)
        {

            var formsContextAttribute = ReflectionHelper.GetAttribute<FormsContextAttribute>(typeOfTargetEntity);


            Abstract.Data data = new()
            {
                CurrentPage = page,
                PageSize = pageSize,
                Title = formsContextAttribute.Title
            };
            var genericRepository = GetGenericRepository(typeOfTargetEntity, db);
            var query = (genericRepository as IRepository).GetQuery();
            data.TotalItems = query.Cast<Object>().Count();
            data.TotalPages = (int)Math.Ceiling((decimal)data.TotalItems / data.PageSize);

            var skip = (data.CurrentPage - 1) * data.PageSize;
            var take = data.PageSize;

            var items = query.Cast<Object>()
                .Skip(skip)
                .Take(take)
                .ToList();
            List<ItemBase> dataItems = new List<ItemBase>();

            foreach (var item in items)
            {
                var dataItem = GetDataItemFromData(item, targetEntityId) as ItemBase;
                dataItems.Add(dataItem);
            }
            data.Items = dataItems;
            return data;

        }

        public static NavRoutes GetNavRoutes(Type type)
        {
            NavRoutes navRoutes = new NavRoutes();
            navRoutes.ApiGetFormPath = GetApiPathAttribute<ApiGetFormPathAttribute>(type) ?? navRoutes.ApiGetFormPath;
            navRoutes.ApiGetDataPath = GetApiPathAttribute<ApiGetDataPathAttribute>(type) ?? navRoutes.ApiGetDataPath;
            navRoutes.ApiGetFormsContextPath = GetApiPathAttribute<ApiGetFormsContextPathAttribute>(type) ?? navRoutes.ApiGetFormsContextPath;
            navRoutes.ApiSelectFromCatalogPath = GetApiPathAttribute<ApiSelectFromCatalogPathAttribute>(type) ?? navRoutes.ApiSelectFromCatalogPath;
            navRoutes.ApiSelectedFromCatalogPath = GetApiPathAttribute<ApiSelectedFromCatalogPathAttribute>(type) ?? navRoutes.ApiSelectedFromCatalogPath;
            navRoutes.ApiUpsertPath = GetApiPathAttribute<ApiUpsertPathAttribute>(type) ?? navRoutes.ApiUpsertPath;
            return navRoutes;
        }

        public static int Upsert(FormBase formBase, DbContext db, string currentUser)
        {
            //Get from form fields the primary key
            var pk = formBase.Properties.Single(f => f.IsPrimaryKey);
            //cast the value to a valid .net type
            var pkValue = ReflectionHelper.GetTypedValue(pk.Type, pk.Value.ToString());

            //create a generic repository, for example Repository<Site>
            var itemType = ReflectionHelper.GetType(formBase.Type);
            IRepository genericRepository = GetGenericRepository(formBase.Type, db);

            //Call Find method to get existing item
            var dbItem = genericRepository.Find(pkValue);

            if (dbItem == null)
            {
                AddNewItem(formBase, itemType, genericRepository, currentUser);
            }
            else
            {
                UpdateItem(formBase, currentUser, itemType, genericRepository, dbItem);
            }

            return genericRepository.Save();

        }

        public static void Delete(ItemBase item, DbContext db, string currentUser)
        {
            var genericRepository = GetGenericRepository(item.Type, db);
            //Get from form fields the primary key
            var itemType = ReflectionHelper.GetType(item.Type);
            var pkType = GetTypeOfPrimaryKey(itemType);
            var pkValue = ReflectionHelper.GetTypedValue(pkType, item.Id.ToString());
            var dbItem = genericRepository.Find(pkValue);
            genericRepository.Db.Remove(dbItem);
            genericRepository.SetModified(dbItem);
            genericRepository.Save();
        }

        public static ItemBase GetDataItemFromData(object item, object parentPrimaryKey = null)
        {
            ItemBase dataItem = new ItemBase();
            Type typeOfItem = item.GetType();
            dataItem.Title = GetTitleAttributeValue(item);
            dataItem.Type = typeOfItem.FullName;
            dataItem.Id = GetPrimaryKeyAttributeValue(item);
            dataItem.NavRoutes = GetNavRoutes(typeOfItem);
            dataItem.ParentId = parentPrimaryKey;
            return dataItem;
        }
        private static IRepository GetGenericRepository(string targetEntityType, DbContext db)
        {
            var repositoryType = typeof(Repository<>);
            string type = targetEntityType;
            var itemType = ReflectionHelper.GetType(type);
            return ReflectionHelper.CreateGenericInstance(repositoryType, itemType, db) as IRepository;

        }

        private static string GetApiPathAttribute<T>(Type type) where T : ApiPathAttribute
        {
            var pathAttr = ReflectionHelper.GetAttribute<T>(type) as T;
            return pathAttr?.Path;
        }




        private static Object GetPrimaryKeyAttributeValue(Object item)
        {
            PropertyInfo[] pis = item.GetType().GetProperties();
            ItemAttribute pkAttr = null;
            foreach (PropertyInfo pi in pis)
            {

                pkAttr = ReflectionHelper.GetAttribute<ItemAttribute>(pi);

                if (pkAttr != null && pkAttr.IsPrimaryKey)
                {
                    return pi.GetValue(item);
                }
            }

            return null;
        }

        private static Type GetTypeOfPrimaryKey(Type type)
        {

            var pis = type.GetProperties();
            foreach (var pi in pis)
            {
                var formPropertyAttr = ReflectionHelper.GetAttribute(pi, typeof(ItemAttribute)) as ItemAttribute;
                if (formPropertyAttr != null)
                {
                    if (formPropertyAttr.IsPrimaryKey)
                    {
                        return pi.PropertyType;
                    }
                }
            }
            return null;
        }

        private static void AddNewItem(FormBase formBase, Type itemType, IRepository genericRepository, string currentUser)
        {
            //object is new
            //create new instance
            var newItem = CreateDataObject(formBase);
            //add item to database
            genericRepository.Add(newItem);
        }

        private static Object CreateDataObject(FormBase formBase)
        {
            string instanceType = formBase.Type;
            var instance = ReflectionHelper.CreateInstance(instanceType);

            var pis = instance.GetType().GetProperties();

            foreach (var field in formBase.EditableProperties)
            {
                //find corresponding property
                var pi = pis.Single(p => p.Name == field.Key);
                //convert field.Value to proper type
                string stringValue = field.Value?.ToString();
                Type fieldType = ReflectionHelper.GetType(field.Type);

                Object typedValue = ReflectionHelper.GetTypedValue(field.Type, stringValue);

                pi.SetValue(instance, typedValue);
            }

            return instance;
        }


        private static void UpdateItem(FormBase formBase, string currentUser, Type itemType, IRepository genericRepository, object dbItem)
        {
            //object needs to update
            var pis = itemType.GetProperties();
            foreach (var field in formBase.EditableProperties)
            {
                //get corresponding pi
                var pi = pis.Single(p => p.Name == field.Key);
                //get typed value
                var rawValue = field.Value;
                var typedValue = ReflectionHelper.GetTypedValue(field.Type, rawValue);
                //set value
                pi.SetValue(dbItem, typedValue);
            }
        
            genericRepository.SetModified(dbItem);
        }
        public static string GetTitleAttributeValue(Object item)
        {
            //We search for a attribute property called "UseAsDataItemLabel" and use its value to set the dataitems label
            //If the attribute property is not available, we use the dataitem Id
            string title = null;
            PropertyInfo[] pis = item.GetType().GetProperties();
            ItemAttribute attr;
            PropertyInfo pkPi = null;
            foreach (PropertyInfo pi in pis)
            {

                attr = ReflectionHelper.GetAttribute<ItemAttribute>(pi);
                if (attr != null)
                {
                    if (attr.UseAsTitle)
                    {
                        var value = pi.GetValue(item);
                        if (!string.IsNullOrWhiteSpace(title))
                        {
                            title += " - ";
                        }
                        title += value?.ToString();

                    }
                    else if (attr.IsPrimaryKey)
                    {
                        pkPi = pi;
                    }
                }
            }

            if (string.IsNullOrWhiteSpace(title))
            {
                title = pkPi.GetValue(item).ToString();
            }

            return title;
        }
    }
}
