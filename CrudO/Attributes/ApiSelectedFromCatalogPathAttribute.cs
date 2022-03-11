using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrudO.Attributes
{
    public class ApiSelectedFromCatalogPathAttribute : ApiPathAttribute
    {
        public ApiSelectedFromCatalogPathAttribute(string path) : base(path)
        {

        }
    }
}
