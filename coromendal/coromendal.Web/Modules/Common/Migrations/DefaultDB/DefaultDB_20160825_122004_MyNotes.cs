using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825122004)]
    public class DefaultDB_20160825_122004_MyNotes : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("MyNotes").InSchema("ACN")
                .WithColumn("NoteId").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("EntityType").AsString(200).NotNullable()
                .WithColumn("EntityId").AsInt32().NotNullable()
                .WithColumn("Text").AsString(1000).NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable();
        }
    }
}