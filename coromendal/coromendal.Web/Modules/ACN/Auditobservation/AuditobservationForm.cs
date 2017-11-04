
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

    [FormScript("ACN.Auditobservation")]
    [BasedOnRow(typeof(Entities.AuditobservationRow))]
    public class AuditobservationForm
    {
        [EditLink]
        public Int32 AcnId { get; set; }
        public String Observationtitle { get; set; }
        public Int32 scope { get; set; }
        [TextAreaEditor(Rows = 8)]
        public String Observationsynopsis { get; set; }
        //[TextAreaEditor(Rows = 6)]
        public List<object>  Detailedobservation1 { get; set; }
        [RootcauseEditor]
        public List<RootcauseRow> rootList { get; set; }

        [SuggestionEditor]
        public List<SuggestionRow> SuggestionList { get; set; }
        public Int32 Category { get; set; }
        public Int32 Consequence { get; set; }
        public Int32 Likelihood { get; set; }
        public String RiskRating { get; set; }     
        public DateTime Targetdate { get; set; }
        public String Name { get; set; }
        public String Email { get; set; }
    }
}