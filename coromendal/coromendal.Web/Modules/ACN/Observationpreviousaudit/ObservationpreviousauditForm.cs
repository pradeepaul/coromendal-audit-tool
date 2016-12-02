
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Observationpreviousaudit")]
    [BasedOnRow(typeof(Entities.ObservationpreviousauditRow))]
    public class ObservationpreviousauditForm
    {
        //public Int32 MeetingId { get; set; }
        public String Observation { get; set; }
    }
}