using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20161004283484)]
    public class DefaultDB_20161004_283484_Acnfeedbackalter : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("AcnFeedback")
                  .AddColumn("remark1").AsInt32()
                      .NotNullable().WithDefaultValue(1);
            Alter.Table("AcnFeedback")
                 .AddColumn("remark2").AsInt32()
                     .NotNullable().WithDefaultValue(1);
            Alter.Table("AcnFeedback")
                 .AddColumn("remark3").AsInt32()
                     .NotNullable().WithDefaultValue(1);
            Alter.Table("AcnFeedback")
                 .AddColumn("remark4").AsInt32()
                     .NotNullable().WithDefaultValue(1);
            Alter.Table("AcnFeedback")
                 .AddColumn("remark5").AsInt32()
                     .NotNullable().WithDefaultValue(1);
            Alter.Table("AcnFeedback")
                 .AddColumn("remark6").AsInt32()
                     .NotNullable().WithDefaultValue(1);
            Alter.Table("AcnFeedback")
                 .AddColumn("remark7").AsInt32()
                     .NotNullable().WithDefaultValue(1);
            Alter.Table("AcnFeedback")
                 .AddColumn("remark8").AsInt32()
                     .NotNullable().WithDefaultValue(1);
            Alter.Table("AcnFeedback")
                 .AddColumn("remark9").AsInt32()
                     .NotNullable().WithDefaultValue(1);
            Alter.Table("AcnFeedback")
                 .AddColumn("remark10").AsInt32()
                     .NotNullable().WithDefaultValue(1);
            Alter.Table("AcnFeedback")
                 .AddColumn("remark11").AsInt32()
                     .NotNullable().WithDefaultValue(1);
            Alter.Table("AcnFeedback")
                 .AddColumn("remark12").AsInt32()
                     .NotNullable().WithDefaultValue(1);
            Alter.Table("AcnFeedback")
                 .AddColumn("remark13").AsInt32()
                     .NotNullable().WithDefaultValue(1);
            Alter.Table("AcnFeedback")
                 .AddColumn("remark14").AsInt32()
                     .NotNullable().WithDefaultValue(1);
            Alter.Table("AcnFeedback")
               .AddColumn("comments").AsInt32()
                   .NotNullable().WithDefaultValue(1);


        }
    }
}