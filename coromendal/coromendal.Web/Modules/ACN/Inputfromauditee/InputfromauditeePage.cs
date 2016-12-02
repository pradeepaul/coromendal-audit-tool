

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "ACN/Inputfromauditee", typeof(coromendal.ACN.Pages.InputfromauditeeController))]

namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Inputfromauditee"), Route("{action=index}")]
    public class InputfromauditeeController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Inputfromauditee/InputfromauditeeIndex.cshtml");
        }
    }
}