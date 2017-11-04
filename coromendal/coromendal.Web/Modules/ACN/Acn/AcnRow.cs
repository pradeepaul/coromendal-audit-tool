

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
    using FluentMigrator.Infrastructure;

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
        [DisplayName("Acn Master Id"), Column("MId"), ForeignKey("[dbo].[MasterAcn]", "Id"), LeftJoin("jAcn")]
        [LookupEditor(typeof(AcnRow))]
        public Int32? MId
        {
            get { return Fields.MId[this]; }
            set { Fields.MId[this] = value; }
        }
        [DisplayName("Phase No."), Size(200), QuickSearch,NotNull,Required(true)]
        public Int32? PhaseNo
        {
            get { return Fields.PhaseNo[this]; }
            set { Fields.PhaseNo[this] = value; }
        }

        [DisplayName("audit of"), Size(200), QuickSearch, NotNull, Required(true)]
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
        [DisplayName("Auditor"), Size(40), NotNull, Required(true), QuickSearch]
        public List<Int32> Auditor
        {
            get { return Fields.Auditor[this]; }
            set { Fields.Auditor[this] = value; }
        }
        [LookupEditor(typeof(UserLookup1), Multiple = true), ClientSide]
        [LinkingSetRelation(typeof(AcnAuditeeRefRow), "acnID", "AcnAuditeeID")]
        [MinSelectLevel(SelectLevel.Details)]
        [DisplayName("Auditee"), Size(40), NotNull, Required(true), QuickSearch]
        public List<Int32> Auditee
        {
            get { return Fields.Auditee[this]; }
            set { Fields.Auditee[this] = value; }
        }
       
        
       [DisplayName("for the period"), Size(40), QuickSearch, NotNull, Required(true)]
        public String Periodfrom
        {
            get { return Fields.Periodfrom[this]; }
            set { Fields.Periodfrom[this] = value; }
        }
        [DisplayName("to"), Size(40), QuickSearch, NotNull, Required(true)]
        public String Periodto
        {
            get { return Fields.Periodto[this]; }
            set { Fields.Periodto[this] = value; }
        }
        [DisplayName("from "), Size(40), QuickSearch, NotNull]
        public String Fromdate
        {
            get { return Fields.Fromdate[this]; }
            set { Fields.Fromdate[this] = value; }
        }
        [DisplayName("to"), Size(40), QuickSearch, NotNull, Required(true)]
        public String Todate
        {
            get { return Fields.Todate[this]; }
            set { Fields.Todate[this] = value; }
        }
        [DisplayName("at"), Size(200), QuickSearch, NotNull, Required(true)]
        public String location
        {
            get { return Fields.location[this]; }
            set { Fields.location[this] = value; }
        }
        [DisplayName("Assignment Creation Date"), Size(40), NotNull, Required(true), QuickSearch]
        public String creationdate
        {
            get { return Fields.creationdate[this]; }
            set { Fields.creationdate[this] = value; }
        }
        [DisplayName("Audit Scope List"), MasterDetailRelation(foreignKey: "acnId"), Width(800), Required(true), ClientSide]
        public List<ScopeRow> ScopeList
        {
            get { return Fields.ScopeList[this]; }
            set { Fields.ScopeList[this] = value; }
        }
        [DisplayName("Status."), Size(200), QuickSearch, NotNull, Required(true)]
       
        public Int32? status
        {
            get { return Fields.status[this]; }
            set { Fields.status[this] = value; }
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

            public Int32Field MId;
            public Int32Field status;

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