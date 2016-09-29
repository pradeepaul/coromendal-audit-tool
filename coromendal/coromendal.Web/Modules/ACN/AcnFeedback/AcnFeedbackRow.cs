

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

    [ConnectionKey("Default"), DisplayName("Feedback"), InstanceName("AcnFeedback"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class AcnFeedbackRow : Row, IIdRow, INameRow
    {
        [DisplayName("Acn Feedback Id"), Identity]
        public Int32? AcnFeedbackId
        {
            get { return Fields.AcnFeedbackId[this]; }
            set { Fields.AcnFeedbackId[this] = value; }
        }

        [DisplayName("Acnid"), Column("acnid"), ForeignKey("[dbo].[Acn]", "acnID"), LeftJoin("jAcnid"), TextualField("AcnidAcnTilte")]
        [LookupEditor(typeof(AcnRow))]
        public Int32? Acnid
        {
            get { return Fields.Acnid[this]; }
            set { Fields.Acnid[this] = value; }
        }

        [DisplayName("Your Rating"), Column("ques1")]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public Int32? Ques1
        {
            get { return Fields.Ques1[this]; }
            set { Fields.Ques1[this] = value; }
        }

        [DisplayName("Your Rating"), Column("ques2")]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public Int32? Ques2
        {
            get { return Fields.Ques2[this]; }
            set { Fields.Ques2[this] = value; }
        }

        [DisplayName("Your Rating"), Column("ques3")]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public Int32? Ques3
        {
            get { return Fields.Ques3[this]; }
            set { Fields.Ques3[this] = value; }
        }

        [DisplayName("Your Rating"), Column("ques4")]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public Int32? Ques4
        {
            get { return Fields.Ques4[this]; }
            set { Fields.Ques4[this] = value; }
        }

        [DisplayName("Your Rating"), Column("ques5")]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public Int32? Ques5
        {
            get { return Fields.Ques5[this]; }
            set { Fields.Ques5[this] = value; }
        }

        [DisplayName("Your Rating"), Column("ques6")]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public Int32? Ques6
        {
            get { return Fields.Ques6[this]; }
            set { Fields.Ques6[this] = value; }
        }

        [DisplayName("Your Rating"), Column("ques7")]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public Int32? Ques7
        {
            get { return Fields.Ques7[this]; }
            set { Fields.Ques7[this] = value; }
        }

        [DisplayName("Your Rating"), Column("ques8")]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public Int32? Ques8
        {
            get { return Fields.Ques8[this]; }
            set { Fields.Ques8[this] = value; }
        }

        [DisplayName("Your Rating"), Column("ques9")]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public Int32? Ques9
        {
            get { return Fields.Ques9[this]; }
            set { Fields.Ques9[this] = value; }
        }

        [DisplayName("Your Rating"), Column("ques10")]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public Int32? Ques10
        {
            get { return Fields.Ques10[this]; }
            set { Fields.Ques10[this] = value; }
        }

        [DisplayName("Your Rating"), Column("ques11")]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public Int32? Ques11
        {
            get { return Fields.Ques11[this]; }
            set { Fields.Ques11[this] = value; }
        }

        [DisplayName("Your Rating"), Column("ques12")]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public Int32? Ques12
        {
            get { return Fields.Ques12[this]; }
            set { Fields.Ques12[this] = value; }
        }

        [DisplayName("Your Rating"), Column("ques13")]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public Int32? Ques13
        {
            get { return Fields.Ques13[this]; }
            set { Fields.Ques13[this] = value; }
        }

        [DisplayName("Your Rating"), Column("ques14")]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public Int32? Ques14
        {
            get { return Fields.Ques14[this]; }
            set { Fields.Ques14[this] = value; }
        }

        [DisplayName("Your Name"), Column("name"), Size(10), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Department"), Column("dept"), Size(10)]
        public String Dept
        {
            get { return Fields.Dept[this]; }
            set { Fields.Dept[this] = value; }
        }

        [DisplayName("Name of the Review"), Column("reviewname"), Size(10)]
        public String Reviewname
        {
            get { return Fields.Reviewname[this]; }
            set { Fields.Reviewname[this] = value; }
        }

        [DisplayName("Location"), Column("location"), Size(10)]
        public String Location
        {
            get { return Fields.Location[this]; }
            set { Fields.Location[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.AcnFeedbackId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AcnFeedbackRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AcnFeedbackId;
            public Int32Field Acnid;
            public Int32Field Ques1;
            public Int32Field Ques2;
            public Int32Field Ques3;
            public Int32Field Ques4;
            public Int32Field Ques5;
            public Int32Field Ques6;
            public Int32Field Ques7;
            public Int32Field Ques8;
            public Int32Field Ques9;
            public Int32Field Ques10;
            public Int32Field Ques11;
            public Int32Field Ques12;
            public Int32Field Ques13;
            public Int32Field Ques14;
            public StringField Name;
            public StringField Dept;
            public StringField Reviewname;
            public StringField Location;

            public StringField AcnidAcnTilte;
            public Int32Field AcnidPhaseNo;
            public StringField AcnidLocation;
            public StringField AcnidFromdate;
            public StringField AcnidTodate;
            public StringField AcnidPeriodfrom;
            public StringField AcnidPeriodto;
            public StringField AcnidCreationdate;

            public RowFields()
                : base("[dbo].[AcnFeedback]")
            {
                LocalTextPrefix = "ACN.AcnFeedback";
            }
        }
    }
}