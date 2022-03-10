using DynamicCRUD.Attributes;
using DynamicCRUD.CRUD;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicCRUD.Sample.Models
{
    [FormsContext(Title ="Master")]
    public class Master:ICreatable,IActivable,IModifiable,IDeletable
    {
        [Item(IsPrimaryKey =true)]
        public int Id { get; set; }

        [Item(UseAsTitle =true)]
        public string Name { get; set; }

        [Item(IsNavigationCollection =true)]
        public List<Detail> Details { get; set; }

        [Required]
        public string CreatedBy {get;set;}
        public DateTime CreatedDate {get;set;}

        [Item]
        public bool IsActive {get;set;}
        public DateTime? ModifiedDate {get;set;}
        public string ModifiedBy {get;set;}
        public bool IsDeleted {get;set;}
        public DateTime? DeletedDate {get;set;}
        public string DeletedBy {get;set;}
    }
}
