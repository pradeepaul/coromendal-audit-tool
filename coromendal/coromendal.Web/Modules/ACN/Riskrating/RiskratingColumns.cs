
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Riskrating")]
    [BasedOnRow(typeof(Entities.RiskratingRow))]
    public class RiskratingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Riskratingid { get; set; }
        [EditLink]
        public String Riskratingname { get; set; }
    }
}