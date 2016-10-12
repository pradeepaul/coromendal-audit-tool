

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Minutesofmeeting", typeof(coromendal.ACN.Pages.MinutesofmeetingController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Minutesofmeeting"), Route("{action=index}")]
    public class MinutesofmeetingController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Minutesofmeeting/MinutesofmeetingIndex.cshtml");
        }
    }
}