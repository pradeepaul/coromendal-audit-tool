
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
        public String AcnidAcnTilte { get; set; }
        public String status { get; set; }
        [EditLink, Width(100), AlignCenter]
        public Int32 Download { get; set; }


    }
}