
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.AcnAuditeeRef")]
    [BasedOnRow(typeof(Entities.AcnAuditeeRefRow))]
    public class AcnAuditeeRefColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AcnAuditeeRefId { get; set; }
        public Int32 AcnAuditeeId { get; set; }
        public Int32 AcnId { get; set; }
    }
}