


namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/AcnFeedback"), Route("{action=index}")]
    public class AcnFeedbackController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/AcnFeedback/AcnFeedbackIndex.cshtml");
        }
    }
}