using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825131204)]
    public class DefaultDB_20160825_131204_Feedback : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Feedback").InSchema("ACN")
                .WithColumn("FeedbackId").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("FeedbackQuestionId").AsInt32().NotNullable()
                .WithColumn("FeedbackMeetingId").AsInt32().NotNullable()
                .WithColumn("FeedbackRating").AsInt32().NotNullable()
                .WithColumn("FeedbackRemarks").AsString(200).NotNullable();

            Create.ForeignKey("FK_ACN_FEEDBACK")
              .FromTable("Feedback")
              .ForeignColumn("FeedbackMeetingId")
              .ToTable("Minutesofmeeting")
              .PrimaryColumn("meetingid");

            Create.ForeignKey("FK_ACN_question")
              .FromTable("Feedback")
              .ForeignColumn("FeedbackQuestionId")
              .ToTable("Question")
              .PrimaryColumn("QuestionId");
        }
    }
}