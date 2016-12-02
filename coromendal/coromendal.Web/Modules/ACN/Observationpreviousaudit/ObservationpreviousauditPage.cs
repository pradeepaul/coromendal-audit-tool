

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Observationpreviousaudit", typeof(coromendal.ACN.Pages.ObservationpreviousauditController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Observationpreviousaudit"), Route("{action=index}")]
    public class ObservationpreviousauditController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Observationpreviousaudit/ObservationpreviousauditIndex.cshtml");
        }
    }
}