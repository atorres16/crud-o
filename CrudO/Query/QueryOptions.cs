using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicCRUD.Query
{
    public class QueryOptions:IQueryOptions
    {
        
        public bool IncludeInactive { get; set; }
        public bool IncludeDeleted { get; set; }
        public List<string> IncludePaths { get; set;}

        public QueryOptions()
        {
            IncludeInactive = true;
            IncludeDeleted = false;
            IncludePaths = new List<string>();
        }
    }
}
