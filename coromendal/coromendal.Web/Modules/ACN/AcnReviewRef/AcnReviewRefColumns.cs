
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.AcnReviewRef")]
    [BasedOnRow(typeof(Entities.AcnReviewRefRow))]
    public class AcnReviewRefColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AcnReviewRefId { get; set; }
        public Int32 AcnReviewId { get; set; }
        public Int32 ReportId { get; set; }
    }
}