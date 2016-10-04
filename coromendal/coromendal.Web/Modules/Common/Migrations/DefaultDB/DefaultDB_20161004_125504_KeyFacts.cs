using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20161004125504)]
    public class DefaultDB_20161004_125504_KeyFacts : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Keyfacts").InSchema("ACN")
                .WithColumn("keyfactsId").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("acnId").AsInt32().NotNullable()
                .WithColumn("particulars").AsString(200).Nullable()
                .WithColumn("value").AsString(200).Nullable();

            Create.ForeignKey("FK_ACN_KEYFACTS")
                .FromTable("Keyfacts")
                .ForeignColumn("acnId")
                .ToTable("Acn")
                .PrimaryColumn("acnID");
        }
    }
}