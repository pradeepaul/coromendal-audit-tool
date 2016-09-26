

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

    [ConnectionKey("Default"), DisplayName("Acnreport"), InstanceName("Acnreport"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class AcnreportRow : Row, IIdRow, INameRow
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

        [DisplayName("Acnid"), Column("acnid"), NotNull, ForeignKey("[dbo].[Acn]", "acnID"), LeftJoin("jAcnid"), TextualField("AcnidAcnTilte")]
        [LookupEditor(typeof(AcnRow))]
        public Int32? Acnid
        {
            get { return Fields.Acnid[this]; }
            set { Fields.Acnid[this] = value; }
        }

        [DisplayName("Meetingid"), Column("meetingid"), NotNull, ForeignKey("[dbo].[minutesofmeeting]", "meetingid"), LeftJoin("jMeetingid"), TextualField("MeetingidTitle")]
        [LookupEditor(typeof(MinutesofmeetingRow))]
        public Int32? Meetingid
        {
            get { return Fields.Meetingid[this]; }
            set { Fields.Meetingid[this] = value; }
        }

        [DisplayName("Feedbackid"), Column("feedbackid"), ForeignKey("[dbo].[Feedback]", "FeedbackId"), LeftJoin("jFeedbackid"), TextualField("FeedbackidFeedbackRemarks")]
        [LookupEditor(typeof(FeedbackRow))]
        public Int32? Feedbackid
        {
            get { return Fields.Feedbackid[this]; }
            set { Fields.Feedbackid[this] = value; }
        }

        [DisplayName("Download"), Column("download")]
        public Int32? Download
        {
            get { return Fields.Download[this]; }
            set { Fields.Download[this] = value; }
        }

        [DisplayName("Acn Tilte"), Expression("jAcnid.[AcnTilte]")]
        public String AcnidAcnTilte
        {
            get { return Fields.AcnidAcnTilte[this]; }
            set { Fields.AcnidAcnTilte[this] = value; }
        }

        [DisplayName("Phase No"), Expression("jAcnid.[PhaseNo]")]
        public Int32? AcnidPhaseNo
        {
            get { return Fields.AcnidPhaseNo[this]; }
            set { Fields.AcnidPhaseNo[this] = value; }
        }

        [DisplayName("Location"), Expression("jAcnid.[location]")]
        public String AcnidLocation
        {
            get { return Fields.AcnidLocation[this]; }
            set { Fields.AcnidLocation[this] = value; }
        }

        [DisplayName("Fromdate"), Expression("jAcnid.[Fromdate]")]
        public String AcnidFromdate
        {
            get { return Fields.AcnidFromdate[this]; }
            set { Fields.AcnidFromdate[this] = value; }
        }

        [DisplayName("Todate"), Expression("jAcnid.[Todate]")]
        public String AcnidTodate
        {
            get { return Fields.AcnidTodate[this]; }
            set { Fields.AcnidTodate[this] = value; }
        }

        [DisplayName("Periodfrom"), Expression("jAcnid.[Periodfrom]")]
        public String AcnidPeriodfrom
        {
            get { return Fields.AcnidPeriodfrom[this]; }
            set { Fields.AcnidPeriodfrom[this] = value; }
        }

        [DisplayName("Periodto"), Expression("jAcnid.[Periodto]")]
        public String AcnidPeriodto
        {
            get { return Fields.AcnidPeriodto[this]; }
            set { Fields.AcnidPeriodto[this] = value; }
        }

        [DisplayName("Creationdate"), Expression("jAcnid.[creationdate]")]
        public String AcnidCreationdate
        {
            get { return Fields.AcnidCreationdate[this]; }
            set { Fields.AcnidCreationdate[this] = value; }
        }

        [DisplayName("Meetingid Acnid"), Expression("jMeetingid.[acnid]")]
        public Int32? MeetingidAcnid
        {
            get { return Fields.MeetingidAcnid[this]; }
            set { Fields.MeetingidAcnid[this] = value; }
        }

        [DisplayName("Meeting Title"), Expression("jMeetingid.[title]")]
        public String MeetingidTitle
        {
            get { return Fields.MeetingidTitle[this]; }
            set { Fields.MeetingidTitle[this] = value; }
        }
        [DisplayName("Feedbackid Feedback Question Id"), Expression("jFeedbackid.[FeedbackQuestionId]")]
        public Int32? FeedbackidFeedbackQuestionId
        {
            get { return Fields.FeedbackidFeedbackQuestionId[this]; }
            set { Fields.FeedbackidFeedbackQuestionId[this] = value; }
        }

        [DisplayName("Feedbackid Feedback Meeting Id"), Expression("jFeedbackid.[FeedbackMeetingId]")]
        public Int32? FeedbackidFeedbackMeetingId
        {
            get { return Fields.FeedbackidFeedbackMeetingId[this]; }
            set { Fields.FeedbackidFeedbackMeetingId[this] = value; }
        }

        [DisplayName("Feedbackid Feedback Rating"), Expression("jFeedbackid.[FeedbackRating]")]
        public Int32? FeedbackidFeedbackRating
        {
            get { return Fields.FeedbackidFeedbackRating[this]; }
            set { Fields.FeedbackidFeedbackRating[this] = value; }
        }

        [DisplayName("Feedbackid Feedback Remarks"), Expression("jFeedbackid.[FeedbackRemarks]")]
        public String FeedbackidFeedbackRemarks
        {
            get { return Fields.FeedbackidFeedbackRemarks[this]; }
            set { Fields.FeedbackidFeedbackRemarks[this] = value; }
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

        public AcnreportRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ReportId;
            public StringField Title;
            public Int32Field Acnid;
            public Int32Field Meetingid;
            public Int32Field Feedbackid;
            public Int32Field Download;

            public StringField AcnidAcnTilte;
            public Int32Field AcnidPhaseNo;
            public StringField AcnidLocation;
            public StringField AcnidFromdate;
            public StringField AcnidTodate;
            public StringField AcnidPeriodfrom;
            public StringField AcnidPeriodto;
            public StringField AcnidCreationdate;

            public Int32Field MeetingidAcnid;
            public StringField MeetingidTitle;
           

            public Int32Field FeedbackidFeedbackQuestionId;
            public Int32Field FeedbackidFeedbackMeetingId;
            public Int32Field FeedbackidFeedbackRating;
            public StringField FeedbackidFeedbackRemarks;

            public RowFields()
                : base("[dbo].[Acnreport]")
            {
                LocalTextPrefix = "ACN.Acnreport";
            }
        }
    }
}