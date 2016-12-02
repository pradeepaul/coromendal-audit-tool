
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
        [Category("Information from Audit Commencement Note")]
        public Int32 Acnid { get; set; }
        public String AcnidPhaseNo { get; set; }
        public DateTime momdate { get; set; }
        public DateTime planeddate { get; set; }
        public DateTime auditopeneddate { get; set; }

        [Category("Period Covered")]

        public String AcnidPeriodfrom { get; set; }
        public String AcnidPeriodto { get; set; }

        [Category("Execution Date")]

        public String AcnidFromdate { get; set; }
        public String AcnidTodate { get; set; }

        
        [Category("Meeting Absent")]
        [MeetingAbsentEditor]
        public List<MeetingAbsentRow> AbsentList { get; set; }

        [Category("Observation From Previous Audit Report & Status")]
        [ObservationpreviousauditEditor]
        public List<ObservationpreviousauditRow> PreviousObservationaudit { get; set; }

        [Category("Points Discussed Based on preAaudit or otherwise")]
        [MeetingPointsEditor]
        public List<MeetingPointsRow> PointsList { get; set; }

        [Category("Additional Areas Suggested by Auditee")]
        public List<object> NoteList { get; set; }

        [Category("Pre-audit Discloser by Auditee")]
        [MeetingIssueEditor]
        public List<MeetingIssueRow> DetailList { get; set; }
        [Category("New Initiatives and Improvements by Auditee")]
        [NewiprovementsEditor]
        public List<NewiprovementsRow> Newimprovements { get; set; }
        [Category("New Changes /Updates in Audit")]
        [NewchangesEditor]
        public List<NewchangesRow> Newchanges { get; set; }



    }
}