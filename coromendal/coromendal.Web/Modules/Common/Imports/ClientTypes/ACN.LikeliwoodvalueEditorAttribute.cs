using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN
{
    public partial class LikeliwoodvalueEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "coromendal.ACN.LikeliwoodvalueEditor";

        public LikeliwoodvalueEditorAttribute()
            : base(Key)
        {
        }
    }
}

