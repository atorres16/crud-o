using System.Collections.Generic;

namespace DynamicCRUD.Query
{
    public interface IQueryOptions
    {
        
        public bool IncludeInactive { get; set; }
        public bool IncludeDeleted { get; set; }
        public List<string> IncludePaths { get; set; }

    }
}