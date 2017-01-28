

namespace coromendal.ACN.Entities
{
    using Newtonsoft.Json;
    using Northwind;
    using Northwind.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("DARrelease"), InstanceName("DARrelease"), TwoLevelCached]
    
    [ReadPermission(ACN.PermissionKeys.DaRrelease.View)]
    [ModifyPermission(ACN.PermissionKeys.DaRrelease.Modify)]
    [DeletePermission(ACN.PermissionKeys.DaRrelease.Delete)]
    public sealed class DaRreleaseRow : Row, IIdRow
    {
        [DisplayName("Da Rrelease Id"), Column("DARreleaseID"), Identity]
        public Int32? DaRreleaseId
        {
            get { return Fields.DaRreleaseId[this]; }
            set { Fields.DaRreleaseId[this] = value; }
        }

        [DisplayName("Report"), Column("ReportID"), NotNull, ForeignKey("[dbo].[Acnreport]", "reportId"), LeftJoin("jReport"), TextualField("ReportTitle")]
        [LookupEditor(typeof(AcnreportRow))]
        public Int32? ReportId
        {
            get { return Fields.ReportId[this]; }
            set { Fields.ReportId[this] = value; }
        }

        [DisplayName("Acn Id"), Column("acnID"), NotNull]
        [LookupEditor(typeof(AcnRow))]
        public Int32? AcnId
        {
            get { return Fields.AcnId[this]; }
            set { Fields.AcnId[this] = value; }
        }
        [DisplayName("Status"), Column("status")]
        [LookupEditor(typeof(FinalstatusvalueRow))]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }
        [DisplayName("Report Title"), Expression("jReport.[title]")]
        public String ReportTitle
        {
            get { return Fields.ReportTitle[this]; }
            set { Fields.ReportTitle[this] = value; }
        }

        [DisplayName("Report Acnid"), Expression("jReport.[acnid]")]
        public Int32? ReportAcnid
        {
            get { return Fields.ReportAcnid[this]; }
            set { Fields.ReportAcnid[this] = value; }
        }

        [DisplayName("Report Download"), Expression("jReport.[download]")]
        public Int32? ReportDownload
        {
            get { return Fields.ReportDownload[this]; }
            set { Fields.ReportDownload[this] = value; }
        }

        [DisplayName("Report Userid"), Expression("jReport.[userid]")]
        public Int32? ReportUserid
        {
            get { return Fields.ReportUserid[this]; }
            set { Fields.ReportUserid[this] = value; }
        }

        [DisplayName("Report Status"), Expression("jReport.[status]")]
        public String ReportStatus
        {
            get { return Fields.ReportStatus[this]; }
            set { Fields.ReportStatus[this] = value; }
        }
        [NotesEditor, ClientSide]
        [DisplayName("Comments")]
        public List<NoteRow> NoteList
        {
            get { return Fields.NoteList[this]; }
            set { Fields.NoteList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DaRreleaseId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DaRreleaseRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DaRreleaseId;
            public Int32Field ReportId;
            public Int32Field AcnId;
            public Int32Field Status;
            public RowListField<NoteRow> NoteList;

            public StringField ReportTitle;
            public Int32Field ReportAcnid;
            public Int32Field ReportDownload;
            public Int32Field ReportUserid;
            public StringField ReportStatus;

            public RowFields()
                : base("[dbo].[DARrelease]")
            {
                LocalTextPrefix = "ACN.DaRrelease";
            }
        }
    }
}