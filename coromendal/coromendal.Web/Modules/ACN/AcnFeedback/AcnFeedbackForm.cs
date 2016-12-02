
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.AcnFeedback")]
    [BasedOnRow(typeof(Entities.AcnFeedbackRow))]
    public class AcnFeedbackForm
    {
        public Int32 Acnid { get; set; }
        [Category("Personal Details")]
        public String Name { get; set; }
        public String Dept { get; set; }
        public String Reviewname { get; set; }
        public String Location { get; set; }
        
        [Category("Audit Intimation covering the Scope and period of review, audit duration, composition of Audit Team is made in detail and in time, (incl. changes, if any).")]
        public Int32 Ques1 { get; set; }
        public String Remark1 { get; set; }
        [Category("Inputs were sought for any additional areas to be covered.")]
        public Int32 Ques2 { get; set; }
        public String Remark2 { get; set; }
        [Category("The coverage of areas / activities in your Department was adequate.")]
        public Int32 Ques3 { get; set; }
        public String Remark3 { get; set; }
        [Category("The auditors were responsive to your ideas and / or concerns, if any, in your audit area.")]
        public Int32 Ques4 { get; set; }
        public String Remark4 { get; set; }
        [Category("Auditors had a transparent, positive and user friendly approach.")]
        public Int32 Ques5 { get; set; }
        public String Remark5 { get; set; }
        [Category("Auditors had sufficient knowledge and understanding of your operations.")]
        public Int32 Ques6 { get; set; }
        public String Remark6 { get; set; }
        [Category("There was no undue disruption to your operations during the course of audit.")]
        public Int32 Ques7 { get; set; }
        public String Remark7 { get; set; }
        [Category("Auditors' requests for information were reasonable.")]
        public Int32 Ques8 { get; set; }
        public String Remark8 { get; set; }
        [Category("The audit was completed within a reasonable timeframe.")]
        public Int32 Ques9 { get; set; }
        public String Remark9 { get; set; }
        [Category("All the audit observations were broadly discussed with you during the closing meeting")]
        public Int32 Ques10 { get; set; }
        public String Remark10 { get; set; }
        [Category("Your comments were solicited for every observation.")]
        public Int32 Ques11 { get; set; }
        public String Remark11 { get; set; }
        [Category("Auditors communicated without any ambiguity")]
        public Int32 Ques12 { get; set; }
        public String Remark12 { get; set; }
        [Category("The observations were supported by appropriate evidence / data")]
        public Int32 Ques13 { get; set; }
        public String Remark13 { get; set; }
        [Category("Major Audit findings during the audit in progress were discussed and relevant data shared.")]
        public Int32 Ques14 { get; set; }
        public String Remark14 { get; set; }

        [TextAreaEditor(Rows = 8)]
        public String Comments { get; set; }


    }
}