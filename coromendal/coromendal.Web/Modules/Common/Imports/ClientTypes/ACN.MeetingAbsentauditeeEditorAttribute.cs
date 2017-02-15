using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN
{
    public partial class MeetingAbsentauditeeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "coromendal.ACN.MeetingAbsentauditeeEditor";

        public MeetingAbsentauditeeEditorAttribute()
            : base(Key)
        {
        }
    }
}

