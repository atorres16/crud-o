using DynamicCRUD.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicCRUD
{
    public class AppSettings
    {
        
        /// <summary>
        /// Root catalog menu
        /// </summary>
        public FormsContext DataContextRoot { get; set; }

        public string RootType { get; set; }

        /// <summary>
        /// Assemblies where the menu and form objects reside
        /// </summary>
        public List<string> LoadAssemblies { get; set; }

        public int PageSize { get; set; }

        public AppSettings()
        {
            DataContextRoot = new FormsContext();
        }
    }
}
