
using CrudO.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrudO.Attributes
{

    [System.AttributeUsage(System.AttributeTargets.Property)]
    public class ItemAttribute : Attribute, IItem
    {
        public object Id {get;set;}
        public object ParentId {get;set;}
        public string Title {get;set;}
        public string Description {get;set;}
        public bool Required {get;set;}
        public string InputType {get;set;}
        public bool ReadOnly {get;set;}
        public bool Hidden {get;set;}
        public string Type {get;set;}
        public bool IsPrimaryKey {get;set;}
        public bool IsNavigationCollection {get;set;}
        public bool IgnoreForUpsert {get;set;}
       
        public bool UseAsTitle { get; set; }
        public string Key { get; set;}
        public int RequestPage { get; set;}
        public string ApiSelectFromCatalogPath { get; set; }
        public string ApiSelectedFromCatalogPath { get; set; }
        public NavRoutes NavRoutes { get; set; }

        public ItemAttribute()
        {
            
        }
       
    }
}
