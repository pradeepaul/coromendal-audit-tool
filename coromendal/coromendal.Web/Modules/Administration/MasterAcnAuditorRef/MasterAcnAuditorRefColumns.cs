
namespace coromendal.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.MasterAcnAuditorRef")]
    [BasedOnRow(typeof(Entities.MasterAcnAuditorRefRow))]
    public class MasterAcnAuditorRefColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AcnAuditorRefId { get; set; }
        public Int32 AcnAuditorId { get; set; }
        public Int32 AcnId { get; set; }
    }
}