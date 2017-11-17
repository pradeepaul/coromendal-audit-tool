
namespace coromendal.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.NewAcnMaster")]
    [BasedOnRow(typeof(Entities.NewAcnMasterRow))]
    public class NewAcnMasterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String AcnTilte { get; set; }
        public Int32 PhaseNo { get; set; }
        public String Location { get; set; }
        public String Fromdate { get; set; }
        public String Todate { get; set; }
        public String Periodfrom { get; set; }
        public String Periodto { get; set; }
        public String Creationdate { get; set; }
        [AdminListFormatter]
        public Int32 Statusid { get; set; }
        public Int32 Status { get; set; }
    }
}