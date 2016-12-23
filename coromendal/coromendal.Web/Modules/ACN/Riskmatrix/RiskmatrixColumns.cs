
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Riskmatrix")]
    [BasedOnRow(typeof(Entities.RiskmatrixRow))]
    public class RiskmatrixColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Riskmatrixid { get; set; }
        public Int32 Likelihood { get; set; }
        public Int32 Consequence { get; set; }
        [EditLink]
        public String Value { get; set; }
    }
}