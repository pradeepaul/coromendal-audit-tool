
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Percentage")]
    [BasedOnRow(typeof(Entities.PercentageRow))]
    public class PercentageForm
    {
        public String Percentagename { get; set; }
    }
}