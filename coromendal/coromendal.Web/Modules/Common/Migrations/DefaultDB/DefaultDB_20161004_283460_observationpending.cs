using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20161004283460)]
    public class DefaultDB_20161004_283460_observationpending : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("observationpending").InSchema("ACN")
              .WithColumn("observationpendingId").AsInt32()
                  .Identity().NotNullable()
              .WithColumn("aodid").AsInt32().NotNullable()
              .WithColumn("reportreference").AsString(200).NotNullable()
              .WithColumn("briefdescription").AsString(200).NotNullable()
              .WithColumn("originaltargetdate").AsString(200).NotNullable()
              .WithColumn("remarks").AsString(200).NotNullable()
              .WithColumn("revisedtargetdate").AsString(200).NotNullable();

            Create.ForeignKey("FK_observationpending_Details")
               .FromTable("observationpending")
               .ForeignColumn("aodid")
               .ToTable("AOD")
               .PrimaryColumn("aodId");


        }
    }
}