﻿
namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/Keyfacts"), Route("{action=index}")]
    public class KeyfactsController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/Keyfacts/KeyfactsIndex.cshtml");
        }
    }
}