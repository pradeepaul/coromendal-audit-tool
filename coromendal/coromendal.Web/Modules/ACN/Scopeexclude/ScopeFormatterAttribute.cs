using System;
using Serenity.ComponentModel;

namespace coromendal.ACN.Columns
{
    internal class ScopeFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "coromendal.ACN.ScopeFormatter";

        public ScopeFormatterAttribute()
            : base(Key)
        {
        }
    }
}