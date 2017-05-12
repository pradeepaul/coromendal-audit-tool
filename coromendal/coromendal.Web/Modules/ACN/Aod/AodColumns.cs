
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
        [EditLink, DisplayName("Db.Shared.RecordId"),Hidden]
        public Int32 AodId { get; set; }
        [EditLink]
       // public Int32 AcnidAcnTilte { get; set; }
        //public Int32 AcnidPhaseNo { get; set; }
        public String Sbu { get; set; }
        [EditLink]
        public Int32 MeetingidTitle { get; set; }
        [DisplayFormat("dd/MM/yyyy")]
        public DateTime Actualcomencementdate { get; set; }
        [DisplayFormat("dd/MM/yyyy")]
        public DateTime Actualcompltedate { get; set; }
        public String ProcessOwner { get; set; }
        [EditLink]
        public String Preview { get; set; }
        [EditLink]
        public String Send { get; set; }

    }
}