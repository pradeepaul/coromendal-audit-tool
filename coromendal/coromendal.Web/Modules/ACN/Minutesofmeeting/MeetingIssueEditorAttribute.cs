﻿using System;
using Serenity.ComponentModel;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN.Forms
{
    internal class MeetingIssueEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ACN.MeetingissueEditor";

        public MeetingIssueEditorAttribute()
            : base(Key)
        {
        }
    }
}