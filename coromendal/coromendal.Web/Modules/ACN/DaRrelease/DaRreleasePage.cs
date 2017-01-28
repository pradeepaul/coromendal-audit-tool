

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/DaRrelease", typeof(coromendal.ACN.Pages.DaRreleaseController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/DaRrelease"), Route("{action=index}")]
    public class DaRreleaseController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/DaRrelease/DaRreleaseIndex.cshtml");
        }
    }
}