
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
            IdField = TextField = "UserId";

        }

        protected override void PrepareQuery(SqlQuery query)
        {

            var fl1 = Entities.UserRow.Fields;
            var sa = query.Distinct(true)
                .Select(fl1.Username)
                .Where(
                   (fl1.UserId == 2 ));
            System.Console.WriteLine(sa);

        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}