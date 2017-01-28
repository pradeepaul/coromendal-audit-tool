
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.AcnFeedbackRetail")]
    [BasedOnRow(typeof(Entities.AcnFeedbackRetailRow))]
    public class AcnFeedbackRetailForm
    {

        public Int32 Acnid { get; set; }
        public String Name { get; set; }
        public String Date { get; set; }
        public String Dept { get; set; }
        public String Reviewname { get; set; }
        public String Location { get; set; }
        public String Storeno { get; set; }

        [Category("The audit reporting process was adequately explained.")]
        public Int32 Ques1 { get; set; }
        public String Remark1 { get; set; }
        [Category("The scope of coverage of areas / activities in the retail centre was adequate.")]
        public Int32 Ques2 { get; set; }
        public String Remark2 { get; set; }
        [Category("Inputs were sought for any additional areas to be covered")]
        public Int32 Ques3 { get; set; }
        public String Remark3 { get; set; }
        [Category("Auditors were transparent, positive and constructive and communicated openly throughout the audit.")]
        public Int32 Ques4 { get; set; }
        public String Remark4 { get; set; }
        [Category("There was minimal disruption to your operations during the course of audit.")]
        public Int32 Ques5 { get; set; }
        public String Remark5 { get; set; }
        [Category("Auditors' requests for information were reasonable.")]
        public Int32 Ques6 { get; set; }
        public String Remark6 { get; set; }
        [Category("The audit was executed within store business hours.")]
        public Int32 Ques7 { get; set; }
        public String Remark7 { get; set; }
        [Category("All the audit observations were discussed with you before drafting the report.")]
        public Int32 Ques8 { get; set; }
        public String Remark8 { get; set; }
        [TextAreaEditor(Rows = 8)]
        public String Comments { get; set; }




    }
}