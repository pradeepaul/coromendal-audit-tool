

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/AcnAuditor", typeof(coromendal.ACN.Pages.AcnAuditorController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/AcnAuditor"), Route("{action=index}")]
    public class AcnAuditorController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/AcnAuditor/AcnAuditorIndex.cshtml");
        }
    }
}