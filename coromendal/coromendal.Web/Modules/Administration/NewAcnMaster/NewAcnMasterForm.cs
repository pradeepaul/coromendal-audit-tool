
namespace coromendal.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using ACN.Entities;
    using Entities;

    [FormScript("Administration.NewAcnMaster")]
    [BasedOnRow(typeof(Entities.NewAcnMasterRow))]
    public class NewAcnMasterForm
    {
        public String AcnTilte { get; set; }
        public Int32 PhaseNo { get; set; }
        public String Location { get; set; }
        public DateTime Fromdate { get; set; }
        public DateTime Todate { get; set; }
        public DateTime Periodfrom { get; set; }
        public DateTime Periodto { get; set; }
        public DateTime Creationdate { get; set; }
        [MasterScopeEditor]
        public List<MasterscopeRow> ScopeList { get; set; }
        [Category("Kindly let us know any additional areas that you suggest us to cover. Kindly ensure to disclose about “discrepancies pending prior to audit, if any” along with status of action. The audit team will be led by self and will consist of the following team member(s): ")]
        public List<Int32> Auditor { get; set; }
        public List<Int32> Auditee { get; set; }
        public Int32 Statusid { get; set; }
    }
}