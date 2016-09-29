
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Conformation")]
    [BasedOnRow(typeof(Entities.ConformationRow))]
    public class ConformationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ConformationId { get; set; }
        [EditLink]
        public String Conformationname { get; set; }
    }
}