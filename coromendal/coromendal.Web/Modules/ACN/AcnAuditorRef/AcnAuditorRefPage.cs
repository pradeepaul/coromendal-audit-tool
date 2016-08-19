

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/AcnAuditorRef", typeof(coromendal.ACN.Pages.AcnAuditorRefController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/AcnAuditorRef"), Route("{action=index}")]
    public class AcnAuditorRefController : Controller
    {
        [PageAuthorize("ACNAdministration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/AcnAuditorRef/AcnAuditorRefIndex.cshtml");
        }
    }
}