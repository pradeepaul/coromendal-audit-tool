
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Finalstatusvalue")]
    [BasedOnRow(typeof(Entities.FinalstatusvalueRow))]
    public class FinalstatusvalueColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Finalstatusid { get; set; }
        [EditLink]
        public String Value { get; set; }
    }
}