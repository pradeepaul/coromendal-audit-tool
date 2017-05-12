
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Satisfactionrating")]
    [BasedOnRow(typeof(Entities.SatisfactionratingRow))]
    public class SatisfactionratingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 SatisfactionratingId { get; set; }
        [EditLink]
        public Int32 Aodid { get; set; }
        public String Totalscore { get; set; }
    }
}