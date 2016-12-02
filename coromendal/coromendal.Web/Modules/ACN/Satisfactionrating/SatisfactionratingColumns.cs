
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Satisfactionrating")]
    [BasedOnRow(typeof(Entities.SatisfactionratingRow))]
    public class SatisfactionratingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SatisfactionratingId { get; set; }
        public Int32 Documentscore { get; set; }
        [EditLink]
        public String Documentcomments { get; set; }
        public String Compliancescore { get; set; }
        public String Compliancecomment { get; set; }
        public String Processfincontrollscore { get; set; }
        public String Processfincontrollscorecmnts { get; set; }
        public String Responsescore { get; set; }
        public String Responsecmnts { get; set; }
        public String Preauditscore { get; set; }
        public String Preauditcmnts { get; set; }
        public String Newinitiative { get; set; }
        public String Totalscore { get; set; }
        public Int32 Aodid { get; set; }
    }
}