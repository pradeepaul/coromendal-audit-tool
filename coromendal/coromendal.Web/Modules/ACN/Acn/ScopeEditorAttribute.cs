using System;
using Serenity.ComponentModel;

namespace coromendal.ACN.Forms
{
    internal class ScopeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ACN.ScopeEditor";

        public ScopeEditorAttribute()
            : base(Key)
        {
        }
    }
}