
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.AcnFeedbackRetail")]
    [BasedOnRow(typeof(Entities.AcnFeedbackRetailRow))]
    public class AcnFeedbackRetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 AcnFeedbackRetailId { get; set; }
        public Int32 AcnidAcnTilte { get; set; }       
        [EditLink]
        public String Name { get; set; }
        public String Dept { get; set; }
        public String Reviewname { get; set; }
        public String Location { get; set; }
        public String Date { get; set; }
        public String Storeno { get; set; }
        public String Preview { get; set; }
        public String Send { get; set; }
    }
}