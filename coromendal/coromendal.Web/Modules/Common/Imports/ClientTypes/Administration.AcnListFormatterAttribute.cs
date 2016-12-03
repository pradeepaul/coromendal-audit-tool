using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace coromendal.Administration
{
    public partial class AcnListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "coromendal.Administration.AcnListFormatter";

        public AcnListFormatterAttribute()
            : base(Key)
        {
        }
    }
}

