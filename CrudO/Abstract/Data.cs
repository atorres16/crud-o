using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicCRUD.Abstract
{
    public class Data
    {
        public string Title { get; set; }
        public List<ItemBase> Items { get; set; }
        public int CurrentPage { get; set; } = 1;
        public int PageSize { get; set; }
        public int TotalPages { get; set; }
        public int TotalItems { get; set; }

        public string Type { get; set; }
    }
}
