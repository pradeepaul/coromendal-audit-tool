﻿

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

    [ConnectionKey("Default"), DisplayName("Meeting Points"), InstanceName("MeetingPoints"), TwoLevelCached]
    [ReadPermission(ACN.PermissionKeys.MeetingPoints.View)]
    [ModifyPermission(ACN.PermissionKeys.MeetingPoints.Modify)]
    [DeletePermission(ACN.PermissionKeys.MeetingPoints.Delete)]
    public sealed class MeetingPointsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meeting Points Id"), Column("MeetingPointsID"), Identity]
        public Int32? MeetingPointsId
        {
            get { return Fields.MeetingPointsId[this]; }
            set { Fields.MeetingPointsId[this] = value; }
        }

        [DisplayName("Meeting"), Column("MeetingID"), ForeignKey("[dbo].[minutesofmeeting]", "meetingid"), LeftJoin("jMeeting"), TextualField("MeetingTitle")]
        [LookupEditor(typeof(MinutesofmeetingRow))]
        public Int32? MeetingId
        {
            get { return Fields.MeetingId[this]; }
            set { Fields.MeetingId[this] = value; }
        }

        [DisplayName("Points"), Size(200), QuickSearch]
        public String Points
        {
            get { return Fields.Points[this]; }
            set { Fields.Points[this] = value; }
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
            get { return Fields.MeetingPointsId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Points; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingPointsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MeetingPointsId;
            public Int32Field MeetingId;
            public StringField Points;

            public Int32Field MeetingAcnid;
            public StringField MeetingTitle;
            public StringField MeetingAuditscope;
            public StringField MeetingPeriod;
            public Int32Field MeetingTime;
            public StringField MeetingVenue;
            public Int32Field MeetingAuditor;
            public Int32Field MeetingAuditee;

            public RowFields()
                : base("[dbo].[MeetingPoints]")
            {
                LocalTextPrefix = "ACN.MeetingPoints";
            }
        }
    }
}