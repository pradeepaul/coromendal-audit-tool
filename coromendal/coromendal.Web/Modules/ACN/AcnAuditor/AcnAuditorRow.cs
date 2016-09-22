﻿

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

    [ConnectionKey("Default"), DisplayName("AcnAuditor"), InstanceName("AcnAuditor"), TwoLevelCached]
    [LookupScript("ACN.AcnAuditor")]
    [ReadPermission(ACN.PermissionKeys.AcnAuditor.View)]
    [ModifyPermission(ACN.PermissionKeys.AcnAuditor.Modify)]
    [DeletePermission(ACN.PermissionKeys.AcnAuditor.Delete)]

    public sealed class AcnAuditorRow : Row, IIdRow, INameRow
    {
        [DisplayName("Acn Auditor Id"), Column("AcnAuditorID"), Identity]
        public Int32? AcnAuditorId
        {
            get { return Fields.AcnAuditorId[this]; }
            set { Fields.AcnAuditorId[this] = value; }
        }

        [DisplayName("Name"), Size(40), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AcnAuditorId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AcnAuditorRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AcnAuditorId;
            public StringField Name;

            public RowFields()
                : base("[dbo].[AcnAuditor]")
            {
                LocalTextPrefix = "ACN.AcnAuditor";
            }
        }
    }
}