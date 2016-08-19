
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Feedback")]
    [BasedOnRow(typeof(Entities.FeedbackRow))]
    public class FeedbackForm
    {
        public Int32 FeedbackMeetingId { get; set; }
        public Int32 FeedbackQuestionId { get; set; }
        public Int32 FeedbackRating { get; set; }
        public String FeedbackRemarks { get; set; }
    }
}