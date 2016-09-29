using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825092816)]
    public class DefaultDB_20160825_092816_Suggestion : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Suggestion").InSchema("ACN")
                .WithColumn("suggestionID").AsInt32()
                .Identity().NotNullable()
                .WithColumn("auditobservationID").AsInt32()
                .Identity().NotNullable()
                .WithColumn("suggestion").AsString(200).Nullable();

            Create.ForeignKey("FK_ACN_SUGGESTION")
                .FromTable("Suggestion")
                .ForeignColumn("suggestionID")
                .ToTable("auditobservation")
                .PrimaryColumn("auditobservationID");
        }
    }
}