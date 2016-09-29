using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825094504)]
    public class DefaultDB_20160825_094814_Auditobservation : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Auditobservation").InSchema("ACN")
                .WithColumn("auditobservationID").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("acnId").AsInt32().NotNullable()
                .WithColumn("observationtitle").AsString(200).Nullable()
                .WithColumn("observationsynopsis").AsString(300).Nullable()
                .WithColumn("detailedobservation").AsString(300).Nullable()
                .WithColumn("category").AsInt32().Nullable()
                .WithColumn("RiskRating").AsInt32().Nullable()
                .WithColumn("agreeobservation").AsInt32().Nullable()
                .WithColumn("justification").AsInt32().Nullable()
                .WithColumn("suggestion").AsString(50).Nullable()
                .WithColumn("alternateplan").AsString(200).Nullable()
                .WithColumn("name").AsString(20).Nullable()
                .WithColumn("email").AsString(50).Nullable()
                .WithColumn("targetdate").AsInt32().Nullable();

            Create.ForeignKey("FK_ACN_AUDITOBSERVATION")
                .FromTable("Auditobservation")
                .ForeignColumn("acnId")
                .ToTable("Acn")
                .PrimaryColumn("acnID");
        }
    }
}