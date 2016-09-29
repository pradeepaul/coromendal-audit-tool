

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

    [ConnectionKey("Default"), DisplayName("feedbackvalue"), InstanceName("feedbackvalue"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("FeedbackvalueRow")]
    public sealed class FeedbackvalueRow : Row, IIdRow, INameRow
    {
        [DisplayName("Feedbackvalueid"), Column("feedbackvalueid"), Identity]
        public Int32? Feedbackvalueid
        {
            get { return Fields.Feedbackvalueid[this]; }
            set { Fields.Feedbackvalueid[this] = value; }
        }

        [DisplayName("Value"), Column("value"), Size(100), QuickSearch]
        public String Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Feedbackvalueid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Value; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FeedbackvalueRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Feedbackvalueid;
            public StringField Value;

            public RowFields()
                : base("[dbo].[feedbackvalue]")
            {
                LocalTextPrefix = "ACN.Feedbackvalue";
            }
        }
    }
}