

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/MeetingAbsentauditordetails", typeof(coromendal.ACN.Pages.MeetingAbsentauditordetailsController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/MeetingAbsentauditordetails"), Route("{action=index}")]
    public class MeetingAbsentauditordetailsController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/MeetingAbsentauditordetails/MeetingAbsentauditordetailsIndex.cshtml");
        }
    }
}