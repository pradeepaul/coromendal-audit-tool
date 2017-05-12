
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Newchanges")]
    [BasedOnRow(typeof(Entities.NewchangesRow))]
    public class NewchangesForm
    {
       // public Int32 MeetingId { get; set; }
        public String Observation { get; set; }
    }
}