
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.DarClarifications")]
    [BasedOnRow(typeof(Entities.DarClarificationsRow))]
    public class DarClarificationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 DarClarificationsId { get; set; }
        public Int32 ReportId { get; set; }
        public Int32 AcnId { get; set; }
    }
}