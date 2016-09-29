using System;
using Serenity.ComponentModel;
namespace coromendal.ACN.Forms
{
    internal class SuggestionEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ACN.SuggestionEditor";

        public SuggestionEditorAttribute()
            : base(Key)
        {
        }
    }
}