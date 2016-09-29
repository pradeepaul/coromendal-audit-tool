

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

    [ConnectionKey("Default"), DisplayName("conformation"), InstanceName("conformation"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("ACN.ConformationRow")]
    public sealed class ConformationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Conformation Id"), Column("conformationId"), Identity]
        public Int32? ConformationId
        {
            get { return Fields.ConformationId[this]; }
            set { Fields.ConformationId[this] = value; }
        }

        [DisplayName("Conformationname"), Column("conformationname"), Size(100), QuickSearch]
        public String Conformationname
        {
            get { return Fields.Conformationname[this]; }
            set { Fields.Conformationname[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ConformationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Conformationname; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ConformationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ConformationId;
            public StringField Conformationname;

            public RowFields()
                : base("[dbo].[conformation]")
            {
                LocalTextPrefix = "ACN.Conformation";
            }
        }
    }
}