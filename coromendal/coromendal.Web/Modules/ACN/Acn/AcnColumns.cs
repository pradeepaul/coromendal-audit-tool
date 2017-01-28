﻿
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Administration.Columns;

    [ColumnsScript("ACN.Acn")]
    [BasedOnRow(typeof(Entities.AcnRow))]
    public class AcnColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 AcnId { get; set; }

        public Int32 PhaseNo { get; set; }
        [EditLink]
        public String AcnTilte { get; set; }
        [Width(150), AcnListFormatter]
        public String Auditor { get; set; }
        [Width(150), AcnListFormatter]
        public String Auditee { get; set; }

        public String Fromdate { get; set; }
        public String Todate { get; set; }
        public String Periodfrom { get; set; }
        public String Periodto { get; set; }
        public String location { get; set; }
        public String creationdate { get; set; }
        [EditLink]
        public String send { get; set; }
        [EditLink]
        public String Preview { get; set; }
        
    }
}