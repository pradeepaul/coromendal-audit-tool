
namespace coromendal.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Adminstatusvalue")]
    [BasedOnRow(typeof(Entities.AdminstatusvalueRow))]
    public class AdminstatusvalueColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Adminstatusvalueid { get; set; }
        [EditLink]
        public String Value { get; set; }
    }
}