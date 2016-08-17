
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
namespace coromendal.ACN
{
    internal class NotesEditorAttribute: CustomEditorAttribute
    {
        public const string Key = "coromendal.ACN.NotesEditor";

        public NotesEditorAttribute()
            : base(Key)
        {
        }
    }
}

