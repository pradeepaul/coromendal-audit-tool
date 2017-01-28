
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

    [FormScript("ACN.Aod")]
    [BasedOnRow(typeof(Entities.AodRow))]
    public class AodForm
    {
        public String Sbu { get; set; }
        public String AcnidLocation { get; set; }
        public Int32 Acnid { get; set; }
        public Int32 Meetingid { get; set; }
        [Category("Report No")]
        public Int32 AcnidPhaseNo { get; set; }
        [Category("ACN Date")]
        public String AcnidCreationdate { get; set; }
        [Category("Commencement Date")]
        public DateTime MeetingidPlanedcloseddate { get; set; }
        public DateTime Actualcomencementdate { get; set; }
        [Category("Completion Date")]
        public DateTime MeetingidAuditopeningmeetingdate { get; set; }
        public DateTime Actualcompltedate { get; set; }
        [Category("AOD Discussion Date")]
        public String ProcessOwner { get; set; }
        public String Functionalhead { get; set; }

        //public DateTime MeetingidMomdate { get; set; }
        [Category("Period Covered")]

        public String AcnidPeriodfrom { get; set; }
        public String AcnidPeriodto { get; set; }

        [Category("Execution Date")]

        public String AcnidFromdate { get; set; }
        public String AcnidTodate { get; set; }
        [Category("")]
        public String Areaofscope { get; set; }
        public String Exclusions { get; set; }
        public String Reasons { get; set; }        
       

        [Category("Inputs received from Auditee")]
        [InputfromauditeeEditor]
        public List<InputfromauditeeRow> inputfromauditee { get; set; }

        [Category("Satisfaction Rating")]
        [SatisfactionratingEditor]
        public List<SatisfactionratingRow> Satisfactionrating { get; set; }

        [Category("Observation Pending")]
        [ObservationpendingEditor]
        public List<ObservationpendingRow> Observationpending { get; set; }

        [Category("Currentaudit Observation")]
        [CurrentauditobservationEditor]
        public List<CurrentauditobservationRow> Currentauditobservation { get; set; }
    }
}