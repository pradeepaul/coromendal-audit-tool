

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Sbu", typeof(coromendal.ACN.Pages.SbuController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Sbu"), Route("{action=index}")]
    public class SbuController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Sbu/SbuIndex.cshtml");
        }
    }
}