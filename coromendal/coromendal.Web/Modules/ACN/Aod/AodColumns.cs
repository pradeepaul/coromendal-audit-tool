
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Aod")]
    [BasedOnRow(typeof(Entities.AodRow))]
    public class AodColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Hidden]
        public Int32 AodId { get; set; }
        [EditLink, Width(200)]
        // public Int32 AcnidAcnTilte { get; set; }
        //public Int32 AcnidPhaseNo { get; set; }
        public String Sbu { get; set; }
        [EditLink, Width(350)]
        public Int32 MeetingidTitle { get; set; }
        [DisplayFormat("dd/MM/yyyy"), Width(300)]
        public DateTime Actualcomencementdate { get; set; }
        [DisplayFormat("dd/MM/yyyy"), Width(300)]
        public DateTime Actualcompltedate { get; set; }
        [Width(300)]
        public String ProcessOwner { get; set; }
        [EditLink, Width(200)]
        public String Preview { get; set; }
        [EditLink, Width(200)]
        public String Send { get; set; }

    }
}