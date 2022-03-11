using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrudO.Data
{
    /// <summary>
    /// Used only to create generic queries
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class Repository<T> :IRepository where T : class
    {
        public DbContext Db { get; set;}

        public Repository(DbContext db)
        {
            this.Db = db;
        }
     

        public T GenericFind(Object id)
        {
            return Db.Set<T>().Find(id);
        }

        public object Find(object id)
        {
            return GenericFind(id);
        }

        public void Add(object obj)
        {
            Db.Set<T>().Add(obj as T);
        }


        public Object GetCollection(Object id, string collectionName)
        {
            var dbItem = Db.Set<T>().Find(id);
            var pis = dbItem.GetType().GetProperties();
            var pi = pis.Single(p => p.Name == collectionName);
            var col = pi.GetValue(dbItem);
            return col;
        }
        public int Save()
        {
            return Db.SaveChanges();
        }

        public void SetModified(object dbItem)
        {
            Db.Entry(dbItem).State = EntityState.Modified;
        }

        public virtual IQueryable GetQuery()
        {
            return GetGenericQuery();
        }
        public virtual IQueryable<T> GetGenericQuery()
        {

            var query = Db.Set<T>() as IQueryable<T>;

            return query;
        }
    }
}
