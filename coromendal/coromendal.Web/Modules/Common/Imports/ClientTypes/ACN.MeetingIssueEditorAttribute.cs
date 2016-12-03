using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN
{
    public partial class MeetingIssueEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "coromendal.ACN.MeetingIssueEditor";

        public MeetingIssueEditorAttribute()
            : base(Key)
        {
        }
    }
}

