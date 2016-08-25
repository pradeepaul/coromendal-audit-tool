using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825113104)]
    public class DefaultDB_20160825_113104_AcnAuditorRef : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("AcnAuditorRef").InSchema("ACN")
                .WithColumn("AcnAuditorRefId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("AcnAuditorId").AsInt32().NotNullable()
                .WithColumn("acnId").AsInt32().NotNullable();
        }
    }
}