

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Newchanges", typeof(coromendal.ACN.Pages.NewchangesController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Newchanges"), Route("{action=index}")]
    public class NewchangesController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Newchanges/NewchangesIndex.cshtml");
        }
    }
}