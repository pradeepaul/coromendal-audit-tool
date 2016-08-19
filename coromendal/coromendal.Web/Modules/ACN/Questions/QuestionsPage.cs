

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Questions", typeof(coromendal.ACN.Pages.QuestionsController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Questions"), Route("{action=index}")]
    public class QuestionsController : Controller
    {
        [PageAuthorize("ACNAdministration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Questions/QuestionsIndex.cshtml");
        }
    }
}