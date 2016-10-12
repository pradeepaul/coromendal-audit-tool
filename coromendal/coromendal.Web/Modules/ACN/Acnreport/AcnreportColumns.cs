
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Acnreport")]
    [BasedOnRow(typeof(Entities.AcnreportRow))]
    public class AcnreportColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 ReportId { get; set; }
        [EditLink]
        public String Title { get; set; }
        public Int32 Acnid { get; set; }
        public String AcnidAcnTilte { get; set; }
        public String status { get; set; }
        [Width(100), AcnListFormatter]
        public Int32 Download { get; set; }


    }
}