
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Feedbackvalue")]
    [BasedOnRow(typeof(Entities.FeedbackvalueRow))]
    public class FeedbackvalueForm
    {
        public String Value { get; set; }
    }
}