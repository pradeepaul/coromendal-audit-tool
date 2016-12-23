

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Likeliwoodvalue", typeof(coromendal.ACN.Pages.LikeliwoodvalueController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Likeliwoodvalue"), Route("{action=index}")]
    public class LikeliwoodvalueController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Likeliwoodvalue/LikeliwoodvalueIndex.cshtml");
        }
    }
}