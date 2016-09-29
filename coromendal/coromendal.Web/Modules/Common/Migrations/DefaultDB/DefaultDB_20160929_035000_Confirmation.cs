using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160929035000)]
    public class DefaultDB_20160929_035000_Confirmation : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Confirmation").InSchema("ACN")
                .WithColumn("confirmationID").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("confirmation").AsString(200).NotNullable();


        }
    }
}