using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825091716)]
    public class DefaultDB_20160825_091716_Rootcause : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Rootcause").InSchema("ACN")
                .WithColumn("rootcauseID").AsInt32()
                .Identity().NotNullable()
                .WithColumn("auditobservationID").AsInt32()
                .Identity().NotNullable()
                .WithColumn("rootcause").AsString(200).Nullable()
                .WithColumn("impact").AsString(200).Nullable();

            Create.ForeignKey("FK_ACN_ROOTCAUSE")
                .FromTable("Rootcause")
                .ForeignColumn("rootcauseID")
                .ToTable("auditobservation")
                .PrimaryColumn("auditobservationID");
        }
    }
}