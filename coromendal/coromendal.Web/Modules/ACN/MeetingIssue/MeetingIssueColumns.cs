
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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 MeetingIssueId { get; set; }
        [Hidden]
        public Int32 MeetingId { get; set; }
        [EditLink]
        public String AreaofOperation { get; set; }
        [EditLink, Width(300)]
        public String Issue { get; set; }
        [EditLink, Width(300)]
        public String Status { get; set; }
        [EditLink, Width(300)]
        public String ExpectedDate { get; set; }
        [EditLink, Width(300)]
        public String Comments { get; set; }
    }
}