
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Acn")]
    [BasedOnRow(typeof(Entities.AcnRow))]
    public class AcnForm
    {
        public String AcnTilte { get; set; }

        public List<Int32> Auditor { get; set; }
        public List<Int32> Auditee { get; set; }
        
    }
}