using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825130904)]
    public class DefaultDB_20160825_130904_Question : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Question").InSchema("ACN")
                .WithColumn("QuestionId").AsInt32()
                    .Identity().NotNullable()
                .WithColumn("QuestionText").AsString(200).NotNullable();
        }
    }
}