using System;
using Serenity.ComponentModel;

namespace coromendal.ACN.Columns
{
    internal class FinalTextFormatAttribute : CustomFormatterAttribute
    {
        public const string Key = "coromendal.ACN.FinalTextFormat";

        public FinalTextFormatAttribute()
            : base(Key)
        {
        }
    }
}