

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/MeetingPoints", typeof(coromendal.ACN.Pages.MeetingPointsController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/MeetingPoints"), Route("{action=index}")]
    public class MeetingPointsController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/MeetingPoints/MeetingPointsIndex.cshtml");
        }
    }
}