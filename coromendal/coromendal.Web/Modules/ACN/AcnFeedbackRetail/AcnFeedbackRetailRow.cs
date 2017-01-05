

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

    [ConnectionKey("Default"), DisplayName("AcnFeedbackRetail"), InstanceName("AcnFeedbackRetail"), TwoLevelCached]
    [ReadPermission(ACN.PermissionKeys.AcnFeedbackRetail.View)]
    [ModifyPermission(ACN.PermissionKeys.AcnFeedbackRetail.Modify)]
    [DeletePermission(ACN.PermissionKeys.AcnFeedbackRetail.Delete)]

    public sealed class AcnFeedbackRetailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Acn Feedback Retail Id"), Identity]
        public Int32? AcnFeedbackRetailId
        {
            get { return Fields.AcnFeedbackRetailId[this]; }
            set { Fields.AcnFeedbackRetailId[this] = value; }
        }

        [DisplayName("Assignment"), Column("acnid"), ForeignKey("[dbo].[Acn]", "acnID"), LeftJoin("jAcnid"), TextualField("AcnidAcnTilte")]
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

        [DisplayName("Name"), Column("name"), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Dept"), Column("dept")]
        public String Dept
        {
            get { return Fields.Dept[this]; }
            set { Fields.Dept[this] = value; }
        }

        [DisplayName("Reviewname"), Column("reviewname")]
        public String Reviewname
        {
            get { return Fields.Reviewname[this]; }
            set { Fields.Reviewname[this] = value; }
        }

        [DisplayName("Location"), Column("location")]
        public String Location
        {
            get { return Fields.Location[this]; }
            set { Fields.Location[this] = value; }
        }

        [DisplayName("Remark"), Column("remark1")]
        public String Remark1
        {
            get { return Fields.Remark1[this]; }
            set { Fields.Remark1[this] = value; }
        }

        [DisplayName("Remark"), Column("remark2")]
        public String Remark2
        {
            get { return Fields.Remark2[this]; }
            set { Fields.Remark2[this] = value; }
        }

        [DisplayName("Remark"), Column("remark3")]
        public String Remark3
        {
            get { return Fields.Remark3[this]; }
            set { Fields.Remark3[this] = value; }
        }

        [DisplayName("Remark"), Column("remark4")]
        public String Remark4
        {
            get { return Fields.Remark4[this]; }
            set { Fields.Remark4[this] = value; }
        }

        [DisplayName("Remark"), Column("remark5")]
        public String Remark5
        {
            get { return Fields.Remark5[this]; }
            set { Fields.Remark5[this] = value; }
        }

        [DisplayName("Remark"), Column("remark6")]
        public String Remark6
        {
            get { return Fields.Remark6[this]; }
            set { Fields.Remark6[this] = value; }
        }

        [DisplayName("Remark"), Column("remark7")]
        public String Remark7
        {
            get { return Fields.Remark7[this]; }
            set { Fields.Remark7[this] = value; }
        }

        [DisplayName("Remark"), Column("remark8")]
        public String Remark8
        {
            get { return Fields.Remark8[this]; }
            set { Fields.Remark8[this] = value; }
        }

        [DisplayName("Date"), Column("date")]
        public String Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Storeno"), Column("storeno")]
        public String Storeno
        {
            get { return Fields.Storeno[this]; }
            set { Fields.Storeno[this] = value; }
        }
        [DisplayName("Comments/ Suggestion if any"), Column("comments")]
        public String Comments
        {
            get { return Fields.Comments[this]; }
            set { Fields.Comments[this] = value; }
        }
        [DisplayName("Send"), Column("preview")]
        public String Preview
        {
            get { return Fields.Preview[this]; }
            set { Fields.Preview[this] = value; }
        }


        [DisplayName("Assignment"), Expression("jAcnid.[AcnTilte]")]
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

        [DisplayName("Acnid Userid"), Expression("jAcnid.[userid]")]
        public Int32? AcnidUserid
        {
            get { return Fields.AcnidUserid[this]; }
            set { Fields.AcnidUserid[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AcnFeedbackRetailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AcnFeedbackRetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AcnFeedbackRetailId;
            public Int32Field Acnid;
            public Int32Field Ques1;
            public Int32Field Ques2;
            public Int32Field Ques3;
            public Int32Field Ques4;
            public Int32Field Ques5;
            public Int32Field Ques6;
            public Int32Field Ques7;
            public Int32Field Ques8;
            public StringField Name;
            public StringField Dept;
            public StringField Reviewname;
            public StringField Location;
            public StringField Remark1;
            public StringField Remark2;
            public StringField Remark3;
            public StringField Remark4;
            public StringField Remark5;
            public StringField Remark6;
            public StringField Remark7;
            public StringField Remark8;
            public StringField Date;
            public StringField Storeno;
            public StringField Comments;
            public StringField Preview;

            public StringField AcnidAcnTilte;
            public Int32Field AcnidPhaseNo;
            public StringField AcnidLocation;
            public StringField AcnidFromdate;
            public StringField AcnidTodate;
            public StringField AcnidPeriodfrom;
            public StringField AcnidPeriodto;
            public StringField AcnidCreationdate;
            public Int32Field AcnidUserid;

            public RowFields()
                : base("[dbo].[AcnFeedbackRetail]")
            {
                LocalTextPrefix = "ACN.AcnFeedbackRetail";
            }
        }
    }
}