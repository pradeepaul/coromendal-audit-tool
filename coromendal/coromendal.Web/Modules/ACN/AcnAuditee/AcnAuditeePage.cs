﻿
namespace coromendal.ACN.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ACN/AcnAuditee"), Route("{action=index}")]
    public class AcnAuditeeController : Controller
    {
        [PageAuthorize("ACNAdministration")]
        public ActionResult Index()
        {
            return View("~/Modules/ACN/AcnAuditee/AcnAuditeeIndex.cshtml");
        }
    }
}