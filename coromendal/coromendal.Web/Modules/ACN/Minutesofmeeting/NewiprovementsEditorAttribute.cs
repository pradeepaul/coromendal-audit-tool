using System;
using Serenity.ComponentModel;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN.Forms
{
    internal class NewiprovementsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ACN.NewiprovementsEditor";

        public NewiprovementsEditorAttribute()
            : base(Key)
        {
        }
    }
}