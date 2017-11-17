
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Preobservation")]
    [BasedOnRow(typeof(Entities.PreobservationRow))]
    public class PreobservationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
       // public Int32 PreobservationId { get; set; }
        public Int32 Observationid { get; set; }
        [ACNNameFormatter]
        [EditLink, Width(400)]
        public Int32 AcnId { get; set; }
        [ScopeFormatter, Width(500)]
        public Int32 Scope { get; set; }
        [EditLink, Width(400)]
        public String Observationtitle { get; set; }
        [FinalTextFormat, Width(400)]
        public Int32 Status { get; set; }
    }
}