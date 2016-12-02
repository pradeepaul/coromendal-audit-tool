using System;
using Serenity.ComponentModel;

namespace coromendal.Administration.Forms
{
    internal class AcnListRoleFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "coromendal.Administration.AcnListRoleFormatter";

        public AcnListRoleFormatterAttribute()
            : base(Key)
        {
        }
    }
}