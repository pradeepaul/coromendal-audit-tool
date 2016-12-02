
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Observationpending")]
    [BasedOnRow(typeof(Entities.ObservationpendingRow))]
    public class ObservationpendingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ObservationpendingId { get; set; }
        [EditLink]
        public String Reportreference { get; set; }
        public String Briefdescription { get; set; }
        public String Originaltargetdate { get; set; }
        public String Revisedtargetdate { get; set; }
        public String Remarks { get; set; }
        public Int32 Aodid { get; set; }
    }
}