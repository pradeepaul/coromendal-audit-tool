

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/AcnReviewRef", typeof(coromendal.ACN.Pages.AcnReviewRefController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/AcnReviewRef"), Route("{action=index}")]
    public class AcnReviewRefController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/AcnReviewRef/AcnReviewRefIndex.cshtml");
        }
    }
}