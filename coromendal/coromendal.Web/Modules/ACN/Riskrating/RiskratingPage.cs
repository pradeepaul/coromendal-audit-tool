

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Riskrating"), Route("{action=index}")]
    public class RiskratingController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Riskrating/RiskratingIndex.cshtml");
        }
    }
}