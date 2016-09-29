

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

    [ConnectionKey("Default"), DisplayName("category"), InstanceName("category"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("ACN.CategoryRow")]
    public sealed class CategoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Categoryid"), Column("categoryid"), Identity]
        public Int32? Categoryid
        {
            get { return Fields.Categoryid[this]; }
            set { Fields.Categoryid[this] = value; }
        }

        [DisplayName("Categoryname"), Column("categoryname"), Size(10), QuickSearch]
        public String Categoryname
        {
            get { return Fields.Categoryname[this]; }
            set { Fields.Categoryname[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Categoryid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Categoryname; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Categoryid;
            public StringField Categoryname;

            public RowFields()
                : base("[dbo].[category]")
            {
                LocalTextPrefix = "ACN.Category";
            }
        }
    }
}