
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.AcnAuditorRef")]
    [BasedOnRow(typeof(Entities.AcnAuditorRefRow))]
    public class AcnAuditorRefColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AcnAuditorRefId { get; set; }
        public Int32 AcnAuditorId { get; set; }
        public Int32 AcnId { get; set; }
    }
}