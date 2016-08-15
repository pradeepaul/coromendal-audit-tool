

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

    [ConnectionKey("Default"), DisplayName("AcnAuditorRef"), InstanceName("AcnAuditorRef"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class AcnAuditorRefRow : Row, IIdRow
    {
        [DisplayName("Acn Auditor Ref Id"), Column("AcnAuditorRefID"), Identity]
        public Int32? AcnAuditorRefId
        {
            get { return Fields.AcnAuditorRefId[this]; }
            set { Fields.AcnAuditorRefId[this] = value; }
        }

        [DisplayName("Acn Auditor Id"), Column("AcnAuditorID"), NotNull]
        public Int32? AcnAuditorId
        {
            get { return Fields.AcnAuditorId[this]; }
            set { Fields.AcnAuditorId[this] = value; }
        }

        [DisplayName("Acn Id"), Column("acnID"), NotNull]
        public Int32? AcnId
        {
            get { return Fields.AcnId[this]; }
            set { Fields.AcnId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AcnAuditorRefId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AcnAuditorRefRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AcnAuditorRefId;
            public Int32Field AcnAuditorId;
            public Int32Field AcnId;

            public RowFields()
                : base("[dbo].[AcnAuditorRef]")
            {
                LocalTextPrefix = "ACN.AcnAuditorRef";
            }
        }
    }
}