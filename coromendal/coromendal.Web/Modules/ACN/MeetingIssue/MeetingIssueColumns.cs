
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.MeetingIssue")]
    [BasedOnRow(typeof(Entities.MeetingIssueRow))]
    public class MeetingIssueColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeetingIssueId { get; set; }
        public Int32 MeetingId { get; set; }
        [EditLink]
        public String AreaofOperation { get; set; }
        public String Issue { get; set; }
        public String Status { get; set; }
        public String ExpectedDate { get; set; }
    }
}