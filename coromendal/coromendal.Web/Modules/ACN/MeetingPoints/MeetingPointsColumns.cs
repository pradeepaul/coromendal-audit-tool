
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.MeetingPoints")]
    [BasedOnRow(typeof(Entities.MeetingPointsRow))]
    public class MeetingPointsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 MeetingPointsId { get; set; }
        [Hidden]
        public Int32 MeetingId { get; set; }
        [EditLink]
        public String Points { get; set; }
    }
}