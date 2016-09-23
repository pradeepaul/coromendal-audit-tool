

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/MeetingPoints"), Route("{action=index}")]
    public class MeetingPointsController : Controller
    {
        [PageAuthorize("ACNAdministration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/MeetingPoints/MeetingPointsIndex.cshtml");
        }
    }
}