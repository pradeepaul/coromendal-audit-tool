
namespace coromendal.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using ACN;
    using ACN.Entities;

    [FormScript("Administration.MasterAcn")]
    [BasedOnRow(typeof(Entities.MasterAcnRow))]
    public class MasterAcnForm
    {
        public String Title { get; set; }
        public Int32 Statusid { get; set; }
        [AcnEditor]
        public List<AcnRow> NewACN { get; set; }
    }
}