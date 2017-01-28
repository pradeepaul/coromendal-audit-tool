

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/MeetingAbsentauditor", typeof(coromendal.ACN.Pages.MeetingAbsentauditorController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/MeetingAbsentauditor"), Route("{action=index}")]
    public class MeetingAbsentauditorController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/MeetingAbsentauditor/MeetingAbsentauditorIndex.cshtml");
        }
    }
}