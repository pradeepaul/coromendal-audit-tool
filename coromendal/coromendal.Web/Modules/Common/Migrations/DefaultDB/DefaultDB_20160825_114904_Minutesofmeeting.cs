using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825114904)]
    public class DefaultDB_20160825_114904_Minutesofmeeting : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Minutesofmeeting").InSchema("ACN")
                .WithColumn("meetingid").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("acnId").AsInt32().NotNullable()
                .WithColumn("title").AsString(200).NotNullable()
                .WithColumn("auditscope").AsString(200).NotNullable()
                .WithColumn("period").AsString(200).NotNullable()
                .WithColumn("time").AsInt32().NotNullable()
                .WithColumn("venue").AsString(200).NotNullable()
                .WithColumn("auditor").AsInt32().NotNullable()
                .WithColumn("auditee").AsInt32().NotNullable();

            Create.ForeignKey("FK_ACN_MEETING")
                .FromTable("Minutesofmeeting")
                .ForeignColumn("acnId")
                .ToTable("Acn")
                .PrimaryColumn("acnID");
        }
    }
}