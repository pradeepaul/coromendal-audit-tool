

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
    using ACN;


    [ConnectionKey("Default"), DisplayName("Assignment Note"), InstanceName("Acn"), TwoLevelCached]
    [ReadPermission(ACN.PermissionKeys.NewAcn.View)]
    [ModifyPermission(ACN.PermissionKeys.NewAcn.Modify)]
    [DeletePermission(ACN.PermissionKeys.NewAcn.Delete)]
    [LookupScript("ACN.Acn")]
    public sealed class AcnRow : Row, IIdRow, INameRow
    {
        [DisplayName("Acn Id"), Column("acnID"), Identity]
        public Int32? AcnId
        {
            get { return Fields.AcnId[this]; }
            set { Fields.AcnId[this] = value; }
        }
        [DisplayName("Phase No"), Size(40), QuickSearch]
        public Int32? PhaseNo
        {
            get { return Fields.PhaseNo[this]; }
            set { Fields.PhaseNo[this] = value; }
        }

        [DisplayName("Title"), Size(40), QuickSearch]
        public String AcnTilte
        {
            get { return Fields.AcnTilte[this]; }
            set { Fields.AcnTilte[this] = value; }
        }
        [LookupEditor(typeof(AcnAuditorRow), Multiple = true), ClientSide]
        [LinkingSetRelation(typeof(AcnAuditorRefRow), "acnID", "AcnAuditorID")]
        [MinSelectLevel(SelectLevel.Details)]
        public List<Int32> Auditor
        {
            get { return Fields.Auditor[this]; }
            set { Fields.Auditor[this] = value; }
        }
        [LookupEditor(typeof(AcnAuditeeRow), Multiple = true), ClientSide]
        [LinkingSetRelation(typeof(AcnAuditeeRefRow), "acnID", "AcnAuditeeID")]
        [MinSelectLevel(SelectLevel.Details)]
        public List<Int32> Auditee
        {
            get { return Fields.Auditee[this]; }
            set { Fields.Auditee[this] = value; }
        }
       
        
       [DisplayName("Period From"), Size(40), QuickSearch]
        public String Periodfrom
        {
            get { return Fields.Periodfrom[this]; }
            set { Fields.Periodfrom[this] = value; }
        }
        [DisplayName("Period To"), Size(40), QuickSearch]
        public String Periodto
        {
            get { return Fields.Periodto[this]; }
            set { Fields.Periodto[this] = value; }
        }
        [DisplayName("From Date"), Size(40), QuickSearch]
        public String Fromdate
        {
            get { return Fields.Fromdate[this]; }
            set { Fields.Fromdate[this] = value; }
        }
        [DisplayName("To Date"), Size(40), QuickSearch]
        public String Todate
        {
            get { return Fields.Todate[this]; }
            set { Fields.Todate[this] = value; }
        }
        [DisplayName("Location"), Size(40), QuickSearch]
        public String location
        {
            get { return Fields.location[this]; }
            set { Fields.location[this] = value; }
        }
        [DisplayName("Creation Date"), Size(40), QuickSearch]
        public String creationdate
        {
            get { return Fields.creationdate[this]; }
            set { Fields.creationdate[this] = value; }
        }
        [DisplayName("Scope List"), MasterDetailRelation(foreignKey: "acnId"), ClientSide]
        public List<ScopeRow> ScopeList
        {
            get { return Fields.ScopeList[this]; }
            set { Fields.ScopeList[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.AcnId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AcnTilte; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AcnRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AcnId;
            public StringField AcnTilte;
            public ListField<Int32> Auditor;
            public ListField<Int32> Auditee;

            public Int32Field PhaseNo;
            public StringField location;
            public StringField Fromdate;
            public StringField Todate;
            public StringField Periodfrom;
            public StringField Periodto;
            public StringField creationdate;
            public RowListField<ScopeRow> ScopeList;

           

            public RowFields()
                : base("[dbo].[Acn]")
            {
                LocalTextPrefix = "ACN.Acn";
            }
        }
    }
}