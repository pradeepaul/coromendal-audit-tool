

namespace coromendal.ACN.Entities
{
    using Newtonsoft.Json;
    using Northwind;
    using Northwind.Entities;
    using Scripts;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Observation"), InstanceName("finalobservation"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class FinalobservationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Finalobservation Id"), Column("finalobservationID"), Identity]
        public Int32? FinalobservationId
        {
            get { return Fields.FinalobservationId[this]; }
            set { Fields.FinalobservationId[this] = value; }
        }

        [DisplayName("Audit Observation ID"), ReadOnly(true), Column("observationid"), ForeignKey("[dbo].[Auditobservation]", "auditobservationID"), LeftJoin("jObservationid"), TextualField("ObservationidObservationtitle")]
        public Int32? Observationid
        {
            get { return Fields.Observationid[this]; }
            set { Fields.Observationid[this] = value; }
        }

        [DisplayName("Assignment"), Column("acnId"),ReadOnly(true)]
        [LookupEditor(typeof(AcnLookup))]
        public Int32? AcnId
        {
            get { return Fields.AcnId[this]; }
            set { Fields.AcnId[this] = value; }
        }

        [DisplayName("Audit Scope"), Column("scope"), ReadOnly(true)]
        [LookupEditor(typeof(ScopeRow))]
        public Int32? Scope
        {
            get { return Fields.Scope[this]; }
            set { Fields.Scope[this] = value; }
        }

        [DisplayName("Observation Title"), Column("observationtitle"), Size(300), QuickSearch, ReadOnly(true)]
        public String Observationtitle
        {
            get { return Fields.Observationtitle[this]; }
            set { Fields.Observationtitle[this] = value; }
        }

        [DisplayName("Synopsis"), Column("observationsynopsis"), Size(300), ReadOnly(true)]
        public String Observationsynopsis
        {
            get { return Fields.Observationsynopsis[this]; }
            set { Fields.Observationsynopsis[this] = value; }
        }

        [DisplayName("Detailedobservation"), Column("detailedobservation"), Size(300)]
        public String Detailedobservation
        {
            get { return Fields.Detailedobservation[this]; }
            set { Fields.Detailedobservation[this] = value; }
        }

        [DisplayName("Category"), Column("category"), ReadOnly(true)]
        public Int32? Category
        {
            get { return Fields.Category[this]; }
            set { Fields.Category[this] = value; }
        }

        [DisplayName("Risk Rating"), Size(300), ReadOnly(true)]
        public String RiskRating
        {
            get { return Fields.RiskRating[this]; }
            set { Fields.RiskRating[this] = value; }
        }

        [DisplayName("Agreeobservation"), Column("agreeobservation")]
        [LookupEditor(typeof(ConformationRow))]
        public Int32? Agreeobservation
        {
            get { return Fields.Agreeobservation[this]; }
            set { Fields.Agreeobservation[this] = value; }
        }

        [DisplayName("Justification"), Column("justification"), Size(300)]
        public String Justification
        {
            get { return Fields.Justification[this]; }
            set { Fields.Justification[this] = value; }
        }

        [DisplayName("Suggestion"), Column("suggestion")]
        [LookupEditor(typeof(ConformationRow))]
        public Int32? Suggestion
        {
            get { return Fields.Suggestion[this]; }
            set { Fields.Suggestion[this] = value; }
        }

        [DisplayName("Alternateplan"), Column("alternateplan"), Size(300)]
        public String Alternateplan
        {
            get { return Fields.Alternateplan[this]; }
            set { Fields.Alternateplan[this] = value; }
        }

        [DisplayName("Name"), Column("name"), Size(300), ReadOnly(true)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Email"), Column("email"), Size(300), ReadOnly(true)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Targetdate"), Column("targetdate"), Size(300), ReadOnly(true)]
        public String Targetdate
        {
            get { return Fields.Targetdate[this]; }
            set { Fields.Targetdate[this] = value; }
        }

        [DisplayName("Consequence"),ReadOnly(true)]
        [LookupEditor(typeof(RiskratingRow))]
        public Int32? Consequence
        {
            get { return Fields.Consequence[this]; }
            set { Fields.Consequence[this] = value; }
        }

        [DisplayName("Likelihood"), ReadOnly(true)]
        [LookupEditor(typeof(LikeliwoodvalueRow))]
        public Int32? Likelihood
        {
            get { return Fields.Likelihood[this]; }
            set { Fields.Likelihood[this] = value; }
        }

        [DisplayName("Observationid Acn Id"), Expression("jObservationid.[acnId]")]
        public Int32? ObservationidAcnId
        {
            get { return Fields.ObservationidAcnId[this]; }
            set { Fields.ObservationidAcnId[this] = value; }
        }

        [DisplayName("Observationid Scope"), Expression("jObservationid.[scope]")]
        public Int32? ObservationidScope
        {
            get { return Fields.ObservationidScope[this]; }
            set { Fields.ObservationidScope[this] = value; }
        }

        [DisplayName("Observationid Observationtitle"), Expression("jObservationid.[observationtitle]")]
        public String ObservationidObservationtitle
        {
            get { return Fields.ObservationidObservationtitle[this]; }
            set { Fields.ObservationidObservationtitle[this] = value; }
        }

        [DisplayName("Observationid Observationsynopsis"), Expression("jObservationid.[observationsynopsis]")]
        public String ObservationidObservationsynopsis
        {
            get { return Fields.ObservationidObservationsynopsis[this]; }
            set { Fields.ObservationidObservationsynopsis[this] = value; }
        }

        [DisplayName("Observationid Detailedobservation"), Expression("jObservationid.[detailedobservation]")]
        public String ObservationidDetailedobservation
        {
            get { return Fields.ObservationidDetailedobservation[this]; }
            set { Fields.ObservationidDetailedobservation[this] = value; }
        }

        [DisplayName("Observationid Category"), Expression("jObservationid.[category]")]
        public Int32? ObservationidCategory
        {
            get { return Fields.ObservationidCategory[this]; }
            set { Fields.ObservationidCategory[this] = value; }
        }

        [DisplayName("Observationid Risk Rating"), Expression("jObservationid.[RiskRating]")]
        public String ObservationidRiskRating
        {
            get { return Fields.ObservationidRiskRating[this]; }
            set { Fields.ObservationidRiskRating[this] = value; }
        }

        [DisplayName("Observationid Agreeobservation"), Expression("jObservationid.[agreeobservation]")]
        public Int32? ObservationidAgreeobservation
        {
            get { return Fields.ObservationidAgreeobservation[this]; }
            set { Fields.ObservationidAgreeobservation[this] = value; }
        }

        [DisplayName("Observationid Justification"), Expression("jObservationid.[justification]")]
        public String ObservationidJustification
        {
            get { return Fields.ObservationidJustification[this]; }
            set { Fields.ObservationidJustification[this] = value; }
        }

        [DisplayName("Observationid Suggestion"), Expression("jObservationid.[suggestion]")]
        public Int32? ObservationidSuggestion
        {
            get { return Fields.ObservationidSuggestion[this]; }
            set { Fields.ObservationidSuggestion[this] = value; }
        }

        [DisplayName("Observationid Alternateplan"), Expression("jObservationid.[alternateplan]")]
        public String ObservationidAlternateplan
        {
            get { return Fields.ObservationidAlternateplan[this]; }
            set { Fields.ObservationidAlternateplan[this] = value; }
        }

        [DisplayName("Observationid Name"), Expression("jObservationid.[name]")]
        public String ObservationidName
        {
            get { return Fields.ObservationidName[this]; }
            set { Fields.ObservationidName[this] = value; }
        }

        [DisplayName("Observationid Email"), Expression("jObservationid.[email]")]
        public String ObservationidEmail
        {
            get { return Fields.ObservationidEmail[this]; }
            set { Fields.ObservationidEmail[this] = value; }
        }

        [DisplayName("Observationid Targetdate"), Expression("jObservationid.[targetdate]")]
        public String ObservationidTargetdate
        {
            get { return Fields.ObservationidTargetdate[this]; }
            set { Fields.ObservationidTargetdate[this] = value; }
        }

        [DisplayName("Observationid Consequence"), Expression("jObservationid.[Consequence]")]
        public Int32? ObservationidConsequence
        {
            get { return Fields.ObservationidConsequence[this]; }
            set { Fields.ObservationidConsequence[this] = value; }
        }

        [DisplayName("Observationid Likelihood"), Expression("jObservationid.[Likelihood]")]
        public Int32? ObservationidLikelihood
        {
            get { return Fields.ObservationidLikelihood[this]; }
            set { Fields.ObservationidLikelihood[this] = value; }
        }

        [DisplayName("Observationid Send"), Expression("jObservationid.[send]")]
        public String ObservationidSend
        {
            get { return Fields.ObservationidSend[this]; }
            set { Fields.ObservationidSend[this] = value; }
        }
        [DisplayName("Root cause"), ClientSide, MasterDetailRelation(foreignKey: "auditobservationID"), NotNull, Updatable(false)]
        public List<RootcauseRow> rootList
        {
            get { return Fields.rootList[this]; }
            set { Fields.rootList[this] = value; }
        }
        [DisplayName("Suggestion case"), ClientSide, MasterDetailRelation(foreignKey: "auditobservationID"), Updatable(false)]
        public List<SuggestionRow> SuggestionList
        {
            get { return Fields.SuggestionList[this]; }
            set { Fields.SuggestionList[this] = value; }
        }
        [NotesEditor, ClientSide]
        [DisplayName("Detailed Observation"),Updatable(false)]
        public List<NoteRow> Detailedobservation1
        {
            get { return Fields.Detailedobservation1[this]; }
            set { Fields.Detailedobservation1[this] = value; }
        }
        [NotesEditor, ClientSide]
        [DisplayName("Comments")]
        public List<NoteRow> Comments
        {
            get { return Fields.Detailedobservation1[this]; }
            set { Fields.Detailedobservation1[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FinalobservationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Observationtitle; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FinalobservationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FinalobservationId;
            public Int32Field Observationid;
            public Int32Field AcnId;
            public Int32Field Scope;
            public StringField Observationtitle;
            public StringField Observationsynopsis;
            public StringField Detailedobservation;
            public Int32Field Category;
            public StringField RiskRating;
            public Int32Field Agreeobservation;
            public StringField Justification;
            public Int32Field Suggestion;
            public StringField Alternateplan;
            public StringField Name;
            public StringField Email;
            public StringField Targetdate;
            public Int32Field Consequence;
            public Int32Field Likelihood;

            public Int32Field ObservationidAcnId;
            public Int32Field ObservationidScope;
            public StringField ObservationidObservationtitle;
            public StringField ObservationidObservationsynopsis;
            public StringField ObservationidDetailedobservation;
            public Int32Field ObservationidCategory;
            public StringField ObservationidRiskRating;
            public Int32Field ObservationidAgreeobservation;
            public StringField ObservationidJustification;
            public Int32Field ObservationidSuggestion;
            public StringField ObservationidAlternateplan;
            public StringField ObservationidName;
            public StringField ObservationidEmail;
            public StringField ObservationidTargetdate;
            public Int32Field ObservationidConsequence;
            public Int32Field ObservationidLikelihood;
            public StringField ObservationidSend;
            public RowListField<RootcauseRow> rootList;
            public RowListField<SuggestionRow> SuggestionList;
            public RowListField<NoteRow> Detailedobservation1;
            public RowListField<NoteRow> Comments;

            public RowFields()
                : base("[dbo].[finalobservation]")
            {
                LocalTextPrefix = "ACN.Finalobservation";
            }
        }
    }
}