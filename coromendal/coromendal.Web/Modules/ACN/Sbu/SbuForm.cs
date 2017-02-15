
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Sbu")]
    [BasedOnRow(typeof(Entities.SbuRow))]
    public class SbuForm
    {
        public String Sbuname { get; set; }
    }
}