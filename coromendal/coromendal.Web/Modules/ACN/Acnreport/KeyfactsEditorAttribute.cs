using System;
using Serenity.ComponentModel;
namespace coromendal.ACN.Forms
{
    internal class KeyfactsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ACN.KeyfactsEditor";

        public KeyfactsEditorAttribute()
            : base(Key)
        {
        }
    }
}