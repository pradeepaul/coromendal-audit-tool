using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN
{
    public partial class MinutesofmeetingEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "coromendal.ACN.MinutesofmeetingEditor";

        public MinutesofmeetingEditorAttribute()
            : base(Key)
        {
        }
    }
}

