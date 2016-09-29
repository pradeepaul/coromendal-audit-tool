
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Rootcause")]
    [BasedOnRow(typeof(Entities.RootcauseRow))]
    public class RootcauseColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RootcauseId { get; set; }
        public Int32 AuditobservationId { get; set; }
        [EditLink]
        public String Rootcause { get; set; }
        public String Impact { get; set; }
    }
}