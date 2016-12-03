
namespace coromendal.Administration.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;

    [LookupScript("ACN.UserLookup1")]
    public class UserLookup1 : RowLookupScript<Entities.UserRow>
    {
        public UserLookup1()
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
                   (fl.RoleId == 2));
            System.Console.WriteLine(sa);

        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}