
namespace coromendal.Administration.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;

    [LookupScript("ACN.AuditeeUserLookup")]
    public class AuditeeUserLookup : RowLookupScript<Entities.UserRoleRow>
    {
        public AuditeeUserLookup()
        {
           IdField = TextField = "UserId";

        }

        protected override void PrepareQuery(SqlQuery query)
        {
           
            var fl = Entities.UserRoleRow.Fields;
            var sa = query.Distinct(true)
                .Select(fl.UserId)
                .Where(
                   (fl.RoleId == 3 ));
            System.Console.WriteLine(sa);

        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}