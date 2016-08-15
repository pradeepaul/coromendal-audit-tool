
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.AcnAuditee")]
    [BasedOnRow(typeof(Entities.AcnAuditeeRow))]
    public class AcnAuditeeForm
    {
        public String Name { get; set; }
    }
}