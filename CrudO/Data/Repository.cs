
using DynamicCRUD.CRUD;
using DynamicCRUD.Query;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicCRUD.Data
{
    /// <summary>
    /// Used only to create generic queries
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class Repository<T> :IRepository where T : class, IActivable, IDeletable
    {
        public DbContext Db { get; set;}

        public Repository(DbContext db)
        {
            this.Db = db;
        }
        public virtual IQueryable<T> GetGenericQuery(IQueryOptions queryOptions = null)
        {
            if (queryOptions == null)
            {
                queryOptions = new QueryOptions();
            }


            var query = Db.Set<T>() as IQueryable<T>;

            if (queryOptions.IncludePaths.Any())
            {
                foreach (string includePath in queryOptions.IncludePaths)
                {
                    query = query.Include<T>(includePath);
                }
            }

            if (!queryOptions.IncludeDeleted)
            {
                query = query.Where(s => !s.IsDeleted);
            }
            if (!queryOptions.IncludeInactive)
            {
                query = query.Where(s => s.IsActive);
            }
            return query;
        }

        public virtual IQueryable GetQuery(IQueryOptions queryOptions = null)
        {
            return GetGenericQuery(queryOptions);
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

       
    }
}
