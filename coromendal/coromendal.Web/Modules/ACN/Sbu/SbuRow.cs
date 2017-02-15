

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

    [ConnectionKey("Default"), DisplayName("sbu"), InstanceName("sbu"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("SbuRow")]
    public sealed class SbuRow : Row, IIdRow, INameRow
    {
        [DisplayName("Sbuid"), Column("sbuid"), Identity]
        public Int32? Sbuid
        {
            get { return Fields.Sbuid[this]; }
            set { Fields.Sbuid[this] = value; }
        }

        [DisplayName("Sbuname"), Column("sbuname"), Size(100), QuickSearch]
        public String Sbuname
        {
            get { return Fields.Sbuname[this]; }
            set { Fields.Sbuname[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Sbuid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Sbuname; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SbuRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Sbuid;
            public StringField Sbuname;

            public RowFields()
                : base("[dbo].[sbu]")
            {
                LocalTextPrefix = "ACN.Sbu";
            }
        }
    }
}