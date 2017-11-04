
namespace coromendal.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Location")]
    [BasedOnRow(typeof(Entities.LocationRow))]
    public class LocationForm
    {
        public String Locname { get; set; }
    }
}