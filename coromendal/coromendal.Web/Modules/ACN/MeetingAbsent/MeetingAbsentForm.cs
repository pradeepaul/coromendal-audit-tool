
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.MeetingAbsent")]
    [BasedOnRow(typeof(Entities.MeetingAbsentRow))]
    public class MeetingAbsentForm
    {
       // public Int32 MeetingId { get; set; }
        public Int32 AbsentUser { get; set; }
        public String Reason { get; set; }
    }
}