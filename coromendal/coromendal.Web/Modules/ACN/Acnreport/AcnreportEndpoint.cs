
namespace coromendal.ACN.Endpoints
{
    using Entities;
    using Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Data.SqlClient;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.AcnreportRepository;
    using MyRow = Entities.AcnreportRow;

    [RoutePrefix("Services/ACN/Acnreport"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize("Administration")]
    public class AcnreportController : ServiceEndpoint
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
        public String ReportStatus(IDbConnection connection, IUnitOfWork uow, ListRequest request)
        {
            int reportid = Convert.ToInt32(request.ContainsField);
            var fld1 = coromendal.ACN.Entities.AcnreportRow.Fields;
            dynamic resultSet;
            var sqlquery1 = new SqlQuery()
                    .From(fld1)
                    .Select(fld1.Acnid)
                    .Select(fld1.Title)
                    .Select(fld1.userid)
                    .Select(fld1.status)
                    .Where(
                    fld1.ReportId == reportid);
            using (var connection2 = SqlConnections.NewFor<coromendal.ACN.Entities.AcnRow>())
                resultSet = connection2.Query(sqlquery1).FirstOrDefault();

            var freport = new FinalreportRow();
            freport.Acnid = resultSet.Acnid;
            freport.Title = resultSet.Title;          
            
            var updatereq = new SaveRequest<ACN.Entities.FinalreportRow> { Entity = freport };
            new FinalreportRepository().Create(uow, updatereq);
            return "hi";
        }
        public String[] Download(IDbConnection connection, ListRequest request)
        {
            var fld1 = coromendal.ACN.Entities.FinalobservationRow.Fields;
            int reportid = int.Parse(request.ContainsField);
            List<dynamic> resultSet;
            var sqlquery = new SqlQuery()
                    .From(fld1)
                    .Select(fld1.FinalobservationId)
                    .Select(fld1.Status)
                    .Where(
                    fld1.AcnId == reportid);
            using (var connection1 = SqlConnections.NewFor<coromendal.ACN.Entities.AcnRow>())
                resultSet = connection1.Query(sqlquery).ToList();
            var audit = 0;
            var audit1 = 0;
            foreach (var item in resultSet)
            {
                if (item.Status == 4)
                {                    
                    audit++;
                }
                audit1++;

            }
            string[] theArray = { request.ContainsField, Convert.ToString(audit), Convert.ToString(audit1) };
            return theArray;
        }
        public FileContentResult DownloadWord(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            int reportid = int.Parse(request.ContainsField);
            var fld1 = coromendal.ACN.Entities.AcnreportRow.Fields;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.AcnreportColumns), reportid);
            var bytes = new ReportRepository().Render(report, reportid);
            return ExcelContentResult.Create(bytes, "REPORT_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".docx");
        }
    }
}
