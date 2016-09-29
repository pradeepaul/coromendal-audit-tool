
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Riskrating")]
    [BasedOnRow(typeof(Entities.RiskratingRow))]
    public class RiskratingForm
    {
        public String Riskratingname { get; set; }
    }
}