

namespace coromendal.ACN.Entities
{
    using Administration.Entities;
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

    [ConnectionKey("Default"), DisplayName("Minutes Of Meeting"), InstanceName("minutesofmeeting"), TwoLevelCached]
    [ReadPermission(ACN.PermissionKeys.minutesofmeeting.View)]
    [ModifyPermission(ACN.PermissionKeys.minutesofmeeting.Modify)]
    [DeletePermission(ACN.PermissionKeys.minutesofmeeting.Delete)]
    [LookupScript("MinutesofmeetingRow")]
    public sealed class MinutesofmeetingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meetingid"), Column("meetingid"), Identity]
        public Int32? Meetingid
        {
            get { return Fields.Meetingid[this]; }
            set { Fields.Meetingid[this] = value; }
        }
        [DisplayName("Meeting Title"), Column("title"), Size(300), NotNull]
        public String MeetingTitle
        {
            get { return Fields.MeetingTitle[this]; }
            set { Fields.MeetingTitle[this] = value; }
        }
        

       [DisplayName("Assignment"), Column("acnid"), NotNull, ForeignKey("[dbo].[Acn]", "acnID"), LeftJoin("jAcnid"), TextualField("AcnidAcnTilte"), Size(300)]
        [LookupEditor(typeof(AcnLookup))]
       // [LookupScript("AcnLookup")]
        public Int32? Acnid
        {
            get { return Fields.Acnid[this]; }
            set { Fields.Acnid[this] = value; }
        }


        [DisplayName("Preview"), Column("auditscope"), Size(200)]
        public String Auditscope
        {
            get { return Fields.Auditscope[this]; }
            set { Fields.Auditscope[this] = value; }
        }

        [DisplayName("Period"), Column("period"), Size(200)]
        public String Period
        {
            get { return Fields.Period[this]; }
            set { Fields.Period[this] = value; }
        }

        [DisplayName("Time"), Column("time")]
        public Int32? Time
        {
            get { return Fields.Time[this]; }
            set { Fields.Time[this] = value; }
        }

        [DisplayName("Send"), Column("venue"), Size(200)]
        public String Venue
        {
            get { return Fields.Venue[this]; }
            set { Fields.Venue[this] = value; }
        }

        [DisplayName("Auditor"), Column("auditor")]
        public Int32? Auditor
        {
            get { return Fields.Auditor[this]; }
            set { Fields.Auditor[this] = value; }
        }

        [DisplayName("Auditee"), Column("auditee")]
        public Int32? Auditee
        {
            get { return Fields.Auditee[this]; }
            set { Fields.Auditee[this] = value; }
        }
        [DisplayName("MOM Circulation Date"), Column("momdate"), NotNull]

        public String momdate
        {
            get { return Fields.momdate[this]; }
            set { Fields.momdate[this] = value; }
        }

        [DisplayName("Planed Closing Date"), Column("planedcloseddate")NotNull]
        public String planeddate
        {
            get { return Fields.planeddate[this]; }
            set { Fields.planeddate[this] = value; }
        }

        [DisplayName("Audit Opening Meeting Date"), Column("auditopeningmeetingdate"),NotNull]
        public String auditopeneddate
        {
            get { return Fields.auditopeneddate[this]; }
            set { Fields.auditopeneddate[this] = value; }
        }

        [DisplayName("Download"), Column("download")]
        public Int32? Download
        {
            get { return Fields.Download[this]; }
            set { Fields.Download[this] = value; }
        }

