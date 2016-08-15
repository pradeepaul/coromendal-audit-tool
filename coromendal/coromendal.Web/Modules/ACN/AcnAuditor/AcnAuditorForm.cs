
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.AcnAuditor")]
    [BasedOnRow(typeof(Entities.AcnAuditorRow))]
    public class AcnAuditorForm
    {
        public String Name { get; set; }
    }
}