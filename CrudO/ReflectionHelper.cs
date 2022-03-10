

using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using System.Collections;

using Microsoft.EntityFrameworkCore;
using DynamicCRUD.Data;

namespace DynamicCRUD
{
    public static class ReflectionHelper
    {
        public static Attribute GetAttribute(Object instance, Type attributeType)
        {
            Type typeOfInstance = instance.GetType();
            var typeOfInstanceInfo = typeOfInstance.GetTypeInfo();
            return GetAttribute(typeOfInstanceInfo, attributeType);
        }
        public static Attribute GetAttribute<T>(Type type) where T : Attribute
        {
            Type typeOfInstance = type;
            var typeOfInstanceInfo = typeOfInstance.GetTypeInfo();
            return GetAttribute(typeOfInstanceInfo, typeof(T)) as T;
        }
        public static Attribute GetAttribute<T>(Object instance) where T : Attribute
        {
            Type typeOfInstance = instance.GetType();
            var typeOfInstanceInfo = typeOfInstance.GetTypeInfo();
            return GetAttribute(typeOfInstanceInfo, typeof(T)) as T;
        }

        public static Attribute GetAttribute(Type type, Type attributeType)
        {
            var typeOfInstanceInfo = type.GetTypeInfo();
            var requestedAttr = typeOfInstanceInfo.GetCustomAttribute(attributeType);
            return requestedAttr;
        }

        public static Attribute GetAttribute(PropertyInfo pi, Type attributeType)
        {

            var typeOfInstanceInfo = pi;
            var hasRequestedAttribute = Attribute.IsDefined(typeOfInstanceInfo, attributeType);
            if (hasRequestedAttribute)
            {
                var attr = typeOfInstanceInfo.GetCustomAttributes(attributeType, false);
                if (attr.Length > 0)
                {
                    // Use attr[0], you'll need foreach on attr if MultiUse is true
                    var requestedAttribute = attr[0];
                    return requestedAttribute as Attribute;
                }
            }
            return null;
        }

        public static T GetAttribute<T>(PropertyInfo pi) where T : Attribute
        {

            var attr = GetAttribute(pi, typeof(T));
            return attr as T;
        }


        public static T GetAttribute<T>(string typeName) where T : Attribute
        {
            Type type = GetType(typeName);
            var attr = GetAttribute(type, typeof(T));
            return attr as T;
        }

        //public static T GetAttribute<T, U>() where T : Attribute
        //{
        //    var attributeType = typeof(T);
        //    var declaringType = typeof(U);
        //    var attr = GetAttribute(declaringType, attributeType);
        //    return attr as Attribute;
        //}

        internal static object CreateInstance(string instanceTypeName)
        {
            var type = GetType(instanceTypeName);
            var instance = Activator.CreateInstance(type);
            return instance;
        }

        /// <summary>
        /// Search the loaded assemblies and returns the specified type
        /// </summary>
        /// <param name="typeName">The full name of the Type</param>
        /// <returns>Specified Type</returns>
        /// <remarks>
        /// The assembly must be eager loaded in Startup.cs
        /// </remarks>
        public static Type GetType(string typeName)
        {
            if (typeName == "Int32")
            {
                return typeof(Int32);
            }
            if (typeName == "System.String")
            {
                return typeof(String);
            }
            if(typeName=="System.Boolean")
            {
                return typeof(Boolean);
            }
            if (typeName == "System.Decimal")
            {
                return typeof(String);
            }
            var type = Type.GetType(typeName);
            if (type != null)
            {
                return type;
            }
            
            var assList = AppDomain.CurrentDomain.GetAssemblies();
           

            foreach (var a in assList)
            {
                type = a.GetType(typeName);
                if (type != null)
                {
                    return type;
                }
            }
            
            return null;
        }


        public static Type GetType(string typeName, Assembly assembly)
        {
            var type = assembly.GetType(typeName);
            return type;
        }

        /// <summary>
        /// Creates a generic instance of a generic type
        /// </summary>
        /// <param name="instanceType">The type of object</param>
        /// <param name="genericTypeArg">The type of the generic argument</param>
        /// <returns>A generic instance</returns>
        /// <remarks>
        /// To create an instance of Foo<Bar>:
        /// Foo<Bar> genericFoo = ReflectionHelper.CreateGenericInstance(typeOf(Foo),typeOf(Bar));
        /// </remarks>
        public static Object CreateGenericInstance(Type instanceType, Type genericTypeArg)
        {

            //get type argument
            var genericType = instanceType.MakeGenericType(genericTypeArg);

            var genericInstance = Activator.CreateInstance(genericType);

            return genericInstance;
        }

        public static Object CreateGenericInstance(Type instanceType, Type genericTypeArg, object constructorParameter)
        {

            //get type argument
            var genericType = instanceType.MakeGenericType(genericTypeArg);

            var genericInstance = Activator.CreateInstance(genericType, constructorParameter);

            return genericInstance;
        }

        public static void SetPropertyValue(PropertyInfo pi, Object instance, string targetTypeName, Object value)
        {
            Object typedValue = GetTypedValue(targetTypeName, value);
            pi.SetValue(instance, typedValue);
        }

        public static void SetPropertyValue(PropertyInfo pi, Object instance, Type targetType, Object value)
        {
            Object typedValue = GetTypedValue(targetType.Name, value);

            pi.SetValue(instance, typedValue);
        }

        public static Object GetTypedValue(string targetTypeName, Object value)
        {
            Object typedValue = TryCastToBasicType(targetTypeName, value);
            if (typedValue == null)
            {
                Type targetType = GetType(targetTypeName);
                typedValue = Activator.CreateInstance(targetType, value);
            }
            return typedValue;
        }

        public static object TryCastToBasicType(string typeName, Object value)
        {
            Object typedValue = null;
            if (typeName == "System.String")
            {
                typedValue = value?.ToString();
            }
            else if (typeName == "System.Int32")
            {
                typedValue = int.Parse(value.ToString());
            }
            else if (typeName == "System.Boolean")
            {
                typedValue = Boolean.Parse(value.ToString());
            }
            else if(typeName=="System.Decimal")
            {
                typedValue = decimal.Parse(value.ToString());
            }
            return typedValue;
        }

        public static Object GetTypedValue(Type type, Object value)
        {

            Object typedValue = TryCastToBasicType(type.FullName, value);
            if (typedValue == null)
            {
                typedValue = Activator.CreateInstance(type, value);
            }

            return typedValue;
        }

        public static object CreateGenericRepository(string typeName, DbContext dbContext)
        {
            var repositoryType = typeof(Repository<>);

            var itemType = ReflectionHelper.GetType(typeName);

            var genericRepository = ReflectionHelper.CreateGenericInstance(repositoryType, itemType, dbContext);

            return genericRepository;
        }


        public static object CreateGenericRepository(Type type, DbContext dbContext)
        {
            var repositoryType = typeof(Repository<>);

            var genericRepository = ReflectionHelper.CreateGenericInstance(repositoryType, type, dbContext);

            return genericRepository;
        }
    }
}
