

namespace coromendal.ACN.Repositories
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.AodRow;

    public class AodRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {           

            var response = new MySaveHandler().Process(uow, request, SaveRequestType.Create);           
            return response;

        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var res = request.Entity.Areaofscope;
            var re = fld.Areaofscope;

            foreach (var data in res)
            {
                if (data.ScopeId == null)
                {
                    var scope = new ScopeRow();
                    scope.Title = data.Title;
                    scope.AcnId = request.Entity.Acnid;
                    var saveRequest = new SaveRequest<ACN.Entities.ScopeRow> { Entity = scope };
                    new ScopeRepository().Create(uow, saveRequest);
                    
                }
            }
            var scopeex = request.Entity.scopeexclude;
            List<ScopeexcludeRow> ScopeResultSet  = new List<ScopeexcludeRow>();
            foreach (var data in scopeex)
            {
                if (data.ExcludeId == null)
                {
                    dynamic resultSet;
                    var fld1 = coromendal.ACN.Entities.ScopeRow.Fields;
                    var sqlquery = new SqlQuery()
                            .From(fld1)
                            .Select(fld1.Title)                            
                            .Where(
                            fld1.ScopeId == Convert.ToInt32(data.Scopeid));
                    using (var connection = SqlConnections.NewFor<coromendal.ACN.Entities.ScopeRow>())
                        resultSet = connection.Query(sqlquery).FirstOrDefault();
                    var scopeexcl = new ScopeexcludeRow();
                    scopeexcl.Scopeid = data.Scopeid;
                    scopeexcl.Title = resultSet.Title;
                    scopeexcl.Aodid = request.Entity.AodId;
                    ScopeResultSet.Add(scopeexcl);                    
                    var scope = new ScopeRow();                   
                    var saveRequest1 = new DeleteRequest{ EntityId = data.Scopeid };
                    new ScopeRepository().Delete(uow, saveRequest1);
                    request.Entity.scopeexclude = ScopeResultSet;
                }
                else
                {
                    var scopeexcl1 = new ScopeexcludeRow();
                    scopeexcl1.Scopeid = data.Scopeid;
                    scopeexcl1.Title = data.Title;
                    scopeexcl1.Aodid = request.Entity.AodId;
                    ScopeResultSet.Add(scopeexcl1);
                    

                }
                request.Entity.scopeexclude = ScopeResultSet;
            }
            
            var res3 = request.Entity;
            var res1 = request.Entity.Currentauditobservation;
            var res2 = request.Entity.Currentauditobservation;
            foreach (var data1 in res1)
            {
                if (data1.Id == null)
                {
                    
                        var aod = new AuditobservationRow();
                        aod.AcnId = res3.Acnid;
                        //aod.scope = data1.scopeid;
                        aod.Observationtitle = data1.Observation;
                        var saveRequest = new SaveRequest<ACN.Entities.AuditobservationRow> { Entity = aod };
                        new AuditobservationRepository().Create(uow, saveRequest);
                    
                }
            }



            
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {


            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> {

            protected override void ApplyFilters(SqlQuery query)
            {
                var user = (UserDefinition)Authorization.UserDefinition;
                if (user.RoleId == 1)
                {
                    base.ApplyFilters(query);
                    var acnAuditorRef = Entities.AcnAuditorRefRow.Fields.As("acnAuditorRef");
                    query.Where(fld.Acnid.In(
                           query.SubQuery()
                               .From(acnAuditorRef)
                               .Select("acnID")
                               .Where(
                                   acnAuditorRef.AcnAuditorId == user.UserId)));
                }
                if (user.RoleId == 2)
                {
                    base.ApplyFilters(query);
                    var acnAuditeeRef = Entities.AcnAuditeeRefRow.Fields.As("acnAuditeeRef");
                    query.Where(fld.Acnid.In(
                          query.SubQuery()
                              .From(acnAuditeeRef)
                              .Select("acnID")
                              .Where(
                                  acnAuditeeRef.AcnAuditeeId == user.UserId)));
                }
                if (user.RoleId == 3)
                {
                    base.ApplyFilters(query);
                    var acnReviewRef = Entities.AcnReviewRefRow.Fields.As("acnReviewRef");
                    query.Where(fld.Acnid.In(
                          query.SubQuery()
                              .From(acnReviewRef)
                              .Select("acnID")
                              .Where(
                                  acnReviewRef.AcnReviewId == user.UserId)));
                }
            }
        }
    }
}