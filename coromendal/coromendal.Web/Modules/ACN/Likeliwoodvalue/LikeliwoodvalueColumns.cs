
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Likeliwoodvalue")]
    [BasedOnRow(typeof(Entities.LikeliwoodvalueRow))]
    public class LikeliwoodvalueColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Likeliwoodvalueid { get; set; }
        [EditLink]
        public String Likeliwoodvaluename { get; set; }
    }
}