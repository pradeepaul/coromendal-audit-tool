

namespace coromendal.ACN.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("percentage"), InstanceName("percentage"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("PercentageRow")]
    public sealed class PercentageRow : Row, IIdRow, INameRow
    {
        [DisplayName("Percentageid"), Column("percentageid"), Identity]
        public Int32? Percentageid
        {
            get { return Fields.Percentageid[this]; }
            set { Fields.Percentageid[this] = value; }
        }

        [DisplayName("Percentagename"), Column("percentagename"), Size(100), QuickSearch]
        public String Percentagename
        {
            get { return Fields.Percentagename[this]; }
            set { Fields.Percentagename[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Percentageid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Percentagename; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PercentageRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Percentageid;
            public StringField Percentagename;

            public RowFields()
                : base("[dbo].[percentage]")
            {
                LocalTextPrefix = "ACN.Percentage";
            }
        }
    }
}