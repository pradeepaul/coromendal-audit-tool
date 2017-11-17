
namespace coromendal.ACN.Endpoints
{
    using Entities;
    using Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.AuditobservationRepository;
    using MyRow = Entities.AuditobservationRow;

    [RoutePrefix("Services/ACN/Auditobservation"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize("Administration")]
    public class AuditobservationController : ServiceEndpoint
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
        public string Send(IUnitOfWork uow, IDbConnection connection, ListRequest request)
        {

            var aod = coromendal.ACN.Entities.AuditobservationRow.Fields;
            dynamic aodresultSet;
            var aodsqlquery = new SqlQuery()
                    .From(aod)
                    .Select(aod.AcnId)
                    .Select(aod.scope)
                    .Select(aod.Observationtitle)
                    .Select(aod.Observationsynopsis)
                    .Select(aod.Likelihood)
                    .Select(aod.Consequence)
                    .Select(aod.Targetdate)
                    .Select(aod.Category)
                    .Select(aod.RiskRating)
                    .Where(
                    aod.AuditobservationId == request.ContainsField);
            using (var connection1 = SqlConnections.NewFor<coromendal.ACN.Entities.AodRow>())
                aodresultSet = connection1.Query(aodsqlquery).FirstOrDefault();

            var objervation = new FinalobservationRow();
            objervation.AcnId = aodresultSet.AcnId;
            objervation.Scope = aodresultSet.scope;
            objervation.Observationid = Convert.ToInt32(request.ContainsField);
            objervation.Likelihood = aodresultSet.Likelihood;
            objervation.Consequence = aodresultSet.Consequence;
            objervation.Targetdate = aodresultSet.Targetdate;
            objervation.RiskRating = aodresultSet.RiskRating;
            objervation.Category = aodresultSet.Category;
            objervation.Observationtitle = aodresultSet.Observationtitle;
            objervation.Observationsynopsis = aodresultSet.Observationsynopsis;
            var saveRequest = new SaveRequest<ACN.Entities.FinalobservationRow> { Entity = objervation };
            new FinalobservationRepository().Create(uow, saveRequest);
            return "Sent Successfully"; ;

        }
        public string Sendmail(IUnitOfWork uow,IDbConnection connection, ListRequest request)
        {

            var aod = coromendal.ACN.Entities.AuditobservationRow.Fields;
            dynamic aodresultSet;
            var aodsqlquery = new SqlQuery()
                    .From(aod)
                    .Select(aod.AcnId)
                    .Select(aod.scope)
                    .Select(aod.Observationtitle)
                    .Select(aod.Observationsynopsis)                    
                    .Select(aod.Likelihood)
                    .Select(aod.Consequence)
                    .Select(aod.Targetdate)
                    .Select(aod.Category)
                    .Select(aod.RiskRating)
                    .Where(
                    aod.AuditobservationId == request.ContainsField);
            using (var connection1 = SqlConnections.NewFor<coromendal.ACN.Entities.AodRow>())
                aodresultSet = connection1.Query(aodsqlquery).FirstOrDefault();
            
            var objervation = new PreobservationRow();
            objervation.AcnId = aodresultSet.AcnId;
            objervation.Scope = aodresultSet.scope;
            objervation.Observationid = Convert.ToInt32(request.ContainsField);
            objervation.Likelihood = aodresultSet.Likelihood;
            objervation.Consequence = aodresultSet.Consequence;
            objervation.Targetdate = aodresultSet.Targetdate;
            objervation.RiskRating = aodresultSet.RiskRating;
            objervation.Category = aodresultSet.Category;
            objervation.Observationtitle = aodresultSet.Observationtitle;
           objervation.Observationsynopsis = aodresultSet.Observationsynopsis;
            var saveRequest = new SaveRequest<ACN.Entities.PreobservationRow> { Entity = objervation };
            new PreobservationRepository().Create(uow, saveRequest);
            return  "Sent Successfully"; ;

        }
    }
}
