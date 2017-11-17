

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

    [ConnectionKey("Default"), DisplayName("scopeexclude"), InstanceName("scopeexclude"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class ScopeexcludeRow : Row, IIdRow
    {
        [DisplayName("Exclude Id"), Column("excludeId"), Identity]
        public Int32? ExcludeId
        {
            get { return Fields.ExcludeId[this]; }
            set { Fields.ExcludeId[this] = value; }
        }

        [DisplayName("Scope"), Column("scopeid"), ForeignKey("[dbo].[scope]", "scopeId"), LeftJoin("jScopeid"), TextualField("ScopeidTitle")]
        [LookupEditor(typeof(ScopeRow))]
        public Int32? Scopeid
        {
            get { return Fields.Scopeid[this]; }
            set { Fields.Scopeid[this] = value; }
        }

        [DisplayName("Aodid"), Column("aodid"), ForeignKey("[dbo].[AOD]", "aodId"), LeftJoin("jAodid"), TextualField("AodidActualcomencementdate")]
        public Int32? Aodid
        {
            get { return Fields.Aodid[this]; }
            set { Fields.Aodid[this] = value; }
        }

        [DisplayName("Acn"), Column("acnId"), ForeignKey("[dbo].[Acn]", "acnID"), LeftJoin("jAcn"), TextualField("AcnAcnTilte")]
        public Int32? AcnId
        {
            get { return Fields.AcnId[this]; }
            set { Fields.AcnId[this] = value; }
        }

        [DisplayName("Scopeid Title"), Expression("jScopeid.[title]")]
        public String ScopeidTitle
        {
            get { return Fields.ScopeidTitle[this]; }
            set { Fields.ScopeidTitle[this] = value; }
        }

        [DisplayName("Scopeid Acn Id"), Expression("jScopeid.[acnId]")]
        public Int32? ScopeidAcnId
        {
            get { return Fields.ScopeidAcnId[this]; }
            set { Fields.ScopeidAcnId[this] = value; }
        }

        [DisplayName("Aodid Meetingid"), Expression("jAodid.[Meetingid]")]
        public Int32? AodidMeetingid
        {
            get { return Fields.AodidMeetingid[this]; }
            set { Fields.AodidMeetingid[this] = value; }
        }

        [DisplayName("Aodid Actualcomencementdate"), Expression("jAodid.[Actualcomencementdate]")]
        public String AodidActualcomencementdate
        {
            get { return Fields.AodidActualcomencementdate[this]; }
            set { Fields.AodidActualcomencementdate[this] = value; }
        }

        [DisplayName("Aodid Actualcompltedate"), Expression("jAodid.[Actualcompltedate]")]
        public String AodidActualcompltedate
        {
            get { return Fields.AodidActualcompltedate[this]; }
            set { Fields.AodidActualcompltedate[this] = value; }
        }

        [DisplayName("Aodid Process Owner"), Expression("jAodid.[Process owner]")]
        public String AodidProcessOwner
        {
            get { return Fields.AodidProcessOwner[this]; }
            set { Fields.AodidProcessOwner[this] = value; }
        }

        [DisplayName("Aodid Functionalhead"), Expression("jAodid.[Functionalhead]")]
        public String AodidFunctionalhead
        {
            get { return Fields.AodidFunctionalhead[this]; }
            set { Fields.AodidFunctionalhead[this] = value; }
        }

        [DisplayName("Aodid Areaofscope"), Expression("jAodid.[Areaofscope]")]
        public String AodidAreaofscope
        {
            get { return Fields.AodidAreaofscope[this]; }
            set { Fields.AodidAreaofscope[this] = value; }
        }

        [DisplayName("Aodid Exclusions"), Expression("jAodid.[Exclusions]")]
        public String AodidExclusions
        {
            get { return Fields.AodidExclusions[this]; }
            set { Fields.AodidExclusions[this] = value; }
        }

        [DisplayName("Aodid Reasons"), Expression("jAodid.[Reasons]")]
        public String AodidReasons
        {
            get { return Fields.AodidReasons[this]; }
            set { Fields.AodidReasons[this] = value; }
        }

        [DisplayName("Aodid Sbu"), Expression("jAodid.[Sbu]")]
        public String AodidSbu
        {
            get { return Fields.AodidSbu[this]; }
            set { Fields.AodidSbu[this] = value; }
        }

        [DisplayName("Aodid Acnid"), Expression("jAodid.[acnid]")]
        public Int32? AodidAcnid
        {
            get { return Fields.AodidAcnid[this]; }
            set { Fields.AodidAcnid[this] = value; }
        }

        [DisplayName("Aodid Preview"), Expression("jAodid.[preview]")]
        public String AodidPreview
        {
            get { return Fields.AodidPreview[this]; }
            set { Fields.AodidPreview[this] = value; }
        }

        [DisplayName("Aodid Send"), Expression("jAodid.[send]")]
        public String AodidSend
        {
            get { return Fields.AodidSend[this]; }
            set { Fields.AodidSend[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.ExcludeId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ScopeexcludeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ExcludeId;
            public Int32Field Scopeid;
            public Int32Field Aodid;
            public Int32Field AcnId;

            public StringField ScopeidTitle;
            public Int32Field ScopeidAcnId;

            public Int32Field AodidMeetingid;
            public StringField AodidActualcomencementdate;
            public StringField AodidActualcompltedate;
            public StringField AodidProcessOwner;
            public StringField AodidFunctionalhead;
            public StringField AodidAreaofscope;
            public StringField AodidExclusions;
            public StringField AodidReasons;
            public StringField AodidSbu;
            public Int32Field AodidAcnid;
            public StringField AodidPreview;
            public StringField AodidSend;

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

            public RowFields()
                : base("[dbo].[scopeexclude]")
            {
                LocalTextPrefix = "ACN.Scopeexclude";
            }
        }
    }
}