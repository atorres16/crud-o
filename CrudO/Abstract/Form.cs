
using CrudO.Attributes;
using CrudO.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace CrudO.Abstract
{
    public class Form<T> : FormBase where T : class, new()
    {
        private T DataObject { get; set; }


        


        public Form()
        {
           
            this.DataObject = new T();
            Properties = new List<ItemBase>();
            
            SetFormAttributes(typeof(T));
            SetPropertyAttributes(typeof(T));
            SetNavRoutes(typeof(T));
            
        }

     

        public Form(T dataObject)
        {
            
            this.DataObject = dataObject;
            Properties = new List<ItemBase>();
            //Form Attributes
            SetFormAttributes(DataObject.GetType());
            SetPropertyAttributes(dataObject.GetType());
            SetId(dataObject);
            SetNavRoutes(typeof(T));
            
        }

        private void SetId(T dataObject)
        {
            var pkProp = this.Properties.Single(p => p.IsPrimaryKey);
            var type = dataObject.GetType();
            var pkPi = type.GetProperty(pkProp.Key);
            this.Id = pkPi.GetValue(dataObject);
        }

        private FormsContextAttribute dcAttribute = null;
        private void SetFormAttributes(Type typeOfObject)
        {
            var typeInfo = typeOfObject.GetTypeInfo();
            var hasDcAttribute = Attribute.IsDefined(typeInfo, typeof(FormsContextAttribute));
            if (hasDcAttribute)
            {
                var attr = (FormsContextAttribute[])typeInfo.GetCustomAttributes(typeof(FormsContextAttribute), false);

                if (attr.Length > 0)
                {
                    // Use attr[0], you'll need foreach on attr if MultiUse is true
                    dcAttribute = attr[0] as FormsContextAttribute;
                    this.Title = $"Add/Edit {typeOfObject.Name}";
                    //this.FormDescription = dcAttribute.FormDescription;
                    this.Type = typeof(T).FullName;
                }
            }


        }

        private void SetPropertyAttributes(Type typeOfObject)
        {
            //ex. foreach propertyinfo of site
            foreach (PropertyInfo prop in typeOfObject.GetProperties())
            {
                //get type of site
                var t = typeof(T);
                //var pi = t.GetProperty(prop.Name);
                var hasItemAttribute = Attribute.IsDefined(prop, typeof(ItemAttribute));
                if (hasItemAttribute)
                {
                    var attr = (ItemAttribute[])prop.GetCustomAttributes(typeof(ItemAttribute), false);
                    if (attr.Length > 0)
                    {
                        var propertyAttribute = attr[0] as ItemAttribute;
                        if (propertyAttribute.IsNavigationCollection)
                        {
                            continue;
                        }


                        var d1 = typeof(Item<>);
                        Type[] typeArgs = { prop.PropertyType };
                        var makeme = d1.MakeGenericType(typeArgs);
                        var value = t.GetProperty(prop.Name).GetValue(this.DataObject);
                        object o = Activator.CreateInstance(makeme, value);

                        ItemBase item = o as ItemBase;

                        item.Key = prop.Name;

                        SetTitle(prop, propertyAttribute, item);
                        item.Description = propertyAttribute.Description;
                        item.Type = prop.PropertyType.FullName;
                        item.UseAsTitle = propertyAttribute.UseAsTitle;
                        item.IsPrimaryKey = propertyAttribute.IsPrimaryKey;
                        item.Required = propertyAttribute.Required;
                        item.ReadOnly = propertyAttribute.ReadOnly;
                        item.Hidden = propertyAttribute.Hidden;
                        item.IgnoreForUpsert = propertyAttribute.IgnoreForUpsert;

                        if (!string.IsNullOrWhiteSpace(propertyAttribute.InputType))
                        {
                            item.InputType = propertyAttribute.InputType;
                        }
                        else
                        {
                            item.InputType = GetInputType(item.Type);
                        }




                        this.Properties.Add(item);
                    }
                }
            }
        }



        private static void SetTitle(PropertyInfo prop, ItemAttribute propertyAttribute, ItemBase field)
        {
            if (!string.IsNullOrWhiteSpace(propertyAttribute.Title))
            {
                field.Title = propertyAttribute.Title;
            }
            else
            {
                field.Title = prop.Name;
            }
        }


        private string GetInputType(string key)
        {
            return InputTypeMappings.Map.Single(c => c.Key == key).Value;
        }


        private void SetNavRoutes(Type type)
        {
            this.NavRoutes = FormsContextLogic.GetNavRoutes(type);
        }
    }
}
