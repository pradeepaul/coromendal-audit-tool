
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.AcnAuditorRef")]
    [BasedOnRow(typeof(Entities.AcnAuditorRefRow))]
    public class AcnAuditorRefForm
    {
        public Int32 AcnAuditorId { get; set; }
        public Int32 AcnId { get; set; }
    }
}