using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825112004)]
    public class DefaultDB_20160825_112004_AcnAuditee : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("AcnAuditee").InSchema("ACN")
                .WithColumn("AcnAuditeeId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable();
        }
    }
}