using System;
using Serenity.ComponentModel;
namespace coromendal.ACN.Columns
{
    internal class UserFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "coromendal.Administration.UserFormatter";

        public UserFormatterAttribute()
            : base(Key)
        {
        }
    }
}