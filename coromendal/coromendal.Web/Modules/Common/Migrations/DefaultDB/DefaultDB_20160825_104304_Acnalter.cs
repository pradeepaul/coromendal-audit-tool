using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825104404)]
    public class DefaultDB_20160825_104404_Acnalter : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Schema("ACN");

            Alter.Table("Acn")
                  .AddColumn("PhaseNo").AsInt32()
                      .NotNullable().WithDefaultValue(1);
            Alter.Table("Acn")
                 .AddColumn("location").AsString(300)
                     .NotNullable().WithDefaultValue(0);

            Alter.Table("Acn")
                .AddColumn("Fromdate").AsString(100)
                    .NotNullable().WithDefaultValue(0);
            Alter.Table("Acn")
                .AddColumn("Todate").AsString(100)
                    .NotNullable().WithDefaultValue(0);

            Alter.Table("Acn")
                .AddColumn("Periodfrom").AsString(100)
                    .NotNullable().WithDefaultValue(0);

            Alter.Table("Acn")
               .AddColumn("Periodto").AsString(100)
                   .NotNullable().WithDefaultValue(0);

            Alter.Table("Acn")
              .AddColumn("creationdate").AsString(100)
                  .NotNullable().WithDefaultValue(0);


        }
    }
}