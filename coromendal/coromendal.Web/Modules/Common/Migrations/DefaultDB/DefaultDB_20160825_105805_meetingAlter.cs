using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825105805)]
    public class DefaultDB_20160825_105805_meetingAlter : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Schema("ACN");
           
            Alter.Table("Minutesofmeeting")
                 .AddColumn("momdate").AsString(300)
                     .Nullable().WithDefaultValue(0);
        }
    }
}