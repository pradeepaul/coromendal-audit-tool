

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

    [ConnectionKey("Default"), DisplayName("Masterscope"), InstanceName("Masterscope"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class MasterscopeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Scope Id"), Column("scopeId"), Identity]
        public Int32? ScopeId
        {
            get { return Fields.ScopeId[this]; }
            set { Fields.ScopeId[this] = value; }
        }

        [DisplayName("Title"), Column("title"), Size(100), QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Acn"), Column("acnId"), ForeignKey("[dbo].[NewACNMaster]", "ID"), LeftJoin("jAcn"), TextualField("AcnAcnTilte")]
        public Int32? AcnId
        {
            get { return Fields.AcnId[this]; }
            set { Fields.AcnId[this] = value; }
        }

        [DisplayName("Exclude"), Column("exclude")]
        public Int32? Exclude
        {
            get { return Fields.Exclude[this]; }
            set { Fields.Exclude[this] = value; }
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

        [DisplayName("Acn Userid"), Expression("jAcn.[userid]")]
        public Int32? AcnUserid
        {
            get { return Fields.AcnUserid[this]; }
            set { Fields.AcnUserid[this] = value; }
        }

        [DisplayName("Acn Preview"), Expression("jAcn.[preview]")]
        public String AcnPreview
        {
            get { return Fields.AcnPreview[this]; }
            set { Fields.AcnPreview[this] = value; }
        }

        [DisplayName("Acn Send"), Expression("jAcn.[send]")]
        public String AcnSend
        {
            get { return Fields.AcnSend[this]; }
            set { Fields.AcnSend[this] = value; }
        }

        [DisplayName("Acn M Id"), Expression("jAcn.[MId]")]
        public Int32? AcnMId
        {
            get { return Fields.AcnMId[this]; }
            set { Fields.AcnMId[this] = value; }
        }

        [DisplayName("Acn Status"), Expression("jAcn.[status]")]
        public Int32? AcnStatus
        {
            get { return Fields.AcnStatus[this]; }
            set { Fields.AcnStatus[this] = value; }
        }

        [DisplayName("Acn Statusid"), Expression("jAcn.[statusid]")]
        public Int32? AcnStatusid
        {
            get { return Fields.AcnStatusid[this]; }
            set { Fields.AcnStatusid[this] = value; }
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

        public MasterscopeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ScopeId;
            public StringField Title;
            public Int32Field AcnId;
            public Int32Field Exclude;

            public StringField AcnAcnTilte;
            public Int32Field AcnPhaseNo;
            public StringField AcnLocation;
            public StringField AcnFromdate;
            public StringField AcnTodate;
            public StringField AcnPeriodfrom;
            public StringField AcnPeriodto;
            public StringField AcnCreationdate;
            public Int32Field AcnUserid;
            public StringField AcnPreview;
            public StringField AcnSend;
            public Int32Field AcnMId;
            public Int32Field AcnStatus;
            public Int32Field AcnStatusid;

            public RowFields()
                : base("[dbo].[Masterscope]")
            {
                LocalTextPrefix = "Administration.Masterscope";
            }
        }
    }
}