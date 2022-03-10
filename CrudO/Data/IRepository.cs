

using DynamicCRUD.Query;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicCRUD.Data
{
    public interface IRepository
    {
        public DbContext Db { get; set; }
        public IQueryable GetQuery(IQueryOptions queryOptions = null);

        public Object Find(Object Id);

        public void Add(Object obj);

        public int Save();
        void SetModified(object dbItem);
    }
}
