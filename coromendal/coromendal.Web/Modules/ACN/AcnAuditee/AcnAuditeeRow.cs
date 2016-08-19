

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

    [ConnectionKey("Default"), DisplayName("AcnAuditee"), InstanceName("AcnAuditee"), TwoLevelCached]
    [ReadPermission(ACN.PermissionKeys.AcnAuditee.View)]
    [ModifyPermission(ACN.PermissionKeys.AcnAuditee.Modify)]
    [DeletePermission(ACN.PermissionKeys.AcnAuditee.Delete)]
    [LookupScript("Northwind.AcnAuditee")]
    public sealed class AcnAuditeeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Acn Auditee Id"), Column("AcnAuditeeID"), Identity]
        public Int32? AcnAuditeeId
        {
            get { return Fields.AcnAuditeeId[this]; }
            set { Fields.AcnAuditeeId[this] = value; }
        }

        [DisplayName("Name"), Size(40), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AcnAuditeeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AcnAuditeeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AcnAuditeeId;
            public StringField Name;

            public RowFields()
                : base("[dbo].[AcnAuditee]")
            {
                LocalTextPrefix = "ACN.AcnAuditee";
            }
        }
    }
}