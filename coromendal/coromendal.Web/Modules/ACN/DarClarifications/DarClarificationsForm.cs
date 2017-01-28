
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.DarClarifications")]
    [BasedOnRow(typeof(Entities.DarClarificationsRow))]
    public class DarClarificationsForm
    {
        public Int32 ReportId { get; set; }
        public Int32 AcnId { get; set; }
        public Int32 Status { get; set; }
        [Category("If any comments..")]
        public List<object> NoteList { get; set; }
    }
}