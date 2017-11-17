
namespace coromendal.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Masterscope")]
    [BasedOnRow(typeof(Entities.MasterscopeRow))]
    public class MasterscopeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 ScopeId { get; set; }
        [EditLink]
        public String Title { get; set; }
       
    }
}