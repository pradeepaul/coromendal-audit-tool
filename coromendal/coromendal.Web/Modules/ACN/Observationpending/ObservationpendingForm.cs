
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Observationpending")]
    [BasedOnRow(typeof(Entities.ObservationpendingRow))]
    public class ObservationpendingForm
    {
        public String Reportreference { get; set; }
        public String Briefdescription { get; set; }
        public String Originaltargetdate { get; set; }
        public String Revisedtargetdate { get; set; }
        public String Remarks { get; set; }
        //public Int32 Aodid { get; set; }
    }
}