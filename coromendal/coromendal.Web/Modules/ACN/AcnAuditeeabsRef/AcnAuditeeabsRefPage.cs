

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/AcnAuditeeabsRef", typeof(coromendal.ACN.Pages.AcnAuditeeabsRefController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/AcnAuditeeabsRef"), Route("{action=index}")]
    public class AcnAuditeeabsRefController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/AcnAuditeeabsRef/AcnAuditeeabsRefIndex.cshtml");
        }
    }
}