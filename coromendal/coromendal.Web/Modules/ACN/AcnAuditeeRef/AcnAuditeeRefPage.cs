

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/AcnAuditeeRef", typeof(coromendal.ACN.Pages.AcnAuditeeRefController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/AcnAuditeeRef"), Route("{action=index}")]
    public class AcnAuditeeRefController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/AcnAuditeeRef/AcnAuditeeRefIndex.cshtml");
        }
    }
}