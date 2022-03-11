using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrudO
{
    public class InputTypeMappings
    {
        public static readonly Dictionary<string, string> Map = new Dictionary<string, string>()
            {
                {"System.String","text" },
                {"System.Int32","number" },
                {"System.Decimal","number" },
                {"System.Boolean","checkbox" },
            };
    }
}
