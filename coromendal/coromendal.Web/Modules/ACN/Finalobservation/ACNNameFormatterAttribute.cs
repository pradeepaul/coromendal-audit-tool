using System;

using Serenity.ComponentModel;
namespace coromendal.ACN.Columns
{
    internal class ACNNameFormatterAttribute : CustomFormatterAttribute
    {
   
        public const string Key = "coromendal.ACN.ACNNameFormatter";

        public ACNNameFormatterAttribute()
            : base(Key)
        {
        }
    }
}