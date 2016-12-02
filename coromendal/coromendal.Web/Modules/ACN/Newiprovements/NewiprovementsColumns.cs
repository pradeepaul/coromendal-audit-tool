
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Newiprovements")]
    [BasedOnRow(typeof(Entities.NewiprovementsRow))]
    public class NewiprovementsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 NewiprovementsId { get; set; }
        public Int32 MeetingId { get; set; }
        [EditLink]
        public String Observation { get; set; }
    }
}