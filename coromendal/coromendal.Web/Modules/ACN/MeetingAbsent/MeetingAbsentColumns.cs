
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.MeetingAbsent")]
    [BasedOnRow(typeof(Entities.MeetingAbsentRow))]
    public class MeetingAbsentColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeetingAbsentId { get; set; }
        public Int32 MeetingId { get; set; }
        [EditLink]
        public Int32 AbsentUser { get; set; }
        public String Reason { get; set; }
    }
}