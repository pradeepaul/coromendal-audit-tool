
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
    using MyRepository = Repositories.MinutesofmeetingRepository;
    using MyRow = Entities.MinutesofmeetingRow;

    [RoutePrefix("Services/ACN/Minutesofmeeting"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize("Administration")]
    public class MinutesofmeetingController : ServiceEndpoint
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
            
           
            var fld = coromendal.ACN.Entities.MinutesofmeetingRow.Fields;
            dynamic resultSet1;
            var sqlquery = new SqlQuery()
                    .From(fld)
                    .Select(fld.Acnid)
                    .Select(fld.MeetingTitle)
                    .Select(fld.momdate)
                    .Select(fld.planeddate)
                    .Select(fld.auditopeneddate)                    
                    .Where(
                    fld.Meetingid == request.ContainsField);
            using (var connection1 = SqlConnections.NewFor<coromendal.ACN.Entities.MinutesofmeetingRow>())
                resultSet1 = connection1.Query(sqlquery).FirstOrDefault();
            int acnid = resultSet1.Acnid;
            var fld1 = coromendal.ACN.Entities.AcnRow.Fields;
            dynamic resultSet;
            var sqlquery1 = new SqlQuery()
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
                    fld1.AcnId == acnid);
            using (var connection2 = SqlConnections.NewFor<coromendal.ACN.Entities.AcnRow>())
                resultSet = connection2.Query(sqlquery1).FirstOrDefault();
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
            List<dynamic> audituserresultSet=null;
            if (numbers.Length != 0)
            {
                var auditusersqlquery = new SqlQuery()
                    .From(audituser)
                    .Select(audituser.DisplayName)
                    .Select(audituser.Email)
                    .Where(
                    audituser.UserId.In(numbers));
                using (var connection4 = SqlConnections.NewFor<coromendal.Administration.Entities.UserRow>())
                    audituserresultSet = connection4.Query(auditusersqlquery).ToList();
            }
            //auditor display
            var auditor = coromendal.ACN.Entities.AcnAuditorRefRow.Fields;
            List<dynamic> auditorresultSet;
            var auditorsqlquery = new SqlQuery()
                    .From(auditor)
                    .Select(auditor.AcnAuditorId)
                    .Where(
                    auditor.AcnId == acnid);
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
            List<dynamic> auditoruserresultSet = null;
            if (numbers1.Length != 0) {             
            var auditorusersqlquery = new SqlQuery()
                    .From(auditoruser)
                    .Select(auditoruser.DisplayName)
                    .Select(auditoruser.Email)
                    .Where(
                    auditoruser.UserId.In(numbers1));
            using (var connection5 = SqlConnections.NewFor<coromendal.Administration.Entities.UserRow>())
                auditoruserresultSet = connection5.Query(auditorusersqlquery).ToList();
            }           
            //auditor  Absent display
            var auditorAbsent = coromendal.ACN.Entities.MeetingAbsentauditorRow.Fields;
            List<dynamic> auditorAbsentresultSet;
            var auditorAbsentsqlquery = new SqlQuery()
                    .From(auditorAbsent)
                    .Select(auditorAbsent.AbsentUser)
                    .Where(
                    auditorAbsent.MeetingId == request.ContainsField);
            using (var connection3 = SqlConnections.NewFor<coromendal.ACN.Entities.MeetingAbsentauditorRow>())
                auditorAbsentresultSet = connection3.Query(auditorAbsentsqlquery).ToList();
            int[] numbers3 = new int[auditorAbsentresultSet.Count];
            var mt3 = 0;
            foreach (var item in auditorAbsentresultSet)
            {
                numbers3[mt3] = (int)item.AbsentUser;
                mt3++;
            }
            var auditorabsentuser = coromendal.Administration.Entities.UserRow.Fields;
            List<dynamic> auditorabsentuserresultSet = null;
            if (numbers3.Length != 0)
            {
                var auditorabsentusersqlquery = new SqlQuery()
                        .From(auditorabsentuser)
                        .Select(auditorabsentuser.DisplayName)
                        .Select(auditorabsentuser.Email)
                        .Where(
                        auditorabsentuser.UserId.In(numbers3));
                using (var connection5 = SqlConnections.NewFor<coromendal.Administration.Entities.UserRow>())
                    auditorabsentuserresultSet = connection5.Query(auditorabsentusersqlquery).ToList();
            }
            //auditee  Absent display
            var auditeeAbsent = coromendal.ACN.Entities.MeetingAbsentauditeeRow.Fields;
            List<dynamic> auditeeAbsentresultSet;
            var auditeeAbsentsqlquery = new SqlQuery()
                    .From(auditeeAbsent)
                    .Select(auditeeAbsent.AbsentUser)
                    .Where(
                    auditeeAbsent.MeetingId == request.ContainsField);
            using (var connection3 = SqlConnections.NewFor<coromendal.ACN.Entities.MeetingAbsentauditeeRow>())
                auditeeAbsentresultSet = connection3.Query(auditeeAbsentsqlquery).ToList();
            int[] numbers4 = new int[auditeeAbsentresultSet.Count];
            var mt4 = 0;
            foreach (var item in auditeeAbsentresultSet)
            {
                numbers4[mt4] = (int)item.AbsentUser;
                mt4++;
            }
            var auditeeabsentuser = coromendal.Administration.Entities.UserRow.Fields;
            List<dynamic> auditeeabsentuserresultSet=null;
            if (numbers4.Length != 0)
            {
                var auditeeabsentusersqlquery = new SqlQuery()
                    .From(auditeeabsentuser)
                    .Select(auditeeabsentuser.DisplayName)
                    .Select(auditeeabsentuser.Email)
                    .Where(
                   auditeeabsentuser.UserId.In(numbers4));
                using (var connection5 = SqlConnections.NewFor<coromendal.Administration.Entities.UserRow>())
                    auditeeabsentuserresultSet = connection5.Query(auditeeabsentusersqlquery).ToList();
            }
            //scope display
            var scope = coromendal.ACN.Entities.ScopeRow.Fields;
            List<dynamic> scoperesultSet;
            var scopesqlquery = new SqlQuery()
                    .From(scope)
                    .Select(scope.Title)
                    .Where(
                    scope.AcnId == acnid);
            using (var connection2 = SqlConnections.NewFor<coromendal.ACN.Entities.ScopeRow>())
                scoperesultSet = connection2.Query(scopesqlquery).ToList();
            //observation from previous audit
            var obfrompreviousaudit = coromendal.ACN.Entities.ObservationpreviousauditRow.Fields;
            List<dynamic> obfrompreviousauditresultSet;
            var obfrompreviousauditsqlquery = new SqlQuery()
                    .From(obfrompreviousaudit)
                    .Select(obfrompreviousaudit.Observation)
                    .Where(
                    obfrompreviousaudit.MeetingId == request.ContainsField);
            using (var connection1 = SqlConnections.NewFor<coromendal.ACN.Entities.MinutesofmeetingRow>())
                obfrompreviousauditresultSet = connection1.Query(obfrompreviousauditsqlquery).ToList();

            //meeting points
            var meetingpoints = coromendal.ACN.Entities.MeetingPointsRow.Fields;
            List<dynamic> meetingpointsresultSet;
            var meetingpointssqlquery = new SqlQuery()
                    .From(meetingpoints)
                    .Select(meetingpoints.Points)
                    .Where(
                    meetingpoints.MeetingId == request.ContainsField);
            using (var connection1 = SqlConnections.NewFor<coromendal.ACN.Entities.MeetingPointsRow>())
                meetingpointsresultSet = connection1.Query(meetingpointssqlquery).ToList();

            //meeting points
            var notes = coromendal.Northwind.Entities.NoteRow.Fields;
            List<dynamic> notesresultSet;
            var notessqlquery = new SqlQuery()
                    .From(notes)
                    .Select(notes.Text)
                    .Where(
                    notes.EntityId == request.ContainsField);
            using (var connection2 = SqlConnections.NewFor<coromendal.Northwind.Entities.NoteRow>())
                notesresultSet = connection2.Query(notessqlquery).ToList();
            //Pre-audit Disclosure
            var Preaudit = coromendal.ACN.Entities.MeetingIssueRow.Fields;
            List<dynamic> PreauditresultSet;
            var Preauditsqlquery = new SqlQuery()
                    .From(Preaudit)
                    .Select(Preaudit.AreaofOperation)
                    .Select(Preaudit.Issue)
                    .Select(Preaudit.Status)
                    .Select(Preaudit.ExpectedDate)
                    .Select(Preaudit.Comments)
                    .Where(
                    Preaudit.MeetingId == request.ContainsField);
            using (var connection3 = SqlConnections.NewFor<coromendal.ACN.Entities.MeetingIssueRow>())
                PreauditresultSet = connection3.Query(Preauditsqlquery).ToList();
            //Pre-Initiatives Disclosure
            var Initiatives = coromendal.ACN.Entities.NewiprovementsRow.Fields;
            List<dynamic> InitiativesresultSet;
            var Initiativessqlquery = new SqlQuery()
                    .From(Initiatives)
                    .Select(Initiatives.Observation)
                    .Where(
                    Initiatives.MeetingId == request.ContainsField);
            using (var connection3 = SqlConnections.NewFor<coromendal.ACN.Entities.NewiprovementsRow>())
                InitiativesresultSet = connection3.Query(Initiativessqlquery).ToList();
            //changes details
            var Changes = coromendal.ACN.Entities.NewchangesRow.Fields;
            List<dynamic> ChangesresultSet;
            var Changessqlquery = new SqlQuery()
                    .From(Changes)
                    .Select(Changes.Observation)
                    .Where(
                    Changes.MeetingId == request.ContainsField);
            using (var connection3 = SqlConnections.NewFor<coromendal.ACN.Entities.NewchangesRow>())
                ChangesresultSet = connection3.Query(Changessqlquery).ToList();
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
            message.From = new MailAddress("at.admihoopla.1@gmail.com", " New Minutes of Meeting");
            message.Subject = "New Minutes of Meeting";
            var projectBaseDir = System.AppDomain.CurrentDomain.BaseDirectory;
            string HTMLTemplatePath = Path.Combine(projectBaseDir, "mom.html");
            string HTMLBody = "";
            HTMLBody = System.IO.File.ReadAllText(HTMLTemplatePath);
            HTMLBody = HTMLBody.Replace("{phaseno}", Convert.ToString(resultSet.PhaseNo));
            HTMLBody = HTMLBody.Replace("{commencement}", Convert.ToString(resultSet.creationdate));
            HTMLBody = HTMLBody.Replace("{closing}", Convert.ToString(resultSet1.planeddate));
            HTMLBody = HTMLBody.Replace("{opening}", Convert.ToString(resultSet1.auditopeneddate));
            HTMLBody = HTMLBody.Replace("{MOM}", Convert.ToString(resultSet1.momdate));
            
            HTMLBody = HTMLBody.Replace("{AcnTilte}", Convert.ToString(resultSet.AcnTilte));
            HTMLBody = HTMLBody.Replace("{location}", Convert.ToString(resultSet.location));
            HTMLBody = HTMLBody.Replace("{Fromdate}", Convert.ToString(resultSet.Fromdate));
            HTMLBody = HTMLBody.Replace("{Todate}", Convert.ToString(resultSet.Todate));
            HTMLBody = HTMLBody.Replace("{Periodfrom}", Convert.ToString(resultSet.Periodfrom));
            HTMLBody = HTMLBody.Replace("{Periodto}", Convert.ToString(resultSet.Periodto));
            string scopedata = "";
            string team = "";
            string team1 = "";
            if (scoperesultSet != null)
            {
                foreach (var item in scoperesultSet)
                {
                    scopedata = string.Concat(scopedata, "-");
                    scopedata = string.Concat(scopedata, item.Title);
                    scopedata = string.Concat(scopedata, "<br/>");
                }
            }
            else
            {
                scopedata = string.Concat(scopedata, "-");
            }

            if (audituserresultSet != null)
            {
                foreach (var item in audituserresultSet)
                {
                    team = string.Concat(team, "-");
                    team = string.Concat(team, item.DisplayName);
                    team = string.Concat(team, "<br/>");
                }
            }
            else
            {
                team = string.Concat(team, "-");
            }
            if (auditoruserresultSet != null)
            {
                foreach (var item in auditoruserresultSet)
                {
                    team1 = string.Concat(team1, "-");
                    team1 = string.Concat(team1, item.DisplayName);
                    team1 = string.Concat(team1, "<br/>");
                }
            }
            else
            {
                team1 = string.Concat(team1, "-");
            }

            string absentauditor = "";
            string absentauditee = "";
            if (auditorabsentuserresultSet != null)
            {
                foreach (var item in auditorabsentuserresultSet)
                {
                    absentauditor = string.Concat(absentauditor, "-");
                    absentauditor = string.Concat(absentauditor, item.DisplayName);
                    absentauditor = string.Concat(absentauditor, "<br/>");
                }
            }
            else
            {
                absentauditor = string.Concat(absentauditor, "-");
            }
            if (auditeeabsentuserresultSet != null)
            {
                foreach (var item in auditeeabsentuserresultSet)
                {
                    absentauditee = string.Concat(absentauditee, "-");
                    absentauditee = string.Concat(absentauditee, item.DisplayName);
                    absentauditee = string.Concat(absentauditee, "<br/>");
                }
            }
            else
            {
                absentauditee = string.Concat(absentauditee, "-");
            }
            string Observation = "";
            if (obfrompreviousauditresultSet != null)
            {
                foreach (var item in obfrompreviousauditresultSet)
                {
                    Observation = string.Concat(Observation, "-");
                    Observation = string.Concat(Observation, item.Observation);
                    Observation = string.Concat(Observation, "<br/>");
                }
            }
            else
            {
                Observation = string.Concat(Observation, "-");
            }

            string Points ="";
            if (meetingpointsresultSet != null)
            {
                foreach (var item in meetingpointsresultSet)
                {
                    Points = string.Concat(Points, "-");
                    Points = string.Concat(Points, item.Points);
                    Points = string.Concat(Points, "<br/>");
                }
            }
            else
            {
                Points = string.Concat(Points, "-");
            }
            string note = "";
            if (notesresultSet != null)
            {
                foreach (var item in notesresultSet)
                {
                    note = string.Concat(note, "-");
                    note = string.Concat(note, item.Text);
                    note = string.Concat(note, "<br/>");
                }
            }
            else
            {
                note = string.Concat(note, "-");
            }

            string Preaudits = "";
            if (PreauditresultSet != null)
            {
                foreach (var item in PreauditresultSet)
                {
                    Preaudits = string.Concat(Preaudits, "<td style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                    Preaudits = string.Concat(Preaudits, item.AreaofOperation);
                    Preaudits = string.Concat(Preaudits, "</td>");

                    Preaudits = string.Concat(Preaudits, "<td style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                    Preaudits = string.Concat(Preaudits, item.Issue);
                    Preaudits = string.Concat(Preaudits, "</td>");

                    Preaudits = string.Concat(Preaudits, "<td style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                    Preaudits = string.Concat(Preaudits, item.Status);
                    Preaudits = string.Concat(Preaudits, "</td>");

                    Preaudits = string.Concat(Preaudits, "<td style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                    Preaudits = string.Concat(Preaudits, item.ExpectedDate);
                    Preaudits = string.Concat(Preaudits, "</td>");

                    Preaudits = string.Concat(Preaudits, "<td style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                    Preaudits = string.Concat(Preaudits, item.Comments);
                    Preaudits = string.Concat(Preaudits, "</td>");
                }
            }
            else
            {
                Preaudits = string.Concat(Preaudits, "-");
            }

            string Initiative = "";
            if (InitiativesresultSet != null)
            {
                foreach (var item in InitiativesresultSet)
                {
                    Initiative = string.Concat(Initiative, "-");
                    Initiative = string.Concat(Initiative, item.Observation);
                    Initiative = string.Concat(Initiative, "<br/>");
                }
            }
            else
            {
                Initiative = string.Concat(Initiative, "-");
            }

            string Change = "";
            if (ChangesresultSet != null)
            {
                foreach (var item in ChangesresultSet)
                {
                    Change = string.Concat(Change, "-");
                    Change = string.Concat(Change, item.Observation);
                    Change = string.Concat(Change, "<br/>");
                }
            }
            else
            {
                Change = string.Concat(Change, "-");
            }
            HTMLBody = HTMLBody.Replace("{scope}", scopedata);
            HTMLBody = HTMLBody.Replace("{auditee}", team);
            HTMLBody = HTMLBody.Replace("{auditor}", team1);
            HTMLBody = HTMLBody.Replace("{auditorabsent}", absentauditor);
            HTMLBody = HTMLBody.Replace("{auditeeabsent}", absentauditee);
            HTMLBody = HTMLBody.Replace("{Observation}", Observation);
            HTMLBody = HTMLBody.Replace("{Points}", Points);
            HTMLBody = HTMLBody.Replace("{notes}", note);
            HTMLBody = HTMLBody.Replace("{Preaudits}", Preaudits);
            HTMLBody = HTMLBody.Replace("{Initiatives}", Initiative);
            HTMLBody = HTMLBody.Replace("{Changes}", Change);
            message.Body = HTMLBody;
            string msg = "";
            if (request.ContainsText == "mail")
            {
                message.IsBodyHtml = true;
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
        public int GetRoleId(IDbConnection connection, ListRequest request)
        {
            var user = (UserDefinition)Serenity.Authorization.UserDefinition;
            var msg = user.RoleId;
            return user.RoleId;
        }
        }
}
