
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Administration.Columns;

    [ColumnsScript("ACN.Acnreport")]
    [BasedOnRow(typeof(Entities.AcnreportRow))]
    public class AcnreportColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"),Hidden]
        public Int32 ReportId { get; set; }
        [EditLink, Width(300)]
        public String Title { get; set; }
        [EditLink, Width(300)]
        public String AcnidAcnTilte { get; set; }
       

        [EditLink, Width(300), AlignCenter]
        public String status { get; set; }
        [Width(300)]
        public Int32 Download { get; set; }

       


    }
}