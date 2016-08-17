

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

    [ConnectionKey("Default"), DisplayName("MeetingIssue"), InstanceName("MeetingIssue"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class MeetingIssueRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meeting Issue Id"), Column("MeetingIssueID"), Identity]
        public Int32? MeetingIssueId
        {
            get { return Fields.MeetingIssueId[this]; }
            set { Fields.MeetingIssueId[this] = value; }
        }

        [DisplayName("Meeting"), Column("MeetingID"), ForeignKey("[dbo].[minutesofmeeting]", "meetingid"), LeftJoin("jMeeting"), TextualField("MeetingTitle")]
        public Int32? MeetingId
        {
            get { return Fields.MeetingId[this]; }
            set { Fields.MeetingId[this] = value; }
        }

        [DisplayName("Areaof Operation"), Size(200), QuickSearch]
        public String AreaofOperation
        {
            get { return Fields.AreaofOperation[this]; }
            set { Fields.AreaofOperation[this] = value; }
        }

        [DisplayName("Issue"), Size(200), NotNull]
        public String Issue
        {
            get { return Fields.Issue[this]; }
            set { Fields.Issue[this] = value; }
        }

        [DisplayName("Status"), Size(200), NotNull]
        public String Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Expected Date"), Size(50), NotNull]
        public String ExpectedDate
        {
            get { return Fields.ExpectedDate[this]; }
            set { Fields.ExpectedDate[this] = value; }
        }

        [DisplayName("Meeting Acnid"), Expression("jMeeting.[acnid]")]
        public Int32? MeetingAcnid
        {
            get { return Fields.MeetingAcnid[this]; }
            set { Fields.MeetingAcnid[this] = value; }
        }

        [DisplayName("Meeting Title"), Expression("jMeeting.[title]")]
        public String MeetingTitle
        {
            get { return Fields.MeetingTitle[this]; }
            set { Fields.MeetingTitle[this] = value; }
        }

        [DisplayName("Meeting Auditscope"), Expression("jMeeting.[auditscope]")]
        public String MeetingAuditscope
        {
            get { return Fields.MeetingAuditscope[this]; }
            set { Fields.MeetingAuditscope[this] = value; }
        }

        [DisplayName("Meeting Period"), Expression("jMeeting.[period]")]
        public String MeetingPeriod
        {
            get { return Fields.MeetingPeriod[this]; }
            set { Fields.MeetingPeriod[this] = value; }
        }

        [DisplayName("Meeting Time"), Expression("jMeeting.[time]")]
        public Int32? MeetingTime
        {
            get { return Fields.MeetingTime[this]; }
            set { Fields.MeetingTime[this] = value; }
        }

        [DisplayName("Meeting Venue"), Expression("jMeeting.[venue]")]
        public String MeetingVenue
        {
            get { return Fields.MeetingVenue[this]; }
            set { Fields.MeetingVenue[this] = value; }
        }

        [DisplayName("Meeting Auditor"), Expression("jMeeting.[auditor]")]
        public Int32? MeetingAuditor
        {
            get { return Fields.MeetingAuditor[this]; }
            set { Fields.MeetingAuditor[this] = value; }
        }

        [DisplayName("Meeting Auditee"), Expression("jMeeting.[auditee]")]
        public Int32? MeetingAuditee
        {
            get { return Fields.MeetingAuditee[this]; }
            set { Fields.MeetingAuditee[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeetingIssueId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AreaofOperation; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingIssueRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MeetingIssueId;
            public Int32Field MeetingId;
            public StringField AreaofOperation;
            public StringField Issue;
            public StringField Status;
            public StringField ExpectedDate;

            public Int32Field MeetingAcnid;
            public StringField MeetingTitle;
            public StringField MeetingAuditscope;
            public StringField MeetingPeriod;
            public Int32Field MeetingTime;
            public StringField MeetingVenue;
            public Int32Field MeetingAuditor;
            public Int32Field MeetingAuditee;

            public RowFields()
                : base("[dbo].[MeetingIssue]")
            {
                LocalTextPrefix = "ACN.MeetingIssue";
            }
        }
    }
}