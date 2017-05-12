
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Observationpreviousaudit")]
    [BasedOnRow(typeof(Entities.ObservationpreviousauditRow))]
    public class ObservationpreviousauditColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 ObservationpreviousauditId { get; set; }
        [Hidden]
        public Int32 MeetingId { get; set; }
        [EditLink]
        public String Observation { get; set; }
    }
}