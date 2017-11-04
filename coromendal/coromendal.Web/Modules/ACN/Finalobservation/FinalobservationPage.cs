

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Finalobservation", typeof(coromendal.ACN.Pages.FinalobservationController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Finalobservation"), Route("{action=index}")]
    public class FinalobservationController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Finalobservation/FinalobservationIndex.cshtml");
        }
    }
}