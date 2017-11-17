

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Administration/MasterAcnAuditorRef", typeof(coromendal.Administration.Pages.MasterAcnAuditorRefController))]

namespace coromendal.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/MasterAcnAuditorRef"), Route("{action=index}")]
    public class MasterAcnAuditorRefController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/MasterAcnAuditorRef/MasterAcnAuditorRefIndex.cshtml");
        }
    }
}