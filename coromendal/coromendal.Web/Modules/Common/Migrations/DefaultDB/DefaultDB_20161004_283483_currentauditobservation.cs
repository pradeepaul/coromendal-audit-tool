using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20161004283483)]
    public class DefaultDB_20161004_283483_currentauditobservation : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("currentauditobservation").InSchema("ACN")
              .WithColumn("Id").AsInt32()
                  .Identity().NotNullable()
              .WithColumn("aodid").AsInt32().NotNullable()              
              .WithColumn("observation").AsInt32().NotNullable()
              .WithColumn("comments").AsString(200).NotNullable()
              .WithColumn("Process owner").AsString(200).NotNullable()
              .WithColumn("Functionalhead").AsString(200).NotNullable()
              .WithColumn("Areaofscope").AsString(200).NotNullable()
              .WithColumn("Reasons").AsString(200).NotNullable()
              .WithColumn("Areaofscope").AsString(200).NotNullable()
              .WithColumn("Exclusions").AsString(200).NotNullable()
              .WithColumn("Sbu").AsString(200).NotNullable();


            Create.ForeignKey("FK_currentauditobservation_Details")
               .FromTable("currentauditobservation")
               .ForeignColumn("Id")
               .ToTable("AOD")
               .PrimaryColumn("aodId");


        }
    }
}