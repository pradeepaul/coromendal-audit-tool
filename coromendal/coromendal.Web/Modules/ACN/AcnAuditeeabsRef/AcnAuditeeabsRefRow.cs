

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

    [ConnectionKey("Default"), DisplayName("AcnAuditeeabsRef"), InstanceName("AcnAuditeeabsRef"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class AcnAuditeeabsRefRow : Row, IIdRow
    {
        [DisplayName("Acn Auditeeabs Ref Id"), Column("AcnAuditeeabsRefID"), Identity]
        public Int32? AcnAuditeeabsRefId
        {
            get { return Fields.AcnAuditeeabsRefId[this]; }
            set { Fields.AcnAuditeeabsRefId[this] = value; }
        }

        [DisplayName("Acn Auditee Id"), Column("AcnAuditeeID"), NotNull]
        public Int32? AcnAuditeeId
        {
            get { return Fields.AcnAuditeeId[this]; }
            set { Fields.AcnAuditeeId[this] = value; }
        }

        [DisplayName("Meeting Absentauditee Id"), NotNull]
        public Int32? MeetingAbsentauditeeId
        {
            get { return Fields.MeetingAbsentauditeeId[this]; }
            set { Fields.MeetingAbsentauditeeId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AcnAuditeeabsRefId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AcnAuditeeabsRefRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AcnAuditeeabsRefId;
            public Int32Field AcnAuditeeId;
            public Int32Field MeetingAbsentauditeeId;

            public RowFields()
                : base("[dbo].[AcnAuditeeabsRef]")
            {
                LocalTextPrefix = "ACN.AcnAuditeeabsRef";
            }
        }
    }
}