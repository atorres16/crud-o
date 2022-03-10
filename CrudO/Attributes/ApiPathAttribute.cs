using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicCRUD.Attributes
{
    [System.AttributeUsage(System.AttributeTargets.Class)]
    public class ApiPathAttribute: Attribute
    {

        public ApiPathAttribute(string path)
        {
            Path = path;
        }

        public string Path { get; set; }
    }
}
