

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

    [ConnectionKey("Default"), DisplayName("satisfactionrating"), InstanceName("satisfactionrating"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class SatisfactionratingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Satisfactionrating Id"), Column("satisfactionratingId"), PrimaryKey]
        public Int32? SatisfactionratingId
        {
            get { return Fields.SatisfactionratingId[this]; }
            set { Fields.SatisfactionratingId[this] = value; }
        }

        [DisplayName("Document Score Assiged by Auditor"), Column("documentscore")]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public Int32? Documentscore
        {
            get { return Fields.Documentscore[this]; }
            set { Fields.Documentscore[this] = value; }
        }

        [DisplayName("Reasons for score below 3"), Column("documentcomments"), Size(100), QuickSearch]
        public String Documentcomments
        {
            get { return Fields.Documentcomments[this]; }
            set { Fields.Documentcomments[this] = value; }
        }

        [DisplayName("Compliance Score Assiged by Auditor"), Column("compliancescore"), Size(100)]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public String Compliancescore
        {
            get { return Fields.Compliancescore[this]; }
            set { Fields.Compliancescore[this] = value; }
        }

        [DisplayName("Reasons for score below 3"), Column("compliancecomment"), Size(100)]

        public String Compliancecomment
        {
            get { return Fields.Compliancecomment[this]; }
            set { Fields.Compliancecomment[this] = value; }
        }

        [DisplayName("Process/fin Controll Score Assiged by Auditor"), Column("processfincontrollscore"), Size(100)]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public String Processfincontrollscore
        {
            get { return Fields.Processfincontrollscore[this]; }
            set { Fields.Processfincontrollscore[this] = value; }
        }

        [DisplayName("Reasons for score below 3"), Column("processfincontrollscorecmnts"), Size(100)]
        public String Processfincontrollscorecmnts
        {
            get { return Fields.Processfincontrollscorecmnts[this]; }
            set { Fields.Processfincontrollscorecmnts[this] = value; }
        }

        [DisplayName("Response Score Assiged by Auditor"), Column("responsescore"), Size(100)]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public String Responsescore
        {
            get { return Fields.Responsescore[this]; }
            set { Fields.Responsescore[this] = value; }
        }

        [DisplayName("Reasons for score below 3"), Column("responsecmnts"), Size(100)]
        public String Responsecmnts
        {
            get { return Fields.Responsecmnts[this]; }
            set { Fields.Responsecmnts[this] = value; }
        }

        [DisplayName("Preaudit Score Assiged by Auditor"), Column("preauditscore"), Size(100)]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public String Preauditscore
        {
            get { return Fields.Preauditscore[this]; }
            set { Fields.Preauditscore[this] = value; }
        }

        [DisplayName("Reasons for score below 3"), Column("preauditcmnts"), Size(100)]
        public String Preauditcmnts
        {
            get { return Fields.Preauditcmnts[this]; }
            set { Fields.Preauditcmnts[this] = value; }
        }

        [DisplayName("New Initiative Score Assiged by Auditor"), Column("newinitiative"), Size(100)]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public String Newinitiative
        {
            get { return Fields.Newinitiative[this]; }
            set { Fields.Newinitiative[this] = value; }
        }

        [DisplayName("Totalscore"), Column("totalscore"), Size(100)]
        public String Totalscore
        {
            get { return Fields.Totalscore[this]; }
            set { Fields.Totalscore[this] = value; }
        }

        [DisplayName("Aodid"), Column("aodid"), ForeignKey("[dbo].[AOD]", "aodId"), LeftJoin("jAodid"), TextualField("AodidActualcomencementdate")]
        public Int32? Aodid
        {
            get { return Fields.Aodid[this]; }
            set { Fields.Aodid[this] = value; }
        }

        [DisplayName("Aodid Meetingid"), Expression("jAodid.[Meetingid]")]
        public Int32? AodidMeetingid
        {
            get { return Fields.AodidMeetingid[this]; }
            set { Fields.AodidMeetingid[this] = value; }
        }

        [DisplayName("Aodid Actualcomencementdate"), Expression("jAodid.[Actualcomencementdate]")]
        public String AodidActualcomencementdate
        {
            get { return Fields.AodidActualcomencementdate[this]; }
            set { Fields.AodidActualcomencementdate[this] = value; }
        }

        [DisplayName("Aodid Actualcompltedate"), Expression("jAodid.[Actualcompltedate]")]
        public String AodidActualcompltedate
        {
            get { return Fields.AodidActualcompltedate[this]; }
            set { Fields.AodidActualcompltedate[this] = value; }
        }

        [DisplayName("Aodid Process Owner"), Expression("jAodid.[Process owner]")]
        public String AodidProcessOwner
        {
            get { return Fields.AodidProcessOwner[this]; }
            set { Fields.AodidProcessOwner[this] = value; }
        }

        [DisplayName("Aodid Functionalhead"), Expression("jAodid.[Functionalhead]")]
        public String AodidFunctionalhead
        {
            get { return Fields.AodidFunctionalhead[this]; }
            set { Fields.AodidFunctionalhead[this] = value; }
        }

        [DisplayName("Aodid Areaofscope"), Expression("jAodid.[Areaofscope]")]
        public String AodidAreaofscope
        {
            get { return Fields.AodidAreaofscope[this]; }
            set { Fields.AodidAreaofscope[this] = value; }
        }

        [DisplayName("Aodid Exclusions"), Expression("jAodid.[Exclusions]")]
        public String AodidExclusions
        {
            get { return Fields.AodidExclusions[this]; }
            set { Fields.AodidExclusions[this] = value; }
        }

        [DisplayName("Aodid Reasons"), Expression("jAodid.[Reasons]")]
        public String AodidReasons
        {
            get { return Fields.AodidReasons[this]; }
            set { Fields.AodidReasons[this] = value; }
        }

        [DisplayName("Aodid Sbu"), Expression("jAodid.[Sbu]")]
        public String AodidSbu
        {
            get { return Fields.AodidSbu[this]; }
            set { Fields.AodidSbu[this] = value; }
        }

        [DisplayName("Aodid Acnid"), Expression("jAodid.[acnid]")]
        public Int32? AodidAcnid
        {
            get { return Fields.AodidAcnid[this]; }
            set { Fields.AodidAcnid[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SatisfactionratingId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Documentcomments; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SatisfactionratingRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SatisfactionratingId;
            public Int32Field Documentscore;
            public StringField Documentcomments;
            public StringField Compliancescore;
            public StringField Compliancecomment;
            public StringField Processfincontrollscore;
            public StringField Processfincontrollscorecmnts;
            public StringField Responsescore;
            public StringField Responsecmnts;
            public StringField Preauditscore;
            public StringField Preauditcmnts;
            public StringField Newinitiative;
            public StringField Totalscore;
            public Int32Field Aodid;

            public Int32Field AodidMeetingid;
            public StringField AodidActualcomencementdate;
            public StringField AodidActualcompltedate;
            public StringField AodidProcessOwner;
            public StringField AodidFunctionalhead;
            public StringField AodidAreaofscope;
            public StringField AodidExclusions;
            public StringField AodidReasons;
            public StringField AodidSbu;
            public Int32Field AodidAcnid;

            public RowFields()
                : base("[dbo].[satisfactionrating]")
            {
                LocalTextPrefix = "ACN.Satisfactionrating";
            }
        }
    }
}