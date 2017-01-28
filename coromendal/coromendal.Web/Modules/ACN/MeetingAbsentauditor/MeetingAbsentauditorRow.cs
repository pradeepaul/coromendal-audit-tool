

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
    using Administration.Entities;
    using Administration.Scripts;

    [ConnectionKey("Default"), DisplayName("MeetingAbsentauditor"), InstanceName("MeetingAbsentauditor"), TwoLevelCached]
    [ReadPermission(ACN.PermissionKeys.MeetingAbsentauditor.View)]
    [ModifyPermission(ACN.PermissionKeys.MeetingAbsentauditor.Modify)]
    [DeletePermission(ACN.PermissionKeys.MeetingAbsentauditor.Delete)]
    [LookupScript("ACN.MeetingAbsentauditor")]
    public sealed class MeetingAbsentauditorRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meeting Absentauditor Id"), Column("MeetingAbsentauditorID"), Identity]
        public Int32? MeetingAbsentauditorId
        {
            get { return Fields.MeetingAbsentauditorId[this]; }
            set { Fields.MeetingAbsentauditorId[this] = value; }
        }

        [DisplayName("Meeting"), Column("MeetingID"), ForeignKey("[dbo].[minutesofmeeting]", "meetingid"), LeftJoin("jMeeting"), TextualField("MeetingTitle")]
        public Int32? MeetingId
        {
            get { return Fields.MeetingId[this]; }
            set { Fields.MeetingId[this] = value; }
        }

        [DisplayName("Absent User")]
        [LookupEditor(typeof(AuditeeUserLookup))]
        public Int32? AbsentUser
        {
            get { return Fields.AbsentUser[this]; }
            set { Fields.AbsentUser[this] = value; }
        }

        [DisplayName("Reason"), Column("reason"), Size(200), QuickSearch]
        public String Reason
        {
            get { return Fields.Reason[this]; }
            set { Fields.Reason[this] = value; }
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

        [DisplayName("Meeting Download"), Expression("jMeeting.[download]")]
        public Int32? MeetingDownload
        {
            get { return Fields.MeetingDownload[this]; }
            set { Fields.MeetingDownload[this] = value; }
        }

        [DisplayName("Meeting Userid"), Expression("jMeeting.[userid]")]
        public Int32? MeetingUserid
        {
            get { return Fields.MeetingUserid[this]; }
            set { Fields.MeetingUserid[this] = value; }
        }

        [DisplayName("Meeting Momdate"), Expression("jMeeting.[momdate]")]
        public String MeetingMomdate
        {
            get { return Fields.MeetingMomdate[this]; }
            set { Fields.MeetingMomdate[this] = value; }
        }

        [DisplayName("Meeting Planedcloseddate"), Expression("jMeeting.[planedcloseddate]")]
        public String MeetingPlanedcloseddate
        {
            get { return Fields.MeetingPlanedcloseddate[this]; }
            set { Fields.MeetingPlanedcloseddate[this] = value; }
        }

        [DisplayName("Meeting Auditopeningmeetingdate"), Expression("jMeeting.[auditopeningmeetingdate]")]
        public String MeetingAuditopeningmeetingdate
        {
            get { return Fields.MeetingAuditopeningmeetingdate[this]; }
            set { Fields.MeetingAuditopeningmeetingdate[this] = value; }
        }

        [DisplayName("Meeting Send"), Expression("jMeeting.[send]")]
        public Int32? MeetingSend
        {
            get { return Fields.MeetingSend[this]; }
            set { Fields.MeetingSend[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeetingAbsentauditorId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Reason; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingAbsentauditorRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MeetingAbsentauditorId;
            public Int32Field MeetingId;
            public Int32Field AbsentUser;
            public StringField Reason;

            public Int32Field MeetingAcnid;
            public StringField MeetingTitle;
            public StringField MeetingAuditscope;
            public StringField MeetingPeriod;
            public Int32Field MeetingTime;
            public StringField MeetingVenue;
            public Int32Field MeetingAuditor;
            public Int32Field MeetingAuditee;
            public Int32Field MeetingDownload;
            public Int32Field MeetingUserid;
            public StringField MeetingMomdate;
            public StringField MeetingPlanedcloseddate;
            public StringField MeetingAuditopeningmeetingdate;
            public Int32Field MeetingSend;

            public RowFields()
                : base("[dbo].[MeetingAbsentauditor]")
            {
                LocalTextPrefix = "ACN.MeetingAbsentauditor";
            }
        }
    }
}