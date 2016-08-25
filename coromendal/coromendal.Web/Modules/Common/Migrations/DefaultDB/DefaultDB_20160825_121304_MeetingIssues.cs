using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825121304)]
    public class DefaultDB_20160825_121304_MeetingIssues : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("MeetingIssues").InSchema("ACN")
                .WithColumn("MeetingIssuesId").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("MeetingID").AsInt32().NotNullable()
                .WithColumn("AreaofOperation").AsString(200).NotNullable()
                .WithColumn("Issues").AsString(200).NotNullable()
                .WithColumn("Status").AsString(200).NotNullable()
                .WithColumn("ExpectedDate").AsDateTime().NotNullable();

            Create.ForeignKey("FK_issue_Details")
               .FromTable("MeetingIssues")
               .ForeignColumn("MeetingID")
               .ToTable("Minutesofmeeting")
               .PrimaryColumn("meetingid");
        }
    }
}