



namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Feedback"), Route("{action=index}")]
    public class FeedbackController : Controller
    {
        [PageAuthorize("ACNAdministration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Feedback/FeedbackIndex.cshtml");
        }
    }
}