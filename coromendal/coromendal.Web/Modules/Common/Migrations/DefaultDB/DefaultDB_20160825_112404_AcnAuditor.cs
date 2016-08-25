using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825112404)]
    public class DefaultDB_20160825_112404_AcnAuditor : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("AcnAuditor").InSchema("ACN")
                .WithColumn("AcnAuditorId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable();
        }
    }
}