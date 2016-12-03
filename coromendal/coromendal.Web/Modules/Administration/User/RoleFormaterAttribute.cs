using System;
using Serenity.ComponentModel;
namespace coromendal.Administration.Columns
{
    internal class RoleFormaterAttribute : CustomFormatterAttribute
    {
        public const string Key = "coromendal.Administration.RoleFormater";

        public RoleFormaterAttribute()
            : base(Key)
        {
        }
    }
}