
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
    using MyRepository = Repositories.AodRepository;
    using MyRow = Entities.AodRow;

    [RoutePrefix("Services/ACN/Aod"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize("Administration")]
    public class AodController : ServiceEndpoint
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

            var aod = coromendal.ACN.Entities.AodRow.Fields;
            dynamic aodresultSet;
            var aodsqlquery = new SqlQuery()
                    .From(aod)
                    .Select(aod.Actualcomencementdate)
                    .Select(aod.Actualcompltedate)
                    .Select(aod.ProcessOwner)
                    .Select(aod.Functionalhead)
                    .Select(aod.Areaofscope)
                    .Select(aod.Exclusions)
                    .Select(aod.Reasons)
                    .Select(aod.Sbu)
                    .Select(aod.Acnid)
                    .Select(aod.Meetingid)
                    .Select(aod.MeetingidPlanedcloseddate)
                    .Where(
                    aod.AodId == request.ContainsField);
            using (var connection1 = SqlConnections.NewFor<coromendal.ACN.Entities.AodRow>())
                aodresultSet = connection1.Query(aodsqlquery).FirstOrDefault();

            int acnid = aodresultSet.Acnid;
            int meetingid = aodresultSet.Meetingid;
            int sbuid = Convert.ToInt32(aodresultSet.Sbu);
            var fld1 = coromendal.ACN.Entities.AcnRow.Fields;
            dynamic acnresultSet;
            var acnsqlquery = new SqlQuery()
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
            using (var connection1 = SqlConnections.NewFor<coromendal.ACN.Entities.AcnRow>())
                acnresultSet = connection1.Query(acnsqlquery).FirstOrDefault();
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
            //input received from auitee           
            var inputs = coromendal.ACN.Entities.InputfromauditeeRow.Fields;
            List<dynamic> inputsresultSet=null;
            if (numbers1.Length != 0)
            {
                var inputssqlquery = new SqlQuery()
                    .From(inputs)
                    .Select(inputs.Additionalareacovered)
                    .Select(inputs.Issues)
                    .Select(inputs.Newimprovements)
                    .Where(
                    inputs.Aodid == request.ContainsField);
                using (var connection2 = SqlConnections.NewFor<coromendal.ACN.Entities.InputfromauditeeRow>())
                    inputsresultSet = connection2.Query(inputssqlquery).ToList();
            }
            //satisfation rating           
            var satisfation = coromendal.ACN.Entities.SatisfactionratingRow.Fields;
            List<dynamic> satisfationesultSet=null;
            if (numbers1.Length != 0)
            {
                var satisfationsqlquery = new SqlQuery()
                    .From(satisfation)
                    .Select(satisfation.Documentscore)
                    .Select(satisfation.Documentcomments)
                    .Select(satisfation.Documentrating)
                    .Select(satisfation.Documentweigtage)
                    .Select(satisfation.Documentscore)
                    .Select(satisfation.Compliancescore)
                    .Select(satisfation.Compliancecomment)
                    .Select(satisfation.Complianceweightage)
                    .Select(satisfation.Compliancerating)
                    .Select(satisfation.Processfincontrollscore)
                    .Select(satisfation.Processfincontrollscorecmnts)
                    .Select(satisfation.Processfincontrollweightage)
                    .Select(satisfation.Processfincontrollrating)
                    .Select(satisfation.Responsescore)
                    .Select(satisfation.Responsecmnts)
                    .Select(satisfation.Responserating)
                    .Select(satisfation.Responseweightage)
                    .Select(satisfation.Preauditscore)
                    .Select(satisfation.Preauditcmnts)
                    .Select(satisfation.Preauditweightage)
                    .Select(satisfation.Preauditrating)
                    .Select(satisfation.Newinitiativescore)
                    .Select(satisfation.Newinitiativecmnts)
                    .Select(satisfation.Newinitiativeweight)
                    .Select(satisfation.Newinitiativerating)
                    .Select(satisfation.Totalscore)
                    .Where(
                    inputs.Aodid == request.ContainsField);
                using (var connection2 = SqlConnections.NewFor<coromendal.ACN.Entities.SatisfactionratingRow>())
                    satisfationesultSet = connection2.Query(satisfationsqlquery).ToList();
            }
            //ob pending auitee
            var obpening = coromendal.ACN.Entities.ObservationpendingRow.Fields;
            List<dynamic> obpeningresultSet=null;
            if (numbers1.Length != 0)
            {
                var obpeningsqlquery = new SqlQuery()
                    .From(obpening)
                    .Select(obpening.Reportreference)
                    .Select(obpening.Briefdescription)
                    .Select(obpening.Originaltargetdate)
                    .Select(obpening.Revisedtargetdate)
                    .Select(obpening.Remarks)
                    .Where(
                    obpening.Aodid == request.ContainsField);
                using (var connection2 = SqlConnections.NewFor<coromendal.ACN.Entities.ObservationpendingRow>())
                    obpeningresultSet = connection2.Query(obpeningsqlquery).ToList();
            }
            //ob current auitee
            var currentob = coromendal.ACN.Entities.CurrentauditobservationRow.Fields;
            List<dynamic> currentobresultSet=null;
            if (numbers1.Length != 0)
            {
                var currentobsqlquery = new SqlQuery()
                    .From(currentob)
                    .Select(currentob.Observation)
                    .Select(currentob.Comments)
                    .Where(
                    currentob.Aodid == request.ContainsField);
                using (var connection2 = SqlConnections.NewFor<coromendal.ACN.Entities.CurrentauditobservationRow>())
                    currentobresultSet = connection2.Query(currentobsqlquery).ToList();
            }
            //SBU name 
            var sbuobj = coromendal.ACN.Entities.SbuRow.Fields;
            dynamic sburesultSet;
           
            var sbusqlquery = new SqlQuery()
                    .From(sbuobj)
                    .Select(sbuobj.Sbuname)
                    .Where(
                    sbuobj.Sbuid == sbuid);
            using (var connection5 = SqlConnections.NewFor<coromendal.ACN.Entities.SbuRow>())
                sburesultSet = connection5.Query(sbusqlquery).FirstOrDefault(); ;
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
            message.From = new MailAddress("at.admihoopla.1@gmail.com", "New Audit Observations for Discussion");
            message.Subject = "Audit Observations for Discussion";
            var projectBaseDir = System.AppDomain.CurrentDomain.BaseDirectory;
            string HTMLTemplatePath = Path.Combine(projectBaseDir, "AOD.html");
            string HTMLBody = "";
            HTMLBody = System.IO.File.ReadAllText(HTMLTemplatePath);
            HTMLBody = HTMLBody.Replace("{Reportnumber}", Convert.ToString(acnresultSet.PhaseNo));
            HTMLBody = HTMLBody.Replace("{Sbu}", Convert.ToString(sburesultSet.Sbuname)); 
            HTMLBody = HTMLBody.Replace("{Assignmenttitle}", Convert.ToString(acnresultSet.AcnTilte));
            HTMLBody = HTMLBody.Replace("{Auditlocation}", Convert.ToString(acnresultSet.location));

            HTMLBody = HTMLBody.Replace("{Commencementplanned}", Convert.ToString(acnresultSet.creationdate));
            HTMLBody = HTMLBody.Replace("{Commencementactual}", Convert.ToString(aodresultSet.Actualcomencementdate));
            HTMLBody = HTMLBody.Replace("{Completionplanned}", Convert.ToString(aodresultSet.MeetingidPlanedcloseddate));
            HTMLBody = HTMLBody.Replace("{Completionactual}", Convert.ToString(aodresultSet.Actualcompltedate));
            HTMLBody = HTMLBody.Replace("{Withprocessowners}", Convert.ToString(aodresultSet.ProcessOwner));
            HTMLBody = HTMLBody.Replace("{Withfunctionalhead}", Convert.ToString(aodresultSet.Functionalhead));
            HTMLBody = HTMLBody.Replace("{Exclusions}", Convert.ToString(aodresultSet.Exclusions));
            HTMLBody = HTMLBody.Replace("{Reasons}", Convert.ToString(aodresultSet.Reasons));

            HTMLBody = HTMLBody.Replace("{Auditcoveragefrom}", Convert.ToString(acnresultSet.Fromdate));
            HTMLBody = HTMLBody.Replace("{Auditcoverageto}", Convert.ToString(acnresultSet.Todate));
            HTMLBody = HTMLBody.Replace("{Durationfrom}", Convert.ToString(acnresultSet.Periodfrom));
            HTMLBody = HTMLBody.Replace("{Periodto}", Convert.ToString(acnresultSet.Periodto));
            HTMLBody = HTMLBody.Replace("{Durationto}", Convert.ToString(acnresultSet.creationdate));
            HTMLBody = HTMLBody.Replace("{Acndate}", Convert.ToString(acnresultSet.creationdate));
            string scopedata = "";
            string team = "";
            string team1 = "";

            foreach (var item in scoperesultSet)
            {
                scopedata = string.Concat(scopedata, "-");
                scopedata = string.Concat(scopedata, item.Title);
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
            string Initiatives = "";
            foreach (var item in inputsresultSet)
            {
                Initiatives = string.Concat(Initiatives, "<tr><td colspan='3' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                Initiatives = string.Concat(Initiatives, item.Additionalareacovered);
                Initiatives = string.Concat(Initiatives, "</td>");

                Initiatives = string.Concat(Initiatives, "<td colspan='3' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                Initiatives = string.Concat(Initiatives, item.Issues);
                Initiatives = string.Concat(Initiatives, "</td>");

                Initiatives = string.Concat(Initiatives, "<td colspan='3' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                Initiatives = string.Concat(Initiatives, item.Newimprovements);
                Initiatives = string.Concat(Initiatives, "</td></tr>");
            }
            string obpending = "";
            if (obpeningresultSet != null)
            {
                foreach (var item in obpeningresultSet)
                {
                    obpending = string.Concat(obpending, "<td colspan='1' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                    obpending = string.Concat(obpending, item.Reportreference);
                    obpending = string.Concat(obpending, "</td>");

                    obpending = string.Concat(obpending, "<td colspan='1' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                    obpending = string.Concat(obpending, item.Briefdescription);
                    obpending = string.Concat(obpending, "</td>");

                    obpending = string.Concat(obpending, "<td colspan='1' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                    obpending = string.Concat(obpending, item.Originaltargetdate);
                    obpending = string.Concat(obpending, "</td>");

                    obpending = string.Concat(obpending, "<td colspan='1' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                    obpending = string.Concat(obpending, item.Revisedtargetdate);
                    obpending = string.Concat(obpending, "</td>");

                    obpending = string.Concat(obpending, "<td colspan='1' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                    obpending = string.Concat(obpending, item.Remarks);
                    obpending = string.Concat(obpending, "</td>");
                }
            }
            else
            {
                obpending = string.Concat(obpending, "-");
            }
            string currentobj = "";
            foreach (var item in currentobresultSet)
            {
                currentobj = string.Concat(currentobj, "<tr>");
                currentobj = string.Concat(currentobj, "<th rowspan='2' colspan='1' class='subtitle1' style='border: solid 1px #000000;color: #336B6B;padding: 10px;text-align: left;'>1</th>");
                currentobj = string.Concat(currentobj, "<td colspan = '10' style = 'height: 40px;border: solid 1px #000000;padding: 10px;text-align: center;' >");
                currentobj = string.Concat(currentobj, item.Observation);
                currentobj = string.Concat(currentobj, "</td>");
                currentobj = string.Concat(currentobj, "</tr>");
                currentobj = string.Concat(currentobj, "<tr>");
                currentobj = string.Concat(currentobj, "<td colspan = '10' style = 'height: 40px;border: solid 1px #000000;padding: 10px;text-align: center;' >");
                currentobj = string.Concat(currentobj, item.Comments);
                currentobj = string.Concat(currentobj, "</td>");
                currentobj = string.Concat(currentobj, "</tr>");
            }
            string satisfaction = "";
            foreach (var item in satisfationesultSet)
            {
                satisfaction = string.Concat(satisfaction, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction = string.Concat(satisfaction, item.Documentweigtage);
                satisfaction = string.Concat(satisfaction, "</td>");
                satisfaction = string.Concat(satisfaction, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction = string.Concat(satisfaction, item.Complianceweightage);
                satisfaction = string.Concat(satisfaction, "</td>");
                satisfaction = string.Concat(satisfaction, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction = string.Concat(satisfaction, item.Processfincontrollweightage);
                satisfaction = string.Concat(satisfaction, "</td>");
                satisfaction = string.Concat(satisfaction, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction = string.Concat(satisfaction, item.Responseweightage);
                satisfaction = string.Concat(satisfaction, "</td>");
                satisfaction = string.Concat(satisfaction, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction = string.Concat(satisfaction, item.Preauditweightage);
                satisfaction = string.Concat(satisfaction, "</td>");
                satisfaction = string.Concat(satisfaction, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction = string.Concat(satisfaction, item.Newinitiativeweight);
                satisfaction = string.Concat(satisfaction, "</td>");
                satisfaction = string.Concat(satisfaction, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction = string.Concat(satisfaction, item.Totalscore);
                satisfaction = string.Concat(satisfaction, "</td>");

            }
            string satisfaction1 = "";
            foreach (var item in satisfationesultSet)
            {
                satisfaction1 = string.Concat(satisfaction1, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction1 = string.Concat(satisfaction1, item.Documentscore);
                satisfaction1 = string.Concat(satisfaction1, "</td>");
                satisfaction1 = string.Concat(satisfaction1, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction1 = string.Concat(satisfaction1, item.Compliancescore);
                satisfaction1 = string.Concat(satisfaction1, "</td>");
                satisfaction1 = string.Concat(satisfaction1, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction1 = string.Concat(satisfaction1, item.Processfincontrollscore);
                satisfaction1 = string.Concat(satisfaction1, "</td>");
                satisfaction1 = string.Concat(satisfaction1, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction1 = string.Concat(satisfaction1, item.Responsescore);
                satisfaction1 = string.Concat(satisfaction1, "</td>");
                satisfaction1 = string.Concat(satisfaction1, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction1 = string.Concat(satisfaction1, item.Preauditscore);
                satisfaction1 = string.Concat(satisfaction1, "</td>");
                satisfaction1 = string.Concat(satisfaction1, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction1 = string.Concat(satisfaction1, item.Newinitiativescore);
                satisfaction1 = string.Concat(satisfaction1, "</td>");
                satisfaction1 = string.Concat(satisfaction1, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction1 = string.Concat(satisfaction1, item.Totalscore);
                satisfaction1 = string.Concat(satisfaction1, "</td>");

            }
            string satisfaction2 = "";
            foreach (var item in satisfationesultSet)
            {
                satisfaction2 = string.Concat(satisfaction2, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction2 = string.Concat(satisfaction2, item.Documentrating);
                satisfaction2 = string.Concat(satisfaction2, "</td>");
                satisfaction2 = string.Concat(satisfaction2, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction2 = string.Concat(satisfaction2, item.Compliancerating);
                satisfaction2 = string.Concat(satisfaction2, "</td>");
                satisfaction2 = string.Concat(satisfaction2, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction2 = string.Concat(satisfaction2, item.Processfincontrollrating);
                satisfaction2 = string.Concat(satisfaction2, "</td>");
                satisfaction2 = string.Concat(satisfaction2, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction2 = string.Concat(satisfaction2, item.Responserating);
                satisfaction2 = string.Concat(satisfaction2, "</td>");
                satisfaction2 = string.Concat(satisfaction2, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction2 = string.Concat(satisfaction2, item.Preauditrating);
                satisfaction2 = string.Concat(satisfaction2, "</td>");
                satisfaction2 = string.Concat(satisfaction2, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction2 = string.Concat(satisfaction2, item.Newinitiativerating);
                satisfaction2 = string.Concat(satisfaction2, "</td>");
                satisfaction2 = string.Concat(satisfaction2, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction2 = string.Concat(satisfaction2, item.Totalscore);
                satisfaction2 = string.Concat(satisfaction2, "</td>");

            }
            string satisfaction3 = "";
            foreach (var item in satisfationesultSet)
            {
                satisfaction3 = string.Concat(satisfaction3, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction3 = string.Concat(satisfaction3, item.Documentcomments);
                satisfaction3 = string.Concat(satisfaction3, "</td>");
                satisfaction3 = string.Concat(satisfaction3, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction3 = string.Concat(satisfaction3, item.Compliancecomment);
                satisfaction3 = string.Concat(satisfaction3, "</td>");
                satisfaction3 = string.Concat(satisfaction3, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction3 = string.Concat(satisfaction3, item.Processfincontrollscorecmnts);
                satisfaction3 = string.Concat(satisfaction3, "</td>");
                satisfaction3 = string.Concat(satisfaction3, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction3 = string.Concat(satisfaction3, item.Responsecmnts);
                satisfaction3 = string.Concat(satisfaction3, "</td>");
                satisfaction3 = string.Concat(satisfaction3, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction3 = string.Concat(satisfaction3, item.Preauditcmnts);
                satisfaction3 = string.Concat(satisfaction3, "</td>");
                satisfaction3 = string.Concat(satisfaction3, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction3 = string.Concat(satisfaction3, item.Newinitiativecmnts);
                satisfaction3 = string.Concat(satisfaction3, "</td>");
                satisfaction3 = string.Concat(satisfaction3, "<td colspan='2' style='border: solid 1px #000000;padding: 10px;text-align: center;'>");
                satisfaction3 = string.Concat(satisfaction3, item.Totalscore);
                satisfaction3 = string.Concat(satisfaction3, "</td>");

            }

            HTMLBody = HTMLBody.Replace("{Areasofscope}", scopedata);
            HTMLBody = HTMLBody.Replace("{Auditorsname}", team1);
            HTMLBody = HTMLBody.Replace("{Auditeesname}", team);
            HTMLBody = HTMLBody.Replace("{Initiatives}", Initiatives);
            HTMLBody = HTMLBody.Replace("{obpending}", obpending);
            HTMLBody = HTMLBody.Replace("{currentobj}", currentobj);
            HTMLBody = HTMLBody.Replace("{satisfaction}", satisfaction);
            HTMLBody = HTMLBody.Replace("{satisfaction1}", satisfaction1);
            HTMLBody = HTMLBody.Replace("{satisfaction2}", satisfaction2);
            HTMLBody = HTMLBody.Replace("{satisfaction3}", satisfaction3);
            message.Body = HTMLBody;
            message.IsBodyHtml = true;
            string msg = "";
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
