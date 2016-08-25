using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825120204)]
    public class DefaultDB_20160825_120204_MeetingPoints : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("MeetingPoints").InSchema("ACN")
                .WithColumn("MeetingPointsID").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("MeetingID").AsInt32().NotNullable()
                .WithColumn("Points").AsString(200).NotNullable();

            Create.ForeignKey("FK_Points_Details")
               .FromTable("MeetingPoints")
               .ForeignColumn("MeetingID")
               .ToTable("Minutesofmeeting")
               .PrimaryColumn("meetingid");

        }
    }
}