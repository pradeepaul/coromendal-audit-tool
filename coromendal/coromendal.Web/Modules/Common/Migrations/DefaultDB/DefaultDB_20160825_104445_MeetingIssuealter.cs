using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825104445)]
    public class DefaultDB_20160825_104445_MeetingIssuealter : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Schema("ACN");
           
            Alter.Table("MeetingIssue")
                 .AddColumn("Areacovered").AsString(300)
                     .NotNullable().WithDefaultValue(0);

            Alter.Table("MeetingIssue")
                .AddColumn("Areanotcovered").AsString(100)
                    .NotNullable().WithDefaultValue(0);

            Alter.Table("MeetingIssue")
                .AddColumn("commandcreationdate").AsString(100)
                    .NotNullable().WithDefaultValue(0);
        }
    }
}