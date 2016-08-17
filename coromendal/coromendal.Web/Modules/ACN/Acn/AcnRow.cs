

namespace coromendal.ACN.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;
    using ACN;


    [ConnectionKey("Default"), DisplayName("Acn"), InstanceName("Acn"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("ACN")]
    public sealed class AcnRow : Row, IIdRow, INameRow
    {
        [DisplayName("Acn Id"), Column("acnID"), Identity]
        public Int32? AcnId
        {
            get { return Fields.AcnId[this]; }
            set { Fields.AcnId[this] = value; }
        }

        [DisplayName("Acn Tilte"), Size(40), QuickSearch]
        public String AcnTilte
        {
            get { return Fields.AcnTilte[this]; }
            set { Fields.AcnTilte[this] = value; }
        }
        [LookupEditor(typeof(AcnAuditorRow), Multiple = true), ClientSide]
        [LinkingSetRelation(typeof(AcnAuditorRefRow), "acnID", "AcnAuditorID")]
        [MinSelectLevel(SelectLevel.Details)]
        public List<Int32> Auditor
        {
            get { return Fields.Auditor[this]; }
            set { Fields.Auditor[this] = value; }
        }
        [LookupEditor(typeof(AcnAuditeeRow), Multiple = true), ClientSide]
        [LinkingSetRelation(typeof(AcnAuditeeRefRow), "acnID", "AcnAuditeeID")]
        [MinSelectLevel(SelectLevel.Details)]
        public List<Int32> Auditee
        {
            get { return Fields.Auditee[this]; }
            set { Fields.Auditee[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.AcnId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AcnTilte; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AcnRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AcnId;
            public StringField AcnTilte;
            public ListField<Int32> Auditor;
            public ListField<Int32> Auditee;

            public RowFields()
                : base("[dbo].[Acn]")
            {
                LocalTextPrefix = "ACN.Acn";
            }
        }
    }
}