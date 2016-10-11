using FluentMigrator;

namespace Coromandel.Migrations.DefaultDB
{
    [Migration(20160825061004)]
    public class DefaultDB_20160825_061004_Minutesofmeetingalter : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Minutesofmeeting").InSchema("ACN")
                 .AddColumn("userid").AsInt32()
                     .NotNullable().WithDefaultValue(1);

            Create.ForeignKey("FK_ACN_MEETING")
                .FromTable("Minutesofmeeting")
                .ForeignColumn("acnId")
                .ToTable("Acn")
                .PrimaryColumn("acnID");

        }
    }
}