
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

    [ColumnsScript("ACN.MeetingAbsent")]
    [BasedOnRow(typeof(Entities.MeetingAbsentRow))]
    public class MeetingAbsentColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeetingAbsentId { get; set; }
        public Int32 MeetingId { get; set; }
        [Width(150), AcnListFormatter]
        public Int32 AbsentUser { get; set; }
        [EditLink]
        public String Reason { get; set; }
    }
}