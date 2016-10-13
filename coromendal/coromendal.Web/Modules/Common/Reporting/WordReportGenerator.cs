using Serenity.Data;
using Serenity.Reflection;
using System;
using System.IO;
using System.Collections;
using System.Collections.Generic;
using System.Drawing;
using Novacode;
using System.Linq;
using System.Reflection;

namespace Serenity.Reporting
{
    public static class WordReportGenerator
    {
        public static byte[] GeneratePackageBytes(List<ReportColumn> columns, IList rows,
            int reportid)
        {
            var documentByteArray = GeneratePackage(columns, rows, reportid);
            return documentByteArray;
        }

        public static byte[] GeneratePackage(List<ReportColumn> columns, IList rows,
            int reportid)
        {
            var projectBaseDir = System.AppDomain.CurrentDomain.BaseDirectory;
            var templateDocument = Path.Combine(projectBaseDir, "Report.docx");
            DocX document = DocX.Load(templateDocument);
            PopulateDocument(document, columns, rows, reportid);
            var finalDocument = Path.Combine(projectBaseDir, "finalDocument.docx");
            return File.ReadAllBytes(finalDocument);
        }
        public static void PopulateDocument(DocX document, List<ReportColumn> columns, IList rows,
            int reportid)
        {

            //Geting ACN id based on report id
            var fld = coromendal.ACN.Entities.AcnreportRow.Fields;
            dynamic reportset;
            var reportsqlquery = new SqlQuery()
                    .From(fld)
                    .Select(fld.Acnid)
                    .Where(
                    fld.ReportId == reportid);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.AcnreportRow>())
                reportset = connection.Query(reportsqlquery).FirstOrDefault();
            int acnid = reportset.Acnid;
            // Add a new Paragraph to the document.
            Paragraph p = document.InsertParagraph();
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
                    fld1.AcnId == acnid);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.AcnRow>())
                resultSet = connection.Query(sqlquery).FirstOrDefault();
            DateTime dt = Convert.ToDateTime(Convert.ToString(resultSet.creationdate));
            //First Page
            document.ReplaceText("#%PHASENO%", Convert.ToString(resultSet.PhaseNo));
            document.ReplaceText("#%YEAR%", Convert.ToString(dt.Year));
            document.ReplaceText("#%AUDIT_TITLE%", Convert.ToString(resultSet.AcnTilte));
            document.ReplaceText("#%LOCATION%", Convert.ToString(resultSet.location));

            //Acn Details
            document.ReplaceText("#%DATE%", Convert.ToString(resultSet.creationdate));
            document.ReplaceText("#%DUEDATE%", Convert.ToString(dt.AddDays(10)));
            document.ReplaceText("#%CMDDATE%", Convert.ToString(dt.AddDays(12)));
            document.ReplaceText("#%TIME%", "12 Days");
            document.ReplaceText("#%FINALDATE%", Convert.ToString(dt.AddDays(12)));
            document.ReplaceText("#%PERIODFROM%", Convert.ToString(resultSet.Periodfrom));
            document.ReplaceText("#%PERIODTO%", Convert.ToString(resultSet.Periodto));
            //

            //Auditor list
            var auditor = coromendal.ACN.Entities.AcnAuditorRefRow.Fields;
            List<dynamic> auditorResultSet;
            var auditorsqlquery = new SqlQuery()
                    .From(auditor)
                    .Select(auditor.AcnAuditorId)
                    .Where(
                    auditor.AcnId == acnid);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.AcnAuditorRefRow>())
                auditorResultSet = connection.Query(auditorsqlquery).ToList();
            var table = document.AddTable(auditorResultSet.Count, 1);
            var audit = 0;

            foreach (var item in auditorResultSet)
            {
                if (item.AcnAuditorId != 0)
                {
                    var name = PopulateUser(item.AcnAuditorId);
                    table.Rows[audit].Cells[0].Paragraphs.First().Append(name);
                    table.Rows[audit].Cells[0].Paragraphs.First().Append("\n");
                    audit++;
                }

            }

           foreach (var paragraph in document.Paragraphs)
            {
                paragraph.FindAll("#TABLE#").ForEach(index => paragraph.InsertTableAfterSelf((table)));
            }
            document.ReplaceText("#TABLE#", "");

            //Auditee List
            var auditee = coromendal.ACN.Entities.AcnAuditeeRefRow.Fields;
            List<dynamic> auditeeResultSet;
            var auditeesqlquery = new SqlQuery()
                    .From(auditee)
                    .Select(auditee.AcnAuditeeId)
                    .Where(
                    auditee.AcnId == acnid);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.AcnAuditeeRefRow>())
                auditeeResultSet = connection.Query(auditeesqlquery).ToList();
            var auditeetable = document.AddTable(auditeeResultSet.Count, 1);
            var audite = 0;
            foreach (var item in auditeeResultSet)
            {
                if (item.AcnAuditeeId != 0)
                {
                    var name = PopulateUser(item.AcnAuditeeId);
                    auditeetable.Rows[audite].Cells[0].Paragraphs.First().Append(name);
                    table.Rows[audite].Cells[0].Paragraphs.First().Append("\n");
                    audite++;
                }
            }
            foreach (var paragraph in document.Paragraphs)
            {
                paragraph.FindAll("#AUDITEETABLE#").ForEach(index => paragraph.InsertTableAfterSelf((auditeetable)));
            }
            document.ReplaceText("#AUDITEETABLE#", "");


            // AUDIT SCOPE lIST
            var scope = coromendal.ACN.Entities.ScopeRow.Fields;
            List<dynamic> scopeResultSet;
            var scopesqlquery = new SqlQuery()
                    .From(scope)
                    .Select(scope.Title)
                    .Where(
                    scope.AcnId == acnid);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.ScopeRow>())
                scopeResultSet = connection.Query(scopesqlquery).ToList();
            Table scopeTable = document.Tables.First(t => t.TableCaption == "SCOPE_TABLE");
            foreach (var item in scopeResultSet)
            {
                Novacode.Row newOrderRow = scopeTable.InsertRow();
                newOrderRow.Cells[0].Paragraphs.First().Append(Convert.ToString(item.Title));
            }

            //key facts
            var keyfacts = coromendal.ACN.Entities.KeyfactsRow.Fields;
            List<dynamic> keyfactsResultSet;
            var keyfactsqlquery = new SqlQuery()
                    .From(keyfacts)
                    .Select(keyfacts.Particulars)
                    .Select(keyfacts.Value)
                    .Where(
                    scope.AcnId == acnid);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.KeyfactsRow>())
                keyfactsResultSet = connection.Query(keyfactsqlquery).ToList();
            Table keyfactstable = document.Tables.First(t => t.TableCaption == "KEY_FACTS_FIGURES");
            var key = 0;
            foreach (var item in keyfactsResultSet)
            {
                Novacode.Row newOrderRow = keyfactstable.InsertRow();
                newOrderRow.Cells[0].Paragraphs.First().Append(Convert.ToString(key + 1));
                newOrderRow.Cells[1].Paragraphs.First().Append(Convert.ToString(item.Particulars));
                newOrderRow.Cells[2].Paragraphs.First().Append(Convert.ToString(item.Value));
            }
            //Meeting details based on acn 

            var issue = coromendal.ACN.Entities.MeetingIssueRow.Fields;
            var meeting = coromendal.ACN.Entities.MinutesofmeetingRow.Fields;
            
            List<dynamic> meetingResultSet;
            var meetingidquery = new SqlQuery()
                    .From(meeting)
                    .Select(meeting.Meetingid)
                    .Where(
                    meeting.Acnid == acnid);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.MinutesofmeetingRow>())
                meetingResultSet = connection.Query(meetingidquery).ToList();
            var mt = 0;
            int[] numbers = new int[meetingResultSet.Count];
            foreach (var item in meetingResultSet)
            {
                numbers[mt] = (int)item.Meetingid;
                mt++;
            }
            //Meeting issue

            List<dynamic> issueResultSet;
            var issuesqlquery = new SqlQuery()
                    .From(issue)
                    .Select(issue.AreaofOperation)
                    .Select(issue.Issue)
                    .Select(issue.Status)
                    .Select(issue.ExpectedDate)
                    .Select(issue.Areacovered)
                    .Select(issue.Areanotcovered)
                    .Select(issue.Commandcreationdate)
                    .Select(issue.Comments)
                    .Where(
                    issue.MeetingId.In (numbers));
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.MeetingIssueRow>())
                issueResultSet = connection.Query(issuesqlquery).ToList();
            Table issuetable = document.Tables.First(t => t.TableCaption == "ISSUE_TABLE");
            foreach (var item in issueResultSet)
            {
                Novacode.Row newOrderRow = issuetable.InsertRow();
                newOrderRow.Cells[0].Paragraphs.First().Append(Convert.ToString(item.Areanotcovered));

            }
            //ISSUE PENDING
            Table issuePendingtable = document.Tables.First(t => t.TableCaption == "ISSUE_PENDING_TABLE");
            var k = 0;

            foreach (var item in issueResultSet)
            {
                Novacode.Row newOrderRow = issuePendingtable.InsertRow();
                newOrderRow.Cells[0].Paragraphs.First().Append(Convert.ToString(k + 1));
                newOrderRow.Cells[1].Paragraphs.First().Append(item.Areanotcovered);
                newOrderRow.Cells[2].Paragraphs.First().Append(Convert.ToString("high"));
                newOrderRow.Cells[3].Paragraphs.First().Append(Convert.ToString(item.Comments));
                newOrderRow.Cells[4].Paragraphs.First().Append(Convert.ToString(item.Commandcreationdate));
                k++;
            }
            //STATUS
            Table issueStatustable = document.Tables.First(t => t.TableCaption == "ISSUE_IDENTIFIED_TABLE");
            var l = 0;
            foreach (var item in issueResultSet)
            {
                Novacode.Row newOrderRow = issueStatustable.InsertRow();
                newOrderRow.Cells[0].Paragraphs.First().Append(Convert.ToString(l + 1));
                newOrderRow.Cells[1].Paragraphs.First().Append(Convert.ToString(item.AreaofOperation));
                newOrderRow.Cells[2].Paragraphs.First().Append(Convert.ToString(item.Issue));
                newOrderRow.Cells[3].Paragraphs.First().Append(Convert.ToString(item.Status));
                newOrderRow.Cells[4].Paragraphs.First().Append(Convert.ToString(item.ExpectedDate));
                l++;
            }

            //Area Covered
            Table issueCoveredtable = document.Tables.First(t => t.TableCaption == "ISSUE_COVERED_TABLE");
            var m = 0;
            foreach (var item in issueResultSet)
            {
                Novacode.Row newOrderRow = issueCoveredtable.InsertRow();
                newOrderRow.Cells[0].Paragraphs.First().Append(Convert.ToString(m + 1));
                newOrderRow.Cells[1].Paragraphs.First().Append(Convert.ToString(item.Areacovered));
                newOrderRow.Cells[2].Paragraphs.First().Append(Convert.ToString(item.Issue));
                newOrderRow.Cells[3].Paragraphs.First().Append(Convert.ToString(item.Status));
                newOrderRow.Cells[4].Paragraphs.First().Append(Convert.ToString(item.ExpectedDate));
                m++;
            }


            //FEEDBACK DETAILS
            var feedback = coromendal.ACN.Entities.AcnFeedbackRow.Fields;
            dynamic feedbackResultSet;
            var feedbacksqlquery = new SqlQuery()
                    .From(feedback)
                    .Select(feedback.Ques1)
                    .Select(feedback.Ques2)
                    .Select(feedback.Ques3)
                    .Select(feedback.Ques4)
                    .Select(feedback.Ques5)
                    .Select(feedback.Ques6)
                    .Select(feedback.Ques7)
                    .Select(feedback.Ques8)
                    .Select(feedback.Ques9)
                    .Select(feedback.Ques10)
                    .Select(feedback.Ques11)
                    .Select(feedback.Ques12)
                    .Select(feedback.Ques13)
                    .Select(feedback.Ques14)
                    .Where(
                    feedback.Acnid == acnid);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.AcnFeedbackRow>())
                feedbackResultSet = connection.Query(feedbacksqlquery).FirstOrDefault();

            document.ReplaceText("#%Q1%", Convert.ToString(feedbackResultSet.Ques1));
            document.ReplaceText("#%Q2%", Convert.ToString(feedbackResultSet.Ques2));
            var doc = feedbackResultSet.Ques1 + feedbackResultSet.Ques2;
            document.ReplaceText("#%Documentation%", Convert.ToString(doc / 2));

            document.ReplaceText("#%Q3%", Convert.ToString(feedbackResultSet.Ques3));
            document.ReplaceText("#%Q4%", Convert.ToString(feedbackResultSet.Ques4));
            var com = feedbackResultSet.Ques3 + feedbackResultSet.Ques4;
            document.ReplaceText("#%Complianc%", Convert.ToString(com / 2));

            document.ReplaceText("#%Q5%", Convert.ToString(feedbackResultSet.Ques5));
            document.ReplaceText("#%Q6%", Convert.ToString(feedbackResultSet.Ques6));
            var fin = feedbackResultSet.Ques5 + feedbackResultSet.Ques6;
            document.ReplaceText("#%financial%", Convert.ToString(fin / 2));

            document.ReplaceText("#%Q7%", Convert.ToString(feedbackResultSet.Ques7));
            document.ReplaceText("#%Q8%", Convert.ToString(feedbackResultSet.Ques8));
            var res = feedbackResultSet.Ques7 + feedbackResultSet.Ques8;
            document.ReplaceText("#%Response%", Convert.ToString(res / 2));

            document.ReplaceText("#%Q9%", Convert.ToString(feedbackResultSet.Ques9));
            document.ReplaceText("#%Q10%", Convert.ToString(feedbackResultSet.Ques10));
            var dis = feedbackResultSet.Ques9 + feedbackResultSet.Ques10;
            document.ReplaceText("#%disclosure%", Convert.ToString(dis / 2));

            document.ReplaceText("#%Q11%", Convert.ToString(feedbackResultSet.Ques11));
            document.ReplaceText("#%Q12%", Convert.ToString(feedbackResultSet.Ques12));
            var imp = feedbackResultSet.Ques11 + feedbackResultSet.Ques12;
            document.ReplaceText("#%improvements%", Convert.ToString(imp / 2));

            //ob id
            var obid = coromendal.ACN.Entities.AuditobservationRow.Fields;
            dynamic auditobid;
            var obidsqlquery = new SqlQuery()
                    .From(obid)
                    .Select(obid.AuditobservationId)
                    .Where(
                    obid.AcnId == acnid);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.AuditobservationRow>())
                auditobid = connection.Query(obidsqlquery).FirstOrDefault();
            var ob = 0;
            ob = auditobid.AuditobservationId;
            //Root cause/impact
            var rootcause = coromendal.ACN.Entities.RootcauseRow.Fields;
            List<dynamic> rootcausesResultSet;
            var rootcausesqlquery = new SqlQuery()
                    .From(rootcause)
                    .Select(rootcause.Rootcause)
                    .Select(rootcause.Impact)
                    .Where(
                    rootcause.AuditobservationId == ob);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.RootcauseRow>())
                rootcausesResultSet = connection.Query(rootcausesqlquery).ToList();
            var rootcausetable = document.AddTable(rootcausesResultSet.Count, 2);
            var rootc = 0;

            foreach (var item in rootcausesResultSet)
            {
                rootcausetable.Rows[rootc].Cells[0].Paragraphs.First().Append(Convert.ToString(item.Rootcause));
                rootcausetable.Rows[rootc].Cells[1].Paragraphs.First().Append(Convert.ToString(item.Impact));
                rootc++;
            }


            foreach (var paragraph in document.Paragraphs)
            {
                paragraph.FindAll("#%ROOTCAUSE%").ForEach(index => paragraph.InsertTableAfterSelf((rootcausetable)));

            }
            document.ReplaceText("#%ROOTCAUSE%", "");

            //Suggestion
            var suggestion = coromendal.ACN.Entities.SuggestionRow.Fields;
            List<dynamic> suggestionResultSet;
            var suggestionsqlquery = new SqlQuery()
                    .From(suggestion)
                    .Select(suggestion.Suggestion)
                    .Where(
                    suggestion.AuditobservationId == ob);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.SuggestionRow>())
                suggestionResultSet = connection.Query(suggestionsqlquery).ToList();
            var suggestiontable = document.AddTable(suggestionResultSet.Count, 1);
            var sugg = 0;

            foreach (var item in suggestionResultSet)
            {
                suggestiontable.Rows[sugg].Cells[0].Paragraphs.First().Append(Convert.ToString(item.Suggestion));
                sugg++;
            }
            foreach (var paragraph in document.Paragraphs)
            {
                paragraph.FindAll("#% Suggestion%").ForEach(index => paragraph.InsertTableAfterSelf((suggestiontable)));

            }
            document.ReplaceText("#% Suggestion%", "");


            var summary = coromendal.ACN.Entities.AuditobservationRow.Fields;
            List<dynamic> summaryResultSet;
            var summarysqlquery = new SqlQuery()
                    .From(summary)
                    .Select(summary.Observationtitle)
                    .Select(summary.RiskRating)
                    .Select(summary.Category)
                    .Select(summary.Agreeobservation)
                    .Select(summary.Suggestion)
                    .Where(
                    summary.AcnId == acnid);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.AuditobservationRow>())
                summaryResultSet = connection.Query(summarysqlquery).ToList();

            Table exceutiveSummarytable = document.Tables.First(t => t.TableCaption == "EXECUTIVE_SUMMARY");
            var E = 0;
            foreach (var item in summaryResultSet)
            {
                Novacode.Row newOrderRow = exceutiveSummarytable.InsertRow();
                newOrderRow.Cells[0].Paragraphs.First().Append(Convert.ToString(E + 1));
                newOrderRow.Cells[1].Paragraphs.First().Append(Convert.ToString(item.Observationtitle));
                if (item.RiskRating != 0)
                {
                    var name = PopulateRiskIndexPage(item.RiskRating);
                    newOrderRow.Cells[2].Paragraphs.First().Append(name);
                }

                if (item.Category != 0)
                {
                    var name = PopulatecategoryIndexPage(item.Category);
                    newOrderRow.Cells[3].Paragraphs.First().Append(name);
                }

                if (item.Agreeobservation == 1)
                {
                    newOrderRow.Cells[4].Paragraphs.First().Append("YES");
                }
                else
                {
                    newOrderRow.Cells[4].Paragraphs.First().Append("NO");
                }
                if (item.Suggestion == 1)
                {
                    newOrderRow.Cells[5].Paragraphs.First().Append("YES");
                }
                else
                {
                    newOrderRow.Cells[5].Paragraphs.First().Append("NO");
                }
                newOrderRow.Cells[6].Paragraphs.First().Append("Yes");
                newOrderRow.Cells[7].Paragraphs.First().Append("TR");
                E++;
            }
           

            //Observation

            var obervation = coromendal.ACN.Entities.AuditobservationRow.Fields;
            dynamic obervationResultSet;
            var obervationsqlquery = new SqlQuery()
                    .From(obervation)
                    .Select(obervation.Observationtitle)
                    .Select(obervation.Observationsynopsis)
                    .Select(obervation.Detailedobservation)
                    .Select(obervation.Agreeobservation)
                    .Select(obervation.Alternateplan)
                    .Select(obervation.Suggestion)
                    .Select(obervation.Justification)
                    .Select(obervation.Targetdate)
                    .Select(obervation.RiskRating)
                    .Select(obervation.Category)
                    .Select(obervation.Name)
                    .Select(obervation.Email)
                    .Where(
                    summary.AcnId == acnid);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.AuditobservationRow>())
                obervationResultSet = connection.Query(obervationsqlquery).FirstOrDefault();

            document.ReplaceText("%#Observation Title%", obervationResultSet.Observationtitle);
            document.ReplaceText("#%Synopsisofobservation%", obervationResultSet.Observationsynopsis);
            document.ReplaceText("#%Detailed Observation#", obervationResultSet.Detailedobservation);
            if (obervationResultSet.Agreeobservation != 0)
            {
                document.ReplaceText("%#AGREE%", "YES");
            }
            else
            {
                document.ReplaceText("%#AGREE%", "NO");
            }

            document.ReplaceText("#% AlternateAction#", Convert.ToString(obervationResultSet.Alternateplan));
            if (obervationResultSet.Agreeobservation != 0)
            {
                document.ReplaceText("#%YES#", "YES");
            }
            else
            {
                document.ReplaceText("#%YES#", "NO");
            }
            document.ReplaceText("%# Justification#", Convert.ToString(obervationResultSet.Justification));
            document.ReplaceText("%#TDATE%", Convert.ToString(obervationResultSet.Targetdate));
            document.ReplaceText("%#RISKRATING#", PopulateRiskIndexPage(obervationResultSet.RiskRating));
            document.ReplaceText("CATEGORY###", PopulatecategoryIndexPage(obervationResultSet.Category));
            document.ReplaceText("%#UNAME%", Convert.ToString(obervationResultSet.Name));
            document.ReplaceText("%%EMAIL#", Convert.ToString(obervationResultSet.Email));

           

            //Issue discrepancies 

            var projectBaseDir = System.AppDomain.CurrentDomain.BaseDirectory;
            var finalSaveAsFileName = Path.Combine(projectBaseDir, "finalDocument.docx");
            document.SaveAs(finalSaveAsFileName);
        }

        public static string PopulatecategoryIndexPage(int id)
        {

            var category = coromendal.ACN.Entities.CategoryRow.Fields;
            dynamic categoryname;
            var categorysqlquery = new SqlQuery()
                   .From(category)
                   .Select(category.Categoryname)
                   .Where(
                   category.Categoryid == id);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.CategoryRow>())
                categoryname = connection.Query(categorysqlquery).FirstOrDefault();
            return categoryname.Categoryname;

        }
        public static string PopulateRiskIndexPage(int id)
        {

            var Risk = coromendal.ACN.Entities.RiskratingRow.Fields;
            dynamic Riskname;
            var categorysqlquery = new SqlQuery()
                   .From(Risk)
                   .Select(Risk.Riskratingname)
                   .Where(
                   Risk.Riskratingid == id);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.RiskratingRow>())
                Riskname = connection.Query(categorysqlquery).FirstOrDefault();
            return Riskname.Riskratingname;

        }
        public static string PopulateUser(int id)
        {

            var user = coromendal.Administration.Entities.UserRow.Fields;
            dynamic username;
            var usersqlquery = new SqlQuery()
                   .From(user)
                   .Select(user.DisplayName)
                   .Where(
                   user.UserId == id);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.RiskratingRow>())
                username = connection.Query(usersqlquery).FirstOrDefault();
            return username.DisplayName;

        }
        public static string PopulateAuditee(int id)
        {

            var Risk = coromendal.ACN.Entities.RiskratingRow.Fields;
            dynamic Riskname;
            var categorysqlquery = new SqlQuery()
                   .From(Risk)
                   .Select(Risk.Riskratingname)
                   .Where(
                   Risk.Riskratingid == id);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.RiskratingRow>())
                Riskname = connection.Query(categorysqlquery).FirstOrDefault();
            return Riskname.Riskratingname;

        }

        public static void MeetingInfo()
        {

        }
    }
}
