
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.AcnReviewRef")]
    [BasedOnRow(typeof(Entities.AcnReviewRefRow))]
    public class AcnReviewRefForm
    {
        public Int32 AcnReviewId { get; set; }
        public Int32 ReportId { get; set; }
       
    }
}