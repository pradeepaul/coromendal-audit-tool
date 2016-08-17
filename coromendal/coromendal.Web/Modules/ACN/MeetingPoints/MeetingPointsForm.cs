
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.MeetingPoints")]
    [BasedOnRow(typeof(Entities.MeetingPointsRow))]
    public class MeetingPointsForm
    {
        public Int32 MeetingId { get; set; }
        public String Points { get; set; }
    }
}