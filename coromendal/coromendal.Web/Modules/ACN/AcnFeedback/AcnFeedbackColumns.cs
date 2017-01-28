
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.AcnFeedback")]
    [BasedOnRow(typeof(Entities.AcnFeedbackRow))]
    public class AcnFeedbackColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 AcnFeedbackId { get; set; }
        public Int32 AcnidAcnTilte { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Dept { get; set; }
        public String Reviewname { get; set; }
        public String Location { get; set; }
        [EditLink]
        public String Preview { get; set; }
        [EditLink]
        public String Send { get; set; }
    }
}