
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Percentage")]
    [BasedOnRow(typeof(Entities.PercentageRow))]
    public class PercentageColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Percentageid { get; set; }
        [EditLink]
        public String Percentagename { get; set; }
    }
}