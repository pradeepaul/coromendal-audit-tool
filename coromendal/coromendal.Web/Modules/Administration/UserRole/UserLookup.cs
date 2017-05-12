
namespace coromendal.Administration.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;

    [LookupScript("ACN.UserLookup")]
    public class UserLookup : RowLookupScript<Entities.UserRow>
    {
        public UserLookup()
        {
            IdField = "UserId";
            TextField = "Username";

        }

        protected override void PrepareQuery(SqlQuery query)
        {

            var fl = Entities.UserRow.Fields;
            var sa = query.Distinct(true)
                .Select(fl.Username)
                .Select(fl.UserId)
                .Where(
                   (fl.RoleId == 3));
            System.Console.WriteLine(sa);

        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}