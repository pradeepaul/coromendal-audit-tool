

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

    [ConnectionKey("Default"), DisplayName("Keyfacts"), InstanceName("Keyfacts"), TwoLevelCached]
    [ReadPermission(ACN.PermissionKeys.Keyfacts.View)]
    [ModifyPermission(ACN.PermissionKeys.Keyfacts.Modify)]
    [DeletePermission(ACN.PermissionKeys.Keyfacts.Delete)]
    public sealed class KeyfactsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Keyfacts Id"), Column("keyfactsId"), Identity]
        public Int32? KeyfactsId
        {
            get { return Fields.KeyfactsId[this]; }
            set { Fields.KeyfactsId[this] = value; }
        }

        [DisplayName("Acn"), Column("acnId"), ForeignKey("[dbo].[Acn]", "acnID"), LeftJoin("jAcn"), TextualField("AcnAcnTilte")]
        public Int32? AcnId
        {
            get { return Fields.AcnId[this]; }
            set { Fields.AcnId[this] = value; }
        }

        [DisplayName("Particulars"), Column("particulars"), Size(100), QuickSearch]
        public String Particulars
        {
            get { return Fields.Particulars[this]; }
            set { Fields.Particulars[this] = value; }
        }

        [DisplayName("Value"), Column("value"), Size(100)]
        public String Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        [DisplayName("Reportid"), Column("reportid"), ForeignKey("[dbo].[Acnreport]", "reportId"), LeftJoin("jReportid"), TextualField("ReportidTitle")]
        public Int32? Reportid
        {
            get { return Fields.Reportid[this]; }
            set { Fields.Reportid[this] = value; }
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

        [DisplayName("Reportid Title"), Expression("jReportid.[title]")]
        public String ReportidTitle
        {
            get { return Fields.ReportidTitle[this]; }
            set { Fields.ReportidTitle[this] = value; }
        }

        [DisplayName("Reportid Acnid"), Expression("jReportid.[acnid]")]
        public Int32? ReportidAcnid
        {
            get { return Fields.ReportidAcnid[this]; }
            set { Fields.ReportidAcnid[this] = value; }
        }

        [DisplayName("Reportid Download"), Expression("jReportid.[download]")]
        public Int32? ReportidDownload
        {
            get { return Fields.ReportidDownload[this]; }
            set { Fields.ReportidDownload[this] = value; }
        }

        [DisplayName("Reportid Userid"), Expression("jReportid.[userid]")]
        public Int32? ReportidUserid
        {
            get { return Fields.ReportidUserid[this]; }
            set { Fields.ReportidUserid[this] = value; }
        }

        [DisplayName("Reportid Status"), Expression("jReportid.[status]")]
        public String ReportidStatus
        {
            get { return Fields.ReportidStatus[this]; }
            set { Fields.ReportidStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.KeyfactsId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Particulars; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public KeyfactsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field KeyfactsId;
            public Int32Field AcnId;
            public StringField Particulars;
            public StringField Value;
            public Int32Field Reportid;

            public StringField AcnAcnTilte;
            public Int32Field AcnPhaseNo;
            public StringField AcnLocation;
            public StringField AcnFromdate;
            public StringField AcnTodate;
            public StringField AcnPeriodfrom;
            public StringField AcnPeriodto;
            public StringField AcnCreationdate;
            public Int32Field AcnUserid;

            public StringField ReportidTitle;
            public Int32Field ReportidAcnid;
            public Int32Field ReportidDownload;
            public Int32Field ReportidUserid;
            public StringField ReportidStatus;

            public RowFields()
                : base("[dbo].[Keyfacts]")
            {
                LocalTextPrefix = "ACN.Keyfacts";
            }
        }
    }
}