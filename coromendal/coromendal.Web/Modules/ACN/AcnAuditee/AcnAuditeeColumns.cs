
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.AcnAuditee")]
    [BasedOnRow(typeof(Entities.AcnAuditeeRow))]
    public class AcnAuditeeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AcnAuditeeId { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}