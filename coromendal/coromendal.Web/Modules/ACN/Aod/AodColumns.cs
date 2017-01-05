﻿
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
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 AodId { get; set; }
        [EditLink]
        public Int32 AcnidAcnTilte { get; set; }
        public Int32 AcnidPhaseNo { get; set; }
        public String Sbu { get; set; }
        public Int32 MeetingidTitle { get; set; }      
        public String Actualcomencementdate { get; set; }
        public String Actualcompltedate { get; set; }
        public String ProcessOwner { get; set; }
        [EditLink]
        public String Preview { get; set; }

    }
}