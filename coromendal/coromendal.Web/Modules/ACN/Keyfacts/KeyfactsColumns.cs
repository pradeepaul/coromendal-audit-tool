
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Keyfacts")]
    [BasedOnRow(typeof(Entities.KeyfactsRow))]
    public class KeyfactsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 KeyfactsId { get; set; }
      //  public Int32 AcnId { get; set; }
        [EditLink]
        public String Particulars { get; set; }
        public String Value { get; set; }
       // public Int32 Reportid { get; set; }
    }
}