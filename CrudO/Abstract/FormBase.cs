using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrudO.Abstract
{
    public class FormBase : IForm
    {
        public object Id { get; set;}
        public object ParentId { get; set;}
        public string Title { get; set;}
        public string Description { get; set;}
        public string Type { get; set; }
        public List<ItemBase> Properties { get; set;}
        public IEnumerable<ItemBase> EditableProperties
        {
            get
            {
                return Properties.Where(p =>
                !p.IgnoreForUpsert && !p.IsPrimaryKey
                );
            }
        }

        public NavRoutes NavRoutes { get; set; }
    }
}
