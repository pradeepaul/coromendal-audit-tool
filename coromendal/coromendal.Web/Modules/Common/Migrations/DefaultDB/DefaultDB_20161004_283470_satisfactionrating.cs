using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20161004283470)]
    public class DefaultDB_20161004_283470_satisfactionrating : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("satisfactionrating").InSchema("ACN")
              .WithColumn("satisfactionratingId").AsInt32()
                  .Identity().NotNullable()
              .WithColumn("aodid").AsInt32().NotNullable()
              .WithColumn("documentscore").AsInt32().NotNullable()
              .WithColumn("documentcomments").AsString(200).NotNullable()
              .WithColumn("compliancescore").AsString(200).NotNullable()
              .WithColumn("compliancecomment").AsString(200).NotNullable()
              .WithColumn("processfincontrollscore").AsString(200).NotNullable()
              .WithColumn("processfincontrollscorecmnts").AsString(200).NotNullable()
              .WithColumn("responsescore").AsString(200).NotNullable()
              .WithColumn("responsecmnts").AsString(200).NotNullable()
              .WithColumn("preauditscore").AsString(200).NotNullable()
              .WithColumn("preauditcmnts").AsString(200).NotNullable()
              .WithColumn("newinitiative").AsString(200).NotNullable()
              .WithColumn("totalscore").AsString(200).NotNullable();

            Create.ForeignKey("FK_rating_Details")
               .FromTable("satisfactionrating")
               .ForeignColumn("satisfactionratingId")
               .ToTable("AOD")
               .PrimaryColumn("aodId");


        }
    }
}