
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Finalreport")]
    [BasedOnRow(typeof(Entities.FinalreportRow))]
    public class FinalreportColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Width(400),Hidden]
        public Int32 ReportId { get; set; }
        [EditLink, Width(400)]
        public String Title { get; set; }
        [ACNNameFormatter, Width(400)]
        public Int32 Acnid { get; set; }
        [Width(400)]
        public Int32 Download { get; set; }
      //  public Int32 Userid { get; set; }
       // public String Status { get; set; }
    }
}