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

    [ColumnsScript("ACN.Finalobservation")]
    [BasedOnRow(typeof(Entities.FinalobservationRow))]
    public class FinalobservationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
       // public Int32 FinalobservationId { get; set; }        
        public Int32 Observationid { get; set; }
        [ACNNameFormatter]
        [EditLink]
        public Int32 AcnId { get; set; }
        [ScopeFormatter]
        public Int32 Scope { get; set; }
        
       
    }
}