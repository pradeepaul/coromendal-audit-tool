
namespace coromendal.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Location")]
    [BasedOnRow(typeof(Entities.LocationRow))]
    public class LocationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Locid { get; set; }
        [EditLink]
        public String Locname { get; set; }
    }
}