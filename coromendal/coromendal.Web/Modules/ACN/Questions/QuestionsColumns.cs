
namespace coromendal.ACN.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ACN.Questions")]
    [BasedOnRow(typeof(Entities.QuestionsRow))]
    public class QuestionsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 QuestionId { get; set; }
        [EditLink]
        public String Questiontext { get; set; }
    }
}