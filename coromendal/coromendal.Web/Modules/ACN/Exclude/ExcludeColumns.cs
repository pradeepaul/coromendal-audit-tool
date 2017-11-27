
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Exclude")]
    [BasedOnRow(typeof(Entities.ExcludeRow))]
    public class ExcludeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 ExcludeId { get; set; }

        public Int32 Scopeid { get; set; }
        
    }
}