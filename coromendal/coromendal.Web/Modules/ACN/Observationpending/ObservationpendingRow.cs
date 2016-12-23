

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

    [ConnectionKey("Default"), DisplayName("observationpending"), InstanceName("observationpending"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class ObservationpendingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Observationpending Id"), Column("observationpendingId"), Identity]
        public Int32? ObservationpendingId
        {
            get { return Fields.ObservationpendingId[this]; }
            set { Fields.ObservationpendingId[this] = value; }
        }

        [DisplayName("Report Reference"), Column("reportreference"), Size(100), QuickSearch]
        public String Reportreference
        {
            get { return Fields.Reportreference[this]; }
            set { Fields.Reportreference[this] = value; }
        }

        [DisplayName("Observation Reference & Brief Description"), Column("briefdescription")]
        public String Briefdescription
        {
            get { return Fields.Briefdescription[this]; }
            set { Fields.Briefdescription[this] = value; }
        }

        [DisplayName("Original Target date"), Column("originaltargetdate")]
        public String Originaltargetdate
        {
            get { return Fields.Originaltargetdate[this]; }
            set { Fields.Originaltargetdate[this] = value; }
        }

        [DisplayName("Revised Target date"), Column("revisedtargetdate")]
        public String Revisedtargetdate
        {
            get { return Fields.Revisedtargetdate[this]; }
            set { Fields.Revisedtargetdate[this] = value; }
        }

        [DisplayName("Remarks"), Column("remarks"), Size(100)]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Aodid"), Column("aodid"), ForeignKey("[dbo].[AOD]", "aodId"), LeftJoin("jAodid"), TextualField("AodidActualcomencementdate")]
        public Int32? Aodid
        {
            get { return Fields.Aodid[this]; }
            set { Fields.Aodid[this] = value; }
        }

        [DisplayName("Aodid Meetingid"), Expression("jAodid.[Meetingid]")]
        public Int32? AodidMeetingid
        {
            get { return Fields.AodidMeetingid[this]; }
            set { Fields.AodidMeetingid[this] = value; }
        }

        [DisplayName("Aodid Actualcomencementdate"), Expression("jAodid.[Actualcomencementdate]")]
        public String AodidActualcomencementdate
        {
            get { return Fields.AodidActualcomencementdate[this]; }
            set { Fields.AodidActualcomencementdate[this] = value; }
        }

        [DisplayName("Aodid Actualcompltedate"), Expression("jAodid.[Actualcompltedate]")]
        public String AodidActualcompltedate
        {
            get { return Fields.AodidActualcompltedate[this]; }
            set { Fields.AodidActualcompltedate[this] = value; }
        }

        [DisplayName("Aodid Process Owner"), Expression("jAodid.[Process owner]")]
        public String AodidProcessOwner
        {
            get { return Fields.AodidProcessOwner[this]; }
            set { Fields.AodidProcessOwner[this] = value; }
        }

        [DisplayName("Aodid Functionalhead"), Expression("jAodid.[Functionalhead]")]
        public String AodidFunctionalhead
        {
            get { return Fields.AodidFunctionalhead[this]; }
            set { Fields.AodidFunctionalhead[this] = value; }
        }

        [DisplayName("Aodid Areaofscope"), Expression("jAodid.[Areaofscope]")]
        public String AodidAreaofscope
        {
            get { return Fields.AodidAreaofscope[this]; }
            set { Fields.AodidAreaofscope[this] = value; }
        }

        [DisplayName("Aodid Exclusions"), Expression("jAodid.[Exclusions]")]
        public String AodidExclusions
        {
            get { return Fields.AodidExclusions[this]; }
            set { Fields.AodidExclusions[this] = value; }
        }

        [DisplayName("Aodid Reasons"), Expression("jAodid.[Reasons]")]
        public String AodidReasons
        {
            get { return Fields.AodidReasons[this]; }
            set { Fields.AodidReasons[this] = value; }
        }

        [DisplayName("Aodid Sbu"), Expression("jAodid.[Sbu]")]
        public String AodidSbu
        {
            get { return Fields.AodidSbu[this]; }
            set { Fields.AodidSbu[this] = value; }
        }

        [DisplayName("Aodid Acnid"), Expression("jAodid.[acnid]")]
        public Int32? AodidAcnid
        {
            get { return Fields.AodidAcnid[this]; }
            set { Fields.AodidAcnid[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ObservationpendingId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Reportreference; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ObservationpendingRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ObservationpendingId;
            public StringField Reportreference;
            public StringField Briefdescription;
            public StringField Originaltargetdate;
            public StringField Revisedtargetdate;
            public StringField Remarks;
            public Int32Field Aodid;

            public Int32Field AodidMeetingid;
            public StringField AodidActualcomencementdate;
            public StringField AodidActualcompltedate;
            public StringField AodidProcessOwner;
            public StringField AodidFunctionalhead;
            public StringField AodidAreaofscope;
            public StringField AodidExclusions;
            public StringField AodidReasons;
            public StringField AodidSbu;
            public Int32Field AodidAcnid;

            public RowFields()
                : base("[dbo].[observationpending]")
            {
                LocalTextPrefix = "ACN.Observationpending";
            }
        }
    }
}