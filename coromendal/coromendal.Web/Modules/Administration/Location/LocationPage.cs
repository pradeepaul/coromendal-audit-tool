

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Administration/Location", typeof(coromendal.Administration.Pages.LocationController))]

namespace coromendal.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Location"), Route("{action=index}")]
    public class LocationController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Location/LocationIndex.cshtml");
        }
    }
}