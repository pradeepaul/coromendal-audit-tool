
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
            string command = "SELECT * FROM Programs";
            var fld = Entities.MinutesofmeetingRow.Fields;
            var fl = Entities.AcnAuditeeRefRow.Fields.As("fl");
            var sa = query.Distinct(true)
                .Select(fl.AcnAuditeeId)
                .LeftJoin(fl, fl.AcnId == fld.Acnid)
                .Where(
                   (fl.AcnId == 4 ));
            System.Console.WriteLine(sa);

        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}