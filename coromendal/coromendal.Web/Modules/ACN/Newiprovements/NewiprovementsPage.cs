

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Newiprovements", typeof(coromendal.ACN.Pages.NewiprovementsController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Newiprovements"), Route("{action=index}")]
    public class NewiprovementsController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Newiprovements/NewiprovementsIndex.cshtml");
        }
    }
}