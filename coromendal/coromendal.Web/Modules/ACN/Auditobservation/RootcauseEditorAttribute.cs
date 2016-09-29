using System;
using Serenity.ComponentModel;
namespace coromendal.ACN.Forms
{
    internal class RootcauseEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ACN.RootcauseEditor";

        public RootcauseEditorAttribute()
            : base(Key)
        {
        }
    }
}