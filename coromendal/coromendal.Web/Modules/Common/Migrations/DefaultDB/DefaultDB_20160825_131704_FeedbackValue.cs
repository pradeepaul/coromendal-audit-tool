using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825131704)]
    public class DefaultDB_20160825_131704_FeedbackValue : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("feedbackvalue").InSchema("ACN")
                .WithColumn("feedbackvalueid").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("value").AsString(200).NotNullable();
            Insert.IntoTable("feedbackvalue")
               .Row(new
               {
                   value = "Not Satisfied"
               });
            Insert.IntoTable("feedbackvalue")
              .Row(new
              {
                  value = "Partially Satisfied"
              });
            Insert.IntoTable("feedbackvalue")
              .Row(new
              {
                  value = "Satisfied"
              });
            Insert.IntoTable("feedbackvalue")
              .Row(new
              {
                  value = "Extremely Satisfied"
              });

        }
    }
}

