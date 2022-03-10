using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicCRUD.Attributes
{
    public class ApiDeletePathAttribute : ApiPathAttribute
    {
        public ApiDeletePathAttribute(string path) : base(path)
        {

        }
    }
}
