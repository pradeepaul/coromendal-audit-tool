﻿
namespace coromendal.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.MasterAcnAuditeeRef")]
    [BasedOnRow(typeof(Entities.MasterAcnAuditeeRefRow))]
    public class MasterAcnAuditeeRefForm
    {
        public Int32 AcnAuditeeId { get; set; }
        public Int32 AcnId { get; set; }
    }
}