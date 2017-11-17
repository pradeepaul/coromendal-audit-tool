﻿

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

    [ConnectionKey("Default"), DisplayName("MasterAcnAuditeeRef"), InstanceName("MasterAcnAuditeeRef"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class MasterAcnAuditeeRefRow : Row, IIdRow
    {
        [DisplayName("Acn Auditee Ref Id"), Column("AcnAuditeeRefID"), Identity]
        public Int32? AcnAuditeeRefId
        {
            get { return Fields.AcnAuditeeRefId[this]; }
            set { Fields.AcnAuditeeRefId[this] = value; }
        }

        [DisplayName("Acn Auditee Id"), Column("AcnAuditeeID"), NotNull]
        public Int32? AcnAuditeeId
        {
            get { return Fields.AcnAuditeeId[this]; }
            set { Fields.AcnAuditeeId[this] = value; }
        }

        [DisplayName("Acn Id"), Column("acnID"), NotNull]
        public Int32? AcnId
        {
            get { return Fields.AcnId[this]; }
            set { Fields.AcnId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AcnAuditeeRefId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterAcnAuditeeRefRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AcnAuditeeRefId;
            public Int32Field AcnAuditeeId;
            public Int32Field AcnId;

            public RowFields()
                : base("[dbo].[MasterAcnAuditeeRef]")
            {
                LocalTextPrefix = "Administration.MasterAcnAuditeeRef";
            }
        }
    }
}