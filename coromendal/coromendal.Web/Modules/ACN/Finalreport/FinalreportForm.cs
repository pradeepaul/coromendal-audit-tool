
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Finalreport")]
    [BasedOnRow(typeof(Entities.FinalreportRow))]
    public class FinalreportForm
    {
        public String Title { get; set; }
        public Int32 Acnid { get; set; }
        public Int32 Download { get; set; }
        public Int32 Userid { get; set; }
        public String Status { get; set; }
    }
}