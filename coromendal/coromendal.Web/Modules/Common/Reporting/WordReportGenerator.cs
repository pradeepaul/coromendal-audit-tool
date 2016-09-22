﻿using Serenity.Data;
using Serenity.Reflection;
using System;
using System.IO;
using System.Collections;
using System.Collections.Generic;
using System.Drawing;
using Novacode;
using Serenity.Data;
using System.Linq;

namespace Serenity.Reporting
{
    public static class WordReportGenerator
    {
        public static byte[] GeneratePackageBytes(List<ReportColumn> columns, IList rows,
            string sheetName = "Page1", string tableName = "Table1")
        {
            var documentByteArray = GeneratePackage(columns, rows, sheetName, tableName);     
            return documentByteArray;
        }

        public static byte[] GeneratePackage(List<ReportColumn> columns, IList rows,
            string sheetName = "Page1", string tableName = "Table1")
        {
            DocX document = DocX.Load(@"C:\\Users\\Asha\\Desktop\\temp\\one.docx");
            PopulateDocument(document, columns, rows, sheetName, tableName);
            return File.ReadAllBytes("C:\\Users\\Asha\\Desktop\\temp\\one.docx");
        }
        public static void PopulateDocument(DocX document, List<ReportColumn> columns, IList rows,
            string sheetName = "Page1", string tableName = "Table1")
        {
            // Add a new Paragraph to the document.
            Paragraph p = document.InsertParagraph();
            var colCount = columns.Count;
            int endCol = colCount;
            int endRow = rows.Count + 1;
          // Table orderTable = document.Tables.First(t => t.TableCaption == "ORDER_TABLE");
            for (var colNum = 1; colNum <= endCol; colNum++)
            {
                for (var rowNum = 2; rowNum <= endRow; rowNum++)
                {
                    var obj = rows[rowNum - 2];
                    var col = columns[colNum - 1];
                    var row = obj as coromendal.ACN.Entities.MinutesofmeetingRow;                                     
                   // document.ReplaceText("%PRODUCT_NAME%", "001");
                  //  document.ReplaceText("%PRODUCT_PRICE1%", "2016-09");
                  //  document.ReplaceText("%PRODUCT_PRICE2%", row.Title);
                   

                    // Save the document.
                }
            }
            document.Save();
        }
    }
}
