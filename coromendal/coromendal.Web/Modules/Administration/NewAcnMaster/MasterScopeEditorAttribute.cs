using System;

using Serenity.ComponentModel;

namespace coromendal.Administration.Forms
{
    internal class MasterScopeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Administration.MasterscopeEditor";

        public MasterScopeEditorAttribute()
            : base(Key)
        {
        }
    }
}