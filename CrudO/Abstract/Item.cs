using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrudO.Abstract
{
    public class Item<T>:ItemBase
    {

        public T TypedValue { get; set; }


        public Item(T dataObject)
        {
            this.Value = dataObject;
        }
    }
}
