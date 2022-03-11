


using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrudO.Data
{
    public interface IRepository
    {
        public DbContext Db { get; set; }
        public IQueryable GetQuery();

        public Object Find(Object Id);

        public void Add(Object obj);

        public int Save();
        void SetModified(object dbItem);
    }
}
