

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

    [ConnectionKey("Default"), DisplayName("Acn Report"), InstanceName("Acnreport"), TwoLevelCached]
    [ReadPermission(ACN.PermissionKeys.Acnreport.View)]
    [ModifyPermission(ACN.PermissionKeys.Acnreport.Modify)]
    [DeletePermission(ACN.PermissionKeys.Acnreport.Delete)]
    [LookupScript("AcnreportRow")]
    public sealed class AcnreportRow : Row, IIdRow, INameRow
    {
        [DisplayName("Report Id"), Column("reportId"), Identity]
        public Int32? ReportId
        {
            get { return Fields.ReportId[this]; }
            set { Fields.ReportId[this] = value; }
        }

        [DisplayName("Report Title"), Column("title"), Size(100), QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Assignment"), Width(100), Column("acnid"), NotNull, ForeignKey("[dbo].[Acn]", "acnID"), LeftJoin("jAcnid"), TextualField("AcnidAcnTilte")]
        [LookupEditor(typeof(AcnRow))]
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

        [DisplayName("Audit Status"), Column("status"), Size(100), QuickSearch]
        public String status
        {
            get { return Fields.status[this]; }
            set { Fields.status[this] = value; }
        }

        [DisplayName("Created User"), Column("userid")]
        public Int32? userid
        {
            get { return Fields.userid[this]; }
            set { Fields.userid[this] = value; }
        }

        [DisplayName("Assignment"), Expression("jAcnid.[AcnTilte]")]
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

        /* [DisplayName("Meetingid Acnid")]
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
          }*/
       
        [DisplayName("Key Facts"), ClientSide, MasterDetailRelation(foreignKey: "reportid")]
        public List<KeyfactsRow> Keyfacts
        {
            get { return Fields.Keyfacts[this]; }
            set { Fields.Keyfacts[this] = value; }
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
            public Int32Field Download;
            public Int32Field userid;
            public StringField status;

            public StringField AcnidAcnTilte;
            public Int32Field AcnidPhaseNo;
            public StringField AcnidLocation;
            public StringField AcnidFromdate;
            public StringField AcnidTodate;
            public StringField AcnidPeriodfrom;
            public StringField AcnidPeriodto;
            public StringField AcnidCreationdate;

           public RowListField<KeyfactsRow> Keyfacts;

            public RowFields()
                : base("[dbo].[Acnreport]")
            {
                LocalTextPrefix = "ACN.Acnreport";
            }
        }
    }
}