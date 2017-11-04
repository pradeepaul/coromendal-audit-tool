

namespace coromendal.Administration.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("location"), InstanceName("location"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class LocationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Locid"), Column("locid"), Identity]
        public Int32? Locid
        {
            get { return Fields.Locid[this]; }
            set { Fields.Locid[this] = value; }
        }

        [DisplayName("Locname"), Column("locname"), Size(100), QuickSearch]
        public String Locname
        {
            get { return Fields.Locname[this]; }
            set { Fields.Locname[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Locid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Locname; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LocationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Locid;
            public StringField Locname;

            public RowFields()
                : base("[dbo].[location]")
            {
                LocalTextPrefix = "Administration.Location";
            }
        }
    }
}