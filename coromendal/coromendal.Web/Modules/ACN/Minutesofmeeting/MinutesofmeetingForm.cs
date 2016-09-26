
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Entities;

    [FormScript("ACN.Minutesofmeeting")]
    [BasedOnRow(typeof(Entities.MinutesofmeetingRow))]
    public class MinutesofmeetingForm
    {
        public Int32 Acnid { get; set; }
        public String Title { get; set; }
        /* public String Title { get; set; }
         public String Auditscope { get; set; }
         public DateTime Period { get; set; }
         public Int32 Time { get; set; }
         public String Venue { get; set; }

         public Int32 Auditor { get; set; }

         public Int32 Auditee { get; set; }*/
        [Category("Absent Details")]
        [MeetingAbsentEditor]
        public List<MeetingAbsentRow> AbsentList { get; set; }

        public List<object> NoteList { get; set; }

        [Category("Issue Details")]
        [MeetingIssueEditor]
        public List<MeetingIssueRow> DetailList { get; set; }        

        [Category("Points Suggested")]
        [MeetingPointsEditor]
        public List<MeetingPointsRow> PointsList { get; set; }
    }
}