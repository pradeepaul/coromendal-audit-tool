using System;
using Serenity.ComponentModel;
namespace coromendal.ACN.Columns
{
    internal class AcnAuditeeListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "coromendal.ACN.AcnAuditeeListFormatter";

        public AcnAuditeeListFormatterAttribute()
            : base(Key)
        {
        }
    }
}