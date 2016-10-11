

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

    [ConnectionKey("Default"), DisplayName("Minutes Of Meeting"), InstanceName("minutesofmeeting"), TwoLevelCached]
    [ReadPermission(ACN.PermissionKeys.minutesofmeeting.View)]
    [ModifyPermission(ACN.PermissionKeys.minutesofmeeting.Modify)]
    [DeletePermission(ACN.PermissionKeys.minutesofmeeting.Delete)]
    [LookupScript("MinutesofmeetingRow")]
    public sealed class MinutesofmeetingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meetingid"), Column("meetingid"), Identity]
        public Int32? Meetingid
        {
            get { return Fields.Meetingid[this]; }
            set { Fields.Meetingid[this] = value; }
        }

        [DisplayName("Acn"), Column("acnid"), NotNull, ForeignKey("[dbo].[Acn]", "acnID"), LeftJoin("jAcnid"), TextualField("AcnidAcnTilte")]
        [LookupEditor(typeof(AcnRow))]
        public Int32? Acnid
        {
            get { return Fields.Acnid[this]; }
            set { Fields.Acnid[this] = value; }
        }
        
        [DisplayName("Meeting Title"), Column("title"), Size(200), QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Auditscope"), Column("auditscope"), Size(200)]
        public String Auditscope
        {
            get { return Fields.Auditscope[this]; }
            set { Fields.Auditscope[this] = value; }
        }

        [DisplayName("Period"), Column("period"), Size(20)]
        public String Period
        {
            get { return Fields.Period[this]; }
            set { Fields.Period[this] = value; }
        }

        [DisplayName("Time"), Column("time")]
        public Int32? Time
        {
            get { return Fields.Time[this]; }
            set { Fields.Time[this] = value; }
        }

        [DisplayName("Venue"), Column("venue"), Size(200)]
        public String Venue
        {
            get { return Fields.Venue[this]; }
            set { Fields.Venue[this] = value; }
        }



       [DisplayName("Auditor"), Column("auditor")]
        [LookupEditor(typeof(AcnAuditorRow))]
        public Int32? Auditor
        {
            get { return Fields.Auditor[this]; }
            set { Fields.Auditor[this] = value; }
        }

        
       [DisplayName("Auditee"), Column("auditee")]
       [LookupEditor(typeof(AcnAuditeeRow))]
        public Int32? Auditee
        {
            get { return Fields.Auditee[this]; }
            set { Fields.Auditee[this] = value; }
        }
        [DisplayName("Report Number"), Width(180), Expression("jAcnid.[PhaseNo]")]
        public Int32? PhaseNo
        {
            get { return Fields.PhaseNo[this]; }
            set { Fields.PhaseNo[this] = value; }
        }
        [DisplayName("From Date"), Expression("jAcnid.[Fromdate]")]
        public String Fromdate
        {
            get { return Fields.Fromdate[this]; }
            set { Fields.Fromdate[this] = value; }
        }

        [DisplayName("To Date"), Expression("jAcnid.[Todate]")]
        public String Todate
        {
            get { return Fields.Todate[this]; }
            set { Fields.Todate[this] = value; }
        }

        [DisplayName("Acnid Acn Tilte"), Expression("jAcnid.[AcnTilte]")]
        public String AcnidAcnTilte
        {
            get { return Fields.AcnidAcnTilte[this]; }
            set { Fields.AcnidAcnTilte[this] = value; }
        }
        [DisplayName("Notes"), NotesEditor, ClientSide]
        public List<NoteRow> NoteList
        {
            get { return Fields.NoteList[this]; }
            set { Fields.NoteList[this] = value; }
        }
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "meetingid"), ClientSide]
        public List<MeetingIssueRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "meetingid"), ClientSide]
        public List<MeetingAbsentRow> AbsentList
        {
            get { return Fields.AbsentList[this]; }
            set { Fields.AbsentList[this] = value; }
        }
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "meetingid"), ClientSide]
        public List<MeetingPointsRow> PointsList
        {
            get { return Fields.PointsList[this]; }
            set { Fields.PointsList[this] = value; }
        }

        [DisplayName("ACN Title"), Expression("jAcnid.[AcnTilte]")]
        public String MeetingTilte
        {
            get { return Fields.MeetingTilte[this]; }
            set { Fields.MeetingTilte[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Meetingid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MinutesofmeetingRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Meetingid;
            public Int32Field Acnid;
            public StringField Title;
            public StringField Auditscope;
            public StringField Period;
            public Int32Field Time;
            public StringField Venue;
            public Int32Field Auditor;
            public Int32Field Auditee;
            public RowListField<NoteRow> NoteList;
            public StringField AcnidAcnTilte;
            public RowListField<MeetingIssueRow> DetailList;

            public RowListField<MeetingAbsentRow> AbsentList;
            public RowListField<MeetingPointsRow> PointsList;

            public StringField MeetingTilte;
            public Int32Field PhaseNo;
            public StringField Fromdate;
            public StringField Todate;
            public RowFields()
                : base("[dbo].[minutesofmeeting]")
            {
                LocalTextPrefix = "ACN.Minutesofmeeting";
            }
        }
    }
}