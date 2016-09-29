
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Feedbackvalue")]
    [BasedOnRow(typeof(Entities.FeedbackvalueRow))]
    public class FeedbackvalueColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Feedbackvalueid { get; set; }
        [EditLink]
        public String Value { get; set; }
    }
}