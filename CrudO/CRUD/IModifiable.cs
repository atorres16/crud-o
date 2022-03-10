using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicCRUD.CRUD
{
    public interface IModifiable
    {
        public DateTime? ModifiedDate { get; set; }
        [MaxLength(100)]
        public string ModifiedBy { get; set; }
    }
}
