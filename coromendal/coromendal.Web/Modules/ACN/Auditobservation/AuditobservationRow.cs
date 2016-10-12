

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

    [ConnectionKey("Default"), DisplayName("Auditobservation"), InstanceName("Auditobservation"), TwoLevelCached]
    [ReadPermission(ACN.PermissionKeys.Auditobservation.View)]
    [ModifyPermission(ACN.PermissionKeys.Auditobservation.Modify)]
    [DeletePermission(ACN.PermissionKeys.Auditobservation.Delete)]
    [LookupScript("ACN.AuditobservationRow")]
    public sealed class AuditobservationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Auditobservation Id"), Column("auditobservationID"), Identity]
        public Int32? AuditobservationId
        {
            get { return Fields.AuditobservationId[this]; }
            set { Fields.AuditobservationId[this] = value; }
        }

        [DisplayName("Acn"), Column("acnId"), ForeignKey("[dbo].[Acn]", "acnID"), LeftJoin("jAcn"), TextualField("AcnAcnTilte")]
        [LookupEditor(typeof(AcnRow))]
        public Int32? AcnId
        {
            get { return Fields.AcnId[this]; }
            set { Fields.AcnId[this] = value; }
        }

        [DisplayName("Observation Title"), Column("observationtitle"), Size(10), QuickSearch]
        public String Observationtitle
        {
            get { return Fields.Observationtitle[this]; }
            set { Fields.Observationtitle[this] = value; }
        }

        [DisplayName("synopsis"), Column("observationsynopsis"), Size(10)]
        public String Observationsynopsis
        {
            get { return Fields.Observationsynopsis[this]; }
            set { Fields.Observationsynopsis[this] = value; }
        }

        [DisplayName("Detailed Observation"), Column("detailedobservation"), Size(10)]
        public String Detailedobservation
        {
            get { return Fields.Detailedobservation[this]; }
            set { Fields.Detailedobservation[this] = value; }
        }

        [DisplayName("Category"), Column("category")]
        [LookupEditor(typeof(CategoryRow))]
        public Int32? Category
        {
            get { return Fields.Category[this]; }
            set { Fields.Category[this] = value; }
        }

        [DisplayName("Risk Rating")]
        [LookupEditor(typeof(RiskratingRow))]
        public Int32? RiskRating
        {
            get { return Fields.RiskRating[this]; }
            set { Fields.RiskRating[this] = value; }
        }

        [DisplayName("Agree this Observation"), Column("agreeobservation"), Size(10)]
        [LookupEditor(typeof(ConformationRow))]
        public Int32? Agreeobservation
        {
            get { return Fields.Agreeobservation[this]; }
            set { Fields.Agreeobservation[this] = value; }
        }

        [DisplayName("Justification"), Column("justification")]
       
        public String Justification
        {
            get { return Fields.Justification[this]; }
            set { Fields.Justification[this] = value; }
        }
        [LookupEditor(typeof(ConformationRow))]
        [DisplayName("Agree this Suggestion"), Column("suggestion"), Size(10)]
        public Int32? Suggestion
        {
            get { return Fields.Suggestion[this]; }
            set { Fields.Suggestion[this] = value; }
        }

        [DisplayName("Alternate Plan"), Column("alternateplan"), Size(10)]
        public String Alternateplan
        {
            get { return Fields.Alternateplan[this]; }
            set { Fields.Alternateplan[this] = value; }
        }

        [DisplayName("Name"), Column("name"), Size(10)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Email"), Column("email"), Size(10)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Target Date"), Column("targetdate"), Size(10)]
        public String Targetdate
        {
            get { return Fields.Targetdate[this]; }
            set { Fields.Targetdate[this] = value; }
        }



        [DisplayName("Acn Acn Tilte"), Expression("jAcn.[AcnTilte]")]
        public String AcnAcnTilte
        {
            get { return Fields.AcnAcnTilte[this]; }
            set { Fields.AcnAcnTilte[this] = value; }
        }

        [DisplayName("Acn Phase No"), Expression("jAcn.[PhaseNo]")]
        public Int32? AcnPhaseNo
        {
            get { return Fields.AcnPhaseNo[this]; }
            set { Fields.AcnPhaseNo[this] = value; }
        }

        [DisplayName("Acn Location"), Expression("jAcn.[location]")]
        public String AcnLocation
        {
            get { return Fields.AcnLocation[this]; }
            set { Fields.AcnLocation[this] = value; }
        }

        [DisplayName("Acn Fromdate"), Expression("jAcn.[Fromdate]")]
        public String AcnFromdate
        {
            get { return Fields.AcnFromdate[this]; }
            set { Fields.AcnFromdate[this] = value; }
        }

        [DisplayName("Acn Todate"), Expression("jAcn.[Todate]")]
        public String AcnTodate
        {
            get { return Fields.AcnTodate[this]; }
            set { Fields.AcnTodate[this] = value; }
        }

        [DisplayName("Acn Periodfrom"), Expression("jAcn.[Periodfrom]")]
        public String AcnPeriodfrom
        {
            get { return Fields.AcnPeriodfrom[this]; }
            set { Fields.AcnPeriodfrom[this] = value; }
        }

        [DisplayName("Acn Periodto"), Expression("jAcn.[Periodto]")]
        public String AcnPeriodto
        {
            get { return Fields.AcnPeriodto[this]; }
            set { Fields.AcnPeriodto[this] = value; }
        }

        [DisplayName("Acn Creationdate"), Expression("jAcn.[creationdate]")]
        public String AcnCreationdate
        {
            get { return Fields.AcnCreationdate[this]; }
            set { Fields.AcnCreationdate[this] = value; }
        }
        [DisplayName("Root case"), ClientSide, MasterDetailRelation(foreignKey: "auditobservationID")]
        public List<RootcauseRow> rootList
        {
            get { return Fields.rootList[this]; }
            set { Fields.rootList[this] = value; }
        }
        [DisplayName("Suggestion case"), ClientSide, MasterDetailRelation(foreignKey: "auditobservationID")]
        public List<SuggestionRow> SuggestionList
        {
            get { return Fields.SuggestionList[this]; }
            set { Fields.SuggestionList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AuditobservationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Observationtitle; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AuditobservationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AuditobservationId;
            public Int32Field AcnId;
            public StringField Observationtitle;
            public StringField Observationsynopsis;
            public StringField Detailedobservation;
            public Int32Field Category;
            public Int32Field RiskRating;
            public Int32Field Agreeobservation;
            public StringField Justification;
            public Int32Field Suggestion;
            public StringField Alternateplan;
            public StringField Name;
            public StringField Email;
            public StringField Targetdate;

            public StringField AcnAcnTilte;
            public Int32Field AcnPhaseNo;
            public StringField AcnLocation;
            public StringField AcnFromdate;
            public StringField AcnTodate;
            public StringField AcnPeriodfrom;
            public StringField AcnPeriodto;
            public StringField AcnCreationdate;
            public RowListField<RootcauseRow> rootList;
            public RowListField<SuggestionRow> SuggestionList;

            public RowFields()
                : base("[dbo].[Auditobservation]")
            {
                LocalTextPrefix = "ACN.Auditobservation";
            }
        }
    }
}