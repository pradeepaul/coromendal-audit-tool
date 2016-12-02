

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

    [ConnectionKey("Default"), DisplayName("AOD"), InstanceName("AOD"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class AodRow : Row, IIdRow, INameRow
    {
        [DisplayName("Aod Id"), Column("aodId"), PrimaryKey]
        public Int32? AodId
        {
            get { return Fields.AodId[this]; }
            set { Fields.AodId[this] = value; }
        }

        [DisplayName("Meetingid"), ForeignKey("[dbo].[minutesofmeeting]", "meetingid"), LeftJoin("jMeetingid"), TextualField("MeetingidTitle")]
        [LookupEditor(typeof(MinutesofmeetingRow))]
        public Int32? Meetingid
        {
            get { return Fields.Meetingid[this]; }
            set { Fields.Meetingid[this] = value; }
        }

        [DisplayName("Actualcomencementdate"), Size(100), QuickSearch]
        public String Actualcomencementdate
        {
            get { return Fields.Actualcomencementdate[this]; }
            set { Fields.Actualcomencementdate[this] = value; }
        }

        [DisplayName("Actualcompltedate"), Size(100)]
        public String Actualcompltedate
        {
            get { return Fields.Actualcompltedate[this]; }
            set { Fields.Actualcompltedate[this] = value; }
        }

        [DisplayName("Process Owner"), Column("Process owner"), Size(100)]
        public String ProcessOwner
        {
            get { return Fields.ProcessOwner[this]; }
            set { Fields.ProcessOwner[this] = value; }
        }

        [DisplayName("Functionalhead"), Size(100)]
        public String Functionalhead
        {
            get { return Fields.Functionalhead[this]; }
            set { Fields.Functionalhead[this] = value; }
        }

        [DisplayName("Areaofscope"), Size(100)]
        public String Areaofscope
        {
            get { return Fields.Areaofscope[this]; }
            set { Fields.Areaofscope[this] = value; }
        }

        [DisplayName("Exclusions"), Size(100)]
        public String Exclusions
        {
            get { return Fields.Exclusions[this]; }
            set { Fields.Exclusions[this] = value; }
        }

        [DisplayName("Reasons"), Size(100)]
        public String Reasons
        {
            get { return Fields.Reasons[this]; }
            set { Fields.Reasons[this] = value; }
        }

        [DisplayName("Sbu"), Size(100)]
        public String Sbu
        {
            get { return Fields.Sbu[this]; }
            set { Fields.Sbu[this] = value; }
        }

        [DisplayName("Acnid"), Column("acnid"), ForeignKey("[dbo].[Acn]", "acnID"), LeftJoin("jAcnid"), TextualField("AcnidAcnTilte")]
        [LookupEditor(typeof(AcnRow))]
        public Int32? Acnid
        {
            get { return Fields.Acnid[this]; }
            set { Fields.Acnid[this] = value; }
        }

        [DisplayName("Meetingid Acnid"), Expression("jMeetingid.[acnid]")]
        public Int32? MeetingidAcnid
        {
            get { return Fields.MeetingidAcnid[this]; }
            set { Fields.MeetingidAcnid[this] = value; }
        }

        [DisplayName("Meetingid Title"), Expression("jMeetingid.[title]")]
        public String MeetingidTitle
        {
            get { return Fields.MeetingidTitle[this]; }
            set { Fields.MeetingidTitle[this] = value; }
        }

        [DisplayName("Meetingid Auditscope"), Expression("jMeetingid.[auditscope]")]
        public String MeetingidAuditscope
        {
            get { return Fields.MeetingidAuditscope[this]; }
            set { Fields.MeetingidAuditscope[this] = value; }
        }

        [DisplayName("Meetingid Period"), Expression("jMeetingid.[period]")]
        public String MeetingidPeriod
        {
            get { return Fields.MeetingidPeriod[this]; }
            set { Fields.MeetingidPeriod[this] = value; }
        }

        [DisplayName("Meetingid Time"), Expression("jMeetingid.[time]")]
        public Int32? MeetingidTime
        {
            get { return Fields.MeetingidTime[this]; }
            set { Fields.MeetingidTime[this] = value; }
        }

        [DisplayName("Meetingid Venue"), Expression("jMeetingid.[venue]")]
        public String MeetingidVenue
        {
            get { return Fields.MeetingidVenue[this]; }
            set { Fields.MeetingidVenue[this] = value; }
        }

        [DisplayName("Meetingid Auditor"), Expression("jMeetingid.[auditor]")]
        public Int32? MeetingidAuditor
        {
            get { return Fields.MeetingidAuditor[this]; }
            set { Fields.MeetingidAuditor[this] = value; }
        }

        [DisplayName("Meetingid Auditee"), Expression("jMeetingid.[auditee]")]
        public Int32? MeetingidAuditee
        {
            get { return Fields.MeetingidAuditee[this]; }
            set { Fields.MeetingidAuditee[this] = value; }
        }

        [DisplayName("Meetingid Download"), Expression("jMeetingid.[download]")]
        public Int32? MeetingidDownload
        {
            get { return Fields.MeetingidDownload[this]; }
            set { Fields.MeetingidDownload[this] = value; }
        }

        [DisplayName("Meetingid Userid"), Expression("jMeetingid.[userid]")]
        public Int32? MeetingidUserid
        {
            get { return Fields.MeetingidUserid[this]; }
            set { Fields.MeetingidUserid[this] = value; }
        }

        [DisplayName("MoM Date"), Expression("jMeetingid.[momdate]")]
        public String MeetingidMomdate
        {
            get { return Fields.MeetingidMomdate[this]; }
            set { Fields.MeetingidMomdate[this] = value; }
        }

        [DisplayName("Planed Closed Date"), Expression("jMeetingid.[planedcloseddate]")]
        public String MeetingidPlanedcloseddate
        {
            get { return Fields.MeetingidPlanedcloseddate[this]; }
            set { Fields.MeetingidPlanedcloseddate[this] = value; }
        }

        [DisplayName("Audit Opening Meeting Date"), Expression("jMeetingid.[auditopeningmeetingdate]")]
        public String MeetingidAuditopeningmeetingdate
        {
            get { return Fields.MeetingidAuditopeningmeetingdate[this]; }
            set { Fields.MeetingidAuditopeningmeetingdate[this] = value; }
        }

        [DisplayName("Acnid Acn Tilte"), Expression("jAcnid.[AcnTilte]")]
        public String AcnidAcnTilte
        {
            get { return Fields.AcnidAcnTilte[this]; }
            set { Fields.AcnidAcnTilte[this] = value; }
        }

        [DisplayName("Phase No"), Expression("jAcnid.[PhaseNo]")]
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

        [DisplayName("Audit Execution From Date"), Expression("jAcnid.[Fromdate]")]
        public String AcnidFromdate
        {
            get { return Fields.AcnidFromdate[this]; }
            set { Fields.AcnidFromdate[this] = value; }
        }

        [DisplayName("Audit Execution To Date"), Expression("jAcnid.[Todate]")]
        public String AcnidTodate
        {
            get { return Fields.AcnidTodate[this]; }
            set { Fields.AcnidTodate[this] = value; }
        }

        [DisplayName("Period of Coverage From"), Expression("jAcnid.[Periodfrom]")]
        public String AcnidPeriodfrom
        {
            get { return Fields.AcnidPeriodfrom[this]; }
            set { Fields.AcnidPeriodfrom[this] = value; }
        }

        [DisplayName("Period of Coverage To"), Expression("jAcnid.[Periodto]")]
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

        [DisplayName("Inputs received from Auditee"), MasterDetailRelation(foreignKey: "aodid"), ClientSide]
        public List<InputfromauditeeRow> inputfromauditee
        {
            get { return Fields.inputfromauditee[this]; }
            set { Fields.inputfromauditee[this] = value; }
        }
        [DisplayName("Satisfaction Rating for the processes audited"), MasterDetailRelation(foreignKey: "aodid"), ClientSide]
        public List<SatisfactionratingRow> Satisfactionrating
        {
            get { return Fields.Satisfactionrating[this]; }
            set { Fields.Satisfactionrating[this] = value; }
        }

        [DisplayName("Audit Observations pending from previous years"), MasterDetailRelation(foreignKey: "aodid"), ClientSide]
        public List<ObservationpendingRow> Observationpending
        {
            get { return Fields.Observationpending[this]; }
            set { Fields.Observationpending[this] = value; }
        }
        [DisplayName("Observations from current audit"), MasterDetailRelation(foreignKey: "aodid"), ClientSide]
        public List<CurrentauditobservationRow> Currentauditobservation
        {
            get { return Fields.Currentauditobservation[this]; }
            set { Fields.Currentauditobservation[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.AodId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Actualcomencementdate; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AodRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AodId;
            public Int32Field Meetingid;
            public StringField Actualcomencementdate;
            public StringField Actualcompltedate;
            public StringField ProcessOwner;
            public StringField Functionalhead;
            public StringField Areaofscope;
            public StringField Exclusions;
            public StringField Reasons;
            public StringField Sbu;
            public Int32Field Acnid;

            
            public Int32Field MeetingidAcnid;
            public StringField MeetingidTitle;
            public StringField MeetingidAuditscope;
            public StringField MeetingidPeriod;
            public Int32Field MeetingidTime;
            public StringField MeetingidVenue;
            public Int32Field MeetingidAuditor;
            public Int32Field MeetingidAuditee;
            public Int32Field MeetingidDownload;
            public Int32Field MeetingidUserid;
            public StringField MeetingidMomdate;
            public StringField MeetingidPlanedcloseddate;
            public StringField MeetingidAuditopeningmeetingdate;

            public StringField AcnidAcnTilte;
            public Int32Field AcnidPhaseNo;
            public StringField AcnidLocation;
            public StringField AcnidFromdate;
            public StringField AcnidTodate;
            public StringField AcnidPeriodfrom;
            public StringField AcnidPeriodto;
            public StringField AcnidCreationdate;
            public Int32Field AcnidUserid;

            public RowListField<InputfromauditeeRow> inputfromauditee;
            public RowListField<SatisfactionratingRow> Satisfactionrating;
            public RowListField<ObservationpendingRow> Observationpending;
            public RowListField<CurrentauditobservationRow> Currentauditobservation;

            public RowFields()
                : base("[dbo].[AOD]")
            {
                LocalTextPrefix = "ACN.Aod";
            }
        }
    }
}