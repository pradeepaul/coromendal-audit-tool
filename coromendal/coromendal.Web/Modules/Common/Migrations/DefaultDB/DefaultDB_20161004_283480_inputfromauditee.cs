using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20161004283480)]
    public class DefaultDB_20161004_283480_inputfromauditee : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("inputfromauditee").InSchema("ACN")
              .WithColumn("inputauditId").AsInt32()
                  .Identity().NotNullable()
              .WithColumn("aodid").AsInt32().NotNullable()
              .WithColumn("additionalareacovered").AsInt32().NotNullable()
              .WithColumn("issues").AsString(200).NotNullable()
              .WithColumn("newimprovements").AsString(200).NotNullable();

            Create.ForeignKey("FK_inputfromauditee_Details")
               .FromTable("inputfromauditee")
               .ForeignColumn("inputauditId")
               .ToTable("AOD")
               .PrimaryColumn("aodId");


        }
    }
}