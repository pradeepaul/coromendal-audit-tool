

namespace coromendal.ACN.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Questions"), InstanceName("Questions"), TwoLevelCached]
    [ReadPermission(ACN.PermissionKeys.Questions.View)]
    [ModifyPermission(ACN.PermissionKeys.Questions.Modify)]
    [DeletePermission(ACN.PermissionKeys.Questions.Delete)]
    [LookupScript("QuestionsRow")]
    public sealed class QuestionsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Question Id"), Identity]
        public Int32? QuestionId
        {
            get { return Fields.QuestionId[this]; }
            set { Fields.QuestionId[this] = value; }
        }

        [DisplayName("Questiontext"), Size(200), QuickSearch]
        public String Questiontext
        {
            get { return Fields.Questiontext[this]; }
            set { Fields.Questiontext[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.QuestionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Questiontext; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public QuestionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field QuestionId;
            public StringField Questiontext;

            public RowFields()
                : base("[dbo].[Questions]")
            {
                LocalTextPrefix = "ACN.Questions";
            }
        }
    }
}