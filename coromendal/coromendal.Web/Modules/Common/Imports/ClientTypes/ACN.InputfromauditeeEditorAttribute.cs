using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN
{
    public partial class InputfromauditeeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "coromendal.ACN.InputfromauditeeEditor";

        public InputfromauditeeEditorAttribute()
            : base(Key)
        {
        }
    }
}

