using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN
{
    public partial class AcnEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "coromendal.ACN.AcnEditor";

        public AcnEditorAttribute()
            : base(Key)
        {
        }
    }
}

