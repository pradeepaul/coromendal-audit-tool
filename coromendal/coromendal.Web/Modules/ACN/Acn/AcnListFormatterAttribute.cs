using System;
using Serenity.ComponentModel;
namespace coromendal.Administration.Columns
{
    internal class AcnListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "coromendal.Administration.AcnListFormatter";

        public AcnListFormatterAttribute()
            : base(Key)
        {
        }
    }
}