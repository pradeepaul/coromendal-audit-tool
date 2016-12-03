﻿using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN
{
    public partial class AcnAuditeeListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "coromendal.ACN.AcnAuditeeListFormatter";

        public AcnAuditeeListFormatterAttribute()
            : base(Key)
        {
        }
    }
}

