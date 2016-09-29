

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Feedbackvalue"), Route("{action=index}")]
    public class FeedbackvalueController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Feedbackvalue/FeedbackvalueIndex.cshtml");
        }
    }
}