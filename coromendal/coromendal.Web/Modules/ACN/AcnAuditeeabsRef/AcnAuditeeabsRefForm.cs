
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.AcnAuditeeabsRef")]
    [BasedOnRow(typeof(Entities.AcnAuditeeabsRefRow))]
    public class AcnAuditeeabsRefForm
    {
        public Int32 AcnAuditeeId { get; set; }
        public Int32 MeetingAbsentauditeeId { get; set; }
    }
}