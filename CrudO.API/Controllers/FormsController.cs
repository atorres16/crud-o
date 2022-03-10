using DynamicCRUD.API.Services;
using DynamicCRUD.Logic;
using DynamicCRUD.Abstract;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace DynamicCRUD.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [IgnoreAntiforgeryToken]
    [Authorize]
    //[Authorize(Roles ="Linamar Driveline Systems - Desktop Support")]
    public class FormsController : ControllerBase
    {
        private readonly AppSettings _configuration;
        private readonly FormsContextService _dbService;

        public FormsController(
            FormsContextService dbService,
            IOptions<AppSettings> configuration
            )
        {
            this._dbService = dbService;
            this._configuration = configuration.Value;
        }

        [HttpGet]
        [Route("GetRootDataContext")]
        public ActionResult GetRootDataContext()
        {
            var dataContext = FormsContextLogic.GetFormsContext(_configuration.RootType, "Root");
            return Ok(dataContext);
        }


        [HttpPost]
        [Route("GetFormsContext")]
        public virtual ActionResult GetFormsContext(ItemBase fromItem)
        {
            var dataContext = FormsContextLogic.GetFormsContext(fromItem.Type, fromItem.Title, fromItem.Id, fromItem.ParentId);
            return Ok(dataContext);
        }

        [HttpPost]
        [Route("GetData/{page?}")]
        public virtual ActionResult GetData(ItemBase fromNavigationProperty, int page = 1)
        {
            try
            {
                var db = _dbService.GetDbContext();
                var data = FormsContextLogic.GetData(fromNavigationProperty.Type, db, fromNavigationProperty.Id, page, _configuration.PageSize);
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message + " " + ex.InnerException?.Message + " " + ex.StackTrace);
            }
        }

        [HttpPost]
        [Route("GetForm")]
        public virtual ActionResult GetForm(ItemBase selectedMenuItem)
        {
            try
            {
                var db = _dbService.GetDbContext();
                //var form = DataContextLogic.GetForm(selectedMenuItem, db);
                var form = FormsContextLogic.GetForm(selectedMenuItem.Type, db, selectedMenuItem.Id);
                return Ok(form);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("Upsert")]
        public ActionResult Upsert(FormBase formBase)
        {
            try
            {
                var db = _dbService.GetDbContext();
                var user = User.Identity.Name;
                //int rowsAffected = DataContextLogic.Upsert(formBase,db, user);
                int rowsAffected = FormsContextLogic.Upsert(formBase, db, user);
                return Ok(rowsAffected);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message + " " + ex.InnerException?.Message + " " + ex.StackTrace);
            }

        }

        [HttpPost]
        [Route("Delete")]
        public ActionResult Delete(ItemBase item)
        {
            var db = _dbService.GetDbContext();
            FormsContextLogic.Delete(item, db, User.Identity.Name);
            return Ok("");
        }

        [HttpGet]
        [IgnoreAntiforgeryToken]
        [Route("GetCurrentUser")]
        public ActionResult GetCurrentUser()
        {

            return Ok(new { Value = User.Identity.Name });
        }

    }
}
