

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/DarClarifications", typeof(coromendal.ACN.Pages.DarClarificationsController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/DarClarifications"), Route("{action=index}")]
    public class DarClarificationsController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/DarClarifications/DarClarificationsIndex.cshtml");
        }
    }
}