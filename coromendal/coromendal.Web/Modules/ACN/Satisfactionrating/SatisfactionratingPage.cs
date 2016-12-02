

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Satisfactionrating", typeof(coromendal.ACN.Pages.SatisfactionratingController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Satisfactionrating"), Route("{action=index}")]
    public class SatisfactionratingController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Satisfactionrating/SatisfactionratingIndex.cshtml");
        }
    }
}