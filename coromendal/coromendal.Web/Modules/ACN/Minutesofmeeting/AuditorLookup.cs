
namespace coromendal.ACN.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("ACN.AuditorLookup")]
    public class AuditorLookup : RowLookupScript<Entities.MinutesofmeetingRow>
    {
        public AuditorLookup()
        {
            IdField = TextField = "Auditor";

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.MinutesofmeetingRow.Fields;
            var fl = Entities.AcnAuditorRefRow.Fields.As("fl");
            var sa = query.Distinct(true)
                .Select(fld.Auditor)
                .LeftJoin(fl, fl.AcnId == fld.Acnid)
                .Where(
                   (fl.AcnId == fld.Acnid) & (fl.AcnAuditorId == fld.Auditor));
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}