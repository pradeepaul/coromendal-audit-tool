using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825104444)]
    public class DefaultDB_20160825_104444_AcnAuditScope : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Schema("ACN");

            Create.Table("Scope").InSchema("ACN")
                .WithColumn("ScopeId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                 .WithColumn("AcnID").AsInt32().NotNullable()
                .WithColumn("scope").AsString(200).NotNullable();

            Create.ForeignKey("FK_scope_Details")
              .FromTable("Scope")
              .ForeignColumn("AcnID")
              .ToTable("Acn")
              .PrimaryColumn("acnID");
        }
    }
}