
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Rootcause")]
    [BasedOnRow(typeof(Entities.RootcauseRow))]
    public class RootcauseForm
    {
        public Int32 AuditobservationId { get; set; }
        public String Rootcause { get; set; }
        public String Impact { get; set; }
    }
}