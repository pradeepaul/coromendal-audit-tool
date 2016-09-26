
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Scope")]
    [BasedOnRow(typeof(Entities.ScopeRow))]
    public class ScopeForm
    {
        public String Title { get; set; }
        public Int32 AcnId { get; set; }
    }
}