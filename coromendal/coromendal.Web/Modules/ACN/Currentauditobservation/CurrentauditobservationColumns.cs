
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Currentauditobservation")]
    [BasedOnRow(typeof(Entities.CurrentauditobservationRow))]
    public class CurrentauditobservationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Observation { get; set; }
        public String Comments { get; set; }
        public Int32 Aodid { get; set; }
    }
}