
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Inputfromauditee")]
    [BasedOnRow(typeof(Entities.InputfromauditeeRow))]
    public class InputfromauditeeForm
    {
       // public Int32 Aodid { get; set; }
        public String Additionalareacovered { get; set; }
        public String Issues { get; set; }
        public String Newimprovements { get; set; }
    }
}