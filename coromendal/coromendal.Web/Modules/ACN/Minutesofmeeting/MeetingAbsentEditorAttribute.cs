using System;

using Serenity.ComponentModel;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN.Forms
{
    internal class MeetingAbsentEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ACN.MeetingAbsentEditor";

        public MeetingAbsentEditorAttribute()
            : base(Key)
        {
        }
    }
}