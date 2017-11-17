
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Auditobservation")]
    [BasedOnRow(typeof(Entities.AuditobservationRow))]
    public class AuditobservationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Hidden]
        public Int32 AuditobservationId { get; set; }
        [EditLink, Width(300)]
        public Int32 AcnAcnTilte { get; set; }
        [EditLink, Width(200)]
        public String Observationtitle { get; set; }
        [DisplayFormat("dd/MM/yyyy"), Width(200)]
        public DateTime Targetdate { get; set; }
        [Width(200)]
        public String Agreeobservation { get; set; }
        [FinalTextFormat]
        public string status { get; set; }
       
        public String Suggestion { get; set; }
        
        
    }
}