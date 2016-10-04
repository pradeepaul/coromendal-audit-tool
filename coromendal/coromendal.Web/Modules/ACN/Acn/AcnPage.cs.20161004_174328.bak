
namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Acn"), Route("{action=index}")]
    public class AcnController : Controller
    {
       
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Acn/AcnIndex.cshtml");
        }
    }
}