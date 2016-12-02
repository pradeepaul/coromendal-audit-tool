using System;
using Serenity.ComponentModel;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN.Forms
{
    internal class InputfromauditeeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ACN.InputfromauditeeEditor";

        public InputfromauditeeEditorAttribute()
            : base(Key)
        {
        }
    }
}