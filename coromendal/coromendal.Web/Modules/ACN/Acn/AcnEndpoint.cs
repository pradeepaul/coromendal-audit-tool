
namespace coromendal.ACN.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.AcnRepository;
    using MyRow = Entities.AcnRow;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Drawing;
    using System.Text;
    using System.Net.Mail;
    using System.Net;
    using Outlook = Microsoft.Office.Interop.Outlook;
    using System;
    using System.IO;
    using System.Text;
    using System.Linq;

    [RoutePrefix("Services/ACN/Acn"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize("ACNAdministration")]
    public class AcnController : ServiceEndpoint
    {
        [HttpPost]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
        public string Sendmail(IDbConnection connection, ListRequest request)
        {
            var fld1 = coromendal.ACN.Entities.AcnRow.Fields;
            dynamic resultSet;
            var sqlquery = new SqlQuery()
                    .From(fld1)
                    .Select(fld1.AcnId)
                    .Select(fld1.PhaseNo)
                    .Select(fld1.AcnTilte)
                    .Select(fld1.location)
                    .Select(fld1.Fromdate)
                    .Select(fld1.Todate)
                    .Select(fld1.Periodfrom)
                    .Select(fld1.Periodto)
                    .Select(fld1.creationdate)
                    .Where(
                    fld1.AcnId == request.ContainsField);
            using (var connection1 = SqlConnections.NewFor<coromendal.ACN.Entities.AcnRow>())
                resultSet = connection1.Query(sqlquery).FirstOrDefault();
            //scope display
            var scope = coromendal.ACN.Entities.ScopeRow.Fields;
            List<dynamic> scoperesultSet;
            var scopesqlquery = new SqlQuery()
                    .From(scope)
                    .Select(scope.Title)                    
                    .Where(
                    scope.AcnId == request.ContainsField);
            using (var connection2 = SqlConnections.NewFor<coromendal.ACN.Entities.ScopeRow>())
                scoperesultSet = connection2.Query(scopesqlquery).ToList();

            //auditee display
            var audit = coromendal.ACN.Entities.AcnAuditeeRefRow.Fields;
            List<dynamic> auditresultSet;
            var auditsqlquery = new SqlQuery()
                    .From(audit)
                    .Select(audit.AcnAuditeeId)
                    .Where(
                    audit.AcnId == request.ContainsField);
            using (var connection3 = SqlConnections.NewFor<coromendal.ACN.Entities.AcnAuditeeRefRow>())
                auditresultSet = connection3.Query(auditsqlquery).ToList();
            int[] numbers = new int[auditresultSet.Count];
            var mt = 0;
            foreach (var item in auditresultSet)
            {
                numbers[mt] = (int)item.AcnAuditeeId;
                mt++;
            }
            var audituser = coromendal.Administration.Entities.UserRow.Fields;
            List<dynamic> audituserresultSet;
            var auditusersqlquery = new SqlQuery()
                    .From(audituser)
                    .Select(audituser.DisplayName)
                    .Select(audituser.Email)
                    .Where(
                    audituser.UserId.In(numbers));
            using (var connection4 = SqlConnections.NewFor<coromendal.Administration.Entities.UserRow>())
                audituserresultSet = connection4.Query(auditusersqlquery).ToList();
            //auditor display
            var auditor = coromendal.ACN.Entities.AcnAuditorRefRow.Fields;
            List<dynamic> auditorresultSet;
            var auditorsqlquery = new SqlQuery()
                    .From(auditor)
                    .Select(auditor.AcnAuditorId)
                    .Where(
                    audit.AcnId == request.ContainsField);
            using (var connection3 = SqlConnections.NewFor<coromendal.ACN.Entities.AcnAuditorRefRow>())
                auditorresultSet = connection3.Query(auditorsqlquery).ToList();
            int[] numbers1 = new int[auditorresultSet.Count];
            var mt1 = 0;
            foreach (var item in auditorresultSet)
            {
                numbers1[mt1] = (int)item.AcnAuditorId;
                mt++;
            }
            var auditoruser = coromendal.Administration.Entities.UserRow.Fields;
            List<dynamic> auditoruserresultSet;
            var auditorusersqlquery = new SqlQuery()
                    .From(auditoruser)
                    .Select(auditoruser.DisplayName)
                    .Select(auditoruser.Email)
                    .Where(
                    auditoruser.UserId.In(numbers1));
            using (var connection5 = SqlConnections.NewFor<coromendal.Administration.Entities.UserRow>())
                auditoruserresultSet = connection5.Query(auditorusersqlquery).ToList();

            //mail body
            MailMessage message = new MailMessage();
            foreach (var item in auditoruserresultSet)
            {
                message.To.Add(new MailAddress(item.Email));
            }
            foreach (var item in audituserresultSet)
            {
                message.To.Add(new MailAddress(item.Email));
            }
            message.From = new MailAddress("pradeepmstech@gmail.com", "New Assignment Note");
            message.Subject = "New Assignment";
            var projectBaseDir = System.AppDomain.CurrentDomain.BaseDirectory;
            string HTMLTemplatePath = Path.Combine(projectBaseDir, "ACNtemplate.html");      
            string HTMLBody = "";
            HTMLBody = System.IO.File.ReadAllText(HTMLTemplatePath);
            HTMLBody= HTMLBody.Replace("{phaseno}", Convert.ToString(resultSet.PhaseNo));
            HTMLBody = HTMLBody.Replace("{AcnTilte}", Convert.ToString(resultSet.AcnTilte));
            HTMLBody = HTMLBody.Replace("{location}", Convert.ToString(resultSet.location));
            HTMLBody = HTMLBody.Replace("{Fromdate}", Convert.ToString(resultSet.Fromdate));
            HTMLBody = HTMLBody.Replace("{Todate}", Convert.ToString(resultSet.Todate));
            HTMLBody = HTMLBody.Replace("{Periodfrom}", Convert.ToString(resultSet.Periodfrom));
            HTMLBody = HTMLBody.Replace("{Periodto}", Convert.ToString(resultSet.Periodto));
            string scopedata = "";
            string team = "";
            string team1 = "";

            foreach (var item in scoperesultSet)
            {
                scopedata = string.Concat(scopedata, "-");
                scopedata = string.Concat(scopedata,item.Title);
                scopedata = string.Concat(scopedata, "<br/>");
            }
            foreach (var item in audituserresultSet)
            {
                team = string.Concat(team, "-");
                team = string.Concat(team, item.DisplayName);
                team = string.Concat(team, "<br/>");
            }
            foreach (var item in auditoruserresultSet)
            {
                team1 = string.Concat(team1, "-");
                team1 = string.Concat(team1, item.DisplayName);
                team1 = string.Concat(team1, "<br/>");
            }
            HTMLBody = HTMLBody.Replace("{scope}", scopedata);
            HTMLBody = HTMLBody.Replace("{auditor}", team1);
            HTMLBody = HTMLBody.Replace("{auditee}", team);
            message.Body = HTMLBody;
            message.IsBodyHtml = true;
            using (var smtp = new SmtpClient())
            {
                var credential = new NetworkCredential
                {
                    UserName = "pradeepmstech@gmail.com",  
                    Password = "Pradeep@1891"  
                };
                smtp.Credentials = credential;
                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;
                smtp.EnableSsl = true;
                //smtp.Send(message);
            }           
            return "Sent Successfully";

        }
   
          
    }
}
