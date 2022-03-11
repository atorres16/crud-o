using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrudO.Attributes
{
  public  class ApiSelectFromCatalogPathAttribute:ApiPathAttribute
    {
        public ApiSelectFromCatalogPathAttribute(string path):base(path)
        {

        }
    }
}
