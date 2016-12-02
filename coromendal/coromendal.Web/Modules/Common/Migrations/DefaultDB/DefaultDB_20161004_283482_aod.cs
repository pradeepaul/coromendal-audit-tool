using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20161004283482)]
    public class DefaultDB_20161004_283482_aod : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("AOD").InSchema("ACN")
              .WithColumn("aodId").AsInt32()
                  .Identity().NotNullable()
              .WithColumn("Meetingid").AsInt32().NotNullable()
              .WithColumn("acnid").AsInt32().NotNullable()
              .WithColumn("Actualcomencementdate").AsInt32().NotNullable()
              .WithColumn("Actualcompltedate").AsString(200).NotNullable()
              .WithColumn("Process owner").AsString(200).NotNullable()
              .WithColumn("Functionalhead").AsString(200).NotNullable()
              .WithColumn("Areaofscope").AsString(200).NotNullable()
              .WithColumn("Reasons").AsString(200).NotNullable()
              .WithColumn("Areaofscope").AsString(200).NotNullable()
              .WithColumn("Exclusions").AsString(200).NotNullable()
              .WithColumn("Sbu").AsString(200).NotNullable();

            Create.ForeignKey("FK_AOD_REF")
               .FromTable("AOD")
               .ForeignColumn("aodId")
               .ToTable("minutesofmeeting")
               .PrimaryColumn("meetingid");

            Create.ForeignKey("FK_AODACN")
               .FromTable("AOD")
               .ForeignColumn("Meetingid")
               .ToTable("Acn")
               .PrimaryColumn("acnID");


        }
    }
}