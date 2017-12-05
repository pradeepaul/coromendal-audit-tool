
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Scopeexclude")]
    [BasedOnRow(typeof(Entities.ScopeexcludeRow))]
    public class ScopeexcludeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 ExcludeId { get; set; }
        public string Title { get; set; }
        // [ScopeFormatter, Width(1700)]
        // public string Scopeid { get; set; }
       // public string Title { get; set; }
       // public Int32 AcnId { get; set; }
    }
}