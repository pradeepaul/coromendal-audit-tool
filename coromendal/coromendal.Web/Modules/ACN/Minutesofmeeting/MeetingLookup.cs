
namespace coromendal.ACN.Scripts
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;

    [LookupScript("ACN.MeetingLookup")]
    public class MeetingLookup : RowLookupScript<Entities.MinutesofmeetingRow>
    {
        public MeetingLookup()
        {
            IdField = "Meetingid";
            TextField = "MeetingTitle";

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var user = (UserDefinition)Authorization.UserDefinition;
            if (user.RoleId == 1)
            {
                var fld = Entities.MinutesofmeetingRow.Fields;
                base.PrepareQuery(query);
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
                var fld = Entities.MinutesofmeetingRow.Fields;
                base.PrepareQuery(query);
                var acnAuditeeRef = Entities.AcnAuditeeRefRow.Fields.As("acnAuditeeRef");
                query.Where(fld.Acnid.In(
                       query.SubQuery()
                           .From(acnAuditeeRef)
                           .Select("acnID")
                           .Where(
                               acnAuditeeRef.AcnAuditeeId == user.UserId)));
            }
            if (user.RoleId == 4)
            {
                base.PrepareQuery(query);
            }
            Console.Write(query);
            
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}