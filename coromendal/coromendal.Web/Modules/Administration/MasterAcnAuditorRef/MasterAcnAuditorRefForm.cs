
namespace coromendal.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.MasterAcnAuditorRef")]
    [BasedOnRow(typeof(Entities.MasterAcnAuditorRefRow))]
    public class MasterAcnAuditorRefForm
    {
        public Int32 AcnAuditorId { get; set; }
        public Int32 AcnId { get; set; }
    }
}