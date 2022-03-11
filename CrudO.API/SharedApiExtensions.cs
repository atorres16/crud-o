using CrudO.API.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrudO.API
{
    public static class SharedApiExtensions
    {

        //public static IServiceCollection AddSharedServices(this IServiceCollection services)
        //{
        //    services.AddScoped<DataContextService>(sp => new DataContextService());
        //    return services;
        //}


        public static IServiceCollection AddDbFactoryService(this IServiceCollection services,Func<DbContext>dbFactory)
        {
            //services.AddScoped<DataContextService>(s=>dbFactory())
            services.AddScoped<FormsContextService>(sp => new FormsContextService(dbFactory));
            return services;
        }
    }
}
