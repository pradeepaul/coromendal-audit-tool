
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.AcnAuditor")]
    [BasedOnRow(typeof(Entities.AcnAuditorRow))]
    public class AcnAuditorColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AcnAuditorId { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}