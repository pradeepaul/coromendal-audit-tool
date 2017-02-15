
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

    [ColumnsScript("ACN.MeetingAbsentauditee")]
    [BasedOnRow(typeof(Entities.MeetingAbsentauditeeRow))]
    public class MeetingAbsentauditeeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 MeetingAbsentauditeeId { get; set; }
        public Int32 MeetingId { get; set; }
        //[Width(150), AcnListFormatter]
        public Int32 AbsentUser { get; set; }
        [EditLink]
        public String Reason { get; set; }
    }
}