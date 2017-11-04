using System;


using Serenity.ComponentModel;
namespace coromendal.ACN.Forms
{
    internal class consqFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "coromendal.ACN.consqFormatter";

        public consqFormatterAttribute()
            : base(Key)
        {
        }
    }
}