

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Exclude", typeof(coromendal.ACN.Pages.ExcludeController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Exclude"), Route("{action=index}")]
    public class ExcludeController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Exclude/ExcludeIndex.cshtml");
        }
    }
}