
namespace coromendal.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Masterscope")]
    [BasedOnRow(typeof(Entities.MasterscopeRow))]
    public class MasterscopeForm
    {
        public String Title { get; set; }       
    }
}