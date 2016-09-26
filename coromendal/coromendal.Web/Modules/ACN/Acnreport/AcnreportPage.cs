


namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Acnreport"), Route("{action=index}")]
    public class AcnreportController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Acnreport/AcnreportIndex.cshtml");
        }
    }
}