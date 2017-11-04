

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Scopeexclude", typeof(coromendal.ACN.Pages.ScopeexcludeController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Scopeexclude"), Route("{action=index}")]
    public class ScopeexcludeController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Scopeexclude/ScopeexcludeIndex.cshtml");
        }
    }
}