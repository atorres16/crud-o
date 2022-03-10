using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicCRUD.Attributes
{
  public  class ApiSelectFromCatalogPathAttribute:ApiPathAttribute
    {
        public ApiSelectFromCatalogPathAttribute(string path):base(path)
        {

        }
    }
}
