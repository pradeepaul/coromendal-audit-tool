
namespace coromendal.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.MasterAcn")]
    [BasedOnRow(typeof(Entities.MasterAcnRow))]
    public class MasterAcnColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Title { get; set; }
        [AdminListFormatter]
        public string Statusid { get; set; }
    }
}