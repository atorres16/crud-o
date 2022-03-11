
using CrudO.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrudO.Attributes
{
    [System.AttributeUsage(System.AttributeTargets.Class)]
    public class FormsContextAttribute :Attribute, IFormsContext
    {
        public object Id {get;set;}
        public object ParentId {get;set;}
        public string Title {get;set;}
        public string Description {get;set;}
        public Menu Menu {get;set;}
        public FormBase Form {get;set;}
        public Abstract.Data Data {get;set;}
        

        public FormsContextAttribute()
        {
         
        }
    }
}
