
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Entities;

    [FormScript("ACN.Acnreport")]
    [BasedOnRow(typeof(Entities.AcnreportRow))]
    public class AcnreportForm
    {
        public String Title { get; set; }
        public Int32 Acnid { get; set; }
        [Hidden]
        public String userid { get; set; }
        [Hidden]
        public String status { get; set; }
        public List<Int32> Qc { get; set; }

        [KeyfactsEditor]
        public List<KeyfactsRow> Keyfacts { get; set; }
    }
}