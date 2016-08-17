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

    [ColumnsScript("ACN.Minutesofmeeting")]
    [BasedOnRow(typeof(Entities.MinutesofmeetingRow))]
    public class MinutesofmeetingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Meetingid { get; set; }
        public Int32 Acnid { get; set; }
        [EditLink]
        public String Title { get; set; }
        public String Auditscope { get; set; }
        public String Period { get; set; }
        public Int32 Time { get; set; }
        public String Venue { get; set; }
        public Int32 Auditor { get; set; }
        public Int32 Auditee { get; set; }
    }
}