
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Administration;

    [ColumnsScript("ACN.MeetingAbsentauditor")]
    [BasedOnRow(typeof(Entities.MeetingAbsentauditorRow))]
    public class MeetingAbsentauditorColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 MeetingAbsentauditorId { get; set; }
        [Hidden]
        public Int32 MeetingId { get; set; }
        [Width(150), EditLink, UserFormatter]
        public string AbsentUser { get; set; }
        [EditLink]
        public String Reason { get; set; }
    }
}