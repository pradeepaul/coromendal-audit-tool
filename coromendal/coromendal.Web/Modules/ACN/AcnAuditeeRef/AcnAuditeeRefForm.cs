
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.AcnAuditeeRef")]
    [BasedOnRow(typeof(Entities.AcnAuditeeRefRow))]
    public class AcnAuditeeRefForm
    {
        public Int32 AcnAuditeeId { get; set; }
        public Int32 AcnId { get; set; }
    }
}