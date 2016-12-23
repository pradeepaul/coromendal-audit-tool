

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
        [DisplayName("Satisfactionrating Id"), Column("satisfactionratingId"), Identity]
        public Int32? SatisfactionratingId
        {
            get { return Fields.SatisfactionratingId[this]; }
            set { Fields.SatisfactionratingId[this] = value; }
        }

        [DisplayName("Score(1-5)"), Column("documentscore")]
        public Int32? Documentscore
        {
            get { return Fields.Documentscore[this]; }
            set { Fields.Documentscore[this] = value; }
        }

        [DisplayName("Reason"), Column("documentcomments"), Size(100), QuickSearch]        
        public String Documentcomments
        {
            get { return Fields.Documentcomments[this]; }
            set { Fields.Documentcomments[this] = value; }
        }
        [DisplayName("Rating(1-5)"), Column("documentrating"), Size(100)]
        
        public String Documentrating
        {
            get { return Fields.Documentrating[this]; }
            set { Fields.Documentrating[this] = value; }
        }

        [DisplayName("Weightage( In %)"), Column("documentweigtage"), Size(100)]
        public String Documentweigtage
        {
            get { return Fields.Documentweigtage[this]; }
            set { Fields.Documentweigtage[this] = value; }
        }

        [DisplayName("Score(1-5)"), Column("compliancescore"), Size(100)]
        public String Compliancescore
        {
            get { return Fields.Compliancescore[this]; }
            set { Fields.Compliancescore[this] = value; }
        }

        [DisplayName("Reason"), Column("compliancecomment"), Size(100)]
        public String Compliancecomment
        {
            get { return Fields.Compliancecomment[this]; }
            set { Fields.Compliancecomment[this] = value; }
        }

        [DisplayName("Score(1-5)"), Column("processfincontrollscore"), Size(100)]
        public String Processfincontrollscore
        {
            get { return Fields.Processfincontrollscore[this]; }
            set { Fields.Processfincontrollscore[this] = value; }
        }

        [DisplayName("Reason"), Column("processfincontrollscorecmnts"), Size(100)]
        public String Processfincontrollscorecmnts
        {
            get { return Fields.Processfincontrollscorecmnts[this]; }
            set { Fields.Processfincontrollscorecmnts[this] = value; }
        }

        [DisplayName("Score(1-5)"), Column("responsescore"), Size(100)]
        public String Responsescore
        {
            get { return Fields.Responsescore[this]; }
            set { Fields.Responsescore[this] = value; }
        }

        [DisplayName("Reason"), Column("responsecmnts"), Size(100)]
        public String Responsecmnts
        {
            get { return Fields.Responsecmnts[this]; }
            set { Fields.Responsecmnts[this] = value; }
        }

        [DisplayName("Score(1-5)"), Column("preauditscore"), Size(100)]
        public String Preauditscore
        {
            get { return Fields.Preauditscore[this]; }
            set { Fields.Preauditscore[this] = value; }
        }

        [DisplayName("Reason"), Column("preauditcmnts"), Size(100)]
        public String Preauditcmnts
        {
            get { return Fields.Preauditcmnts[this]; }
            set { Fields.Preauditcmnts[this] = value; }
        }

        [DisplayName("Score(1-5)"), Column("newinitiativescore"), Size(100)]
        public String Newinitiativescore
        {
            get { return Fields.Newinitiativescore[this]; }
            set { Fields.Newinitiativescore[this] = value; }
        }

        [DisplayName("Total Score"), Column("totalscore"), Size(100)]
        public String Totalscore
        {
            get { return Fields.Totalscore[this]; }
            set { Fields.Totalscore[this] = value; }
        }

        [DisplayName("Aod Id"), Column("aodid"), ForeignKey("[dbo].[AOD]", "aodId"), LeftJoin("jAodid"), TextualField("AodidActualcomencementdate")]
        public Int32? Aodid
        {
            get { return Fields.Aodid[this]; }
            set { Fields.Aodid[this] = value; }
        }

        

        [DisplayName("Weightage( In %)"), Column("complianceweightage"), Size(100)]
        public String Complianceweightage
        {
            get { return Fields.Complianceweightage[this]; }
            set { Fields.Complianceweightage[this] = value; }
        }

        [DisplayName("Rating(1-5)"), Column("compliancerating"), Size(100)]
        
        public String Compliancerating
        {
            get { return Fields.Compliancerating[this]; }
            set { Fields.Compliancerating[this] = value; }
        }

        [DisplayName("Weightage( In %)"), Column("processfincontrollweightage"), Size(100)]
        public String Processfincontrollweightage
        {
            get { return Fields.Processfincontrollweightage[this]; }
            set { Fields.Processfincontrollweightage[this] = value; }
        }

        [DisplayName("Rating(1-5)"), Column("processfincontrollrating"), Size(100)]
       
        public String Processfincontrollrating
        {
            get { return Fields.Processfincontrollrating[this]; }
            set { Fields.Processfincontrollrating[this] = value; }
        }

        [DisplayName("Rating(1-5)"), Column("responserating"), Size(100)]
        
        public String Responserating
        {
            get { return Fields.Responserating[this]; }
            set { Fields.Responserating[this] = value; }
        }

        [DisplayName("Weightage( In %)"), Column("responseweightage"), Size(100)]
        public String Responseweightage
        {
            get { return Fields.Responseweightage[this]; }
            set { Fields.Responseweightage[this] = value; }
        }

        [DisplayName("Weightage( In %)"), Column("preauditweightage"), Size(100)]
        public String Preauditweightage
        {
            get { return Fields.Preauditweightage[this]; }
            set { Fields.Preauditweightage[this] = value; }
        }

        [DisplayName("Rating(1-5)"), Column("preauditrating"), Size(100)]
        
        public String Preauditrating
        {
            get { return Fields.Preauditrating[this]; }
            set { Fields.Preauditrating[this] = value; }
        }

        [DisplayName("Reason"), Column("newinitiativecmnts"), Size(100)]
        public String Newinitiativecmnts
        {
            get { return Fields.Newinitiativecmnts[this]; }
            set { Fields.Newinitiativecmnts[this] = value; }
        }

        [DisplayName("Weightage( In %)"), Column("newinitiativeweight"), Size(100)]
        public String Newinitiativeweight
        {
            get { return Fields.Newinitiativeweight[this]; }
            set { Fields.Newinitiativeweight[this] = value; }
        }

        [DisplayName("Rating"), Column("newinitiativerating"), Size(100)]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public String Newinitiativerating
        {
            get { return Fields.Newinitiativerating[this]; }
            set { Fields.Newinitiativerating[this] = value; }
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
            public StringField Newinitiativescore;
            public StringField Totalscore;
            public Int32Field Aodid;
            public StringField Documentrating;
            public StringField Documentweigtage;
            public StringField Complianceweightage;
            public StringField Compliancerating;
            public StringField Processfincontrollweightage;
            public StringField Processfincontrollrating;
            public StringField Responserating;
            public StringField Responseweightage;
            public StringField Preauditweightage;
            public StringField Preauditrating;
            public StringField Newinitiativecmnts;
            public StringField Newinitiativeweight;
            public StringField Newinitiativerating;

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