
namespace coromendal.Administration.Endpoints
{
    using ACN.Entities;
    using ACN.Repositories;
    using Entities;
    using Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.NewAcnMasterRepository;
    using MyRow = Entities.NewAcnMasterRow;

    [RoutePrefix("Services/Administration/NewAcnMaster"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize("Administration")]
    public class NewAcnMasterController : ServiceEndpoint
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
        public string Send(IUnitOfWork uow,IDbConnection connection, ListRequest request)
        {
            var fld1 = coromendal.Administration.Entities.NewAcnMasterRow.Fields;
           var mom = new NewAcnMasterRow();
            mom.Statusid = 1;
            mom.Id = Convert.ToInt32(request.ContainsField);
            var updatereq = new SaveRequest<Administration.Entities.NewAcnMasterRow> { Entity = mom };
            new NewAcnMasterRepository().Update(uow, updatereq);

            dynamic resultSet;
            var sqlquery = new SqlQuery()
                    .From(fld1)
                    .Select(fld1.AcnTilte)
                    .Select(fld1.PhaseNo)
                    .Select(fld1.AcnTilte)
                    .Select(fld1.Location)
                    .Select(fld1.Fromdate)
                    .Select(fld1.Todate)
                    .Select(fld1.Periodfrom)
                    .Select(fld1.Periodto)
                    .Select(fld1.Creationdate)
                    .Where(
                    fld1.Id == request.ContainsField);
            using (var connection1 = SqlConnections.NewFor<coromendal.ACN.Entities.AcnRow>())
                resultSet = connection1.Query(sqlquery).FirstOrDefault();
            if (resultSet != null)
            {
                var acn = new AcnRow();
                acn.AcnTilte = resultSet.AcnTilte;
                acn.location = resultSet.Location;
                acn.PhaseNo = resultSet.PhaseNo;
                acn.Fromdate = resultSet.Fromdate;
                acn.Todate = resultSet.Todate;
                acn.status = 2;
                acn.Periodfrom = resultSet.Periodfrom;
                acn.Periodto = resultSet.Periodto;
                acn.creationdate = resultSet.Creationdate;
                var saveRequest = new SaveRequest<ACN.Entities.AcnRow> { Entity = acn };
                var response = new AcnRepository().Create(uow, saveRequest);
                var id = response.EntityId;
                var audit = coromendal.Administration.Entities.MasterscopeRow.Fields;
                List<dynamic> auditresultSet;
                var auditsqlquery = new SqlQuery()
                        .From(audit)
                        .Select(audit.Title)
                        .Where(
                        audit.AcnId == request.ContainsField);
                using (var connection3 = SqlConnections.NewFor<coromendal.Administration.Entities.MasterscopeRow>())
                    auditresultSet = connection3.Query(auditsqlquery).ToList();               
                foreach (var data in auditresultSet)
                {
                    if (data.ScopeId != 0)
                    {
                        var scope = new ScopeRow();
                        scope.Title = data.Title;
                        scope.AcnId = Convert.ToInt32(id);
                        var saveRequest1 = new SaveRequest<ACN.Entities.ScopeRow> { Entity = scope };
                        new ScopeRepository().Create(uow, saveRequest1);
                    }
                }
                var auditor = coromendal.Administration.Entities.MasterAcnAuditorRefRow.Fields;
                List<dynamic> auditorresultSet;
                var auditorsqlquery = new SqlQuery()
                        .From(auditor)
                        .Select(auditor.AcnAuditorId)
                        .Where(
                        audit.AcnId == request.ContainsField);
                using (var connection3 = SqlConnections.NewFor<coromendal.Administration.Entities.MasterAcnAuditorRefRow>())
                    auditorresultSet = connection3.Query(auditorsqlquery).ToList();
               
                foreach (var data in auditorresultSet)
                {
                    var scope = new AcnAuditorRefRow();
                    scope.AcnAuditorId = data.AcnAuditorId;
                    scope.AcnId = Convert.ToInt32(id);
                    var saveRequest2 = new SaveRequest<ACN.Entities.AcnAuditorRefRow> { Entity = scope };
                    new AcnAuditorRefRepository().Create(uow, saveRequest2);

                }
                var auditee = coromendal.Administration.Entities.MasterAcnAuditeeRefRow.Fields;
                List<dynamic> auditeeresultSet;
                var auditeesqlquery = new SqlQuery()
                        .From(auditee)
                        .Select(auditee.AcnAuditeeId)
                        .Where(
                        audit.AcnId == request.ContainsField);
                using (var connection3 = SqlConnections.NewFor<coromendal.Administration.Entities.MasterAcnAuditeeRefRow>())
                    auditeeresultSet = connection3.Query(auditeesqlquery).ToList();               
                foreach (var data in auditeeresultSet)
                {

                    var scope = new AcnAuditeeRefRow();
                    scope.AcnAuditeeId = data.AcnAuditeeId;
                    scope.AcnId = Convert.ToInt32(id);
                    var saveRequest3 = new SaveRequest<ACN.Entities.AcnAuditeeRefRow> { Entity = scope };
                    new AcnAuditeeRefRepository().Create(uow, saveRequest3);

                }
            }
            return "Sent Sucessfully";
        }
        }
}
