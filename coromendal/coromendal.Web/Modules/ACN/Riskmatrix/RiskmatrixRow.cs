

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

    [ConnectionKey("Default"), DisplayName("riskmatrix"), InstanceName("riskmatrix"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class RiskmatrixRow : Row, IIdRow, INameRow
    {
        [DisplayName("Riskmatrixid"), Column("riskmatrixid"), Identity]
        public Int32? Riskmatrixid
        {
            get { return Fields.Riskmatrixid[this]; }
            set { Fields.Riskmatrixid[this] = value; }
        }

        [DisplayName("Likelihood")]
        [LookupEditor(typeof(LikeliwoodvalueRow))]
        public Int32? Likelihood
        {
            get { return Fields.Likelihood[this]; }
            set { Fields.Likelihood[this] = value; }
        }

        [DisplayName("Consequence")]
        [LookupEditor(typeof(RiskratingRow))]
        public Int32? Consequence
        {
            get { return Fields.Consequence[this]; }
            set { Fields.Consequence[this] = value; }
        }

        [DisplayName("Value"), Column("value"), Size(100), QuickSearch]
        public String Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Riskmatrixid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Value; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RiskmatrixRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Riskmatrixid;
            public Int32Field Likelihood;
            public Int32Field Consequence;
            public StringField Value;

            public RowFields()
                : base("[dbo].[riskmatrix]")
            {
                LocalTextPrefix = "ACN.Riskmatrix";
            }
        }
    }
}