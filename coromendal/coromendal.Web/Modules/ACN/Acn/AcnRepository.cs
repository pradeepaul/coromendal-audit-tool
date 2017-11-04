

namespace coromendal.ACN.Repositories
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.AcnRow;

    public class AcnRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
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
            var user = Authorization.UserDefinition as UserDefinition;
            var ro = new MyListHandler().Process(connection, request);
           /* ListResponse<MyRow> ro;
            if(user.RoleId == 4)
            {
                ro = new MyListHandler().Process(connection, request);
                var num = ro.Entities[0].Auditor;
            }
            else if(user.RoleId == 2)
            {
               ro = new MyListHandler().Process(connection, request);
                var fld1 = coromendal.ACN.Entities.AcnRow.Fields;
                ro = new MyListHandler().Process(connection, request);
                
            }
           else
            {
                ro = new MyListHandler().Process(connection, request);
                var num = ro.Entities[0].Auditor;
            }*/
            
           
            return ro;
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
                    query.Where(fld.AcnId.In(
                           query.SubQuery()
                               .From(acnAuditorRef)
                               .Select("acnID")
                               .Where(
                                   acnAuditorRef.AcnAuditorId == user.UserId && fld.status == 2)));
                }
                if (user.RoleId == 2)
                {
                    base.ApplyFilters(query);
                    var acnAuditeeRef = Entities.AcnAuditeeRefRow.Fields.As("acnAuditeeRef");
                     query.Where(fld.AcnId.In(
                           query.SubQuery()
                               .From(acnAuditeeRef)
                               .Select("acnID")
                               .Where(
                                   acnAuditeeRef.AcnAuditeeId == user.UserId && fld.status == 2)));
                }
                if (user.RoleId == 3)
                {
                    base.ApplyFilters(query);
                    var acnReviewRef = Entities.AcnReviewRefRow.Fields.As("acnReviewRef");
                    query.Where(fld.AcnId.In(
                          query.SubQuery()
                              .From(acnReviewRef)
                              .Select("acnID")
                              .Where(
                                  acnReviewRef.AcnReviewId == user.UserId && fld.status == 2)));
                }
            }
        }
       
    }
}