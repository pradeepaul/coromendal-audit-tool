
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Suggestion")]
    [BasedOnRow(typeof(Entities.SuggestionRow))]
    public class SuggestionForm
    {
       // public Int32 AuditobservationId { get; set; }
        public String Suggestion { get; set; }
    }
}