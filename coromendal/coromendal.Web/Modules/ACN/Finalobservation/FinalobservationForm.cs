
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

    [FormScript("ACN.Finalobservation")]
    [BasedOnRow(typeof(Entities.FinalobservationRow))]
    public class FinalobservationForm
    {
        public Int32 Observationid { get; set; }
        public Int32 AcnId { get; set; }
        public Int32 Scope { get; set; }
        public String Observationtitle { get; set; }
        [TextAreaEditor(Rows = 8)]
        public String Observationsynopsis { get; set; }
        public List<object> Detailedobservation1 { get; set; }
        [RootcauseEditor]
        public List<RootcauseRow> rootList { get; set; }

        [SuggestionEditor]
        public List<SuggestionRow> SuggestionList { get; set; }
        public Int32 Category { get; set; }
        
        public String RiskRating { get; set; }

        public Int32 Consequence { get; set; }
        public Int32 Likelihood { get; set; }
        public Int32 Agreeobservation { get; set; }
        [TextAreaEditor(Rows = 8)]
        public String Justification { get; set; }
        public Int32 Suggestion { get; set; }
        [TextAreaEditor(Rows = 8)]
        public String Alternateplan { get; set; }
        public String Name { get; set; }
        public String Email { get; set; }
        public String Targetdate { get; set; }
        [Category("Comments if any....:")]
        public List<object> Comments { get; set; }
    }
}