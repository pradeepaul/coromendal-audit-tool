
namespace coromendal.ACN.Endpoints
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Data;
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
        public FileContentResult DownloadWord(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var fld = Entities.MinutesofmeetingRow.Fields;
            var fld1 = Entities.AcnRow.Fields;
            var fld2 = Entities.MeetingIssueRow.Fields;

            var query = new SqlQuery()
             .From(fld)
             .Select(fld.Acnid);

            Console.WriteLine(query);
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.AcnreportColumns));
            var shippers = connection.List<MyRow>(q => q.SelectTableFields().OrderBy(MyRow.Fields.Acnid));

            var bytes = new ReportRepository().Render(report);
            var user = (UserDefinition)Authorization.UserDefinition;
            return ExcelContentResult.Create(bytes, "REPORT_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".docx");
        }
    }
}
