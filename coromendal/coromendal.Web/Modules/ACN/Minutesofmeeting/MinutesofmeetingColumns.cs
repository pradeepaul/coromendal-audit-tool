
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
        public String Title { get; set; }
        public Int32 Acnid { get; set; }
        [EditLink]
        public Int32 MeetingTilte { get; set; }
        public Int32 PhaseNo { get; set; }
        public String Fromdate { get; set; }
        public String Todate { get; set; }
       

    }
}