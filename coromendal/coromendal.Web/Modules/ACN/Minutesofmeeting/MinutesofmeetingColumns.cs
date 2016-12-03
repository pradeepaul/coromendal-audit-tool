
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Minutesofmeeting")]
    [BasedOnRow(typeof(Entities.MinutesofmeetingRow))]
    public class MinutesofmeetingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Meetingid { get; set; }
        public string MeetingTitle { get; set; }
        public String AcnidAcnTilte { get; set; }
        public Int32 AcnidPhaseNo { get; set; }
        public String AcnidFromdate { get; set; }
        public String AcnidTodate { get; set; }
        public String momdate { get; set; }
        public String planeddate { get; set; }
        public String auditopeneddate { get; set; }
    }
}