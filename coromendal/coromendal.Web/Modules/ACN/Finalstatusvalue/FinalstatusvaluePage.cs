

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Finalstatusvalue", typeof(coromendal.ACN.Pages.FinalstatusvalueController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Finalstatusvalue"), Route("{action=index}")]
    public class FinalstatusvalueController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Finalstatusvalue/FinalstatusvalueIndex.cshtml");
        }
    }
}