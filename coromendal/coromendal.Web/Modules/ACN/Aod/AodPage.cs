

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Aod", typeof(coromendal.ACN.Pages.AodController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Aod"), Route("{action=index}")]
    public class AodController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Aod/AodIndex.cshtml");
        }
    }
}