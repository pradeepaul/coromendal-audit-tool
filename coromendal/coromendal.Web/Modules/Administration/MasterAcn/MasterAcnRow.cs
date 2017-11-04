

namespace coromendal.Administration.Entities
{
    using ACN.Entities;
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("MasterAcn"), InstanceName("MasterAcn"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class MasterAcnRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("ACN Title"), Column("title"), Size(100), QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("ACN Status"), Column("statusid")]
        [LookupEditor(typeof(AdminstatusvalueRow))]
        public Int32? Statusid
        {
            get { return Fields.Statusid[this]; }
            set { Fields.Statusid[this] = value; }
        }
        [DisplayName("NEW ACN"), MasterDetailRelation(foreignKey: "MId"), Width(800), Required(true), ClientSide]
        public List<AcnRow> NewACN
        {
            get { return Fields.NewACN[this]; }
            set { Fields.NewACN[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterAcnRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Title;
            public Int32Field Statusid;

            public RowListField<AcnRow> NewACN;

            public RowFields()
                : base("[dbo].[MasterAcn]")
            {
                LocalTextPrefix = "Administration.MasterAcn";
            }
        }
    }
}