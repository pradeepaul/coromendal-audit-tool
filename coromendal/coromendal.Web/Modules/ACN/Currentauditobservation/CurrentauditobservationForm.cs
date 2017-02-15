
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Currentauditobservation")]
    [BasedOnRow(typeof(Entities.CurrentauditobservationRow))]
    public class CurrentauditobservationForm
    {
        public String Observation { get; set; }
        [TextAreaEditor(Rows = 4)]
        public String Comments { get; set; }
        //public Int32 Aodid { get; set; }
    }
}