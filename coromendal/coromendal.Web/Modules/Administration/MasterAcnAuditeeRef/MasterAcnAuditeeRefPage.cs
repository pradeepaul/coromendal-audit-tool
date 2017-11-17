

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Administration/MasterAcnAuditeeRef", typeof(coromendal.Administration.Pages.MasterAcnAuditeeRefController))]

namespace coromendal.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/MasterAcnAuditeeRef"), Route("{action=index}")]
    public class MasterAcnAuditeeRefController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/MasterAcnAuditeeRef/MasterAcnAuditeeRefIndex.cshtml");
        }
    }
}