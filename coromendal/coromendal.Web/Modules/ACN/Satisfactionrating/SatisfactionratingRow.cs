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

        [DisplayName(""), Column("documentscore")]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public Int32? Documentscore
        {
            get { return Fields.Documentscore[this]; }
            set { Fields.Documentscore[this] = value; }
        }

        [DisplayName(""), Column("documentcomments"), Size(100), QuickSearch]        
        public String Documentcomments
        {
            get { return Fields.Documentcomments[this]; }
            set { Fields.Documentcomments[this] = value; }
        }
        [DisplayName(""), Column("documentrating"), Size(100)]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public String Documentrating
        {
            get { return Fields.Documentrating[this]; }
            set { Fields.Documentrating[this] = value; }
        }

        [DisplayName(""), Column("documentweigtage"), Size(100)]
        [LookupEditor(typeof(PercentageRow))]
        public String Documentweigtage
        {
            get { return Fields.Documentweigtage[this]; }
            set { Fields.Documentweigtage[this] = value; }
        }

        [DisplayName(""), Column("compliancescore"), Size(100)]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public String Compliancescore
        {
            get { return Fields.Compliancescore[this]; }
            set { Fields.Compliancescore[this] = value; }
        }

        [DisplayName(""), Column("compliancecomment"), Size(100)]
        public String Compliancecomment
        {
            get { return Fields.Compliancecomment[this]; }
            set { Fields.Compliancecomment[this] = value; }
        }

        [DisplayName(""), Column("processfincontrollscore"), Size(100)]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public String Processfincontrollscore
        {
            get { return Fields.Processfincontrollscore[this]; }
            set { Fields.Processfincontrollscore[this] = value; }
        }

        [DisplayName(""), Column("processfincontrollscorecmnts"), Size(100)]
        public String Processfincontrollscorecmnts
        {
            get { return Fields.Processfincontrollscorecmnts[this]; }
            set { Fields.Processfincontrollscorecmnts[this] = value; }
        }

        [DisplayName(""), Column("responsescore"), Size(100)]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public String Responsescore
        {
            get { return Fields.Responsescore[this]; }
            set { Fields.Responsescore[this] = value; }
        }

        [DisplayName(""), Column("responsecmnts"), Size(100)]
        public String Responsecmnts
        {
            get { return Fields.Responsecmnts[this]; }
            set { Fields.Responsecmnts[this] = value; }
        }

        [DisplayName(""), Column("preauditscore"), Size(100)]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public String Preauditscore
        {
            get { return Fields.Preauditscore[this]; }
            set { Fields.Preauditscore[this] = value; }
        }

        [DisplayName(""), Column("preauditcmnts"), Size(100)]
        public String Preauditcmnts
        {
            get { return Fields.Preauditcmnts[this]; }
            set { Fields.Preauditcmnts[this] = value; }
        }

        [DisplayName(""), Column("newinitiativescore"), Size(100)]
        [LookupEditor(typeof(FeedbackvalueRow))]
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

        

        [DisplayName(""), Column("complianceweightage"), Size(100)]
        [LookupEditor(typeof(PercentageRow))]
        public String Complianceweightage
        {
            get { return Fields.Complianceweightage[this]; }
            set { Fields.Complianceweightage[this] = value; }
        }

        [DisplayName(""), Column("compliancerating"), Size(100)]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public String Compliancerating
        {
            get { return Fields.Compliancerating[this]; }
            set { Fields.Compliancerating[this] = value; }
        }

        [DisplayName(""), Column("processfincontrollweightage"), Size(100)]
        [LookupEditor(typeof(PercentageRow))]
        public String Processfincontrollweightage
        {
            get { return Fields.Processfincontrollweightage[this]; }
            set { Fields.Processfincontrollweightage[this] = value; }
        }

        [DisplayName(""), Column("processfincontrollrating"), Size(100)]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public String Processfincontrollrating
        {
            get { return Fields.Processfincontrollrating[this]; }
            set { Fields.Processfincontrollrating[this] = value; }
        }

        [DisplayName(""), Column("responserating"), Size(100)]
        [LookupEditor(typeof(FeedbackvalueRow))]
        public String Responserating
        {
            get { return Fields.Responserating[this]; }
            set { Fields.Responserating[this] = value; }
        }

        [DisplayName(""), Column("responseweightage"), Size(100)]
        [LookupEditor(typeof(PercentageRow))]
        public String Responseweightage
        {
            get { return Fields.Responseweightage[this]; }
            set { Fields.Responseweightage[this] = value; }
        }

        [DisplayName(""), Column("preauditweightage"), Size(100)]
        [LookupEditor(typeof(PercentageRow))]
        public String Preauditweightage
        {
            get { return Fields.Preauditweightage[this]; }
            set { Fields.Preauditweightage[this] = value; }
        }

        [DisplayName(""), Column("preauditrating"), Size(100)]
        [LookupEditor(typeof(FeedbackvalueRow))]

        public String Preauditrating
        {
            get { return Fields.Preauditrating[this]; }
            set { Fields.Preauditrating[this] = value; }
        }

        [DisplayName(""), Column("newinitiativecmnts"), Size(100)]
        public String Newinitiativecmnts
        {
            get { return Fields.Newinitiativecmnts[this]; }
            set { Fields.Newinitiativecmnts[this] = value; }
        }

        [DisplayName(""), Column("newinitiativeweight"), Size(100)]
        [LookupEditor(typeof(PercentageRow))]
        public String Newinitiativeweight
        {
            get { return Fields.Newinitiativeweight[this]; }
            set { Fields.Newinitiativeweight[this] = value; }
        }

        [DisplayName(""), Column("newinitiativerating"), Size(100)]
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
        [DisplayName("Score assigned by auditor(1 - 5)"), ReadOnly(true)]
        public String scorelabel
        {
            get { return Fields.scorelabel[this]; }
            set { Fields.scorelabel[this] = value; }
        }
        [DisplayName("Reasons for score below 3"), ReadOnly(true)]
        public String comeentslabel
        {
            get { return Fields.comeentslabel[this]; }
            set { Fields.comeentslabel[this] = value; }
        }
        [DisplayName("Rating"), ReadOnly(true)]
        public String ratinglabel
        {
            get { return Fields.ratinglabel[this]; }
            set { Fields.ratinglabel[this] = value; }
        }
        [DisplayName("Weightage"), ReadOnly(true)]
        public String weightlabel
        {
            get { return Fields.AodidSbu[this]; }
            set { Fields.AodidSbu[this] = value; }
        }
        [DisplayName("totalscore3")]
        public String totalscore3
        {
            get { return Fields.AodidSbu[this]; }
            set { Fields.AodidSbu[this] = value; }
        }
        [DisplayName("totalscore1")]
        public String totalscore1
        {
            get { return Fields.AodidSbu[this]; }
            set { Fields.AodidSbu[this] = value; }
        }
        [DisplayName("totalscore2")]
        public String totalscore2
        {
            get { return Fields.AodidSbu[this]; }
            set { Fields.AodidSbu[this] = value; }
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

            public StringField scorelabel;
            public StringField comeentslabel;
            public StringField ratinglabel;
            public StringField weightlabel;
            public StringField totalscore1;
            public StringField totalscore2;
            public StringField totalscore3;

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