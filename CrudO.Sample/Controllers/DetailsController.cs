using DynamicCRUD.Abstract;
using DynamicCRUD.API.Controllers;
using DynamicCRUD.API.Services;
using DynamicCRUD.Logic;
using DynamicCRUD.Sample.DAL;
using DynamicCRUD.Sample.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicCRUD.Sample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DetailsController : FormsController
    {
        private readonly AppSettings _configuration;
        private readonly FormsContextService _dbService;
        public DetailsController(FormsContextService dbService, IOptions<AppSettings> configuration) : base(dbService, configuration)
        {
            this._dbService = dbService;
            this._configuration = configuration.Value;
        }

        [HttpPost]
        [Route("GetData/{page?}")]
        public override ActionResult GetData(ItemBase fromNavigationProperty, int page = 1)
        {
            try
            {
                var db = _dbService.GetDbContext() as Db;
                //var data = FormsContextLogic.GetData(fromNavigationProperty.Type, db, fromNavigationProperty.Id, page, _configuration.PageSize);

                Abstract.Data data = new Abstract.Data();
                data.CurrentPage = page;
                var masterId = int.Parse(fromNavigationProperty.ParentId.ToString());
                var dbItems = db.Detail.Where(d => d.IdMaster == masterId);
                List<ItemBase> itemsBase = new List<ItemBase>();
                foreach(var item in dbItems)
                {
                    var dataItem = FormsContextLogic.GetDataItemFromData(item, fromNavigationProperty.ParentId);
                    itemsBase.Add(dataItem);
                }
                data.Items = itemsBase;
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message + " " + ex.InnerException?.Message + " " + ex.StackTrace);
            }
        }


        [HttpPost]
        [Route("GetForm")]
        public override ActionResult GetForm(ItemBase item)
        {
            try
            {

                int id = 0;
                if (item.Id != null)
                {
                    id = int.Parse(item.Id.ToString());
                }

                Detail dataItem = null;
                if (id == 0)
                {
                    //new
                    dataItem = new Detail();
                }
                else
                {

                    var db = new Db();
                    dataItem = db.Detail.Single(d => d.Id == id);
                    
                }
                dataItem.IdMaster = int.Parse(item.ParentId.ToString());
                var form = new Form<Detail>(dataItem);

                return Ok(form);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
