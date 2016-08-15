

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Acn", typeof(coromendal.ACN.Pages.AcnController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Acn"), Route("{action=index}")]
    public class AcnController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Acn/AcnIndex.cshtml");
        }
    }
}