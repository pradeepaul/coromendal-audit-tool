
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.AcnAuditeeabsRef")]
    [BasedOnRow(typeof(Entities.AcnAuditeeabsRefRow))]
    public class AcnAuditeeabsRefColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AcnAuditeeabsRefId { get; set; }
        public Int32 AcnAuditeeId { get; set; }
        public Int32 MeetingAbsentauditeeId { get; set; }
    }
}