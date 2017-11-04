

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Observationmaster", typeof(coromendal.ACN.Pages.ObservationmasterController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Observationmaster"), Route("{action=index}")]
    public class ObservationmasterController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Observationmaster/ObservationmasterIndex.cshtml");
        }
    }
}