
namespace coromendal.ACN.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;

    [LookupScript("ACN.AuditeeLookup")]
    public class AuditeeLookup : RowLookupScript<Entities.MinutesofmeetingRow>
    {
        public AuditeeLookup()
        {
            IdField = TextField = "Auditee";

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            
            var fld = Entities.MinutesofmeetingRow.Fields;
            var fl = Entities.AcnAuditeeRefRow.Fields.As("fl");
            var sa = query.Distinct(true)
                .Select(fld.Auditee)
                .LeftJoin(fl, fl.AcnId == fld.Acnid)
                .Where(
                   (fl.AcnId ==fld.Acnid ) & (fl.AcnAuditeeId == fld.Auditee));

        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}