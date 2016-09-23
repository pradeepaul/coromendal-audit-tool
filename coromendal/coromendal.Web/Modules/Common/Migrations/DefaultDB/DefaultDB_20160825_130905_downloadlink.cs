using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825130905)]
    public class DefaultDB_20160825_130905_downloadlink : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("minutesofmeeting")
                    .AddColumn("download").AsInt32().Identity().NotNullable();
        }
    }
}