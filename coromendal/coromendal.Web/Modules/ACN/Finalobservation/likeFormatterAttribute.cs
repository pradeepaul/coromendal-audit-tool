using System;

using Serenity.ComponentModel;
namespace coromendal.ACN.Forms
{
    internal class likeFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "coromendal.ACN.likeFormatter";

        public likeFormatterAttribute()
            : base(Key)
        {
        }
    }
}