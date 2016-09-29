using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160929034402)]
    public class DefaultDB_20160929_034402_Category : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Category").InSchema("ACN")
                .WithColumn("CategoryID").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("Categoryname").AsString(200).NotNullable();


        }
    }
}