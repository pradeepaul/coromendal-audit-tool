

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

    [ConnectionKey("Default"), DisplayName("AcnReviewRef"), InstanceName("AcnReviewRef"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class AcnReviewRefRow : Row, IIdRow
    {
        [DisplayName("Acn Review Ref Id"), Column("AcnReviewRefID"), Identity]
        public Int32? AcnReviewRefId
        {
            get { return Fields.AcnReviewRefId[this]; }
            set { Fields.AcnReviewRefId[this] = value; }
        }

        [DisplayName("Acn Review Id"), Column("AcnReviewID"), NotNull]
        public Int32? AcnReviewId
        {
            get { return Fields.AcnReviewId[this]; }
            set { Fields.AcnReviewId[this] = value; }
        }

        [DisplayName("ReportId"), Column("reportId"), NotNull]
        public Int32? ReportId
        {
            get { return Fields.ReportId[this]; }
            set { Fields.ReportId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AcnReviewRefId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AcnReviewRefRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AcnReviewRefId;
            public Int32Field AcnReviewId;
            public Int32Field ReportId;

            public RowFields()
                : base("[dbo].[AcnReviewRef]")
            {
                LocalTextPrefix = "ACN.AcnReviewRef";
            }
        }
    }
}