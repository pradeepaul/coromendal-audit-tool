
namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/MeetingIssue"), Route("{action=index}")]
    public class MeetingIssueController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/MeetingIssue/MeetingIssueIndex.cshtml");
        }
    }
}