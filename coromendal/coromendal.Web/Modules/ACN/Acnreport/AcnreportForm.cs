﻿
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
        public String userid { get; set; }
        public String status { get; set; }
       
        [KeyfactsEditor]
        public List<KeyfactsRow> Keyfacts { get; set; }
    }
}