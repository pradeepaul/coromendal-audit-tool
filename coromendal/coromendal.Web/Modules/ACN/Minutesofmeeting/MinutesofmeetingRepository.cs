

namespace coromendal.ACN.Repositories
{
    using Entities;
    using Northwind.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using static MVC.Views.ACN;
    using MyRow = Entities.MinutesofmeetingRow;

    public class MinutesofmeetingRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {                           
            var response = new MySaveHandler().Process(uow, request, SaveRequestType.Create);
            
            return response;
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var res = request.Entity.AcnidScopeList;          
           if(res != null) { 
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
            }
            var response = new MySaveHandler().Process(uow, request, SaveRequestType.Update);
           /* var res1 = request.Entity;
            if (request.Entity.Status == 1)
            {

                if (response != null)
                {
                    var aod = new AodRow();
                    aod.Acnid = res1.Acnid;
                    aod.AcnidLocation = res1.AcnidLocation;
                    aod.Meetingid = Convert.ToInt32(response.EntityId);
                    aod.AcnidPhaseNo = res1.AcnidPhaseNo;
                    aod.AcnidCreationdate = res1.AcnidCreationdate;
                    aod.Actualcompltedate = res1.AcnidCreationdate;
                    aod.Actualcomencementdate = res1.AcnidCreationdate;
                    aod.MeetingidPlanedcloseddate = res1.planeddate;
                    aod.MeetingidAuditopeningmeetingdate = res1.auditopeneddate;
                    aod.AcnidFromdate = res1.AcnidFromdate;
                    aod.AcnidPeriodfrom = res1.AcnidPeriodfrom;
                    aod.AcnidPeriodto = res1.AcnidPeriodto;
                    aod.AcnidTodate = res1.AcnidTodate;

                    var saveRequest = new SaveRequest<ACN.Entities.AodRow> { Entity = aod };
                    new AodRepository().Create(uow, saveRequest);

                    var feedback = new AcnFeedbackRow();
                    feedback.Acnid = res1.Acnid;
                    feedback.AcnidAcnTilte = res1.AcnidAcnTilte;
                    feedback.AcnidCreationdate = res1.AcnidCreationdate;
                    feedback.AcnidFromdate = res1.AcnidFromdate;
                    feedback.AcnidLocation = res1.AcnidLocation;
                    feedback.AcnidTodate = res1.AcnidTodate;
                    feedback.AcnidPeriodfrom = res1.AcnidPeriodfrom;
                    feedback.AcnidPeriodto = res1.AcnidPeriodto;
                    feedback.AcnidPhaseNo = res1.AcnidPhaseNo;
                    var saveRequest1 = new SaveRequest<ACN.Entities.AcnFeedbackRow> { Entity = feedback };
                    new AcnFeedbackRepository().Create(uow, saveRequest1);
                }
            }
            //if(res.scopeId == null)*/
            return response;
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
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> {
        }
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