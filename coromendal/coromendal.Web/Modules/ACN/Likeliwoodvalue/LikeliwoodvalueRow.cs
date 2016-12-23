

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

    [ConnectionKey("Default"), DisplayName("Likeliwoodvalue"), InstanceName("Likeliwoodvalue"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("LikeliwoodvalueRow")]
    public sealed class LikeliwoodvalueRow : Row, IIdRow, INameRow
    {
        [DisplayName("Likeliwoodvalueid"), Identity]
        public Int32? Likeliwoodvalueid
        {
            get { return Fields.Likeliwoodvalueid[this]; }
            set { Fields.Likeliwoodvalueid[this] = value; }
        }

        [DisplayName("Likeliwoodvaluename"), Size(100), QuickSearch]
        public String Likeliwoodvaluename
        {
            get { return Fields.Likeliwoodvaluename[this]; }
            set { Fields.Likeliwoodvaluename[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Likeliwoodvalueid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Likeliwoodvaluename; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LikeliwoodvalueRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Likeliwoodvalueid;
            public StringField Likeliwoodvaluename;

            public RowFields()
                : base("[dbo].[Likeliwoodvalue]")
            {
                LocalTextPrefix = "ACN.Likeliwoodvalue";
            }
        }
    }
}