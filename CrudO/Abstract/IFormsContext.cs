using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrudO.Abstract
{
    public interface IFormsContext
    {
        public object Id { get; set; }
        public object ParentId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public Menu Menu { get; set; }
        public FormBase Form { get; set; }
        public Data Data { get; set; }
        


    }
}
