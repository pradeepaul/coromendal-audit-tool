

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/MeetingAbsentauditee", typeof(coromendal.ACN.Pages.MeetingAbsentauditeeController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/MeetingAbsentauditee"), Route("{action=index}")]
    public class MeetingAbsentauditeeController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/MeetingAbsentauditee/MeetingAbsentauditeeIndex.cshtml");
        }
    }
}