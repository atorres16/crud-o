using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrudO.API.Services
{
    public class FormsContextService
    {
        Func<DbContext> dbFactory;
        public FormsContextService(Func<DbContext> _dbFactory)
        {
            dbFactory = _dbFactory;
        }
        public DbContext GetDbContext()
        {
            return dbFactory();
        }
    }
}
