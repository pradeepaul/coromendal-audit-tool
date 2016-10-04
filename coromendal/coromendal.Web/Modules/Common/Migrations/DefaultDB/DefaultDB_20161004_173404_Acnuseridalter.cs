using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20161004173404)]
    public class DefaultDB_20161004_173404_Acnuseridalter : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Acn")
                  .AddColumn("userid").AsInt32()
                      .NotNullable().WithDefaultValue(1);

            Create.ForeignKey("FK_USERACN_Details")
                .FromTable("Acn")
                .ForeignColumn("userid")
                .ToTable("Acn")
                .PrimaryColumn("acnID");
        }
    }
}