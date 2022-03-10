using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicCRUD.Attributes
{
    public class ApiGetFormPathAttribute:ApiPathAttribute
    {
        public ApiGetFormPathAttribute(string path):base(path)
        {

        }
    }
}
