using System;
using Serenity.ComponentModel;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN.Forms
{
    internal class ObservationpendingEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ACN.ObservationpendingEditor";

        public ObservationpendingEditorAttribute()
            : base(Key)
        {
        }
    }
}