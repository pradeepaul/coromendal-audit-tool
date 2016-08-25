using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825104304)]
    public class DefaultDB_20160825_104304_Acn : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Schema("ACN");

            Create.Table("Acn").InSchema("ACN")
                .WithColumn("acnId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("AcnTitle").AsString(200).NotNullable();
        }
    }
}