
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Questions")]
    [BasedOnRow(typeof(Entities.QuestionsRow))]
    public class QuestionsForm
    {
        public String Questiontext { get; set; }
    }
}