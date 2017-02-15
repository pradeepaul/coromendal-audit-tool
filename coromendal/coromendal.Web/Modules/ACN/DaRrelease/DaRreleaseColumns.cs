
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.DaRrelease")]
    [BasedOnRow(typeof(Entities.DaRreleaseRow))]
    public class DaRreleaseColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 DaRreleaseId { get; set; }
        public Int32 ReportId { get; set; }
        public Int32 AcnId { get; set; }
    }
}