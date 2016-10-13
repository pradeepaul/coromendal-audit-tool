
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
    using System.Data.SqlClient;
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
            int reportid = int.Parse(request.ContainsField);
            var fld1 = coromendal.ACN.Entities.AcnreportRow.Fields;
           
            using (SqlConnection connection1 = new SqlConnection(connection.ConnectionString))
            using (SqlCommand command = connection1.CreateCommand())
            {
                try {
                    command.CommandText = "UPDATE Acnreport SET status = @Completed Where reportId = @fn";
                    command.Parameters.AddWithValue("@Completed", "completed");
                    command.Parameters.AddWithValue("@fn", reportid);
                    connection1.Open();
                    command.ExecuteNonQuery();
                }
                catch (Exception ex)
                {
                    throw ex; //TODO: Please log it or remove the catch
                }
              finally
                {
                    connection1.Close();
                }

                //connection.Close();
            }
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.AcnreportColumns), reportid);
            var bytes = new ReportRepository().Render(report, reportid);
            return ExcelContentResult.Create(bytes, "REPORT_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".docx");
        }
    }
}
