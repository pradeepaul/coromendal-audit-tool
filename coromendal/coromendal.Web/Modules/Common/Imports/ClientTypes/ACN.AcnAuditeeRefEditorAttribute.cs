using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN
{
    public partial class AcnAuditeeRefEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "coromendal.ACN.AcnAuditeeRefEditor";

        public AcnAuditeeRefEditorAttribute()
            : base(Key)
        {
        }
    }
}

