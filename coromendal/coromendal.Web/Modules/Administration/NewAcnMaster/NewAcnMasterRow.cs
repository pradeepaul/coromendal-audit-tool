

namespace coromendal.Administration.Entities
{
    using ACN.Entities;
    using Newtonsoft.Json;
    using Scripts;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("ACN Master"), InstanceName("NewACNMaster"), TwoLevelCached]
    [ReadPermission(Administration.PermissionKeys.Security)]
    [ModifyPermission(Administration.PermissionKeys.Security)]
    public sealed class NewAcnMasterRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Acn Tilte"), Size(40), QuickSearch]
        public String AcnTilte
        {
            get { return Fields.AcnTilte[this]; }
            set { Fields.AcnTilte[this] = value; }
        }

        [DisplayName("Phase No")]
        public Int32? PhaseNo
        {
            get { return Fields.PhaseNo[this]; }
            set { Fields.PhaseNo[this] = value; }
        }

        [DisplayName("Location"), Column("location"), Size(40)]
        public String Location
        {
            get { return Fields.Location[this]; }
            set { Fields.Location[this] = value; }
        }

        [DisplayName("Fromdate"), Size(40)]
        public String Fromdate
        {
            get { return Fields.Fromdate[this]; }
            set { Fields.Fromdate[this] = value; }
        }

        [DisplayName("Todate"), Size(40)]
        public String Todate
        {
            get { return Fields.Todate[this]; }
            set { Fields.Todate[this] = value; }
        }

        [DisplayName("Periodfrom"), Size(40)]
        public String Periodfrom
        {
            get { return Fields.Periodfrom[this]; }
            set { Fields.Periodfrom[this] = value; }
        }

        [DisplayName("Periodto"), Size(40)]
        public String Periodto
        {
            get { return Fields.Periodto[this]; }
            set { Fields.Periodto[this] = value; }
        }

        [DisplayName("Creationdate"), Column("creationdate"), Size(40)]
        public String Creationdate
        {
            get { return Fields.Creationdate[this]; }
            set { Fields.Creationdate[this] = value; }
        }

        [DisplayName("Userid"), Column("userid"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUserid"), TextualField("UseridUsername")]
        public Int32? Userid
        {
            get { return Fields.Userid[this]; }
            set { Fields.Userid[this] = value; }
        }

        [DisplayName("Preview"), Column("preview"), Size(10)]
        public String Preview
        {
            get { return Fields.Preview[this]; }
            set { Fields.Preview[this] = value; }
        }

        [DisplayName("Send"), Column("send"), Size(10)]
        public String Send
        {
            get { return Fields.Send[this]; }
            set { Fields.Send[this] = value; }
        }

        [DisplayName("M Id")]
        public Int32? MId
        {
            get { return Fields.MId[this]; }
            set { Fields.MId[this] = value; }
        }

        [DisplayName("Status"), Column("status")]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Status"), Column("statusid"),ReadOnly(true)]
        [LookupEditor(typeof(AdminstatusvalueRow))]
        public Int32? Statusid
        {
            get { return Fields.Statusid[this]; }
            set { Fields.Statusid[this] = value; }
        }

        [DisplayName("Userid Username"), Expression("jUserid.[Username]")]
        public String UseridUsername
        {
            get { return Fields.UseridUsername[this]; }
            set { Fields.UseridUsername[this] = value; }
        }

        [DisplayName("Userid Display Name"), Expression("jUserid.[DisplayName]")]
        public String UseridDisplayName
        {
            get { return Fields.UseridDisplayName[this]; }
            set { Fields.UseridDisplayName[this] = value; }
        }

        [DisplayName("Userid Email"), Expression("jUserid.[Email]")]
        public String UseridEmail
        {
            get { return Fields.UseridEmail[this]; }
            set { Fields.UseridEmail[this] = value; }
        }

        [DisplayName("Userid Source"), Expression("jUserid.[Source]")]
        public String UseridSource
        {
            get { return Fields.UseridSource[this]; }
            set { Fields.UseridSource[this] = value; }
        }

        [DisplayName("Userid Password Hash"), Expression("jUserid.[PasswordHash]")]
        public String UseridPasswordHash
        {
            get { return Fields.UseridPasswordHash[this]; }
            set { Fields.UseridPasswordHash[this] = value; }
        }

        [DisplayName("Userid Password Salt"), Expression("jUserid.[PasswordSalt]")]
        public String UseridPasswordSalt
        {
            get { return Fields.UseridPasswordSalt[this]; }
            set { Fields.UseridPasswordSalt[this] = value; }
        }

        [DisplayName("Userid Insert Date"), Expression("jUserid.[InsertDate]")]
        public DateTime? UseridInsertDate
        {
            get { return Fields.UseridInsertDate[this]; }
            set { Fields.UseridInsertDate[this] = value; }
        }

        [DisplayName("Userid Insert User Id"), Expression("jUserid.[InsertUserId]")]
        public Int32? UseridInsertUserId
        {
            get { return Fields.UseridInsertUserId[this]; }
            set { Fields.UseridInsertUserId[this] = value; }
        }

        [DisplayName("Userid Update Date"), Expression("jUserid.[UpdateDate]")]
        public DateTime? UseridUpdateDate
        {
            get { return Fields.UseridUpdateDate[this]; }
            set { Fields.UseridUpdateDate[this] = value; }
        }

        [DisplayName("Userid Update User Id"), Expression("jUserid.[UpdateUserId]")]
        public Int32? UseridUpdateUserId
        {
            get { return Fields.UseridUpdateUserId[this]; }
            set { Fields.UseridUpdateUserId[this] = value; }
        }

        [DisplayName("Userid Is Active"), Expression("jUserid.[IsActive]")]
        public Int16? UseridIsActive
        {
            get { return Fields.UseridIsActive[this]; }
            set { Fields.UseridIsActive[this] = value; }
        }

        [DisplayName("Userid Last Directory Update"), Expression("jUserid.[LastDirectoryUpdate]")]
        public DateTime? UseridLastDirectoryUpdate
        {
            get { return Fields.UseridLastDirectoryUpdate[this]; }
            set { Fields.UseridLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Userid Role Id"), Expression("jUserid.[RoleId]")]
        public Int32? UseridRoleId
        {
            get { return Fields.UseridRoleId[this]; }
            set { Fields.UseridRoleId[this] = value; }
        }
        [LookupEditor(typeof(AuditeeUserLookup), Multiple = true), ClientSide]
        [LinkingSetRelation(typeof(MasterAcnAuditorRefRow), "acnID", "AcnAuditorID")]
        [MinSelectLevel(SelectLevel.Details)]
        [DisplayName("Auditor"), Size(40), NotNull, Required(true), QuickSearch]
        public List<Int32> Auditor
        {
            get { return Fields.Auditor[this]; }
            set { Fields.Auditor[this] = value; }
        }
        [LookupEditor(typeof(UserLookup1), Multiple = true), ClientSide]
        [LinkingSetRelation(typeof(MasterAcnAuditeeRefRow), "acnID", "AcnAuditeeID")]
        [MinSelectLevel(SelectLevel.Details)]
        [DisplayName("Auditee"), Size(40), NotNull, Required(true), QuickSearch]
        public List<Int32> Auditee
        {
            get { return Fields.Auditee[this]; }
            set { Fields.Auditee[this] = value; }
        }
        [DisplayName("Audit Scope List"), MasterDetailRelation(foreignKey: "acnId"), Width(800), Required(true), ClientSide]
        public List<MasterscopeRow> ScopeList
        {
            get { return Fields.ScopeList[this]; }
            set { Fields.ScopeList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AcnTilte; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NewAcnMasterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField AcnTilte;
            public Int32Field PhaseNo;
            public StringField Location;
            public StringField Fromdate;
            public StringField Todate;
            public StringField Periodfrom;
            public StringField Periodto;
            public StringField Creationdate;
            public Int32Field Userid;
            public StringField Preview;
            public StringField Send;
            public Int32Field MId;
            public Int32Field Status;
            public Int32Field Statusid;

            public ListField<Int32> Auditor;
            public ListField<Int32> Auditee;
            public RowListField<MasterscopeRow> ScopeList;

            public StringField UseridUsername;
            public StringField UseridDisplayName;
            public StringField UseridEmail;
            public StringField UseridSource;
            public StringField UseridPasswordHash;
            public StringField UseridPasswordSalt;
            public DateTimeField UseridInsertDate;
            public Int32Field UseridInsertUserId;
            public DateTimeField UseridUpdateDate;
            public Int32Field UseridUpdateUserId;
            public Int16Field UseridIsActive;
            public DateTimeField UseridLastDirectoryUpdate;
            public Int32Field UseridRoleId;

            public RowFields()
                : base("[dbo].[NewACNMaster]")
            {
                LocalTextPrefix = "Administration.NewAcnMaster";
            }
        }
    }
}