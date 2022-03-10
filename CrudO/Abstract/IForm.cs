using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicCRUD.Abstract
{
    public interface IForm
    {
        public Object Id { get; set; }
        public Object ParentId { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public List<ItemBase> Properties { get; set; }

        public NavRoutes NavRoutes { get; set; }
    }
}
