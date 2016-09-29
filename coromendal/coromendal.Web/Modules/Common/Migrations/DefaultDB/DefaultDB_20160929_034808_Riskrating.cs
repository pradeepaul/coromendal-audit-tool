using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160929034808)]
    public class DefaultDB_20160929_034808_Riskrating : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Riskrating").InSchema("ACN")
                .WithColumn("ratingID").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("ratingname").AsString(200).NotNullable();


        }
    }
}