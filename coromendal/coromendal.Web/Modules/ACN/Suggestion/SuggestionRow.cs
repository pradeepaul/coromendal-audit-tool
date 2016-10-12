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

    [ConnectionKey("Default"), DisplayName("Suggestion"), InstanceName("Suggestion"), TwoLevelCached]
    [ReadPermission(ACN.PermissionKeys.Suggestion.View)]
    [ModifyPermission(ACN.PermissionKeys.Suggestion.Modify)]
    [DeletePermission(ACN.PermissionKeys.Suggestion.Delete)]
    [LookupScript("ACN.SuggestionRow")]
    public sealed class SuggestionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Suggestion Id"), Column("suggestionID"), Identity]
        public Int32? SuggestionId
        {
            get { return Fields.SuggestionId[this]; }
            set { Fields.SuggestionId[this] = value; }
        }

        [DisplayName("Auditobservation"), Column("auditobservationID"), ForeignKey("[dbo].[Auditobservation]", "auditobservationID"), LeftJoin("jAuditobservation"), TextualField("AuditobservationObservationtitle")]
        [LookupEditor(typeof(AuditobservationRow))]
        public Int32? AuditobservationId
        {
            get { return Fields.AuditobservationId[this]; }
            set { Fields.AuditobservationId[this] = value; }
        }
        [SetFieldFlags(FieldFlags.Trim)]
        [DisplayName("Suggestion"), Column("suggestion"), Size(300), QuickSearch]
        public String Suggestion
        {
            get { return Fields.Suggestion[this]; }
            set { Fields.Suggestion[this] = value; }
        }

        [DisplayName("Auditobservation Acn Id"), Expression("jAuditobservation.[acnId]")]
        public Int32? AuditobservationAcnId
        {
            get { return Fields.AuditobservationAcnId[this]; }
            set { Fields.AuditobservationAcnId[this] = value; }
        }

        [DisplayName("Auditobservation Observationtitle"), Expression("jAuditobservation.[observationtitle]")]
        public String AuditobservationObservationtitle
        {
            get { return Fields.AuditobservationObservationtitle[this]; }
            set { Fields.AuditobservationObservationtitle[this] = value; }
        }

        [DisplayName("Auditobservation Observationsynopsis"), Expression("jAuditobservation.[observationsynopsis]")]
        public String AuditobservationObservationsynopsis
        {
            get { return Fields.AuditobservationObservationsynopsis[this]; }
            set { Fields.AuditobservationObservationsynopsis[this] = value; }
        }

        [DisplayName("Auditobservation Detailedobservation"), Expression("jAuditobservation.[detailedobservation]")]
        public String AuditobservationDetailedobservation
        {
            get { return Fields.AuditobservationDetailedobservation[this]; }
            set { Fields.AuditobservationDetailedobservation[this] = value; }
        }

        [DisplayName("Auditobservation Category"), Expression("jAuditobservation.[category]")]
        public Int32? AuditobservationCategory
        {
            get { return Fields.AuditobservationCategory[this]; }
            set { Fields.AuditobservationCategory[this] = value; }
        }

        [DisplayName("Auditobservation Risk Rating"), Expression("jAuditobservation.[RiskRating]")]
        public Int32? AuditobservationRiskRating
        {
            get { return Fields.AuditobservationRiskRating[this]; }
            set { Fields.AuditobservationRiskRating[this] = value; }
        }

        [DisplayName("Auditobservation Agreeobservation"), Expression("jAuditobservation.[agreeobservation]")]
        public String AuditobservationAgreeobservation
        {
            get { return Fields.AuditobservationAgreeobservation[this]; }
            set { Fields.AuditobservationAgreeobservation[this] = value; }
        }

        [DisplayName("Auditobservation Justification"), Expression("jAuditobservation.[justification]")]
        public Int32? AuditobservationJustification
        {
            get { return Fields.AuditobservationJustification[this]; }
            set { Fields.AuditobservationJustification[this] = value; }
        }

        [DisplayName("Auditobservation Suggestion"), Expression("jAuditobservation.[suggestion]")]
        public String AuditobservationSuggestion
        {
            get { return Fields.AuditobservationSuggestion[this]; }
            set { Fields.AuditobservationSuggestion[this] = value; }
        }

        [DisplayName("Auditobservation Alternateplan"), Expression("jAuditobservation.[alternateplan]")]
        public String AuditobservationAlternateplan
        {
            get { return Fields.AuditobservationAlternateplan[this]; }
            set { Fields.AuditobservationAlternateplan[this] = value; }
        }

        [DisplayName("Auditobservation Name"), Expression("jAuditobservation.[name]")]
        public String AuditobservationName
        {
            get { return Fields.AuditobservationName[this]; }
            set { Fields.AuditobservationName[this] = value; }
        }

        [DisplayName("Auditobservation Email"), Expression("jAuditobservation.[email]")]
        public String AuditobservationEmail
        {
            get { return Fields.AuditobservationEmail[this]; }
            set { Fields.AuditobservationEmail[this] = value; }
        }

        [DisplayName("Auditobservation Targetdate"), Expression("jAuditobservation.[targetdate]")]
        public String AuditobservationTargetdate
        {
            get { return Fields.AuditobservationTargetdate[this]; }
            set { Fields.AuditobservationTargetdate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SuggestionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Suggestion; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SuggestionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SuggestionId;
            public Int32Field AuditobservationId;
            public StringField Suggestion;

            public Int32Field AuditobservationAcnId;
            public StringField AuditobservationObservationtitle;
            public StringField AuditobservationObservationsynopsis;
            public StringField AuditobservationDetailedobservation;
            public Int32Field AuditobservationCategory;
            public Int32Field AuditobservationRiskRating;
            public StringField AuditobservationAgreeobservation;
            public Int32Field AuditobservationJustification;
            public StringField AuditobservationSuggestion;
            public StringField AuditobservationAlternateplan;
            public StringField AuditobservationName;
            public StringField AuditobservationEmail;
            public StringField AuditobservationTargetdate;

            public RowFields()
                : base("[dbo].[Suggestion]")
            {
                LocalTextPrefix = "ACN.Suggestion";
            }
        }
    }
}