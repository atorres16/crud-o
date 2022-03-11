using CrudO.Attributes;

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CrudO.Sample.Models
{
    [FormsContext(Title ="Master")]
    public class Master
    {
        [Item(IsPrimaryKey =true)]
        public int Id { get; set; }

        [Item(UseAsTitle =true)]
        public string Name { get; set; }

        [Item(IsNavigationCollection =true)]
        public List<Detail> Details { get; set; }

     
    }
}
