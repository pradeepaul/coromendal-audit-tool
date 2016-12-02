
namespace coromendal.Administration.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;

    [LookupScript("ACN.UserLookup")]
    public class UserLookup : RowLookupScript<Entities.UserRoleRow>
    {
        public UserLookup()
        {
            IdField = TextField = "UserId";

        }

        protected override void PrepareQuery(SqlQuery query)
        {

            var fl1 = Entities.UserRow.Fields;
            var fl = Entities.UserRoleRow.Fields;
            var sa = query.Distinct(true)
                .Select(fl.UserId)
                .Where(
                   (fl.UserId == 2 ));
            System.Console.WriteLine(sa);

        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}