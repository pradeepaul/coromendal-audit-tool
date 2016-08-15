

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/AcnAuditee", typeof(coromendal.ACN.Pages.AcnAuditeeController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/AcnAuditee"), Route("{action=index}")]
    public class AcnAuditeeController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/AcnAuditee/AcnAuditeeIndex.cshtml");
        }
    }
}