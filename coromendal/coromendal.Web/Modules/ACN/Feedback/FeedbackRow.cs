

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

    [ConnectionKey("Default"), DisplayName("Feedback"), InstanceName("Feedback"), TwoLevelCached]
   
    [LookupScript("FeedbackRow")]
    public sealed class FeedbackRow : Row, IIdRow, INameRow
    {
        [DisplayName("Feedback Id"), Identity]
        public Int32? FeedbackId
        {
            get { return Fields.FeedbackId[this]; }
            set { Fields.FeedbackId[this] = value; }
        }

        [DisplayName("Feedback Question"), ForeignKey("[dbo].[Questions]", "QuestionId"), LeftJoin("jFeedbackQuestion"), TextualField("FeedbackQuestionQuestiontext")]
        [LookupEditor(typeof(QuestionsRow))]
        public Int32? FeedbackQuestionId
        {
            get { return Fields.FeedbackQuestionId[this]; }
            set { Fields.FeedbackQuestionId[this] = value; }
        }

        [DisplayName("Feedback Meeting"), ForeignKey("[dbo].[minutesofmeeting]", "meetingid"), LeftJoin("jFeedbackMeeting"), TextualField("FeedbackMeetingTitle")]
        [LookupEditor(typeof(MinutesofmeetingRow))]
        public Int32? FeedbackMeetingId
        {
            get { return Fields.FeedbackMeetingId[this]; }
            set { Fields.FeedbackMeetingId[this] = value; }
        }

        [DisplayName("Feedback Rating")]
        public Int32? FeedbackRating
        {
            get { return Fields.FeedbackRating[this]; }
            set { Fields.FeedbackRating[this] = value; }
        }

        [DisplayName("Feedback Remarks"), Size(200), QuickSearch]
        public String FeedbackRemarks
        {
            get { return Fields.FeedbackRemarks[this]; }
            set { Fields.FeedbackRemarks[this] = value; }
        }

        [DisplayName("Feedback Question Questiontext"), Expression("jFeedbackQuestion.[Questiontext]")]
        public String FeedbackQuestionQuestiontext
        {
            get { return Fields.FeedbackQuestionQuestiontext[this]; }
            set { Fields.FeedbackQuestionQuestiontext[this] = value; }
        }

        [DisplayName("Feedback Meeting Acnid"), Expression("jFeedbackMeeting.[acnid]")]
        public Int32? FeedbackMeetingAcnid
        {
            get { return Fields.FeedbackMeetingAcnid[this]; }
            set { Fields.FeedbackMeetingAcnid[this] = value; }
        }

        [DisplayName("Feedback Meeting Title"), Expression("jFeedbackMeeting.[title]")]
        public String FeedbackMeetingTitle
        {
            get { return Fields.FeedbackMeetingTitle[this]; }
            set { Fields.FeedbackMeetingTitle[this] = value; }
        }

        [DisplayName("Feedback Meeting Auditscope"), Expression("jFeedbackMeeting.[auditscope]")]
        public String FeedbackMeetingAuditscope
        {
            get { return Fields.FeedbackMeetingAuditscope[this]; }
            set { Fields.FeedbackMeetingAuditscope[this] = value; }
        }

        [DisplayName("Feedback Meeting Period"), Expression("jFeedbackMeeting.[period]")]
        public String FeedbackMeetingPeriod
        {
            get { return Fields.FeedbackMeetingPeriod[this]; }
            set { Fields.FeedbackMeetingPeriod[this] = value; }
        }

        [DisplayName("Feedback Meeting Time"), Expression("jFeedbackMeeting.[time]")]
        public Int32? FeedbackMeetingTime
        {
            get { return Fields.FeedbackMeetingTime[this]; }
            set { Fields.FeedbackMeetingTime[this] = value; }
        }

        [DisplayName("Feedback Meeting Venue"), Expression("jFeedbackMeeting.[venue]")]
        public String FeedbackMeetingVenue
        {
            get { return Fields.FeedbackMeetingVenue[this]; }
            set { Fields.FeedbackMeetingVenue[this] = value; }
        }

        [DisplayName("Feedback Meeting Auditor"), Expression("jFeedbackMeeting.[auditor]")]
        public Int32? FeedbackMeetingAuditor
        {
            get { return Fields.FeedbackMeetingAuditor[this]; }
            set { Fields.FeedbackMeetingAuditor[this] = value; }
        }

        [DisplayName("Feedback Meeting Auditee"), Expression("jFeedbackMeeting.[auditee]")]
        public Int32? FeedbackMeetingAuditee
        {
            get { return Fields.FeedbackMeetingAuditee[this]; }
            set { Fields.FeedbackMeetingAuditee[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FeedbackId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FeedbackRemarks; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FeedbackRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FeedbackId;
            public Int32Field FeedbackQuestionId;
            public Int32Field FeedbackMeetingId;
            public Int32Field FeedbackRating;
            public StringField FeedbackRemarks;

            public StringField FeedbackQuestionQuestiontext;

            public Int32Field FeedbackMeetingAcnid;
            public StringField FeedbackMeetingTitle;
            public StringField FeedbackMeetingAuditscope;
            public StringField FeedbackMeetingPeriod;
            public Int32Field FeedbackMeetingTime;
            public StringField FeedbackMeetingVenue;
            public Int32Field FeedbackMeetingAuditor;
            public Int32Field FeedbackMeetingAuditee;

            public RowFields()
                : base("[dbo].[Feedback]")
            {
                LocalTextPrefix = "ACN.Feedback";
            }
        }
    }
}