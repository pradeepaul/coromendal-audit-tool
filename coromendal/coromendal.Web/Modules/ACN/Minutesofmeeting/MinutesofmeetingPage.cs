

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Minutesofmeeting"), Route("{action=index}")]
    public class MinutesofmeetingController : Controller
    {
        [PageAuthorize("ACNAdministration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Minutesofmeeting/MinutesofmeetingIndex.cshtml");
        }
    }
}