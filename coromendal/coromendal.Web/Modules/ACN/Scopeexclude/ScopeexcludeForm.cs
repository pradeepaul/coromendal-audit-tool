
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Scopeexclude")]
    [BasedOnRow(typeof(Entities.ScopeexcludeRow))]
    public class ScopeexcludeForm
    {
        public Int32 Scopeid { get; set; }
   //     public Int32 Aodid { get; set; }
      //  public Int32 AcnId { get; set; }
    }
}