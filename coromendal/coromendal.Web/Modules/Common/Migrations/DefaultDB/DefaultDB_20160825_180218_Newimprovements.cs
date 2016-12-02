using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825180218)]
    public class DefaultDB_20160825_180218_Newimprovements : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Newiprovements").InSchema("ACN")
                .WithColumn("NewiprovementsID").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("MeetingID").AsInt32().NotNullable()
                .WithColumn("Observation").AsString(200).NotNullable();

            Create.ForeignKey("FK_Newiprovements_Details")
               .FromTable("Newiprovements")
               .ForeignColumn("MeetingID")
               .ToTable("Minutesofmeeting")
               .PrimaryColumn("meetingid");

        }
    }
}