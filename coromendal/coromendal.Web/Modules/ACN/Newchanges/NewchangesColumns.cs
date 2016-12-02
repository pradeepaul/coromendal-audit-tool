
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Newchanges")]
    [BasedOnRow(typeof(Entities.NewchangesRow))]
    public class NewchangesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 NewchangesId { get; set; }
        public Int32 MeetingId { get; set; }
        [EditLink]
        public String Observation { get; set; }
    }
}