
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
        [EditLink, DisplayName("Db.Shared.RecordId"),Hidden]
        public Int32 AcnId { get; set; }

        public Int32 PhaseNo { get; set; }
        [EditLink]
        public String AcnTilte { get; set; }
        [Width(150), AcnListFormatter]
        public String Auditor { get; set; }
        [Width(150), AcnListFormatter]
        public String Auditee { get; set; }
        [DisplayFormat("dd/MM/yyyy")]
        public DateTime Fromdate { get; set; }
        [DisplayFormat("dd/MM/yyyy")]
        public DateTime Todate { get; set; }
        [DisplayFormat("dd/MM/yyyy")]
        public DateTime Periodfrom { get; set; }
        [DisplayFormat("dd/MM/yyyy")]
        public DateTime Periodto { get; set; }
        public String location { get; set; }
        [DisplayFormat("dd/MM/yyyy")]
        public DateTime creationdate { get; set; }
        [EditLink]
        public String send { get; set; }
        [EditLink]
        public String Preview { get; set; }
        
    }
}