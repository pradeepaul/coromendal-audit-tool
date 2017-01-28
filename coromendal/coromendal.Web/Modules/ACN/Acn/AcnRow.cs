

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
    using Administration.Entities;
    using Administration.Scripts;

    [ConnectionKey("Default"), DisplayName("Assignment Note"), InstanceName("Acn"), TwoLevelCached]
    [ReadPermission(ACN.PermissionKeys.Acn.View)]
    [ModifyPermission(ACN.PermissionKeys.Acn.Modify)]
    [DeletePermission(ACN.PermissionKeys.Acn.Delete)]
    [LookupScript("ACN.Acn")]
    public sealed class AcnRow : Row, IIdRow, INameRow
    {
        [DisplayName("Assignment"), Column("acnID"), Identity]
        
        public Int32? AcnId
        {
            get { return Fields.AcnId[this]; }
            set { Fields.AcnId[this] = value; }
        }
        [DisplayName("Management Audit will be taking up phase No."), Size(40), QuickSearch]
        public Int32? PhaseNo
        {
            get { return Fields.PhaseNo[this]; }
            set { Fields.PhaseNo[this] = value; }
        }

        [DisplayName("audit of"), Size(40), QuickSearch]
        public String AcnTilte
        {
            get { return Fields.AcnTilte[this]; }
            set { Fields.AcnTilte[this] = value; }
        }

        [DisplayName("Preview"), Column("preview"), Size(10)]
        public String Send
        {
            get { return Fields.send[this]; }
            set { Fields.send[this] = value; }
        }
        [DisplayName("Send"), Column("send"), Size(10)]
        public String Preview
        {
            get { return Fields.Preview[this]; }
            set { Fields.Preview[this] = value; }
        }

        [LookupEditor(typeof(AuditeeUserLookup), Multiple = true), ClientSide]
        [LinkingSetRelation(typeof(AcnAuditorRefRow), "acnID", "AcnAuditorID")]
        [MinSelectLevel(SelectLevel.Details)]
        [DisplayName("Auditor"), Size(40), QuickSearch]
        public List<Int32> Auditor
        {
            get { return Fields.Auditor[this]; }
            set { Fields.Auditor[this] = value; }
        }
        [LookupEditor(typeof(UserLookup1), Multiple = true), ClientSide]
        [LinkingSetRelation(typeof(AcnAuditeeRefRow), "acnID", "AcnAuditeeID")]
        [MinSelectLevel(SelectLevel.Details)]
        [DisplayName("Auditee"), Size(40), QuickSearch]
        public List<Int32> Auditee
        {
            get { return Fields.Auditee[this]; }
            set { Fields.Auditee[this] = value; }
        }
       
        
       [DisplayName("for the period"), Size(40), QuickSearch]
        public String Periodfrom
        {
            get { return Fields.Periodfrom[this]; }
            set { Fields.Periodfrom[this] = value; }
        }
        [DisplayName("to"), Size(40), QuickSearch]
        public String Periodto
        {
            get { return Fields.Periodto[this]; }
            set { Fields.Periodto[this] = value; }
        }
        [DisplayName("from "), Size(40), QuickSearch]
        public String Fromdate
        {
            get { return Fields.Fromdate[this]; }
            set { Fields.Fromdate[this] = value; }
        }
        [DisplayName("to"), Size(40), QuickSearch]
        public String Todate
        {
            get { return Fields.Todate[this]; }
            set { Fields.Todate[this] = value; }
        }
        [DisplayName("at"), Size(40), QuickSearch]
        public String location
        {
            get { return Fields.location[this]; }
            set { Fields.location[this] = value; }
        }
        [DisplayName("Assignment Creation Date"), Size(40), QuickSearch]
        public String creationdate
        {
            get { return Fields.creationdate[this]; }
            set { Fields.creationdate[this] = value; }
        }
        [DisplayName("Audit Scope List"), MasterDetailRelation(foreignKey: "acnId"), ClientSide]
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
            public StringField Preview;
            public StringField send;



            public RowFields()
                : base("[dbo].[Acn]")
            {
                LocalTextPrefix = "ACN.Acn";
            }
        }
    }
}