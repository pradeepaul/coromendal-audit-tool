

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Administration/MasterAcn", typeof(coromendal.Administration.Pages.MasterAcnController))]

namespace coromendal.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/MasterAcn"), Route("{action=index}")]
    public class MasterAcnController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/MasterAcn/MasterAcnIndex.cshtml");
        }
    }
}