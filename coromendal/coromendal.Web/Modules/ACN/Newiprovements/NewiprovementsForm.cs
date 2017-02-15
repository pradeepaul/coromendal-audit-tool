
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Newiprovements")]
    [BasedOnRow(typeof(Entities.NewiprovementsRow))]
    public class NewiprovementsForm
    {
        public Int32 MeetingId { get; set; }
        public String Observation { get; set; }
    }
}