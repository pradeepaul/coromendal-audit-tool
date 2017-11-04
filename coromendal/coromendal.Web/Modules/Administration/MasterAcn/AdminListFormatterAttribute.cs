using System;
using Serenity.ComponentModel;
namespace coromendal.Administration.Columns
{
    internal class AdminListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "coromendal.Administration.AdminListFormatter";

        public AdminListFormatterAttribute()
            : base(Key)
        {
        }
    }
}