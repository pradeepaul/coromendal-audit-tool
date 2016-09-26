using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825121545)]
    public class DefaultDB_20160825_121545_Report : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Acnreport").InSchema("ACN")
                .WithColumn("reportId").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("title").AsString(200).NotNullable()
                .WithColumn("acnid").AsInt32()
                .WithColumn("meetingid").AsInt32()
                .WithColumn("feedbackid").AsInt32()
                .WithColumn("download").AsInt32();

            Create.ForeignKey("FK_report_MEETING")
               .FromTable("Acnreport")
               .ForeignColumn("meetingid")
               .ToTable("minutesofmeeting")
               .PrimaryColumn("meetingid");

            Create.ForeignKey("FK_ACN_REF")
              .FromTable("Acnreport")
              .ForeignColumn("acnid")
              .ToTable("Acn")
              .PrimaryColumn("acnID");

            Create.ForeignKey("FK_ACN_FEEDBACKREF")
              .FromTable("Acnreport")
              .ForeignColumn("feedbackid")
              .ToTable("Feedback")
              .PrimaryColumn("FeedbackId");
        }
    }
}