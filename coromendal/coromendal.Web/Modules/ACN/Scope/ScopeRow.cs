

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

    [ConnectionKey("Default"), DisplayName("Scope"), InstanceName("scope"), TwoLevelCached]
    [ReadPermission("ADMINISTRATION")]
    [ModifyPermission("ADMINISTRATION")]
    public sealed class ScopeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Scope Id"), Column("scopeId"), Identity]
        public Int32? ScopeId
        {
            get { return Fields.ScopeId[this]; }
            set { Fields.ScopeId[this] = value; }
        }

        [DisplayName("Scope"), Column("title"), Size(100), QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Acn"), Column("acnId"), ForeignKey("[dbo].[Acn]", "acnID"), LeftJoin("jAcn"), TextualField("AcnAcnTilte")]
        [LookupEditor(typeof(AcnRow))]
        public Int32? AcnId
        {
            get { return Fields.AcnId[this]; }
            set { Fields.AcnId[this] = value; }
        }

        [DisplayName("Acn Acn Tilte"), Expression("jAcn.[AcnTilte]")]
        public String AcnAcnTilte
        {
            get { return Fields.AcnAcnTilte[this]; }
            set { Fields.AcnAcnTilte[this] = value; }
        }

        [DisplayName("Acn Phase No"), Expression("jAcn.[PhaseNo]")]
        public Int32? AcnPhaseNo
        {
            get { return Fields.AcnPhaseNo[this]; }
            set { Fields.AcnPhaseNo[this] = value; }
        }

        [DisplayName("Acn Location"), Expression("jAcn.[location]")]
        public String AcnLocation
        {
            get { return Fields.AcnLocation[this]; }
            set { Fields.AcnLocation[this] = value; }
        }

        [DisplayName("Acn Fromdate"), Expression("jAcn.[Fromdate]")]
        public String AcnFromdate
        {
            get { return Fields.AcnFromdate[this]; }
            set { Fields.AcnFromdate[this] = value; }
        }

        [DisplayName("Acn Todate"), Expression("jAcn.[Todate]")]
        public String AcnTodate
        {
            get { return Fields.AcnTodate[this]; }
            set { Fields.AcnTodate[this] = value; }
        }

        [DisplayName("Acn Periodfrom"), Expression("jAcn.[Periodfrom]")]
        public String AcnPeriodfrom
        {
            get { return Fields.AcnPeriodfrom[this]; }
            set { Fields.AcnPeriodfrom[this] = value; }
        }

        [DisplayName("Acn Periodto"), Expression("jAcn.[Periodto]")]
        public String AcnPeriodto
        {
            get { return Fields.AcnPeriodto[this]; }
            set { Fields.AcnPeriodto[this] = value; }
        }

        [DisplayName("Acn Creationdate"), Expression("jAcn.[creationdate]")]
        public String AcnCreationdate
        {
            get { return Fields.AcnCreationdate[this]; }
            set { Fields.AcnCreationdate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ScopeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ScopeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ScopeId;
            public StringField Title;
            public Int32Field AcnId;

            public StringField AcnAcnTilte;
            public Int32Field AcnPhaseNo;
            public StringField AcnLocation;
            public StringField AcnFromdate;
            public StringField AcnTodate;
            public StringField AcnPeriodfrom;
            public StringField AcnPeriodto;
            public StringField AcnCreationdate;

            public RowFields()
                : base("[dbo].[scope]")
            {
                LocalTextPrefix = "ACN.Scope";
            }
        }
    }
}