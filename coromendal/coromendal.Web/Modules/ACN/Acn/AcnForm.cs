
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Entities;

    [FormScript("ACN.Acn")]
    [BasedOnRow(typeof(Entities.AcnRow))]
    public class AcnForm
    {
        [Category("The scope of audit will mainly cover the following:")]
        public Int32 PhaseNo { get; set; }
        public String AcnTilte { get; set; }
        public String location { get; set; }
        public DateTime Fromdate { get; set; }
        public DateTime Todate { get; set; }
        public DateTime Periodfrom { get; set; }
        public DateTime Periodto { get; set; }

        public DateTime creationdate { get; set; }
        [Category("The scope of audit will mainly cover the following:")]
        [ScopeEditor]
        public List<ScopeRow> ScopeList { get; set; }
        [Category("Kindly let us know any additional areas that you suggest us to cover. Kindly ensure to disclose about “discrepancies pending prior to audit, if any” along with status of action. The audit team will be led by self and will consist of the following team member(s): ")]
        public List<Int32> Auditor { get; set; }
        public List<Int32> Auditee { get; set; }
       // public Int32 status { get; set; }
    }
}