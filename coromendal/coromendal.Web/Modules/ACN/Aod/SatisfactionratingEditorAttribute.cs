using System;
using Serenity.ComponentModel;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN.Forms
{
    internal class SatisfactionratingEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ACN.SatisfactionratingEditor";

        public SatisfactionratingEditorAttribute()
            : base(Key)
        {
        }
    }
}