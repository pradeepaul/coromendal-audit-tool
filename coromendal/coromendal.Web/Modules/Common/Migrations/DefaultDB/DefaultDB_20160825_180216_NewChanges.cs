using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825180216)]
    public class DefaultDB_20160825_180216_NewChanges : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Newchanges").InSchema("ACN")
                .WithColumn("NewchangesID").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("MeetingID").AsInt32().NotNullable()
                .WithColumn("Observation").AsString(200).NotNullable();

            Create.ForeignKey("FK_Newchanges_Details")
               .FromTable("Newchanges")
               .ForeignColumn("MeetingID")
               .ToTable("Minutesofmeeting")
               .PrimaryColumn("meetingid");

        }
    }
}