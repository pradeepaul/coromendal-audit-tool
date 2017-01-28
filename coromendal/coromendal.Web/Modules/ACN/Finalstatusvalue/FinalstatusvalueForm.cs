
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Finalstatusvalue")]
    [BasedOnRow(typeof(Entities.FinalstatusvalueRow))]
    public class FinalstatusvalueForm
    {
        public String Value { get; set; }
    }
}