        [DisplayName("Userid"), Column("userid"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUserid"), TextualField("UseridUsername")]
        [LookupEditor(typeof(UserRow))]
        public Int32? Userid
        {
            get { return Fields.Userid[this]; }
            set { Fields.Userid[this] = value; }
        }

        [DisplayName("Assignment"), Expression("jAcnid.[AcnTilte]")]
        public String AcnidAcnTilte
        {
            get { return Fields.AcnidAcnTilte[this]; }
            set { Fields.AcnidAcnTilte[this] = value; }
        }

        [DisplayName("Phase No"), Expression("jAcnid.[PhaseNo]"), Updatable(false), ReadOnly(true)]
        public Int32? AcnidPhaseNo
        {
            get { return Fields.AcnidPhaseNo[this]; }
            set { Fields.AcnidPhaseNo[this] = value; }
        }

        [DisplayName("Location"), Expression("jAcnid.[location]")]
        public String AcnidLocation
        {
            get { return Fields.AcnidLocation[this]; }
            set { Fields.AcnidLocation[this] = value; }
        }

        [DisplayName("Audit Execution From Date"), Expression("jAcnid.[Fromdate]"), Updatable(false), ReadOnly(true), NotNull]
        public String AcnidFromdate
        {
            get { return Fields.AcnidFromdate[this]; }
            set { Fields.AcnidFromdate[this] = value; }
        }

        [DisplayName("Audit Execution To Date"), Expression("jAcnid.[Todate]"), Updatable(false), ReadOnly(true), NotNull]
        public String AcnidTodate
        {
            get { return Fields.AcnidTodate[this]; }
            set { Fields.AcnidTodate[this] = value; }
        }
        [NotesEditor, ClientSide]
        public List<NoteRow> NoteList
        {
            get { return Fields.NoteList[this]; }
            set { Fields.NoteList[this] = value; }
        }

        [DisplayName("Period of Coverage From"), Expression("jAcnid.[Periodfrom]"), Updatable(false), ReadOnly(true), Size(200)]
        public String AcnidPeriodfrom
        {
            get { return Fields.AcnidPeriodfrom[this]; }
            set { Fields.AcnidPeriodfrom[this] = value; }
        }

        [DisplayName("Period of Coverage To"), Expression("jAcnid.[Periodto]"), Updatable(false), ReadOnly(true), Size(200)]
        public String AcnidPeriodto
        {
            get { return Fields.AcnidPeriodto[this]; }
            set { Fields.AcnidPeriodto[this] = value; }
        }

        [DisplayName("Audit commencement Date"), Expression("jAcnid.[creationdate]"), Updatable(false), ReadOnly(true), Size(200)]
        public String AcnidCreationdate
        {
            get { return Fields.AcnidCreationdate[this]; }
            set { Fields.AcnidCreationdate[this] = value; }
        }

        [DisplayName("Acnid Userid"), Expression("jAcnid.[userid]"), Updatable(false), ReadOnly(true)]
        public Int32? AcnidUserid
        {
            get { return Fields.AcnidUserid[this]; }
            set { Fields.AcnidUserid[this] = value; }
        }

        [DisplayName("Userid Username"), Expression("jUserid.[Username]"), Updatable(false), ReadOnly(true)]
        public String UseridUsername
        {
            get { return Fields.UseridUsername[this]; }
            set { Fields.UseridUsername[this] = value; }
        }

        [DisplayName("Display Name"), Expression("jUserid.[DisplayName]"), Updatable(false), ReadOnly(true)]
        public String UseridDisplayName
        {
            get { return Fields.UseridDisplayName[this]; }
            set { Fields.UseridDisplayName[this] = value; }
        }

        [DisplayName("Userid Email"), Expression("jUserid.[Email]"), Updatable(false), ReadOnly(true)]
        public String UseridEmail
        {
            get { return Fields.UseridEmail[this]; }
            set { Fields.UseridEmail[this] = value; }
        }

        [DisplayName("Userid Source"), Expression("jUserid.[Source]"), Updatable(false), ReadOnly(true)]
        public String UseridSource
        {
            get { return Fields.UseridSource[this]; }
            set { Fields.UseridSource[this] = value; }
        }

        [DisplayName("Userid Password Hash"), Expression("jUserid.[PasswordHash]"), Updatable(false), ReadOnly(true)]
        public String UseridPasswordHash
        {
            get { return Fields.UseridPasswordHash[this]; }
            set { Fields.UseridPasswordHash[this] = value; }
        }

        [DisplayName("Userid Password Salt"), Expression("jUserid.[PasswordSalt]"), Updatable(false), ReadOnly(true)]
        public String UseridPasswordSalt
        {
            get { return Fields.UseridPasswordSalt[this]; }
            set { Fields.UseridPasswordSalt[this] = value; }
        }

        [DisplayName("Userid Insert Date"), Expression("jUserid.[InsertDate]"), Updatable(false), ReadOnly(true)]
        public DateTime? UseridInsertDate
        {
            get { return Fields.UseridInsertDate[this]; }
            set { Fields.UseridInsertDate[this] = value; }
        }

        [DisplayName("Userid Insert User Id"), Expression("jUserid.[InsertUserId]"), Updatable(false), ReadOnly(true)]
        public Int32? UseridInsertUserId
        {
            get { return Fields.UseridInsertUserId[this]; }
            set { Fields.UseridInsertUserId[this] = value; }
        }

        [DisplayName("Userid Update Date"), Expression("jUserid.[UpdateDate]"), Updatable(false), ReadOnly(true)]
        public DateTime? UseridUpdateDate
        {
            get { return Fields.UseridUpdateDate[this]; }
            set { Fields.UseridUpdateDate[this] = value; }
        }

        [DisplayName("Userid Update User Id"), Expression("jUserid.[UpdateUserId]"), Updatable(false), ReadOnly(true)]
        public Int32? UseridUpdateUserId
        {
            get { return Fields.UseridUpdateUserId[this]; }
            set { Fields.UseridUpdateUserId[this] = value; }
        }

        [DisplayName("Userid Is Active"), Expression("jUserid.[IsActive]"), Updatable(false), ReadOnly(true)]
        public Int16? UseridIsActive
        {
            get { return Fields.UseridIsActive[this]; }
            set { Fields.UseridIsActive[this] = value; }
        }

        [DisplayName("Userid Last Directory Update"), Expression("jUserid.[LastDirectoryUpdate]"), Updatable(false), ReadOnly(true)]
        public DateTime? UseridLastDirectoryUpdate
        {
            get { return Fields.UseridLastDirectoryUpdate[this]; }
            set { Fields.UseridLastDirectoryUpdate[this] = value; }
        }
        
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "meetingid"), NotNull, ClientSide]
        public List<MeetingIssueRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "meetingid"), NotNull, ClientSide]
        public List<MeetingAbsentauditorRow> AbsentList
        {
            get { return Fields.AbsentList[this]; }
            set { Fields.AbsentList[this] = value; }
        }

        [DisplayName("Details"), MasterDetailRelation(foreignKey: "meetingid"), NotNull, ClientSide]
        public List<MeetingAbsentauditeeRow> AuditeeAbsent
        {
            get { return Fields.AuditeeAbsent[this]; }
            set { Fields.AuditeeAbsent[this] = value; }
        }
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "meetingid"), NotNull, ClientSide]
        public List<MeetingPointsRow> PointsList
        {
            get { return Fields.PointsList[this]; }
            set { Fields.PointsList[this] = value; }
        }
        [DisplayName("Previous Observation Audit"), MasterDetailRelation(foreignKey: "meetingid"), NotNull, ClientSide]
        public List<ObservationpreviousauditRow> PreviousObservationaudit
        {
            get { return Fields.PreviousObservationaudit[this]; }
            set { Fields.PreviousObservationaudit[this] = value; }
        }
        [DisplayName("New Changes"), MasterDetailRelation(foreignKey: "meetingid"), NotNull, ClientSide]
        public List<NewchangesRow> Newchanges
        {
            get { return Fields.Newchanges[this]; }
            set { Fields.Newchanges[this] = value; }

        }
        [DisplayName("New Improvements"), MasterDetailRelation(foreignKey: "meetingid"), ClientSide]
        public List<NewiprovementsRow> Newimprovements
        {
            get { return Fields.Newimprovements[this]; }
            set { Fields.Newimprovements[this] = value; }
        }
        [DisplayName("Audit Scope List"), Expression("jAcnid.[ScopeList]"), NotNull, Required(true), ClientSide]
        public List<ScopeRow> AcnidScopeList
        {
            get { return Fields.AcnidScopeList[this]; }
            set { Fields.AcnidScopeList[this] = value; }
        }

        [DisplayName("Status"), Column("status")]
        [LookupEditor(typeof(AdminstatusvalueRow))]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.Meetingid; }
        }
        StringField INameRow.NameField
        {
            get { return Fields.MeetingTitle; }
        }


        public static readonly RowFields Fields = new RowFields().Init();

        public MinutesofmeetingRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Meetingid;
            public Int32Field Acnid;
            public StringField MeetingTitle;
            public StringField Auditscope;
            public StringField Period;
            public Int32Field Time;
            public StringField Venue;
            public Int32Field Auditor;
            public Int32Field Auditee;
            public Int32Field Download;
            public Int32Field Userid; 
            public StringField momdate;
            public StringField planeddate;
            public StringField auditopeneddate;
            public Int32Field Status;


            public RowListField<MeetingIssueRow> DetailList;
            public RowListField<MeetingAbsentauditeeRow> AuditeeAbsent;
            public RowListField<MeetingAbsentauditorRow> AbsentList;
            public RowListField<MeetingPointsRow> PointsList;
            public RowListField<ObservationpreviousauditRow> PreviousObservationaudit;
            public RowListField<NewchangesRow> Newchanges;
            public RowListField<NewiprovementsRow> Newimprovements;
            public RowListField<NoteRow> NoteList;

            public StringField AcnidAcnTilte;
            public Int32Field AcnidPhaseNo;
            public StringField AcnidLocation;
            public StringField AcnidFromdate;
            public StringField AcnidTodate;
            public StringField AcnidPeriodfrom;
            public StringField AcnidPeriodto;
            public StringField AcnidCreationdate;
            public Int32Field AcnidUserid;
            public RowListField<ScopeRow> AcnidScopeList;

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

            public RowFields()
                : base("[dbo].[minutesofmeeting]")
            {
                LocalTextPrefix = "ACN.Minutesofmeeting";
            }
        }
    }
}