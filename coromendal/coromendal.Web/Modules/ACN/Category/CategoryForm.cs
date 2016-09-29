﻿
namespace coromendal.ACN.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ACN.Category")]
    [BasedOnRow(typeof(Entities.CategoryRow))]
    public class CategoryForm
    {
        public String Categoryname { get; set; }
    }
}