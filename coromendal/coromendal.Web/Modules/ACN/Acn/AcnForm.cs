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

    [FormScript("ACN.Acn")]
    [BasedOnRow(typeof(Entities.AcnRow))]
    public class AcnForm
    {
        public String AcnTilte { get; set; }
        public Int32 PhaseNo { get; set; }
        public List<Int32> Auditor { get; set; }
        public List<Int32> Auditee { get; set; }

        public DateTime Fromdate { get; set; }
        public DateTime Todate { get; set; }
        public DateTime Periodfrom { get; set; }
        public DateTime Periodto { get; set; }
        public String location { get; set; }
        public DateTime creationdate { get; set; }
        [Category("Audit Scope Details")]
        [ScopeEditor]
        public List<ScopeRow> ScopeList { get; set; }
    }
}