

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/MeetingAbsent", typeof(coromendal.ACN.Pages.MeetingAbsentController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/MeetingAbsent"), Route("{action=index}")]
    public class MeetingAbsentController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/MeetingAbsent/MeetingAbsentIndex.cshtml");
        }
    }
}