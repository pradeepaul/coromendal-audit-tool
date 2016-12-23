
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Satisfactionrating")]
    [BasedOnRow(typeof(Entities.SatisfactionratingRow))]
    public class SatisfactionratingForm
    {
        [Category("Documentation")]
        public String Documentweigtage { get; set; }
        public Int32 Documentscore { get; set; }
        public Int32 Documentrating { get; set; }
        public String Documentcomments { get; set; }
        [Category("Compliance")]
        public String Complianceweightage { get; set; }        
        public String Compliancescore { get; set; }
        public String Compliancerating { get; set; }
        public String Compliancecomment { get; set; }
        [Category("Process & Fin Controls")]
        public String Processfincontrollweightage { get; set; }
        public String Processfincontrollscore { get; set; }
        public String Processfincontrollrating { get; set; }
        public String Processfincontrollscorecmnts { get; set; }       
        
        [Category("Response to Audit")]
        public String Responseweightage { get; set; }
        public String Responsescore { get; set; }
        public String Responserating { get; set; }
        public String Responsecmnts { get; set; }
      
       
        [Category("Pre-audit disclosure")]
        public String Preauditweightage { get; set; }
        public String Preauditscore { get; set; }              
        public String Preauditrating { get; set; }
        public String Preauditcmnts { get; set; }

        [Category("New initiatives")]
        public String Newinitiativeweight { get; set; }
        public String Newinitiativescore { get; set; }
        public String Newinitiativerating { get; set; }
        public String Newinitiativecmnts { get; set; }
       
        
        public String Totalscore { get; set; }
      //  public Int32 Aodid { get; set; }
       
       
       
       
        
       
    }
}