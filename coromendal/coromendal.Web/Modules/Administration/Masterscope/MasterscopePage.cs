

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Administration/Masterscope", typeof(coromendal.Administration.Pages.MasterscopeController))]

namespace coromendal.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Masterscope"), Route("{action=index}")]
    public class MasterscopeController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Masterscope/MasterscopeIndex.cshtml");
        }
    }
}