using DynamicCRUD.Attributes;
using DynamicCRUD.Sample.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicCRUD.Sample.DAL
{
    [FormsContext(Title = "Root")]
    public class Db : DbContext
    {
        [Item(IsNavigationCollection = true)]
        public DbSet<Master> Master { get; set; }
        public DbSet<Detail> Detail { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling 
            //base.OnModelCreating(builder);
            base.OnModelCreating(builder);


        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=(local)\SQLEXPRESS;Initial Catalog=DynamicCRUD;Integrated Security=true");
        }

    }

}
