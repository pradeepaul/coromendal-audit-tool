
namespace coromendal.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.MasterAcnAuditeeRef")]
    [BasedOnRow(typeof(Entities.MasterAcnAuditeeRefRow))]
    public class MasterAcnAuditeeRefColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AcnAuditeeRefId { get; set; }
        public Int32 AcnAuditeeId { get; set; }
        public Int32 AcnId { get; set; }
    }
}