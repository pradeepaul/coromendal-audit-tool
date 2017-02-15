

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Percentage", typeof(coromendal.ACN.Pages.PercentageController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Percentage"), Route("{action=index}")]
    public class PercentageController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Percentage/PercentageIndex.cshtml");
        }
    }
}