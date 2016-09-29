using System;
using Serenity.ComponentModel;
namespace coromendal.ACN.Forms
{
    internal class AuditobservationEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ACN.AuditobservationEditor";

        public AuditobservationEditorAttribute()
            : base(Key)
        {
        }
    }
}