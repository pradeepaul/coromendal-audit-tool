
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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AodId { get; set; }
        public Int32 Meetingid { get; set; }
        [EditLink]
        public String Actualcomencementdate { get; set; }
        public String Actualcompltedate { get; set; }
        public String ProcessOwner { get; set; }
        public String Functionalhead { get; set; }
        public String Areaofscope { get; set; }
        public String Exclusions { get; set; }
        public String Reasons { get; set; }
        public String Sbu { get; set; }
        public Int32 Acnid { get; set; }
        public Int32 AcnidPhaseNo { get; set; }
        
    }
}