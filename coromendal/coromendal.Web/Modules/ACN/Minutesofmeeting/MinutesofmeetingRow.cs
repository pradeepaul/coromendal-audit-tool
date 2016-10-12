

namespace coromendal.ACN.Entities
{
    using Administration.Entities;
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("minutesofmeeting"), InstanceName("minutesofmeeting"), TwoLevelCached]
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

        [DisplayName("Acnid"), Column("acnid"), NotNull, ForeignKey("[dbo].[Acn]", "acnID"), LeftJoin("jAcnid"), TextualField("AcnidAcnTilte")]
        [LookupEditor(typeof(AcnRow))]
        public Int32? Acnid
        {
            get { return Fields.Acnid[this]; }
            set { Fields.Acnid[this] = value; }
        }

        [DisplayName("Title"), Column("title"), Size(200), QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Auditscope"), Column("auditscope"), Size(200)]
        public String Auditscope
        {
            get { return Fields.Auditscope[this]; }
            set { Fields.Auditscope[this] = value; }
        }

        [DisplayName("Period"), Column("period"), Size(20)]
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

        [DisplayName("Venue"), Column("venue"), Size(200)]
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

        [DisplayName("Acnid Acn Tilte"), Expression("jAcnid.[AcnTilte]")]
        public String AcnidAcnTilte
        {
            get { return Fields.AcnidAcnTilte[this]; }
            set { Fields.AcnidAcnTilte[this] = value; }
        }

        [DisplayName("Acnid Phase No"), Expression("jAcnid.[PhaseNo]")]
        public Int32? AcnidPhaseNo
        {
            get { return Fields.AcnidPhaseNo[this]; }
            set { Fields.AcnidPhaseNo[this] = value; }
        }

        [DisplayName("Acnid Location"), Expression("jAcnid.[location]")]
        public String AcnidLocation
        {
            get { return Fields.AcnidLocation[this]; }
            set { Fields.AcnidLocation[this] = value; }
        }

        [DisplayName("Acnid Fromdate"), Expression("jAcnid.[Fromdate]")]
        public String AcnidFromdate
        {
            get { return Fields.AcnidFromdate[this]; }
            set { Fields.AcnidFromdate[this] = value; }
        }

        [DisplayName("Acnid Todate"), Expression("jAcnid.[Todate]")]
        public String AcnidTodate
        {
            get { return Fields.AcnidTodate[this]; }
            set { Fields.AcnidTodate[this] = value; }
        }

        [DisplayName("Acnid Periodfrom"), Expression("jAcnid.[Periodfrom]")]
        public String AcnidPeriodfrom
        {
            get { return Fields.AcnidPeriodfrom[this]; }
            set { Fields.AcnidPeriodfrom[this] = value; }
        }

        [DisplayName("Acnid Periodto"), Expression("jAcnid.[Periodto]")]
        public String AcnidPeriodto
        {
            get { return Fields.AcnidPeriodto[this]; }
            set { Fields.AcnidPeriodto[this] = value; }
        }

        [DisplayName("Acnid Creationdate"), Expression("jAcnid.[creationdate]")]
        public String AcnidCreationdate
        {
            get { return Fields.AcnidCreationdate[this]; }
            set { Fields.AcnidCreationdate[this] = value; }
        }

        [DisplayName("Acnid Userid"), Expression("jAcnid.[userid]")]
        public Int32? AcnidUserid
        {
            get { return Fields.AcnidUserid[this]; }
            set { Fields.AcnidUserid[this] = value; }
        }

        [DisplayName("Userid Username"), Expression("jUserid.[Username]")]
        public String UseridUsername
        {
            get { return Fields.UseridUsername[this]; }
            set { Fields.UseridUsername[this] = value; }
        }

        [DisplayName("Display Name"), Expression("jUserid.[DisplayName]")]
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
        [DisplayName("Notes"), NotesEditor, ClientSide]
        public List<NoteRow> NoteList
        {
            get { return Fields.NoteList[this]; }
            set { Fields.NoteList[this] = value; }
        }
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "meetingid"), ClientSide]
        public List<MeetingIssueRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "meetingid"), ClientSide]
        public List<MeetingAbsentRow> AbsentList
        {
            get { return Fields.AbsentList[this]; }
            set { Fields.AbsentList[this] = value; }
        }
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "meetingid"), ClientSide]
        public List<MeetingPointsRow> PointsList
        {
            get { return Fields.PointsList[this]; }
            set { Fields.PointsList[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.Meetingid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
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
            public StringField Title;
            public StringField Auditscope;
            public StringField Period;
            public Int32Field Time;
            public StringField Venue;
            public Int32Field Auditor;
            public Int32Field Auditee;
            public Int32Field Download;
            public Int32Field Userid;


            public RowListField<NoteRow> NoteList;
            public RowListField<MeetingIssueRow> DetailList;
            public RowListField<MeetingAbsentRow> AbsentList;
            public RowListField<MeetingPointsRow> PointsList;

            public StringField AcnidAcnTilte;
            public Int32Field AcnidPhaseNo;
            public StringField AcnidLocation;
            public StringField AcnidFromdate;
            public StringField AcnidTodate;
            public StringField AcnidPeriodfrom;
            public StringField AcnidPeriodto;
            public StringField AcnidCreationdate;
            public Int32Field AcnidUserid;

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