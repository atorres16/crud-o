using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicCRUD.Abstract
{
   public class Menu
    {
        public Menu()
        {
            Items = new List<ItemBase>();
            
        }
        public List<ItemBase> Items { get; set; }
    }
}
