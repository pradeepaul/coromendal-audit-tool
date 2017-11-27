
using System;
using Serenity.ComponentModel;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN.Forms
{
    internal class ExcludeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ACN.ExcludeEditor";
        public ExcludeEditorAttribute()
            : base(Key)
        {
        }
    }
}
