using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825113604)]
    public class DefaultDB_20160825_113604_AcnAuditeeRef : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("AcnAuditeeRef").InSchema("ACN")
                .WithColumn("AcnAuditeeRefId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("AcnAuditeeId").AsInt32().NotNullable()
                .WithColumn("acnId").AsInt32().NotNullable();
        }
    }
}