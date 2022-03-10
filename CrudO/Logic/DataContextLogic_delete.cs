
using DevBase.CRUD;
using DynamicCRUD.Attributes;
using DynamicCRUD.Data;
using DynamicCRUD.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace DynamicCRUD.Logic
{
    public static class DataContextLogic_delete
    {
        public static FormsContext GetRootDataContext(AppSettings configuration)
        {
            return configuration.DataContextRoot;
        }

        public static FormsContext GetRootDataContext(string rootType)
        {
            FormsContext dataContext = new FormsContext();
            var typeName = rootType;
            var type = ReflectionHelper.GetType(typeName);
            var dataContextAttribute = ReflectionHelper.GetAttribute<FormsContextAttribute>(type) as FormsContextAttribute;

            dataContext = Mapping.Mapper.Map<FormsContext>(dataContextAttribute);
            var dummyItem = new ItemBase()
            {
                Type = rootType
            };
            dataContext.Menu = GetMenu(dummyItem);

            return dataContext;
        }

        public static FormsContext GetDataContext(ItemBase fromDataItem)
        {
            FormsContext dataContext = new FormsContext();
            var typeName = fromDataItem.Type;
            var type = ReflectionHelper.GetType(typeName);
            var dataContextAttribute = ReflectionHelper.GetAttribute<FormsContextAttribute>(type) as FormsContextAttribute;

            dataContext = Mapping.Mapper.Map<FormsContext>(dataContextAttribute);
            dataContext.Menu = GetMenu(fromDataItem);

            if (fromDataItem.Id != null)
            {
                dataContext.Title = fromDataItem.Title;
                dataContext.Id = fromDataItem.Id;
                dataContext.ParentId = fromDataItem.ParentId;
            }

            return dataContext;
        }

        public static Models.Data GetData(ItemBase fromNavigationProperty, DbContext db, AppSettings configuration)
        {
            Models.Data data = new Models.Data();
            //paging
            data.Title = fromNavigationProperty.Title;
            data.PageSize = configuration.PageSize;
            data.CurrentPage = fromNavigationProperty.RequestPage;
            var type = ReflectionHelper.GetType(fromNavigationProperty.Type);
            data = PrepareData(data, db, type, fromNavigationProperty.ParentId);
            return data;
        }

        private static Models.Data PrepareData(Models.Data data, DbContext db, Type type, Object parentId = null)
        {
            var genericRepository = ReflectionHelper.CreateGenericRepository(type, db);

            var query = (genericRepository as IRepository).GetQuery();

            //LinInfo.Forms.Models.Data data = new Models.Data();
            //paging

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
                var dataItem = GetDataItemFromData(item) as ItemBase;
                dataItem.ParentId = parentId;
                dataItems.Add(dataItem);
            }

            data.Items = dataItems;
            return data;
        }

        public static void Delete(ItemBase item, DbContext db, string currentUser)
        {
            var genericRepository = GetGenericRepository(item.Type, db);
            //Get from form fields the primary key
            var itemType = ReflectionHelper.GetType(item.Type);
            var pkType = GetTypeOfPrimaryKey(itemType);
            var pkValue = ReflectionHelper.GetTypedValue(pkType, item.Id.ToString());
            var dbItem = genericRepository.Find(pkValue);
            var softDelete = dbItem as IDeletable;
            softDelete.IsDeleted = true;
            var traceable = dbItem as IDeletable;
            traceable.DeletedBy = currentUser;
            traceable.DeletedDate = DateTime.Now;
            genericRepository.SetModified(dbItem);
            genericRepository.Save();
        }

        /*
         *     public static void DeleteDataItem(DynamicFormItemBase dataItem, DbContext db)
        {
            var genericRepository = GetGenericRepository(dataItem.Type, db);
            //Get from form fields the primary key
            var itemType = ReflectionHelper.GetType(dataItem.Type);
            var pkType = GetTypeOfPrimaryKey(itemType);
            var pkValue = ReflectionHelper.GetTypedValue(pkType, dataItem.Id.ToString());
            var dbItem = genericRepository.Find(pkValue);
            var softDelete = dbItem as ISoftDelete;
            softDelete.IsDeleted = true;
            var traceable = dbItem as ITraceable;
            traceable.DeletedBy = "Pendiente";
            traceable.DeletedDate = DateTime.Now;
            genericRepository.SetModified(dbItem);
            genericRepository.Save();
        }

         */

        public static object GetDataItemFromData(object item)
        {
            ItemBase dataItem = new ItemBase();

            var dataContextAttribute = ReflectionHelper.GetAttribute<FormsContextAttribute>(item);
            //var itemAttribute=ReflectionHelper.GetAttribute<It>
            //dataItem=Mapping.Mapper.Map<Item>()
            dataItem.Title = GetTitleAttributeValue(item);
            dataItem.Type = item.GetType().FullName;
            dataItem.Id = GetPrimaryKeyAttributeValue(item);
            dataItem.ApiGetFormPath = GetApiGetFormPath(item);
            dataItem.ApiGetDataPath = GetApiGetDataPath(item);
            dataItem.ApiGetDataContextPath = GetApiGetDataContextPath(item);
            dataItem.ApiSelectFromCatalogPath = GetApiSelectFromCatalogPath(item);
            dataItem.ApiSelectedFromCatalogPath = GetApiSelectedFromCatalogPath(item);
            return dataItem;
        }

        public static string GetTitleAttributeValue(Object item)
        {
            //We search for a attribute property called "UseAsDataItemLabel" and use its value to set the dataitems label
            //If the attribute property is not available, we use the dataitem Id
            string title = null;
            PropertyInfo[] pis = item.GetType().GetProperties();
            ItemAttribute attr = null;
            PropertyInfo pkPi = null;
            foreach (PropertyInfo pi in pis)
            {

                attr = ReflectionHelper.GetAttribute<ItemAttribute>(pi);
                if (attr != null)
                {
                    if (attr.UseAsTitle)
                    {
                        var value = pi.GetValue(item);
                        title = value?.ToString();
                        break;
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
        public static Object GetPrimaryKeyAttributeValue(Object item)
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

        public static string GetApiGetFormPath(Object item)
        {
            var dynamicFormAttr = ReflectionHelper.GetAttribute<FormsContextAttribute>(item) as FormsContextAttribute;
            return dynamicFormAttr.ApiGetFormPath;
        }

        public static string GetApiGetFormPath(Type type)
        {
            var dynamicFormAttr = ReflectionHelper.GetAttribute<FormsContextAttribute>(type) as FormsContextAttribute;
            return dynamicFormAttr.ApiGetFormPath;
        }

        public static string GetApiGetDataPath(object dataItem)
        {
            var dynamicFormAttr = ReflectionHelper.GetAttribute<FormsContextAttribute>(dataItem) as FormsContextAttribute;
            return dynamicFormAttr.ApiGetDataPath;
        }
        public static string GetApiGetDataPath(Type type)
        {
            var dynamicFormAttr = ReflectionHelper.GetAttribute<FormsContextAttribute>(type) as FormsContextAttribute;
            return dynamicFormAttr.ApiGetDataPath;
        }
        public static string GetApiGetDataPath(ItemBase fromItem)
        {
            string typeName = fromItem.Type;
            var type = ReflectionHelper.GetType(typeName);
            var dynamicFormAttr = ReflectionHelper.GetAttribute<FormsContextAttribute>(type) as FormsContextAttribute;
            return dynamicFormAttr.ApiGetDataPath;
        }

        public static string GetApiGetDataContextPath(object dataItem)
        {
            var dynamicFormAttr = ReflectionHelper.GetAttribute<FormsContextAttribute>(dataItem) as FormsContextAttribute;
            return dynamicFormAttr.ApiGetDataContextPath;

        }

        public static string GetApiSelectFromCatalogPath(object dataItem)
        {
            var dynamicFormAttr = ReflectionHelper.GetAttribute<FormsContextAttribute>(dataItem) as FormsContextAttribute;
            if (dynamicFormAttr != null)
            {
                return dynamicFormAttr.ApiSelectFromCatalogPath;
            }
            else
            {
                return null;
            }

        }
        public static string GetApiSelectedFromCatalogPath(object dataItem)
        {
            var dynamicFormAttr = ReflectionHelper.GetAttribute<FormsContextAttribute>(dataItem) as FormsContextAttribute;
            if (dynamicFormAttr != null)
            {
                return dynamicFormAttr.ApiSelectedFromCatalogPath;
            }
            else
            {
                return null;
            }

        }

        public static string GetApiGetDataContextPath(Type type)
        {
            var dynamicFormAttr = ReflectionHelper.GetAttribute<FormsContextAttribute>(type) as FormsContextAttribute;
            return dynamicFormAttr.ApiGetDataContextPath;

        }
        public static string GetApiSelectFromCatalogPath(Type type)
        {
            var dynamicFormAttr = ReflectionHelper.GetAttribute<FormsContextAttribute>(type) as FormsContextAttribute;
            return dynamicFormAttr.ApiSelectFromCatalogPath;

        }

        public static string GetApiSelectedFromCatalogPath(Type type)
        {
            var dynamicFormAttr = ReflectionHelper.GetAttribute<FormsContextAttribute>(type) as FormsContextAttribute;
            return dynamicFormAttr.ApiSelectedFromCatalogPath;

        }

        public static string GetApiGetDataContextPath(ItemBase fromItem)
        {
            string typeName = fromItem.Type;
            Type type = ReflectionHelper.GetType(typeName);
            var dynamicFormAttr = ReflectionHelper.GetAttribute<FormsContextAttribute>(type) as FormsContextAttribute;
            return dynamicFormAttr.ApiGetDataContextPath;

        }
        //public static DataContextAttribute GetDataContextAttribute(Type fromType)
        private static Menu GetMenu(ItemBase fromItem)
        {

            Menu menu = new Menu();
            List<ItemBase> items = new List<ItemBase>();
            string typeName = fromItem.Type;
            Type type = ReflectionHelper.GetType(typeName);
            //Get title
            var typeInfo = type.GetTypeInfo();

            var pis = typeInfo.GetProperties();
            foreach (var pi in pis)
            {
                var subType = pi.PropertyType;
                var navCollectionAttr = ReflectionHelper.GetAttribute(pi, typeof(ItemAttribute)) as ItemAttribute;
                if (navCollectionAttr != null && navCollectionAttr.IsNavigationCollection)
                {
                    var navCollectionType = pi.PropertyType.GetGenericArguments()[0];
                    ItemBase menuItem = new ItemBase()
                    {
                        Title = navCollectionAttr.Title ?? navCollectionType.Name + " Items",
                        Type = navCollectionType.FullName,
                        ParentId = fromItem.Id,
                        ApiGetFormPath = GetApiGetFormPath(navCollectionType),
                        ApiGetDataPath = GetApiGetDataPath(navCollectionType),
                        ApiGetDataContextPath = GetApiGetDataContextPath(navCollectionType),
                        ApiSelectFromCatalogPath = GetApiSelectFromCatalogPath(navCollectionType),
                        ApiSelectedFromCatalogPath = GetApiSelectedFromCatalogPath(navCollectionType)
                    };
                    items.Add(menuItem);
                }
            }
            menu.Items = items;
            return menu;


        }





        public static Object GetForm(ItemBase item, DbContext db)
        {
            Type instanceType = typeof(Models.Form<>);

            string genericTypeStr = item.Type;
            Type genericType = ReflectionHelper.GetType(genericTypeStr);
            Models.FormBase formBase;
            if (item.Id != null)
            {
                var pkType = GetTypeOfPrimaryKey(genericType);

                var pkValue = ReflectionHelper.GetTypedValue(pkType, item.Id.ToString());
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


        public static Type GetTypeOfPrimaryKey(Type type)
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
        public static int Upsert(FormBase formBase, DbContext db, string currentUser)
        {
            //Get from form fields the primary key
            var pk = formBase.Properties.Single(f => f.IsPrimaryKey);
            //cast the value to a valid .net type
            var pkValue = ReflectionHelper.GetTypedValue(pk.Type, pk.Value.ToString());

            //create a generic repository, for example Repository<Site>
            var itemType = ReflectionHelper.GetType(formBase.Type);
            IRepository genericRepository = GetGenericRepository(formBase, db);

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
            var traceable = dbItem as IModifiable;
            traceable.ModifiedBy = currentUser;
            traceable.ModifiedDate = DateTime.Now;
            genericRepository.SetModified(dbItem);
        }

        private static IRepository GetGenericRepository(Type entityType, DbContext db)
        {
            var repositoryType = typeof(Repository<>);
            return ReflectionHelper.CreateGenericInstance(repositoryType, entityType, db) as IRepository;

        }
        private static IRepository GetGenericRepository(FormBase formBase, DbContext db)
        {
            var repositoryType = typeof(Repository<>);
            string type = formBase.Type;
            var itemType = ReflectionHelper.GetType(type);
            return ReflectionHelper.CreateGenericInstance(repositoryType, itemType, db) as IRepository;

        }
        private static IRepository GetGenericRepository(string entityTypeName, DbContext db)
        {
            var repositoryType = typeof(Repository<>);

            var itemType = ReflectionHelper.GetType(entityTypeName);
            return ReflectionHelper.CreateGenericInstance(repositoryType, itemType, db) as IRepository;
        }

        private static void AddNewItem(FormBase formBase, Type itemType, IRepository genericRepository, string currentUser)
        {
            //object is new
            //create new instance
            var newItem = CreateDataObject(formBase);

            //set tracing properties
            var traceable = newItem as ICreatable;
            traceable.CreatedBy = currentUser;
            traceable.CreatedDate = DateTime.Now;

            var activable = newItem as IActivable;
            activable.IsActive = true;

            //THIS IS ALREADY DONE IN --> var newItem = DynamicFormHelper.CreateDataObject(formBase);
            //iterate form fields to set data entity properties
            //var pis = itemType.GetProperties();
            //foreach (var field in formBase.EditableProperties)
            //{
            //    var pi = pis.Single(p => p.Name == field.Key);
            //    var typedValue = ReflectionHelper.GetTypedValue(field.Type, field.Value.ToString());
            //    pi.SetValue(newItem, typedValue);
            //}

            //add item to database
            genericRepository.Add(newItem);
        }

        public static Object CreateDataObject(FormBase formBase)
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
    }
}
