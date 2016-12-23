
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Scope")]
    [BasedOnRow(typeof(Entities.ScopeRow))]
    public class ScopeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ScopeId { get; set; }
        [EditLink]
        public String Title { get; set; }
       // public Int32 AcnId { get; set; }
    }
}