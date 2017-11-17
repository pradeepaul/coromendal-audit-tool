

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Preobservation", typeof(coromendal.ACN.Pages.PreobservationController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Preobservation"), Route("{action=index}")]
    public class PreobservationController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Preobservation/PreobservationIndex.cshtml");
        }
    }
}