
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Administration.Columns;

    [ColumnsScript("ACN.Minutesofmeeting")]
    [BasedOnRow(typeof(Entities.MinutesofmeetingRow))]
    public class MinutesofmeetingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Hidden]
        public Int32 Meetingid { get; set; }
        [EditLink]
        public string MeetingTitle { get; set; }
        [EditLink]
        public String AcnidAcnTilte { get; set; }
        public Int32 AcnidPhaseNo { get; set; }
        [DisplayFormat("dd/MM/yyyy")]
        public DateTime AcnidFromdate { get; set; }
        [DisplayFormat("dd/MM/yyyy")]
        public DateTime AcnidTodate { get; set; }
        //[DisplayFormat("dd/MM/yyyy")]
        //public DateTime momdate { get; set; }
        //[DisplayFormat("dd/MM/yyyy")]
       // public DateTime planeddate { get; set; }
        //[DisplayFormat("dd/MM/yyyy")]
        //public DateTime auditopeneddate { get; set; }
        public String Auditscope { get; set; }
        public String Venue { get; set; }

        [AdminListFormatter]
        public string Status { get; set; }
    }
}