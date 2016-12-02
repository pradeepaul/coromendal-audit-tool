using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20161004183455)]
    public class DefaultDB_20161004_183455_userrolealter : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Users")
                  .AddColumn("RoleId").AsInt32()
                      .NotNullable().WithDefaultValue(1);

           
        }
    }
}