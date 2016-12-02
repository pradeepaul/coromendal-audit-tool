

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Observationpending", typeof(coromendal.ACN.Pages.ObservationpendingController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Observationpending"), Route("{action=index}")]
    public class ObservationpendingController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Observationpending/ObservationpendingIndex.cshtml");
        }
    }
}