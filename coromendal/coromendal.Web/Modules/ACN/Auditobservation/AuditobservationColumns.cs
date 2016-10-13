
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
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 AuditobservationId { get; set; }
        public Int32 AcnId { get; set; }
        [EditLink]
        public String Observationtitle { get; set; }
        public String Targetdate { get; set; }
    }
}