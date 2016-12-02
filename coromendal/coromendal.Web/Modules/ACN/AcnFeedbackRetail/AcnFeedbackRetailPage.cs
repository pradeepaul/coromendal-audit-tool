

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/AcnFeedbackRetail", typeof(coromendal.ACN.Pages.AcnFeedbackRetailController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/AcnFeedbackRetail"), Route("{action=index}")]
    public class AcnFeedbackRetailController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/AcnFeedbackRetail/AcnFeedbackRetailIndex.cshtml");
        }
    }
}