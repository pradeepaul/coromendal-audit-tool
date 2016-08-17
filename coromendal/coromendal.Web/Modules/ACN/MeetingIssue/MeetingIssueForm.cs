
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.MeetingIssue")]
    [BasedOnRow(typeof(Entities.MeetingIssueRow))]
    public class MeetingIssueForm
    {
        public Int32 MeetingId { get; set; }
        public String AreaofOperation { get; set; }
        public String Issue { get; set; }
        public String Status { get; set; }
        public String ExpectedDate { get; set; }
    }
}