

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

    [ConnectionKey("Default"), DisplayName("Final Report"), InstanceName("Finalreport"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class FinalreportRow : Row, IIdRow, INameRow
    {
        [DisplayName("Report Id"), Column("reportId"), Identity]
        public Int32? ReportId
        {
            get { return Fields.ReportId[this]; }
            set { Fields.ReportId[this] = value; }
        }

        [DisplayName("Title"), Column("title"), Size(100), QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Assignment"), Column("acnid"), NotNull, ForeignKey("[dbo].[Acn]", "acnID"), LeftJoin("jAcnid"), TextualField("AcnidAcnTilte")]
        public Int32? Acnid
        {
            get { return Fields.Acnid[this]; }
            set { Fields.Acnid[this] = value; }
        }

        [DisplayName("Download"), Column("download")]
        public Int32? Download
        {
            get { return Fields.Download[this]; }
            set { Fields.Download[this] = value; }
        }

        [DisplayName("Userid"), Column("userid")]
        public Int32? Userid
        {
            get { return Fields.Userid[this]; }
            set { Fields.Userid[this] = value; }
        }

        [DisplayName("Status"), Column("status"), Size(100)]
        public String Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Acnid Acn Tilte"), Expression("jAcnid.[AcnTilte]")]
        public String AcnidAcnTilte
        {
            get { return Fields.AcnidAcnTilte[this]; }
            set { Fields.AcnidAcnTilte[this] = value; }
        }

        [DisplayName("Acnid Phase No"), Expression("jAcnid.[PhaseNo]")]
        public Int32? AcnidPhaseNo
        {
            get { return Fields.AcnidPhaseNo[this]; }
            set { Fields.AcnidPhaseNo[this] = value; }
        }

        [DisplayName("Acnid Location"), Expression("jAcnid.[location]")]
        public String AcnidLocation
        {
            get { return Fields.AcnidLocation[this]; }
            set { Fields.AcnidLocation[this] = value; }
        }

        [DisplayName("Acnid Fromdate"), Expression("jAcnid.[Fromdate]")]
        public String AcnidFromdate
        {
            get { return Fields.AcnidFromdate[this]; }
            set { Fields.AcnidFromdate[this] = value; }
        }

        [DisplayName("Acnid Todate"), Expression("jAcnid.[Todate]")]
        public String AcnidTodate
        {
            get { return Fields.AcnidTodate[this]; }
            set { Fields.AcnidTodate[this] = value; }
        }

        [DisplayName("Acnid Periodfrom"), Expression("jAcnid.[Periodfrom]")]
        public String AcnidPeriodfrom
        {
            get { return Fields.AcnidPeriodfrom[this]; }
            set { Fields.AcnidPeriodfrom[this] = value; }
        }

        [DisplayName("Acnid Periodto"), Expression("jAcnid.[Periodto]")]
        public String AcnidPeriodto
        {
            get { return Fields.AcnidPeriodto[this]; }
            set { Fields.AcnidPeriodto[this] = value; }
        }

        [DisplayName("Acnid Creationdate"), Expression("jAcnid.[creationdate]")]
        public String AcnidCreationdate
        {
            get { return Fields.AcnidCreationdate[this]; }
            set { Fields.AcnidCreationdate[this] = value; }
        }

        [DisplayName("Acnid Userid"), Expression("jAcnid.[userid]")]
        public Int32? AcnidUserid
        {
            get { return Fields.AcnidUserid[this]; }
            set { Fields.AcnidUserid[this] = value; }
        }

        [DisplayName("Acnid Preview"), Expression("jAcnid.[preview]")]
        public String AcnidPreview
        {
            get { return Fields.AcnidPreview[this]; }
            set { Fields.AcnidPreview[this] = value; }
        }

        [DisplayName("Acnid Send"), Expression("jAcnid.[send]")]
        public String AcnidSend
        {
            get { return Fields.AcnidSend[this]; }
            set { Fields.AcnidSend[this] = value; }
        }

        [DisplayName("Acnid M Id"), Expression("jAcnid.[MId]")]
        public Int32? AcnidMId
        {
            get { return Fields.AcnidMId[this]; }
            set { Fields.AcnidMId[this] = value; }
        }

        [DisplayName("Acnid Status"), Expression("jAcnid.[status]")]
        public Int32? AcnidStatus
        {
            get { return Fields.AcnidStatus[this]; }
            set { Fields.AcnidStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ReportId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FinalreportRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ReportId;
            public StringField Title;
            public Int32Field Acnid;
            public Int32Field Download;
            public Int32Field Userid;
            public StringField Status;

            public StringField AcnidAcnTilte;
            public Int32Field AcnidPhaseNo;
            public StringField AcnidLocation;
            public StringField AcnidFromdate;
            public StringField AcnidTodate;
            public StringField AcnidPeriodfrom;
            public StringField AcnidPeriodto;
            public StringField AcnidCreationdate;
            public Int32Field AcnidUserid;
            public StringField AcnidPreview;
            public StringField AcnidSend;
            public Int32Field AcnidMId;
            public Int32Field AcnidStatus;

            public RowFields()
                : base("[dbo].[Finalreport]")
            {
                LocalTextPrefix = "ACN.Finalreport";
            }
        }
    }
}