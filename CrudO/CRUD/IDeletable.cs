using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicCRUD.CRUD
{
   public interface IDeletable
    {
        public bool IsDeleted { get; set; }
        public DateTime? DeletedDate { get; set; }
        [MaxLength(100)]
        public string DeletedBy { get; set; }

    }
}
