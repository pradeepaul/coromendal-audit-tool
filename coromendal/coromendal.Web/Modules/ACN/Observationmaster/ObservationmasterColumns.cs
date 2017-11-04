
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Observationmaster")]
    [BasedOnRow(typeof(Entities.ObservationmasterRow))]
    public class ObservationmasterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ObservationmasterId { get; set; }       
        public Int32 AcnId { get; set; }
      
    }
}