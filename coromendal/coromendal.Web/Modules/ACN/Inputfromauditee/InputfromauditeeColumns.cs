
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Inputfromauditee")]
    [BasedOnRow(typeof(Entities.InputfromauditeeRow))]
    public class InputfromauditeeColumns
    {
      //  [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
       // public Int32 InputauditId { get; set; }
       // public Int32 Aodid { get; set; }
        [EditLink]
        public String Additionalareacovered { get; set; }
        public String Issues { get; set; }
        public String Newimprovements { get; set; }
    }
}