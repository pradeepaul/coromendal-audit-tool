





namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Auditobservation"), Route("{action=index}")]
    public class AuditobservationController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Auditobservation/AuditobservationIndex.cshtml");
        }
    }
}