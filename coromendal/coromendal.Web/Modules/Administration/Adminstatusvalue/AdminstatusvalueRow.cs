

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

    [ConnectionKey("Default"), DisplayName("adminstatusvalue"), InstanceName("adminstatusvalue"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("AdminstatusvalueRow")]
    public sealed class AdminstatusvalueRow : Row, IIdRow, INameRow
    {
        [DisplayName("Adminstatusvalueid"), Column("adminstatusvalueid"), Identity]
        public Int32? Adminstatusvalueid
        {
            get { return Fields.Adminstatusvalueid[this]; }
            set { Fields.Adminstatusvalueid[this] = value; }
        }

        [DisplayName("Value"), Column("value"), Size(100), QuickSearch]
        public String Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Adminstatusvalueid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Value; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AdminstatusvalueRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Adminstatusvalueid;
            public StringField Value;

            public RowFields()
                : base("[dbo].[adminstatusvalue]")
            {
                LocalTextPrefix = "Administration.Adminstatusvalue";
            }
        }
    }
}