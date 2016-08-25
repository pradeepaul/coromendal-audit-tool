using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825130304)]
    public class DefaultDB_20160825_130304_MeetingAbsent : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("MeetingAbsent").InSchema("ACN")
                .WithColumn("MeetingAbsentID").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("MeetingID").AsInt32().NotNullable()
                .WithColumn("AbsentUser").AsInt32().NotNullable()
                .WithColumn("reason").AsString(200).NotNullable();

            Create.ForeignKey("FK_Absent_Details")
               .FromTable("MeetingAbsent")
               .ForeignColumn("MeetingID")
               .ToTable("Minutesofmeeting")
               .PrimaryColumn("meetingid");
        }
    }
}