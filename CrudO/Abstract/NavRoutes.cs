using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicCRUD.Abstract
{
    public class NavRoutes
    {
        public NavRoutes()
        {
            this.ApiUpsertPath = "/api/Forms/Upsert";
            this.ApiDeletePath = "/api/Forms/Delete";
            this.ApiGetFormPath = "/api/Forms/GetForm";
            this.ApiGetDataPath = "/api/Forms/GetData";
            this.ApiGetFormsContextPath = "/api/Forms/GetFormsContext";
        }
        public string ApiGetFormPath { get; set; }
        public string ApiGetDataPath { get; set; }
        public string ApiUpsertPath { get; set; }
        public string ApiDeletePath { get; set; }
        public string ApiGetFormsContextPath { get; set; }
        public string ApiSelectFromCatalogPath { get; set; }
        public string ApiSelectedFromCatalogPath { get; set; }
    }
}
