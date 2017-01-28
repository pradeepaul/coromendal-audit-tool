

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

    [ConnectionKey("Default"), DisplayName("finalstatusvalue"), InstanceName("finalstatusvalue"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("FinalstatusvalueRow")]
    public sealed class FinalstatusvalueRow : Row, IIdRow, INameRow
    {
        [DisplayName("Finalstatusid"), Column("finalstatusid"), Identity]
        public Int32? Finalstatusid
        {
            get { return Fields.Finalstatusid[this]; }
            set { Fields.Finalstatusid[this] = value; }
        }

        [DisplayName("Value"), Column("value"), Size(100), QuickSearch]
        public String Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Finalstatusid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Value; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FinalstatusvalueRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Finalstatusid;
            public StringField Value;

            public RowFields()
                : base("[dbo].[finalstatusvalue]")
            {
                LocalTextPrefix = "ACN.Finalstatusvalue";
            }
        }
    }
}