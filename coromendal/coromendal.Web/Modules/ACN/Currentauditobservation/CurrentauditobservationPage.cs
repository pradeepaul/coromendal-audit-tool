

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Currentauditobservation", typeof(coromendal.ACN.Pages.CurrentauditobservationController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Currentauditobservation"), Route("{action=index}")]
    public class CurrentauditobservationController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Currentauditobservation/CurrentauditobservationIndex.cshtml");
        }
    }
}