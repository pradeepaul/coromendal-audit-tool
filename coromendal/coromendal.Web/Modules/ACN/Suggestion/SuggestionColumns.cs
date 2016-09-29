
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Suggestion")]
    [BasedOnRow(typeof(Entities.SuggestionRow))]
    public class SuggestionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SuggestionId { get; set; }
        public Int32 AuditobservationId { get; set; }
        [EditLink]
        public String Suggestion { get; set; }
    }
}