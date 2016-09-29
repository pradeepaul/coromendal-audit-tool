
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Conformation")]
    [BasedOnRow(typeof(Entities.ConformationRow))]
    public class ConformationForm
    {
        public String Conformationname { get; set; }
    }
}