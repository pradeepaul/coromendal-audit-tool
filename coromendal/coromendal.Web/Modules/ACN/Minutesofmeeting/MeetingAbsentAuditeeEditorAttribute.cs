using Serenity.ComponentModel;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN.Forms
{
    internal class MeetingAbsentAuditeeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ACN.MeetingAbsentauditeeEditor";

        public MeetingAbsentAuditeeEditorAttribute()
            : base(Key)
        {
        }
    }
}