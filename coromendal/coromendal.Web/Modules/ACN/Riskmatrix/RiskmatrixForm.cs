
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Riskmatrix")]
    [BasedOnRow(typeof(Entities.RiskmatrixRow))]
    public class RiskmatrixForm
    {
        public Int32 Likelihood { get; set; }
        public Int32 Consequence { get; set; }
        public String Value { get; set; }
    }
}