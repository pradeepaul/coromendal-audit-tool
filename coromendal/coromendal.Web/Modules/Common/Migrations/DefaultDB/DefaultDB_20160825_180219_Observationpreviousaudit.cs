using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825180219)]
    public class DefaultDB_20160825_180219_Observationpreviousaudit : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Observationpreviousaudit").InSchema("ACN")
                .WithColumn("ObservationpreviousauditID").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("MeetingID").AsInt32().NotNullable()
                .WithColumn("Observation").AsString(200).NotNullable();

            Create.ForeignKey("FK_Newchanges_Details")
               .FromTable("Observationpreviousaudit")
               .ForeignColumn("MeetingID")
               .ToTable("Minutesofmeeting")
               .PrimaryColumn("meetingid");

        }
    }
}