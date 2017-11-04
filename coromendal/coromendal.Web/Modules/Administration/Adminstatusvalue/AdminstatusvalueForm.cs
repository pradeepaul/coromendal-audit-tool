
namespace coromendal.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Adminstatusvalue")]
    [BasedOnRow(typeof(Entities.AdminstatusvalueRow))]
    public class AdminstatusvalueForm
    {
        public String Value { get; set; }
    }
}