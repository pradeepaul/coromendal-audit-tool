

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Administration/Adminstatusvalue", typeof(coromendal.Administration.Pages.AdminstatusvalueController))]

namespace coromendal.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Adminstatusvalue"), Route("{action=index}")]
    public class AdminstatusvalueController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Adminstatusvalue/AdminstatusvalueIndex.cshtml");
        }
    }
}