
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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DarClarificationsId { get; set; }
        [EditLink]
        public string ReportTitle { get; set; }
        [FinalTextFormat]
        public string Status { get; set; }
    }
}