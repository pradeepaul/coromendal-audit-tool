
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.MeetingAbsentauditordetails")]
    [BasedOnRow(typeof(Entities.MeetingAbsentauditordetailsRow))]
    public class MeetingAbsentauditordetailsForm
    {
        public Int32 MeetingId { get; set; }
        public string AbsentUser { get; set; }
        public String Reason { get; set; }
        public String Name { get; set; }
    }
}