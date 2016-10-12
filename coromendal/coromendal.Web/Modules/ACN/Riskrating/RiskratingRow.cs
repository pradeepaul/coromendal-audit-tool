

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

    [ConnectionKey("Default"), DisplayName("riskrating"), InstanceName("riskrating"), TwoLevelCached]
    [ReadPermission(ACN.PermissionKeys.riskrating.View)]
    [ModifyPermission(ACN.PermissionKeys.riskrating.Modify)]
    [DeletePermission(ACN.PermissionKeys.riskrating.Delete)]
    [LookupScript("RiskratingRow")]
    public sealed class RiskratingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Riskratingid"), Column("riskratingid"), Identity]
        public Int32? Riskratingid
        {
            get { return Fields.Riskratingid[this]; }
            set { Fields.Riskratingid[this] = value; }
        }

        [DisplayName("Riskratingname"), Column("riskratingname"), Size(100), QuickSearch]
        public String Riskratingname
        {
            get { return Fields.Riskratingname[this]; }
            set { Fields.Riskratingname[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Riskratingid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Riskratingname; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RiskratingRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Riskratingid;
            public StringField Riskratingname;

            public RowFields()
                : base("[dbo].[riskrating]")
            {
                LocalTextPrefix = "ACN.Riskrating";
            }
        }
    }
}