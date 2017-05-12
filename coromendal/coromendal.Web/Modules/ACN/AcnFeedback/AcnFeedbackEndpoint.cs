
namespace coromendal.ACN.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.IO;
    using System.Linq;
    using System.Net;
    using System.Net.Mail;
    using System.Web.Mvc;
    using MyRepository = Repositories.AcnFeedbackRepository;
    using MyRow = Entities.AcnFeedbackRow;

    [RoutePrefix("Services/ACN/AcnFeedback"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize("Administration")]
    public class AcnFeedbackController : ServiceEndpoint
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
            var fld1 = coromendal.ACN.Entities.AcnFeedbackRow.Fields;
            dynamic resultSet;
            var sqlquery = new SqlQuery()
                    .From(fld1)
                    .Select(fld1.Ques1)
                     .Select(fld1.Ques2)
                     .Select(fld1.Ques3)
                     .Select(fld1.Ques4)
                     .Select(fld1.Ques5)
                     .Select(fld1.Ques6)
                     .Select(fld1.Ques7)
                     .Select(fld1.Ques8)
                     .Select(fld1.Ques9)
                     .Select(fld1.Ques10)
                     .Select(fld1.Ques11)
                     .Select(fld1.Ques12)
                     .Select(fld1.Ques13)
                     .Select(fld1.Ques14)
                     .Select(fld1.Remark1)
                     .Select(fld1.Remark2)
                     .Select(fld1.Remark3)
                     .Select(fld1.Remark4)
                     .Select(fld1.Remark5)
                     .Select(fld1.Remark6)
                     .Select(fld1.Remark7)
                     .Select(fld1.Remark8)
                     .Select(fld1.Remark9)
                     .Select(fld1.Remark10)
                     .Select(fld1.Remark11)
                     .Select(fld1.Remark12)
                     .Select(fld1.Remark13)
                     .Select(fld1.Remark14)
                     .Select(fld1.Name)
                     .Select(fld1.Dept)
                     .Select(fld1.Reviewname)
                     .Select(fld1.Location)
                     .Select(fld1.Comments)
                     .Select(fld1.Acnid)
                    .Where(
                    fld1.AcnFeedbackId == request.ContainsField);
            using (var connection1 = SqlConnections.NewFor<coromendal.ACN.Entities.AcnFeedbackRow>())
                resultSet = connection1.Query(sqlquery).FirstOrDefault();
            int acnid = resultSet.Acnid;
            //auditee display
            var audit = coromendal.ACN.Entities.AcnAuditeeRefRow.Fields;
            List<dynamic> auditresultSet;
            var auditsqlquery = new SqlQuery()
                    .From(audit)
                    .Select(audit.AcnAuditeeId)
                    .Where(
                    audit.AcnId == acnid);
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
                    audit.AcnId == acnid);
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
            message.From = new MailAddress("at.admihoopla.1@gmail.com", "New Assignment Note");
            message.Subject = "New Assignment";
            var projectBaseDir = System.AppDomain.CurrentDomain.BaseDirectory;
            string HTMLTemplatePath = Path.Combine(projectBaseDir, "acnfeedback.html");
            string HTMLBody = "";
            HTMLBody = System.IO.File.ReadAllText(HTMLTemplatePath);
            HTMLBody = HTMLBody.Replace("{Yourname}", Convert.ToString(resultSet.Name));
            HTMLBody = HTMLBody.Replace("{Yourdesignation}", Convert.ToString(resultSet.Dept));
            HTMLBody = HTMLBody.Replace("{Reviewname}", Convert.ToString(resultSet.Reviewname));
            HTMLBody = HTMLBody.Replace("{Location}", Convert.ToString(resultSet.Location));

            HTMLBody = HTMLBody.Replace("{Rating1}", Convert.ToString(resultSet.Ques1));
            HTMLBody = HTMLBody.Replace("{Remarks1}", Convert.ToString(resultSet.Remark1));
            HTMLBody = HTMLBody.Replace("{Rating2}", Convert.ToString(resultSet.Ques2));
            HTMLBody = HTMLBody.Replace("{Remarks2}", Convert.ToString(resultSet.Remark2));
            HTMLBody = HTMLBody.Replace("{Rating3}", Convert.ToString(resultSet.Ques3));
            HTMLBody = HTMLBody.Replace("{Remarks3}", Convert.ToString(resultSet.Remark3));
            HTMLBody = HTMLBody.Replace("{Rating4}", Convert.ToString(resultSet.Ques4));
            HTMLBody = HTMLBody.Replace("{Remarks4}", Convert.ToString(resultSet.Remark4));
            HTMLBody = HTMLBody.Replace("{Rating5}", Convert.ToString(resultSet.Ques5));
            HTMLBody = HTMLBody.Replace("{Remarks5}", Convert.ToString(resultSet.Remark5));
            HTMLBody = HTMLBody.Replace("{Rating6}", Convert.ToString(resultSet.Ques6));
            HTMLBody = HTMLBody.Replace("{Remarks6}", Convert.ToString(resultSet.Remark6));
            HTMLBody = HTMLBody.Replace("{Rating7}", Convert.ToString(resultSet.Ques7));
            HTMLBody = HTMLBody.Replace("{Remarks7}", Convert.ToString(resultSet.Remark7));
            HTMLBody = HTMLBody.Replace("{Rating8}", Convert.ToString(resultSet.Ques8));
            HTMLBody = HTMLBody.Replace("{Remarks8}", Convert.ToString(resultSet.Remark8));
            HTMLBody = HTMLBody.Replace("{Rating9}", Convert.ToString(resultSet.Ques9));
            HTMLBody = HTMLBody.Replace("{Remarks9}", Convert.ToString(resultSet.Remark9));
            HTMLBody = HTMLBody.Replace("{Rating10}", Convert.ToString(resultSet.Ques10));
            HTMLBody = HTMLBody.Replace("{Remarks10}", Convert.ToString(resultSet.Remark10));
            HTMLBody = HTMLBody.Replace("{Rating11}", Convert.ToString(resultSet.Ques11));
            HTMLBody = HTMLBody.Replace("{Remarks11}", Convert.ToString(resultSet.Remark11));
            HTMLBody = HTMLBody.Replace("{Rating12}", Convert.ToString(resultSet.Ques12));
            HTMLBody = HTMLBody.Replace("{Remarks12}", Convert.ToString(resultSet.Remark12));
            HTMLBody = HTMLBody.Replace("{Rating13}", Convert.ToString(resultSet.Ques13));
            HTMLBody = HTMLBody.Replace("{Remarks13}", Convert.ToString(resultSet.Remark13));
            HTMLBody = HTMLBody.Replace("{Rating14}", Convert.ToString(resultSet.Ques14));
            HTMLBody = HTMLBody.Replace("{Remarks14}", Convert.ToString(resultSet.Remark14));
            string team = "";
            string team1 = "";
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
            HTMLBody = HTMLBody.Replace("{Auditorsname}", team1);
            HTMLBody = HTMLBody.Replace("{Auditeesname}", team);
            HTMLBody = HTMLBody.Replace("{comments}", Convert.ToString(resultSet.Comments));            
            message.Body = HTMLBody;
            string msg = "";
            message.IsBodyHtml = true;
            if (request.ContainsText == "mail")
            {
                using (var smtp = new SmtpClient())
                {
                    var credential = new NetworkCredential
                    {
                        UserName = "at.admihoopla.1@gmail.com",
                        Password = "qwerty2017"
                    };
                    smtp.Credentials = credential;
                    smtp.Host = "smtp.gmail.com";
                    smtp.Port = 587;
                    smtp.EnableSsl = true;
                    smtp.Send(message);
                    msg = "Sent Successfully";
                }
            }
            else if (request.ContainsText == "preview")
            {
                msg = HTMLBody;
            }
            return msg;

        }
    }
}
