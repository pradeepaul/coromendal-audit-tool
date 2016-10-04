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
            string sheetName = "Page1", string tableName = "Table1")
        {
            var documentByteArray = GeneratePackage(columns, rows, sheetName, tableName);     
            return documentByteArray;
        }

        public static byte[] GeneratePackage(List<ReportColumn> columns, IList rows,
            string sheetName = "Page1", string tableName = "Table1")
        {
            var projectBaseDir = System.AppDomain.CurrentDomain.BaseDirectory;
            var templateDocument = Path.Combine(projectBaseDir, "Report.docx");
            DocX document = DocX.Load(templateDocument);
            PopulateDocument(document, columns, rows, sheetName, tableName);
            var finalDocument = Path.Combine(projectBaseDir, "finalDocument.docx");
            return File.ReadAllBytes(finalDocument);
        }
        public static void PopulateDocument(DocX document, List<ReportColumn> columns, IList rows,
            string sheetName = "Page1", string tableName = "Table1")
        {

            // Add a new Paragraph to the document.
            Paragraph p = document.InsertParagraph();
            var fld = coromendal.ACN.Entities.AcnreportRow.Fields;
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
                    fld1.AcnId == fld.Acnid);
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

            //Auditor list
            var auditor = coromendal.ACN.Entities.AcnAuditorRefRow.Fields;
            List<dynamic> auditorResultSet;
            var auditorsqlquery = new SqlQuery()
                    .From(auditor)
                    .Select(auditor.AcnAuditorId)
                    .Where(
                    auditor.AcnId == fld.Acnid);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.AcnAuditorRow>())
                auditorResultSet = connection.Query(auditorsqlquery).ToList();
            var table = document.AddTable(1,1);
            for (var i =0; i<1;i++)
            {
                for (var j = 0; j < 1; j++)
                {
                    foreach (var item in auditorResultSet)
                         {
                            table.Rows[i].Cells[j].Paragraphs.First().Append(Convert.ToString(item.AcnAuditorId));
                            table.Rows[i].Cells[j].Paragraphs.First().Append("\n");
                    }
                   
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
                    auditee.AcnId == fld.Acnid);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.AcnAuditeeRefRow>())
                auditeeResultSet = connection.Query(auditeesqlquery).ToList();
            var auditeetable = document.AddTable(1, 1);
            for (var i = 0; i < 1; i++)
            {
                for (var j = 0; j < 1; j++)
                {
                    foreach (var item in auditeeResultSet)
                    {
                        auditeetable.Rows[i].Cells[j].Paragraphs.First().Append(Convert.ToString(item.AcnAuditeeId));
                        table.Rows[i].Cells[j].Paragraphs.First().Append("\n");
                    }

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
                    scope.AcnId == fld.Acnid);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.ScopeRow>())
                scopeResultSet = connection.Query(scopesqlquery).ToList();
            var scopetable = document.AddTable(1, 1);
            scopetable.Alignment = Alignment.center;
            for (var i = 0; i < 1; i++)
            {
                for (var j = 0; j < 1; j++)
                {
                    foreach (var item in scopeResultSet)
                    {
                        scopetable.Rows[i].Cells[j].Paragraphs.First().Append(Convert.ToString(item.Title));
                        scopetable.Rows[i].Cells[j].Paragraphs.First().Append("\n");
                    }

                }
            }

            foreach (var paragraph in document.Paragraphs)
            {
                paragraph.FindAll("#%SCOPETABLE%").ForEach(index => paragraph.InsertTableAfterSelf((scopetable)));

            }
            document.ReplaceText("#%SCOPETABLE%", "");

            //key facts
            var keyfacts = coromendal.ACN.Entities.KeyfactsRow.Fields;
            List<dynamic> keyfactsResultSet;
            var keyfactsqlquery = new SqlQuery()
                    .From(keyfacts)
                    .Select(keyfacts.Particulars)
                    .Select(keyfacts.Value)
                    .Where(
                    scope.AcnId == fld.Acnid);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.KeyfactsRow>())
                keyfactsResultSet = connection.Query(keyfactsqlquery).ToList();
            var keyfactstable = document.AddTable(3, 3);
            keyfactstable.Alignment = Alignment.center;
            var key = 0;
            for (var i = 0; i < 1; i++)
            {
               
                    foreach (var item in keyfactsResultSet)
                    {
                    keyfactstable.Rows[key].Cells[0].Paragraphs.First().Append(Convert.ToString(key+1));
                    keyfactstable.Rows[key].Cells[1].Paragraphs.First().Append(Convert.ToString(item.Particulars));
                    keyfactstable.Rows[key].Cells[2].Paragraphs.First().Append(Convert.ToString(item.Value));
                    key++;
                    }

            }

            foreach (var paragraph in document.Paragraphs)
            {
                paragraph.FindAll("#%KEYTABLE%").ForEach(index => paragraph.InsertTableAfterSelf((keyfactstable)));

            }
            document.ReplaceText("#%KEYTABLE%", "");
            //Meeting issue
            var issue = coromendal.ACN.Entities.MeetingIssueRow.Fields;

            List<dynamic> issueResultSet;
            var issuesqlquery = new SqlQuery()
                    .From(issue)
                    .Select(issue.AreaofOperation)
                    .Select(issue.Issue)
                    .Select(issue.Status)
                    .Select(issue.ExpectedDate)
                    .Select(issue.AreaCovered)
                    .Select(issue.AreaNotCovered)
                    .Select(issue.CommandCreationDate)
                    .Select(issue.Comments)
                    .Where(
                    issue.MeetingId == 5);
            using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.MeetingIssueRow>())
                issueResultSet = connection.Query(issuesqlquery).ToList();
            var issuetable = document.AddTable(1, 1);
            issuetable.Alignment = Alignment.center;
            for (var i = 0; i < 1; i++)
            {
                for (var j = 0; j < 1; j++)
                {
                    foreach (var item in issueResultSet)
                    {

                        issuetable.Rows[i].Cells[j].Paragraphs.First().Append(Convert.ToString(item.AreaNotCovered));
                        issuetable.Rows[i].Cells[j].Paragraphs.First().Append("\n");


                    }

                }
            }
            //ISSUE PENDING
            var issuePendingtable = document.AddTable(1,5);
            var k = 1;
            for (var i = 0; i < 1; i++)
            {
                    foreach (var item in issueResultSet)
                    {
                    issuePendingtable.Rows[i].Cells[0].Paragraphs.First().Append(Convert.ToString(k));
                    issuePendingtable.Rows[i].Cells[1].Paragraphs.First().Append(Convert.ToString(item.AreaNotCovered));
                    issuePendingtable.Rows[i].Cells[2].Paragraphs.First().Append(Convert.ToString("high"));
                    issuePendingtable.Rows[i].Cells[3].Paragraphs.First().Append(Convert.ToString(item.Comments));
                    issuePendingtable.Rows[i].Cells[4].Paragraphs.First().Append(Convert.ToString(item.CommandCreationDate));
                    k++;
                   
                    }
            }
            //STATUS
            var issueStatustable = document.AddTable(1, 5);
            issueStatustable.Alignment = Alignment.center;
            var l = 1;
            for (var i = 0; i < 1; i++)
            {
                foreach (var item in issueResultSet)
                {
                    issueStatustable.Rows[i].Cells[0].Paragraphs.First().Append(Convert.ToString(l));
                    issueStatustable.Rows[i].Cells[1].Paragraphs.First().Append(Convert.ToString(item.AreaofOperation));
                    issueStatustable.Rows[i].Cells[2].Paragraphs.First().Append(Convert.ToString(item.Issue));
                    issueStatustable.Rows[i].Cells[3].Paragraphs.First().Append(Convert.ToString(item.Status));
                    issueStatustable.Rows[i].Cells[4].Paragraphs.First().Append(Convert.ToString(item.ExpectedDate));
                    l++;
                }
            }
            //Area Covered

            var issueCoveredtable = document.AddTable(1, 5);
            issueCoveredtable.Alignment = Alignment.center;
            var m = 1;
            for (var i = 0; i < 1; i++)
            {
                foreach (var item in issueResultSet)
                {
                    issueCoveredtable.Rows[i].Cells[0].Paragraphs.First().Append(Convert.ToString(m));
                    issueCoveredtable.Rows[i].Cells[1].Paragraphs.First().Append(Convert.ToString(item.AreaCovered));
                    issueCoveredtable.Rows[i].Cells[2].Paragraphs.First().Append(Convert.ToString(item.Issue));
                    issueCoveredtable.Rows[i].Cells[3].Paragraphs.First().Append(Convert.ToString(item.Status));
                    issueCoveredtable.Rows[i].Cells[4].Paragraphs.First().Append(Convert.ToString(item.ExpectedDate));
                    m++;
                }
            }
            foreach (var paragraph in document.Paragraphs)
            {
                paragraph.FindAll("#%ISSUETABLE%").ForEach(index => paragraph.InsertTableAfterSelf((issuetable)));
                paragraph.FindAll("#%ISSUEPENDINGTABLE%").ForEach(index => paragraph.InsertTableAfterSelf((issuePendingtable)));
                paragraph.FindAll("#%ISSUEIDENTIFIED%").ForEach(index => paragraph.InsertTableAfterSelf((issueStatustable)));
                paragraph.FindAll("#%ISSUECOVEREDTABLE%").ForEach(index => paragraph.InsertTableAfterSelf((issueCoveredtable)));
            }
            document.ReplaceText("#%ISSUETABLE%", "");
            document.ReplaceText("#%ISSUEPENDINGTABLE%", "");
            document.ReplaceText("#%ISSUEIDENTIFIED%", "");
            document.ReplaceText("#%ISSUECOVEREDTABLE%", "");


            //Issue discrepancies 
            /*  var colCount = columns.Count;
              int endCol = colCount;
              int endRow = rows.Count + 1;
              PopulateIndexPage(4);
            // Table orderTable = document.Tables.First(t => t.TableCaption == "ORDER_TABLE");
              for (var colNum = 1; colNum <= endCol; colNum++)
              {
                  for (var rowNum = 2; rowNum <= endRow; rowNum++)
                  {
                      var obj = rows[rowNum - 2];
                      var col = columns[colNum - 1];
                      var row = obj as coromendal.ACN.Entities.AcnreportRow;
                      string s = Convert.ToString(row.AcnidPhaseNo);
                      document.ReplaceText("#%PHASENO%", s);
                      DateTime dt = Convert.ToDateTime(row.AcnidCreationdate);
                      document.ReplaceText("#%YEAR%", Convert.ToString(dt.Year));
                      document.ReplaceText("#%AUDIT_TITLE%", row.Title);
                      document.ReplaceText("#%LOCATION%", row.AcnidLocation);
                      document.ReplaceText("#%DATE%", row.AcnidCreationdate);
                      document.ReplaceText("#%DUEDATE%", Convert.ToString(dt.AddDays(10)));
                      document.ReplaceText("#%CMDDATE%", Convert.ToString(dt.AddDays(12)));
                      document.ReplaceText("#%FINALDATE%", Convert.ToString(dt.AddDays(12)));
                      document.ReplaceText("#%TIME%", Convert.ToString(row.AcnidCreationdate));
                      document.ReplaceText("#%PERIODFROM%", row.AcnidPeriodfrom);
                      document.ReplaceText("#%PERIODTO%", row.AcnidPeriodto);
                      document.ReplaceText("#%SCOPE%", row.MeetingidTitle);


                      // Save the document.
                  }
              }*/
            var projectBaseDir = System.AppDomain.CurrentDomain.BaseDirectory;
            var finalSaveAsFileName = Path.Combine(projectBaseDir, "finalDocument.docx");
            document.SaveAs(finalSaveAsFileName);
        }
        public static void PopulateIndexPage(int acnid)
        {
            
           // foreach (var item in resultSet)
          //  {
          //      System.Console.WriteLine(item.AcnTilte);
           // }
           


        }

        public static void MeetingInfo()
        {

        }
    }
}
