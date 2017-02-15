
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Sbu")]
    [BasedOnRow(typeof(Entities.SbuRow))]
    public class SbuColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Sbuid { get; set; }
        [EditLink]
        public String Sbuname { get; set; }
    }
}