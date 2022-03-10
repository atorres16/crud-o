using System;

namespace DynamicCRUD.CRUD
{
    public interface IActivable
    {
        public bool IsActive { get; set; }
    }
}
