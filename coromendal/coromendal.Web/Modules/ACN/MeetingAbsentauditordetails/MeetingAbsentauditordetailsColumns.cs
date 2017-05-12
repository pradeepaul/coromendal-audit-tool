
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.MeetingAbsentauditordetails")]
    [BasedOnRow(typeof(Entities.MeetingAbsentauditordetailsRow))]
    public class MeetingAbsentauditordetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeetingAbsentauditorId { get; set; }
        public Int32 MeetingId { get; set; }
        public Int32 AbsentUser { get; set; }
        [EditLink]
        public String Reason { get; set; }
        public String Name { get; set; }
    }
}