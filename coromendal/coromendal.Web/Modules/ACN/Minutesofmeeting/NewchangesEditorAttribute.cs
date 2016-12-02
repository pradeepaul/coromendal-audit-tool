﻿using System;
using Serenity.ComponentModel;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN.Forms
{
    internal class NewchangesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ACN.NewchangesEditor";

        public NewchangesEditorAttribute()
            : base(Key)
        {
        }
    }
}