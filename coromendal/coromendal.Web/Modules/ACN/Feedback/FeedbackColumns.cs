
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Feedback")]
    [BasedOnRow(typeof(Entities.FeedbackRow))]
    public class FeedbackColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 FeedbackId { get; set; }
        public Int32 FeedbackQuestionId { get; set; }
        public Int32 FeedbackMeetingId { get; set; }
        public Int32 FeedbackRating { get; set; }
        [EditLink]
        public String FeedbackRemarks { get; set; }
    }
}