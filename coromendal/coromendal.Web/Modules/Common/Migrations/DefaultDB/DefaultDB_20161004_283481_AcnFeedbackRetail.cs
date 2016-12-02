using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20161004283481)]
    public class DefaultDB_20161004_283481_AcnFeedbackRetail : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("AcnFeedbackRetail").InSchema("ACN")
              .WithColumn("AcnFeedbackRetailId").AsInt32()
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
              .WithColumn("name").AsString(200).NotNullable()
              .WithColumn("dept").AsString(200).NotNullable()
              .WithColumn("reviewname").AsString(200).NotNullable()
              .WithColumn("remark1").AsString(200).NotNullable()
              .WithColumn("remark2").AsString(200).NotNullable()
              .WithColumn("remark3").AsString(200).NotNullable()
              .WithColumn("remark4").AsString(200).NotNullable()
              .WithColumn("remark5").AsString(200).NotNullable()
              .WithColumn("remark6").AsString(200).NotNullable()
              .WithColumn("remark7").AsString(200).NotNullable()
              .WithColumn("remark8").AsString(200).NotNullable()
              .WithColumn("date").AsString(200).NotNullable()
              .WithColumn("storeno").AsString(200).NotNullable()
              .WithColumn("comments").AsString(200).NotNullable();
           
            Create.ForeignKey("FK_AcnFeedbackRetail_Details")
              .FromTable("AcnFeedbackRetail")
              .ForeignColumn("AcnFeedbackRetailId")
              .ToTable("Acn")
              .PrimaryColumn("acnid");


        }
    }
}