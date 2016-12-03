using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.ACN
{
    public partial class AuditorListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "coromendal.ACN.AuditorListFormatter";

        public AuditorListFormatterAttribute()
            : base(Key)
        {
        }
    }
}

