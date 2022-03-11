using CrudO.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CrudO.Sample.Models
{
    [FormsContext(Title ="Detail")]
    [ApiGetDataPath("/api/Details/GetData")]
    [ApiGetFormPath("/api/Details/GetForm")]
    public class Detail
    {
        [Item(IsPrimaryKey =true)]
        public int Id { get; set; }

        [Item(UseAsTitle =true)]
        [Required]
        public string Name { get; set; }

        [Item(ReadOnly =true)]
        [ForeignKey(nameof(Master))]
        public int IdMaster { get; set; }
        public Master Master { get; set; }

     
    }
}
