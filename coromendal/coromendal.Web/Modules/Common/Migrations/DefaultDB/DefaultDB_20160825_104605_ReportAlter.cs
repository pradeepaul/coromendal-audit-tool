using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825104605)]
    public class DefaultDB_20160825_104605_ReportAlter : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Schema("ACN");
           
            Alter.Table("Acnreport")
                 .AddColumn("meetingid").AsString(300)
                     .Nullable().WithDefaultValue(0);

            Alter.Table("Acnreport")
                .AddColumn("feedbackid").AsString(100)
                    .Nullable().WithDefaultValue(0);
        }
    }
}