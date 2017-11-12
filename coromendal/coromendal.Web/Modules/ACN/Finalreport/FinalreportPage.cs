

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Finalreport", typeof(coromendal.ACN.Pages.FinalreportController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Finalreport"), Route("{action=index}")]
    public class FinalreportController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Finalreport/FinalreportIndex.cshtml");
        }
    }
}