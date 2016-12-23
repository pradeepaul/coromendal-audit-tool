

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Riskmatrix", typeof(coromendal.ACN.Pages.RiskmatrixController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Riskmatrix"), Route("{action=index}")]
    public class RiskmatrixController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Riskmatrix/RiskmatrixIndex.cshtml");
        }
    }
}