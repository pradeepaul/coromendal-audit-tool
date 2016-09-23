using System;
using Serenity.ComponentModel;
namespace coromendal.ACN.Columns
{
    internal class AcnListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "coromendal.ACN.AcnListFormatter";

        public AcnListFormatterAttribute()
            : base(Key)
        {
        }
    }
}