using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825131604)]
    public class DefaultDB_20160825_131604_AcnFeedback : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("AcnFeedback").InSchema("ACN")
                .WithColumn("AcnFeedbackId").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("acnid").AsInt32().NotNullable()
                .WithColumn("ques1").AsInt32().NotNullable()
                .WithColumn("ques2").AsInt32().NotNullable()
                .WithColumn("ques3").AsInt32().NotNullable()
                .WithColumn("ques4").AsInt32().NotNullable()
                .WithColumn("ques5").AsInt32().NotNullable()
                .WithColumn("ques6").AsInt32().NotNullable()
                .WithColumn("ques7").AsInt32().NotNullable()
                .WithColumn("ques8").AsInt32().NotNullable()
                .WithColumn("ques9").AsInt32().NotNullable()
                .WithColumn("ques10").AsInt32().NotNullable()
                .WithColumn("ques11").AsInt32().NotNullable()
                .WithColumn("ques12").AsInt32().NotNullable()
                .WithColumn("ques13").AsInt32().NotNullable()
                .WithColumn("ques14").AsInt32().NotNullable()
                .WithColumn("name").AsString(200).NotNullable()
                .WithColumn("dept").AsString(200).NotNullable()
                .WithColumn("reviewname").AsString(200).NotNullable()
                .WithColumn("location").AsString(200).NotNullable();

            Create.ForeignKey("FK_ACNFEEDBACK")
              .FromTable("AcnFeedback")
              .ForeignColumn("AcnFeedbackId")
              .ToTable("Acn")
              .PrimaryColumn("acnid");
        }
    }
}