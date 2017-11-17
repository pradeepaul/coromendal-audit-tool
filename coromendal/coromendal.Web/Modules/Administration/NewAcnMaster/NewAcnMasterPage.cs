

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Administration/NewAcnMaster", typeof(coromendal.Administration.Pages.NewAcnMasterController))]

namespace coromendal.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/NewAcnMaster"), Route("{action=index}")]
    public class NewAcnMasterController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/NewAcnMaster/NewAcnMasterIndex.cshtml");
        }
    }
}