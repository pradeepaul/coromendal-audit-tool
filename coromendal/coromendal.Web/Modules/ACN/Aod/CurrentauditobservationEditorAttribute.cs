using System;
using Serenity.ComponentModel;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN.Forms
{
    internal class CurrentauditobservationEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ACN.CurrentauditobservationEditor";

        public CurrentauditobservationEditorAttribute()
            : base(Key)
        {
        }
    }
}