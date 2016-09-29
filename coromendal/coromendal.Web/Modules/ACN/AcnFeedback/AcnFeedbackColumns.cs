
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.AcnFeedback")]
    [BasedOnRow(typeof(Entities.AcnFeedbackRow))]
    public class AcnFeedbackColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AcnFeedbackId { get; set; }
        public Int32 Acnid { get; set; }
       /* public Int32 Ques1 { get; set; }
        public Int32 Ques2 { get; set; }
        public Int32 Ques3 { get; set; }
        public Int32 Ques4 { get; set; }
        public Int32 Ques5 { get; set; }
        public Int32 Ques6 { get; set; }
        public Int32 Ques7 { get; set; }
        public Int32 Ques8 { get; set; }
        public Int32 Ques9 { get; set; }
        public Int32 Ques10 { get; set; }
        public Int32 Ques11 { get; set; }
        public Int32 Ques12 { get; set; }
        public Int32 Ques13 { get; set; }
        public Int32 Ques14 { get; set; }*/
        [EditLink]
        public String Name { get; set; }
        public String Dept { get; set; }
        public String Reviewname { get; set; }
        public String Location { get; set; }
    }
}