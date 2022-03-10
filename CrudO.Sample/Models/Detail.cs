using DynamicCRUD.Attributes;
using DynamicCRUD.CRUD;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicCRUD.Sample.Models
{
    [FormsContext(Title ="Detail")]
    [ApiGetDataPath("/api/Details/GetData")]
    [ApiGetFormPath("/api/Details/GetForm")]
    public class Detail:ICreatable,IActivable,IModifiable,IDeletable
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

        [Required]
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        [Item]
        public bool IsActive { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? DeletedDate { get; set; }
        public string DeletedBy { get; set; }
    }
}
