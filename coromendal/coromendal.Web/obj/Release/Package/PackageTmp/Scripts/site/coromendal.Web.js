var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var TerritoryDialog = (function (_super) {
            __extends(TerritoryDialog, _super);
            function TerritoryDialog() {
                _super.apply(this, arguments);
                this.form = new Northwind.TerritoryForm(this.idPrefix);
            }
            TerritoryDialog.prototype.getFormKey = function () { return Northwind.TerritoryForm.formKey; };
            TerritoryDialog.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryDialog.prototype.getNameProperty = function () { return Northwind.TerritoryRow.nameProperty; };
            TerritoryDialog.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            TerritoryDialog.prototype.getLanguages = function () {
                return coromendal.LanguageList.getValue();
            };
            TerritoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoryDialog);
            return TerritoryDialog;
        }(Serenity.EntityDialog));
        Northwind.TerritoryDialog = TerritoryDialog;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var TerritoryGrid = (function (_super) {
            __extends(TerritoryGrid, _super);
            function TerritoryGrid(container) {
                _super.call(this, container);
            }
            TerritoryGrid.prototype.getColumnsKey = function () { return "Northwind.Territory"; };
            TerritoryGrid.prototype.getDialogType = function () { return Northwind.TerritoryDialog; };
            TerritoryGrid.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryGrid.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            TerritoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoryGrid);
            return TerritoryGrid;
        }(Serenity.EntityGrid));
        Northwind.TerritoryGrid = TerritoryGrid;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var SupplierDialog = (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                _super.apply(this, arguments);
                this.form = new Northwind.SupplierForm(this.idPrefix);
            }
            SupplierDialog.prototype.getFormKey = function () { return Northwind.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return Northwind.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierDialog.prototype.getLanguages = function () {
                return coromendal.LanguageList.getValue();
            };
            SupplierDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierDialog);
            return SupplierDialog;
        }(Serenity.EntityDialog));
        Northwind.SupplierDialog = SupplierDialog;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var SupplierGrid = (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                _super.call(this, container);
            }
            SupplierGrid.prototype.getColumnsKey = function () { return "Northwind.Supplier"; };
            SupplierGrid.prototype.getDialogType = function () { return Northwind.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGrid);
            return SupplierGrid;
        }(Serenity.EntityGrid));
        Northwind.SupplierGrid = SupplierGrid;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var ShipperDialog = (function (_super) {
            __extends(ShipperDialog, _super);
            function ShipperDialog() {
                _super.apply(this, arguments);
                this.form = new Northwind.ShipperForm(this.idPrefix);
            }
            ShipperDialog.prototype.getFormKey = function () { return Northwind.ShipperForm.formKey; };
            ShipperDialog.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperDialog.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperDialog.prototype.getNameProperty = function () { return Northwind.ShipperRow.nameProperty; };
            ShipperDialog.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            ShipperDialog.prototype.getLanguages = function () {
                return coromendal.LanguageList.getValue();
            };
            ShipperDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperDialog);
            return ShipperDialog;
        }(Serenity.EntityDialog));
        Northwind.ShipperDialog = ShipperDialog;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var ShipperFormatter = (function () {
            function ShipperFormatter() {
            }
            ShipperFormatter.prototype.format = function (ctx) {
                return "<span class='shipper-symbol shipper-" +
                    Q.replaceAll((ctx.value || '').toString(), ' ', '') +
                    "'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            ShipperFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], ShipperFormatter);
            return ShipperFormatter;
        }());
        Northwind.ShipperFormatter = ShipperFormatter;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var ShipperGrid = (function (_super) {
            __extends(ShipperGrid, _super);
            function ShipperGrid(container) {
                _super.call(this, container);
            }
            ShipperGrid.prototype.getColumnsKey = function () { return "Northwind.Shipper"; };
            ShipperGrid.prototype.getDialogType = function () { return Northwind.ShipperDialog; };
            ShipperGrid.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperGrid.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperGrid.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            ShipperGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperGrid);
            return ShipperGrid;
        }(Serenity.EntityGrid));
        Northwind.ShipperGrid = ShipperGrid;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var PhoneEditor = (function (_super) {
            __extends(PhoneEditor, _super);
            function PhoneEditor(input) {
                var _this = this;
                _super.call(this, input);
                this.addValidationRule(this.uniqueName, function (e) {
                    var value = Q.trimToNull(_this.get_value());
                    if (value == null) {
                        return null;
                    }
                    return PhoneEditor.validate(value, _this.multiple);
                });
                input.bind('change', function (e) {
                    if (!Serenity.WX.hasOriginalEvent(e)) {
                        return;
                    }
                    _this.formatValue();
                });
                input.bind('blur', function (e) {
                    if (_this.element.hasClass('valid')) {
                        _this.formatValue();
                    }
                });
            }
            PhoneEditor.prototype.formatValue = function () {
                this.element.val(this.getFormattedValue());
            };
            PhoneEditor.prototype.getFormattedValue = function () {
                var value = this.element.val();
                if (this.multiple) {
                    return PhoneEditor.formatMulti(value, PhoneEditor.formatPhone);
                }
                return PhoneEditor.formatPhone(value);
            };
            PhoneEditor.prototype.get_value = function () {
                return this.getFormattedValue();
            };
            PhoneEditor.prototype.set_value = function (value) {
                this.element.val(value);
            };
            PhoneEditor.validate = function (phone, isMultiple) {
                var valid = (isMultiple ? PhoneEditor.isValidMulti(phone, PhoneEditor.isValidPhone) : PhoneEditor.isValidPhone(phone));
                if (valid) {
                    return null;
                }
                return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
            };
            PhoneEditor.isValidPhone = function (phone) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                phone = Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', '');
                if (phone.length < 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                if (Q.startsWith(phone, '(') && phone.charAt(4) === ')') {
                    phone = phone.substr(1, 3) + phone.substring(5);
                }
                if (phone.length !== 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    return false;
                }
                for (var i = 0; i < phone.length; i++) {
                    var c = phone.charAt(i);
                    if (c < '0' || c > '9') {
                        return false;
                    }
                }
                return true;
            };
            PhoneEditor.formatPhone = function (phone) {
                if (!PhoneEditor.isValidPhone(phone)) {
                    return phone;
                }
                phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
                return phone;
            };
            PhoneEditor.formatMulti = function (phone, format) {
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var result = '';
                for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
                    var x = phones_1[_i];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (result.length > 0) {
                        result += ', ';
                    }
                    result += format(s);
                }
                return result;
            };
            PhoneEditor.isValidMulti = function (phone, check) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var anyValid = false;
                for (var $t1 = 0; $t1 < phones.length; $t1++) {
                    var x = phones[$t1];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (!check(s)) {
                        return false;
                    }
                    anyValid = true;
                }
                if (!anyValid) {
                    return false;
                }
                return true;
            };
            __decorate([
                Serenity.Decorators.option()
            ], PhoneEditor.prototype, "multiple", void 0);
            PhoneEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], PhoneEditor);
            return PhoneEditor;
        }(Serenity.StringEditor));
        Northwind.PhoneEditor = PhoneEditor;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var RegionDialog = (function (_super) {
            __extends(RegionDialog, _super);
            function RegionDialog() {
                _super.apply(this, arguments);
                this.form = new Northwind.RegionForm(this.idPrefix);
            }
            RegionDialog.prototype.getFormKey = function () { return Northwind.RegionForm.formKey; };
            RegionDialog.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionDialog.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionDialog.prototype.getNameProperty = function () { return Northwind.RegionRow.nameProperty; };
            RegionDialog.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            RegionDialog.prototype.getLanguages = function () {
                return coromendal.LanguageList.getValue();
            };
            RegionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionDialog);
            return RegionDialog;
        }(Serenity.EntityDialog));
        Northwind.RegionDialog = RegionDialog;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var RegionGrid = (function (_super) {
            __extends(RegionGrid, _super);
            function RegionGrid(container) {
                _super.call(this, container);
            }
            RegionGrid.prototype.getColumnsKey = function () { return "Northwind.Region"; };
            RegionGrid.prototype.getDialogType = function () { return Northwind.RegionDialog; };
            RegionGrid.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionGrid.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionGrid.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            RegionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionGrid);
            return RegionGrid;
        }(Serenity.EntityGrid));
        Northwind.RegionGrid = RegionGrid;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var ProductDialog = (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                _super.apply(this, arguments);
                this.form = new Northwind.ProductForm(this.idPrefix);
            }
            ProductDialog.prototype.getFormKey = function () { return Northwind.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Northwind.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            ProductDialog.prototype.getLanguages = function () {
                return coromendal.LanguageList.getValue();
            };
            ProductDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], ProductDialog);
            return ProductDialog;
        }(Serenity.EntityDialog));
        Northwind.ProductDialog = ProductDialog;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var ProductGrid = (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                var _this = this;
                _super.call(this, container);
                this.pendingChanges = {};
                this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
            }
            ProductGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ProductGrid.prototype.getDialogType = function () { return Northwind.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            ProductGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(coromendal.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.ProductService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(coromendal.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    reportTitle: 'Product List',
                    columnTitles: {
                        'Discontinued': 'Dis.',
                    },
                    tableOptions: {
                        columnStyles: {
                            ProductID: {
                                columnWidth: 25,
                                halign: 'right'
                            },
                            Discountinued: {
                                columnWidth: 25
                            }
                        }
                    }
                }));
                buttons.push({
                    title: 'Save Changes',
                    cssClass: 'apply-changes-button',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                return buttons;
            };
            ProductGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            // PLEASE NOTE! Inline editing in grids is not something Serenity supports nor recommends.
            // SlickGrid has some set of limitations, UI is very hard to use on some devices like mobile, 
            // custom widgets and validations are not possible, and as a bonus the code can become a mess.
            // 
            // This was just a sample how-to after much requests, and is not supported. 
            // This is all we can offer, please don't ask us to Guide you...
            /**
             * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
             * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
             * no event handlers to rendered cell contents
             */
            ProductGrid.prototype.numericInputFormatter = function (ctx) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                return "<input type='text' class='" + klass + "'" +
                    " value='" + Q.formatNumber(value, '0.##') + "'/>";
            };
            ProductGrid.prototype.stringInputFormatter = function (ctx) {
                var klass = 'edit string';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, column.field);
                return "<input type='text' class='" + klass +
                    "' value='" + Q.htmlEncode(value) +
                    "' maxlength='" + column.sourceItem.maxLength + "'/>";
            };
            /**
             * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
             */
            ProductGrid.prototype.selectFormatter = function (ctx, idField, lookup) {
                var fld = Northwind.ProductRow.Fields;
                var klass = 'edit';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[idField] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, idField);
                var markup = "<select class='" + klass +
                    "' data-field='" + idField +
                    "' style='width: 100%; max-width: 100%'>";
                for (var _i = 0, _a = lookup.items; _i < _a.length; _i++) {
                    var c = _a[_i];
                    var id = c[lookup.idField];
                    markup += "<option value='" + id + "'";
                    if (id == value) {
                        markup += " selected";
                    }
                    markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
                }
                return markup + "</select>";
            };
            ProductGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            ProductGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var num = function (ctx) { return _this.numericInputFormatter(ctx); };
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                var fld = Northwind.ProductRow.Fields;
                Q.first(columns, function (x) { return x.field === 'QuantityPerUnit'; }).format = str;
                var category = Q.first(columns, function (x) { return x.field === fld.CategoryName; });
                category.referencedFields = [fld.CategoryID];
                category.format = function (ctx) { return _this.selectFormatter(ctx, fld.CategoryID, Northwind.CategoryRow.getLookup()); };
                var supplier = Q.first(columns, function (x) { return x.field === fld.SupplierCompanyName; });
                supplier.referencedFields = [fld.SupplierID];
                supplier.format = function (ctx) { return _this.selectFormatter(ctx, fld.SupplierID, Northwind.SupplierRow.getLookup()); };
                Q.first(columns, function (x) { return x.field === fld.UnitPrice; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.UnitsInStock; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.UnitsOnOrder; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.ReorderLevel; }).format = num;
                return columns;
            };
            ProductGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field') || this.getColumns()[cell.cell].field;
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.ProductID];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
                var value;
                if (field === 'UnitPrice') {
                    value = Q.parseDecimal(text);
                    if (value == null || isNaN(value)) {
                        Q.notifyError(Q.text('Validation.Decimal'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                }
                else if (input.hasClass("numeric")) {
                    var i = Q.parseInteger(text);
                    if (isNaN(i) || i > 32767 || i < 0) {
                        Q.notifyError(Q.text('Validation.Integer'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                    value = i;
                }
                else
                    value = text;
                if (!pending) {
                    this.pendingChanges[item.ProductID] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0.##');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            ProductGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            ProductGrid.prototype.saveClick = function () {
                if (Object.keys(this.pendingChanges).length === 0) {
                    return;
                }
                // this calls save service for all modified rows, one by one
                // you could write a batch update service
                var keys = Object.keys(this.pendingChanges);
                var current = -1;
                var self = this;
                (function saveNext() {
                    if (++current >= keys.length) {
                        self.refresh();
                        return;
                    }
                    var key = keys[current];
                    var entity = Q.deepClone(self.pendingChanges[key]);
                    entity.ProductID = key;
                    Q.serviceRequest('Northwind/Product/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        Northwind.ProductGrid = ProductGrid;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Common;
    (function (Common) {
        var GridEditorDialog = (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                _super.apply(this, arguments);
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = coromendal.Common || (coromendal.Common = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailDialog = (function (_super) {
            __extends(OrderDetailDialog, _super);
            function OrderDetailDialog() {
                var _this = this;
                _super.call(this);
                this.form = new Northwind.OrderDetailForm(this.idPrefix);
                this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                this.form.Discount.addValidationRule(this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
            }
            OrderDetailDialog.prototype.getFormKey = function () { return Northwind.OrderDetailForm.formKey; };
            OrderDetailDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailDialog);
            return OrderDetailDialog;
        }(coromendal.Common.GridEditorDialog));
        Northwind.OrderDetailDialog = OrderDetailDialog;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Common;
    (function (Common) {
        var GridEditorBase = (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                _super.call(this, container);
                this.nextId = 1;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity.__id;
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = row.__id;
                if (id == null) {
                    row.__id = this.nextId++;
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        delete y['__id'];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        y.__id = _this.nextId++;
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = coromendal.Common || (coromendal.Common = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailsEditor = (function (_super) {
            __extends(OrderDetailsEditor, _super);
            function OrderDetailsEditor(container) {
                _super.call(this, container);
            }
            OrderDetailsEditor.prototype.getColumnsKey = function () { return "Northwind.OrderDetail"; };
            OrderDetailsEditor.prototype.getDialogType = function () { return Northwind.OrderDetailDialog; };
            OrderDetailsEditor.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductID = Q.toId(row.ProductID);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductID === row.ProductID; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.ProductName = Northwind.ProductRow.getLookup().itemById[row.ProductID].ProductName;
                row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            };
            OrderDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailsEditor);
            return OrderDetailsEditor;
        }(coromendal.Common.GridEditorBase));
        Northwind.OrderDetailsEditor = OrderDetailsEditor;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var FreightFormatter = (function () {
            function FreightFormatter() {
            }
            FreightFormatter.prototype.format = function (ctx) {
                return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            FreightFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], FreightFormatter);
            return FreightFormatter;
        }());
        Northwind.FreightFormatter = FreightFormatter;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Common;
    (function (Common) {
        var BulkServiceAction = (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new coromendal.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = coromendal.Common || (coromendal.Common = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/BulkServiceAction.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var OrderBulkAction = (function (_super) {
            __extends(OrderBulkAction, _super);
            function OrderBulkAction() {
                _super.apply(this, arguments);
            }
            /**
             * This controls how many service requests will be used in parallel.
             * Determine this number based on how many requests your server
             * might be able to handle, and amount of wait on external resources.
             */
            OrderBulkAction.prototype.getParallelRequests = function () {
                return 10;
            };
            /**
             * These number of records IDs will be sent to your service in one
             * service call. If your service is designed to handle one record only,
             * set it to 1. But note that, if you have 5000 records, this will
             * result in 5000 service calls / requests.
             */
            OrderBulkAction.prototype.getBatchSize = function () {
                return 5;
            };
            /**
             * This is where you should call your service.
             * Batch parameter contains the selected order IDs
             * that should be processed in this service call.
             */
            OrderBulkAction.prototype.executeForBatch = function (batch) {
                var _this = this;
                BasicSamples.BasicSamplesService.OrderBulkAction({
                    OrderIDs: batch.map(function (x) { return Q.parseInteger(x); })
                }, function (response) { return _this.set_successCount(_this.get_successCount() + batch.length); }, {
                    blockUI: false,
                    onError: function (response) { return _this.set_errorCount(_this.get_errorCount() + batch.length); },
                    onCleanup: function () { return _this.serviceCallCleanup(); }
                });
            };
            return OrderBulkAction;
        }(coromendal.Common.BulkServiceAction));
        BasicSamples.OrderBulkAction = OrderBulkAction;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var OrderDialog = (function (_super) {
            __extends(OrderDialog, _super);
            function OrderDialog() {
                _super.call(this);
                this.form = new Northwind.OrderForm(this.idPrefix);
            }
            OrderDialog.prototype.getFormKey = function () { return Northwind.OrderForm.formKey; };
            OrderDialog.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderDialog.prototype.getNameProperty = function () { return Northwind.OrderRow.nameProperty; };
            OrderDialog.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(coromendal.Common.ReportHelper.createToolButton({
                    title: 'Invoice',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Northwind.OrderDetail',
                    getParams: function () { return ({ OrderID: _this.get_entityId() }); }
                }));
                return buttons;
            };
            OrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDialog);
            return OrderDialog;
        }(Serenity.EntityDialog));
        Northwind.OrderDialog = OrderDialog;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var OrderGrid = (function (_super) {
            __extends(OrderGrid, _super);
            function OrderGrid(container) {
                _super.call(this, container);
            }
            OrderGrid.prototype.getColumnsKey = function () { return "Northwind.Order"; };
            OrderGrid.prototype.getDialogType = function () { return Northwind.OrderDialog; };
            OrderGrid.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderGrid.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderGrid.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                var fld = Northwind.OrderRow.Fields;
                this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, fld.ShippingState);
            };
            OrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(coromendal.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.OrderService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(coromendal.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            OrderGrid.prototype.set_shippingState = function (value) {
                this.shippingStateFilter.value = value == null ? '' : value.toString();
            };
            OrderGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], OrderGrid);
            return OrderGrid;
        }(Serenity.EntityGrid));
        Northwind.OrderGrid = OrderGrid;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var NoteDialog = (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                _super.call(this);
                this.textEditor = new Serenity.HtmlContentEditor(this.byId('Text'));
            }
            NoteDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                    "</form>");
            };
            NoteDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NoteDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            NoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NoteDialog);
            return NoteDialog;
        }(Serenity.TemplatedDialog));
        Northwind.NoteDialog = NoteDialog;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var NotesEditor = (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = this;
                _super.call(this, div);
                new Serenity.Toolbar(this.byId('Toolbar'), {
                    buttons: [{
                            title: 'Add',
                            cssClass: 'add-button',
                            onClick: function (e) {
                                e.preventDefault();
                                _this.addClick();
                            }
                        }]
                });
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        $('<a/>').attr('href', '#').addClass('note-date')
                            .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(Q.parseISODateTime(item.InsertDate), 'dd/MM/yyyy HH:mm'))
                            .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        $('<a/>').attr('href', '#').addClass('note-delete')
                            .attr('title', 'delete note').data('index', index)
                            .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        InsertUserDisplayName: coromendal.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatDate(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (!text) {
                        return;
                    }
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            NotesEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.element("<div/>")
            ], NotesEditor);
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        Northwind.NotesEditor = NotesEditor;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var EmployeeFormatter = (function () {
            function EmployeeFormatter() {
            }
            EmployeeFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.genderProperty) {
                    return text;
                }
                var gender = ctx.item[this.genderProperty];
                return "<span class='" + ((gender === Northwind.Gender.Female) ?
                    'employee-symbol female' : 'employee-symbol male') +
                    "'>" + text + '</span>';
            };
            EmployeeFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.genderProperty)
                    column.referencedFields.push(this.genderProperty);
            };
            __decorate([
                Serenity.Decorators.option()
            ], EmployeeFormatter.prototype, "genderProperty", void 0);
            EmployeeFormatter = __decorate([
                Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
            ], EmployeeFormatter);
            return EmployeeFormatter;
        }());
        Northwind.EmployeeFormatter = EmployeeFormatter;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CustomerDialog = (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = this;
                _super.call(this);
                this.form = new Northwind.CustomerForm(this.idPrefix);
                this.ordersGrid = new Northwind.CustomerOrdersGrid(this.byId('OrdersGrid'));
                this.ordersGrid.element.flexHeightOnly(1);
                this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
                coromendal.DialogUtils.pendingChangesConfirmation(this.element, function () { return _this.getSaveState() != _this.loadedState; });
                this.tabs.bind('tabsactivate', function () { return _this.arrange(); });
            }
            CustomerDialog.prototype.getFormKey = function () { return Northwind.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Northwind.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            CustomerDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            CustomerDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
                this.ordersGrid.customerID = entity.CustomerID;
            };
            CustomerDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                Q.reloadLookup('Northwind.Customer');
            };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Northwind.CustomerDialog = CustomerDialog;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CustomerEditor = (function (_super) {
            __extends(CustomerEditor, _super);
            function CustomerEditor(hidden) {
                _super.call(this, hidden);
            }
            CustomerEditor.prototype.getLookupKey = function () {
                return 'Northwind.Customer';
            };
            CustomerEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.CustomerID + ']';
            };
            CustomerEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], CustomerEditor);
            return CustomerEditor;
        }(Serenity.LookupEditorBase));
        Northwind.CustomerEditor = CustomerEditor;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrid = (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                _super.call(this, container);
            }
            CustomerGrid.prototype.getColumnsKey = function () { return "Northwind.Customer"; };
            CustomerGrid.prototype.getDialogType = function () { return Northwind.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(coromendal.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Northwind/Customer/ListExcel',
                    separator: true
                }));
                buttons.push(coromendal.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Northwind.CustomerGrid = CustomerGrid;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../Order/OrderDialog.ts" />
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrderDialog = (function (_super) {
            __extends(CustomerOrderDialog, _super);
            function CustomerOrderDialog() {
                _super.call(this);
            }
            CustomerOrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.CustomerID, true);
            };
            CustomerOrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrderDialog);
            return CustomerOrderDialog;
        }(Northwind.OrderDialog));
        Northwind.CustomerOrderDialog = CustomerOrderDialog;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../Order/OrderGrid.ts" />
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrdersGrid = (function (_super) {
            __extends(CustomerOrdersGrid, _super);
            function CustomerOrdersGrid(container) {
                _super.call(this, container);
            }
            CustomerOrdersGrid.prototype.getDialogType = function () { return Northwind.CustomerOrderDialog; };
            CustomerOrdersGrid.prototype.getColumns = function () {
                var fld = Northwind.OrderRow.Fields;
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== fld.CustomerCompanyName; });
            };
            CustomerOrdersGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            CustomerOrdersGrid.prototype.addButtonClick = function () {
                this.editItem({ CustomerID: this.customerID });
            };
            CustomerOrdersGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CustomerOrdersGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
            };
            Object.defineProperty(CustomerOrdersGrid.prototype, "customerID", {
                get: function () {
                    return this._customerID;
                },
                set: function (value) {
                    if (this._customerID !== value) {
                        this._customerID = value;
                        this.setEquality('CustomerID', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            CustomerOrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrdersGrid);
            return CustomerOrdersGrid;
        }(Northwind.OrderGrid));
        Northwind.CustomerOrdersGrid = CustomerOrdersGrid;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var EmployeeListFormatter = (function () {
            function EmployeeListFormatter() {
            }
            EmployeeListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Northwind.EmployeeRow.getLookup().itemById;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.FullName : x); }).join(", ");
            };
            EmployeeListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EmployeeListFormatter);
            return EmployeeListFormatter;
        }());
        Northwind.EmployeeListFormatter = EmployeeListFormatter;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CategoryDialog = (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                _super.apply(this, arguments);
                this.form = new Northwind.CategoryForm(this.idPrefix);
            }
            CategoryDialog.prototype.getFormKey = function () { return Northwind.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Northwind.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            CategoryDialog.prototype.getLanguages = function () {
                return coromendal.LanguageList.getValue();
            };
            CategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryDialog);
            return CategoryDialog;
        }(Serenity.EntityDialog));
        Northwind.CategoryDialog = CategoryDialog;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CategoryGrid = (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                _super.call(this, container);
            }
            CategoryGrid.prototype.getColumnsKey = function () { return "Northwind.Category"; };
            CategoryGrid.prototype.getDialogType = function () { return Northwind.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            CategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryGrid);
            return CategoryGrid;
        }(Serenity.EntityGrid));
        Northwind.CategoryGrid = CategoryGrid;
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Membership;
    (function (Membership) {
        var LoginPanel = (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = this;
                _super.call(this, container);
                $(function () {
                    $('body').vegas({
                        delay: 10000,
                        cover: true,
                        overlay: Q.resolveUrl("~/scripts/vegas/overlays/01.png"),
                        slides: [
                            { src: Q.resolveUrl('~/content/site/slides/slide1.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/content/site/slides/slide2.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/content/site/slides/slide3.jpg'), transition: 'zoomOut' },
                            { src: Q.resolveUrl('~/content/site/slides/slide4.jpg'), transition: 'blur' },
                            { src: Q.resolveUrl('~/content/site/slides/slide5.jpg'), transition: 'swirlLeft' }
                        ]
                    });
                });
                this.form = new Membership.LoginForm(this.idPrefix);
                this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            var q = Q.parseQueryString();
                            var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                            if (returnUrl) {
                                window.location.href = returnUrl;
                            }
                            else {
                                window.location.href = Q.resolveUrl('~/');
                            }
                        }
                    });
                });
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = coromendal.Membership || (coromendal.Membership = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.SignUpForm(this.idPrefix);
                this.form.ConfirmEmail.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = coromendal.Membership || (coromendal.Membership = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.ResetPasswordForm(this.idPrefix);
                this.form.NewPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = coromendal.Membership || (coromendal.Membership = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.ForgotPasswordForm(this.idPrefix);
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = coromendal.Membership || (coromendal.Membership = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.ChangePasswordForm(this.idPrefix);
                this.form.NewPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = coromendal.Membership || (coromendal.Membership = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('coromendal');
    })(ScriptInitialization = coromendal.ScriptInitialization || (coromendal.ScriptInitialization = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = coromendal.Common || (coromendal.Common = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = coromendal.Common || (coromendal.Common = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Common;
    (function (Common) {
        var LanguageSelection = (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                _super.call(this, select);
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = coromendal.Common || (coromendal.Common = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Common;
    (function (Common) {
        var SidebarSearch = (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = this;
                _super.call(this, input);
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                this.menuUL = menuUL;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = coromendal.Common || (coromendal.Common = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Common;
    (function (Common) {
        var ThemeSelection = (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = this;
                _super.call(this, select);
                this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(this.getCurrentTheme());
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = coromendal.Common || (coromendal.Common = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeabsRefForm = (function (_super) {
            __extends(AcnAuditeeabsRefForm, _super);
            function AcnAuditeeabsRefForm() {
                _super.apply(this, arguments);
            }
            AcnAuditeeabsRefForm.formKey = 'ACN.AcnAuditeeabsRef';
            return AcnAuditeeabsRefForm;
        }(Serenity.PrefixedContext));
        ACN.AcnAuditeeabsRefForm = AcnAuditeeabsRefForm;
        [['AcnAuditeeabsRefId', function () { return Serenity.IntegerEditor; }], ['AcnAuditeeId', function () { return Serenity.IntegerEditor; }], ['MeetingAbsentauditeeId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(AcnAuditeeabsRefForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeabsRefRow;
        (function (AcnAuditeeabsRefRow) {
            AcnAuditeeabsRefRow.idProperty = 'AcnAuditeeabsRefId';
            AcnAuditeeabsRefRow.localTextPrefix = 'ACN.AcnAuditeeabsRef';
            var Fields;
            (function (Fields) {
            })(Fields = AcnAuditeeabsRefRow.Fields || (AcnAuditeeabsRefRow.Fields = {}));
            ['AcnAuditeeabsRefId', 'AcnAuditeeId', 'MeetingAbsentauditeeId'].forEach(function (x) { return Fields[x] = x; });
        })(AcnAuditeeabsRefRow = ACN.AcnAuditeeabsRefRow || (ACN.AcnAuditeeabsRefRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeabsRefService;
        (function (AcnAuditeeabsRefService) {
            AcnAuditeeabsRefService.baseUrl = 'ACN/AcnAuditeeabsRef';
            var Methods;
            (function (Methods) {
            })(Methods = AcnAuditeeabsRefService.Methods || (AcnAuditeeabsRefService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AcnAuditeeabsRefService[x] = function (r, s, o) { return Q.serviceRequest(AcnAuditeeabsRefService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AcnAuditeeabsRefService.baseUrl + '/' + x;
            });
        })(AcnAuditeeabsRefService = ACN.AcnAuditeeabsRefService || (ACN.AcnAuditeeabsRefService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeForm = (function (_super) {
            __extends(AcnAuditeeForm, _super);
            function AcnAuditeeForm() {
                _super.apply(this, arguments);
            }
            AcnAuditeeForm.formKey = 'ACN.AcnAuditee';
            return AcnAuditeeForm;
        }(Serenity.PrefixedContext));
        ACN.AcnAuditeeForm = AcnAuditeeForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(AcnAuditeeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeReferenceForm = (function (_super) {
            __extends(AcnAuditeeReferenceForm, _super);
            function AcnAuditeeReferenceForm() {
                _super.apply(this, arguments);
            }
            AcnAuditeeReferenceForm.formKey = 'ACN.AcnAuditeeReference';
            return AcnAuditeeReferenceForm;
        }(Serenity.PrefixedContext));
        ACN.AcnAuditeeReferenceForm = AcnAuditeeReferenceForm;
        [['AcnAuditeeReferenceId', function () { return Serenity.IntegerEditor; }], ['AcnAuditeeId', function () { return Serenity.IntegerEditor; }], ['AcnmasterId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(AcnAuditeeReferenceForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeReferenceRow;
        (function (AcnAuditeeReferenceRow) {
            AcnAuditeeReferenceRow.idProperty = 'AcnAuditeeReferenceId';
            AcnAuditeeReferenceRow.localTextPrefix = 'ACN.AcnAuditeeReference';
            var Fields;
            (function (Fields) {
            })(Fields = AcnAuditeeReferenceRow.Fields || (AcnAuditeeReferenceRow.Fields = {}));
            ['AcnAuditeeReferenceId', 'AcnAuditeeId', 'AcnmasterId'].forEach(function (x) { return Fields[x] = x; });
        })(AcnAuditeeReferenceRow = ACN.AcnAuditeeReferenceRow || (ACN.AcnAuditeeReferenceRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeReferenceService;
        (function (AcnAuditeeReferenceService) {
            AcnAuditeeReferenceService.baseUrl = 'ACN/AcnAuditeeReference';
            var Methods;
            (function (Methods) {
            })(Methods = AcnAuditeeReferenceService.Methods || (AcnAuditeeReferenceService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AcnAuditeeReferenceService[x] = function (r, s, o) { return Q.serviceRequest(AcnAuditeeReferenceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AcnAuditeeReferenceService.baseUrl + '/' + x;
            });
        })(AcnAuditeeReferenceService = ACN.AcnAuditeeReferenceService || (ACN.AcnAuditeeReferenceService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeRefForm = (function (_super) {
            __extends(AcnAuditeeRefForm, _super);
            function AcnAuditeeRefForm() {
                _super.apply(this, arguments);
            }
            AcnAuditeeRefForm.formKey = 'ACN.AcnAuditeeRef';
            return AcnAuditeeRefForm;
        }(Serenity.PrefixedContext));
        ACN.AcnAuditeeRefForm = AcnAuditeeRefForm;
        [['AcnAuditeeId', function () { return Serenity.IntegerEditor; }], ['AcnId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(AcnAuditeeRefForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeRefRow;
        (function (AcnAuditeeRefRow) {
            AcnAuditeeRefRow.idProperty = 'AcnAuditeeRefId';
            AcnAuditeeRefRow.localTextPrefix = 'ACN.AcnAuditeeRef';
            var Fields;
            (function (Fields) {
            })(Fields = AcnAuditeeRefRow.Fields || (AcnAuditeeRefRow.Fields = {}));
            ['AcnAuditeeRefId', 'AcnAuditeeId', 'AcnId'].forEach(function (x) { return Fields[x] = x; });
        })(AcnAuditeeRefRow = ACN.AcnAuditeeRefRow || (ACN.AcnAuditeeRefRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeRefService;
        (function (AcnAuditeeRefService) {
            AcnAuditeeRefService.baseUrl = 'ACN/AcnAuditeeRef';
            var Methods;
            (function (Methods) {
            })(Methods = AcnAuditeeRefService.Methods || (AcnAuditeeRefService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AcnAuditeeRefService[x] = function (r, s, o) { return Q.serviceRequest(AcnAuditeeRefService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AcnAuditeeRefService.baseUrl + '/' + x;
            });
        })(AcnAuditeeRefService = ACN.AcnAuditeeRefService || (ACN.AcnAuditeeRefService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeRow;
        (function (AcnAuditeeRow) {
            AcnAuditeeRow.idProperty = 'AcnAuditeeId';
            AcnAuditeeRow.nameProperty = 'Name';
            AcnAuditeeRow.localTextPrefix = 'ACN.AcnAuditee';
            AcnAuditeeRow.lookupKey = 'ACN.AcnAuditee';
            function getLookup() {
                return Q.getLookup('ACN.AcnAuditee');
            }
            AcnAuditeeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = AcnAuditeeRow.Fields || (AcnAuditeeRow.Fields = {}));
            ['AcnAuditeeId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(AcnAuditeeRow = ACN.AcnAuditeeRow || (ACN.AcnAuditeeRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeService;
        (function (AcnAuditeeService) {
            AcnAuditeeService.baseUrl = 'ACN/AcnAuditee';
            var Methods;
            (function (Methods) {
            })(Methods = AcnAuditeeService.Methods || (AcnAuditeeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AcnAuditeeService[x] = function (r, s, o) { return Q.serviceRequest(AcnAuditeeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AcnAuditeeService.baseUrl + '/' + x;
            });
        })(AcnAuditeeService = ACN.AcnAuditeeService || (ACN.AcnAuditeeService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditorForm = (function (_super) {
            __extends(AcnAuditorForm, _super);
            function AcnAuditorForm() {
                _super.apply(this, arguments);
            }
            AcnAuditorForm.formKey = 'ACN.AcnAuditor';
            return AcnAuditorForm;
        }(Serenity.PrefixedContext));
        ACN.AcnAuditorForm = AcnAuditorForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(AcnAuditorForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditorReferenceForm = (function (_super) {
            __extends(AcnAuditorReferenceForm, _super);
            function AcnAuditorReferenceForm() {
                _super.apply(this, arguments);
            }
            AcnAuditorReferenceForm.formKey = 'ACN.AcnAuditorReference';
            return AcnAuditorReferenceForm;
        }(Serenity.PrefixedContext));
        ACN.AcnAuditorReferenceForm = AcnAuditorReferenceForm;
        [['AcnAuditorReferenceId', function () { return Serenity.IntegerEditor; }], ['AcnAuditorId', function () { return Serenity.IntegerEditor; }], ['AcnmasterId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(AcnAuditorReferenceForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditorReferenceRow;
        (function (AcnAuditorReferenceRow) {
            AcnAuditorReferenceRow.idProperty = 'AcnAuditorReferenceId';
            AcnAuditorReferenceRow.localTextPrefix = 'ACN.AcnAuditorReference';
            var Fields;
            (function (Fields) {
            })(Fields = AcnAuditorReferenceRow.Fields || (AcnAuditorReferenceRow.Fields = {}));
            ['AcnAuditorReferenceId', 'AcnAuditorId', 'AcnmasterId'].forEach(function (x) { return Fields[x] = x; });
        })(AcnAuditorReferenceRow = ACN.AcnAuditorReferenceRow || (ACN.AcnAuditorReferenceRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditorReferenceService;
        (function (AcnAuditorReferenceService) {
            AcnAuditorReferenceService.baseUrl = 'ACN/AcnAuditorReference';
            var Methods;
            (function (Methods) {
            })(Methods = AcnAuditorReferenceService.Methods || (AcnAuditorReferenceService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AcnAuditorReferenceService[x] = function (r, s, o) { return Q.serviceRequest(AcnAuditorReferenceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AcnAuditorReferenceService.baseUrl + '/' + x;
            });
        })(AcnAuditorReferenceService = ACN.AcnAuditorReferenceService || (ACN.AcnAuditorReferenceService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditorRefForm = (function (_super) {
            __extends(AcnAuditorRefForm, _super);
            function AcnAuditorRefForm() {
                _super.apply(this, arguments);
            }
            AcnAuditorRefForm.formKey = 'ACN.AcnAuditorRef';
            return AcnAuditorRefForm;
        }(Serenity.PrefixedContext));
        ACN.AcnAuditorRefForm = AcnAuditorRefForm;
        [['AcnAuditorId', function () { return Serenity.IntegerEditor; }], ['AcnId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(AcnAuditorRefForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditorRefRow;
        (function (AcnAuditorRefRow) {
            AcnAuditorRefRow.idProperty = 'AcnAuditorRefId';
            AcnAuditorRefRow.localTextPrefix = 'ACN.AcnAuditorRef';
            var Fields;
            (function (Fields) {
            })(Fields = AcnAuditorRefRow.Fields || (AcnAuditorRefRow.Fields = {}));
            ['AcnAuditorRefId', 'AcnAuditorId', 'AcnId'].forEach(function (x) { return Fields[x] = x; });
        })(AcnAuditorRefRow = ACN.AcnAuditorRefRow || (ACN.AcnAuditorRefRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditorRefService;
        (function (AcnAuditorRefService) {
            AcnAuditorRefService.baseUrl = 'ACN/AcnAuditorRef';
            var Methods;
            (function (Methods) {
            })(Methods = AcnAuditorRefService.Methods || (AcnAuditorRefService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AcnAuditorRefService[x] = function (r, s, o) { return Q.serviceRequest(AcnAuditorRefService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AcnAuditorRefService.baseUrl + '/' + x;
            });
        })(AcnAuditorRefService = ACN.AcnAuditorRefService || (ACN.AcnAuditorRefService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditorRow;
        (function (AcnAuditorRow) {
            AcnAuditorRow.idProperty = 'AcnAuditorId';
            AcnAuditorRow.nameProperty = 'Name';
            AcnAuditorRow.localTextPrefix = 'ACN.AcnAuditor';
            AcnAuditorRow.lookupKey = 'ACN.AcnAuditor';
            function getLookup() {
                return Q.getLookup('ACN.AcnAuditor');
            }
            AcnAuditorRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = AcnAuditorRow.Fields || (AcnAuditorRow.Fields = {}));
            ['AcnAuditorId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(AcnAuditorRow = ACN.AcnAuditorRow || (ACN.AcnAuditorRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditorService;
        (function (AcnAuditorService) {
            AcnAuditorService.baseUrl = 'ACN/AcnAuditor';
            var Methods;
            (function (Methods) {
            })(Methods = AcnAuditorService.Methods || (AcnAuditorService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AcnAuditorService[x] = function (r, s, o) { return Q.serviceRequest(AcnAuditorService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AcnAuditorService.baseUrl + '/' + x;
            });
        })(AcnAuditorService = ACN.AcnAuditorService || (ACN.AcnAuditorService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnFeedbackForm = (function (_super) {
            __extends(AcnFeedbackForm, _super);
            function AcnFeedbackForm() {
                _super.apply(this, arguments);
            }
            AcnFeedbackForm.formKey = 'ACN.AcnFeedback';
            return AcnFeedbackForm;
        }(Serenity.PrefixedContext));
        ACN.AcnFeedbackForm = AcnFeedbackForm;
        [['Acnid', function () { return Serenity.LookupEditor; }], ['Name', function () { return Serenity.StringEditor; }], ['Dept', function () { return Serenity.StringEditor; }], ['Reviewname', function () { return Serenity.StringEditor; }], ['Location', function () { return Serenity.StringEditor; }], ['Ques1', function () { return Serenity.LookupEditor; }], ['Remark1', function () { return Serenity.StringEditor; }], ['Ques2', function () { return Serenity.LookupEditor; }], ['Remark2', function () { return Serenity.StringEditor; }], ['Ques3', function () { return Serenity.LookupEditor; }], ['Remark3', function () { return Serenity.StringEditor; }], ['Ques4', function () { return Serenity.LookupEditor; }], ['Remark4', function () { return Serenity.StringEditor; }], ['Ques5', function () { return Serenity.LookupEditor; }], ['Remark5', function () { return Serenity.StringEditor; }], ['Ques6', function () { return Serenity.LookupEditor; }], ['Remark6', function () { return Serenity.StringEditor; }], ['Ques7', function () { return Serenity.LookupEditor; }], ['Remark7', function () { return Serenity.StringEditor; }], ['Ques8', function () { return Serenity.LookupEditor; }], ['Remark8', function () { return Serenity.StringEditor; }], ['Ques9', function () { return Serenity.LookupEditor; }], ['Remark9', function () { return Serenity.StringEditor; }], ['Ques10', function () { return Serenity.LookupEditor; }], ['Remark10', function () { return Serenity.StringEditor; }], ['Ques11', function () { return Serenity.LookupEditor; }], ['Remark11', function () { return Serenity.StringEditor; }], ['Ques12', function () { return Serenity.LookupEditor; }], ['Remark12', function () { return Serenity.StringEditor; }], ['Ques13', function () { return Serenity.LookupEditor; }], ['Remark13', function () { return Serenity.StringEditor; }], ['Ques14', function () { return Serenity.LookupEditor; }], ['Remark14', function () { return Serenity.StringEditor; }], ['Comments', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(AcnFeedbackForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnFeedbackRetailForm = (function (_super) {
            __extends(AcnFeedbackRetailForm, _super);
            function AcnFeedbackRetailForm() {
                _super.apply(this, arguments);
            }
            AcnFeedbackRetailForm.formKey = 'ACN.AcnFeedbackRetail';
            return AcnFeedbackRetailForm;
        }(Serenity.PrefixedContext));
        ACN.AcnFeedbackRetailForm = AcnFeedbackRetailForm;
        [['Acnid', function () { return Serenity.LookupEditor; }], ['Name', function () { return Serenity.StringEditor; }], ['Date', function () { return Serenity.StringEditor; }], ['Dept', function () { return Serenity.StringEditor; }], ['Reviewname', function () { return Serenity.StringEditor; }], ['Location', function () { return Serenity.StringEditor; }], ['Storeno', function () { return Serenity.StringEditor; }], ['Ques1', function () { return Serenity.LookupEditor; }], ['Remark1', function () { return Serenity.StringEditor; }], ['Ques2', function () { return Serenity.LookupEditor; }], ['Remark2', function () { return Serenity.StringEditor; }], ['Ques3', function () { return Serenity.LookupEditor; }], ['Remark3', function () { return Serenity.StringEditor; }], ['Ques4', function () { return Serenity.LookupEditor; }], ['Remark4', function () { return Serenity.StringEditor; }], ['Ques5', function () { return Serenity.LookupEditor; }], ['Remark5', function () { return Serenity.StringEditor; }], ['Ques6', function () { return Serenity.LookupEditor; }], ['Remark6', function () { return Serenity.StringEditor; }], ['Ques7', function () { return Serenity.LookupEditor; }], ['Remark7', function () { return Serenity.StringEditor; }], ['Ques8', function () { return Serenity.LookupEditor; }], ['Remark8', function () { return Serenity.StringEditor; }], ['Comments', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(AcnFeedbackRetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnFeedbackRetailRow;
        (function (AcnFeedbackRetailRow) {
            AcnFeedbackRetailRow.idProperty = 'AcnFeedbackRetailId';
            AcnFeedbackRetailRow.nameProperty = 'Name';
            AcnFeedbackRetailRow.localTextPrefix = 'ACN.AcnFeedbackRetail';
            var Fields;
            (function (Fields) {
            })(Fields = AcnFeedbackRetailRow.Fields || (AcnFeedbackRetailRow.Fields = {}));
            ['AcnFeedbackRetailId', 'Acnid', 'Ques1', 'Ques2', 'Ques3', 'Ques4', 'Ques5', 'Ques6', 'Ques7', 'Ques8', 'Name', 'Dept', 'Reviewname', 'Location', 'Remark1', 'Remark2', 'Remark3', 'Remark4', 'Remark5', 'Remark6', 'Remark7', 'Remark8', 'Date', 'Storeno', 'Comments', 'Preview', 'Send', 'AcnidAcnTilte', 'AcnidPhaseNo', 'AcnidLocation', 'AcnidFromdate', 'AcnidTodate', 'AcnidPeriodfrom', 'AcnidPeriodto', 'AcnidCreationdate', 'AcnidUserid'].forEach(function (x) { return Fields[x] = x; });
        })(AcnFeedbackRetailRow = ACN.AcnFeedbackRetailRow || (ACN.AcnFeedbackRetailRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnFeedbackRetailService;
        (function (AcnFeedbackRetailService) {
            AcnFeedbackRetailService.baseUrl = 'ACN/AcnFeedbackRetail';
            var Methods;
            (function (Methods) {
            })(Methods = AcnFeedbackRetailService.Methods || (AcnFeedbackRetailService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'Sendmail'].forEach(function (x) {
                AcnFeedbackRetailService[x] = function (r, s, o) { return Q.serviceRequest(AcnFeedbackRetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AcnFeedbackRetailService.baseUrl + '/' + x;
            });
        })(AcnFeedbackRetailService = ACN.AcnFeedbackRetailService || (ACN.AcnFeedbackRetailService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnFeedbackRow;
        (function (AcnFeedbackRow) {
            AcnFeedbackRow.idProperty = 'AcnFeedbackId';
            AcnFeedbackRow.nameProperty = 'Name';
            AcnFeedbackRow.localTextPrefix = 'ACN.AcnFeedback';
            var Fields;
            (function (Fields) {
            })(Fields = AcnFeedbackRow.Fields || (AcnFeedbackRow.Fields = {}));
            ['AcnFeedbackId', 'Acnid', 'Ques1', 'Remark1', 'Ques2', 'Remark2', 'Ques3', 'Remark3', 'Ques4', 'Remark4', 'Ques5', 'Remark5', 'Ques6', 'Remark6', 'Ques7', 'Remark7', 'Ques8', 'Remark8', 'Ques9', 'Remark9', 'Ques10', 'Remark10', 'Ques11', 'Remark11', 'Ques12', 'Remark12', 'Ques13', 'Remark13', 'Ques14', 'Remark14', 'Name', 'Dept', 'Reviewname', 'Location', 'Comments', 'Preview', 'Send', 'AcnidAcnTilte', 'AcnidPhaseNo', 'AcnidLocation', 'AcnidFromdate', 'AcnidTodate', 'AcnidPeriodfrom', 'AcnidPeriodto', 'AcnidCreationdate'].forEach(function (x) { return Fields[x] = x; });
        })(AcnFeedbackRow = ACN.AcnFeedbackRow || (ACN.AcnFeedbackRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnFeedbackService;
        (function (AcnFeedbackService) {
            AcnFeedbackService.baseUrl = 'ACN/AcnFeedback';
            var Methods;
            (function (Methods) {
            })(Methods = AcnFeedbackService.Methods || (AcnFeedbackService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'Sendmail'].forEach(function (x) {
                AcnFeedbackService[x] = function (r, s, o) { return Q.serviceRequest(AcnFeedbackService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AcnFeedbackService.baseUrl + '/' + x;
            });
        })(AcnFeedbackService = ACN.AcnFeedbackService || (ACN.AcnFeedbackService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnForm = (function (_super) {
            __extends(AcnForm, _super);
            function AcnForm() {
                _super.apply(this, arguments);
            }
            AcnForm.formKey = 'ACN.Acn';
            return AcnForm;
        }(Serenity.PrefixedContext));
        ACN.AcnForm = AcnForm;
        [['PhaseNo', function () { return Serenity.IntegerEditor; }], ['AcnTilte', function () { return Serenity.StringEditor; }], ['location', function () { return Serenity.StringEditor; }], ['Fromdate', function () { return Serenity.DateEditor; }], ['Todate', function () { return Serenity.DateEditor; }], ['Periodfrom', function () { return Serenity.DateEditor; }], ['Periodto', function () { return Serenity.DateEditor; }], ['creationdate', function () { return Serenity.DateEditor; }], ['ScopeList', function () { return ACN.ScopeEditor; }], ['Auditor', function () { return Serenity.LookupEditor; }], ['Auditee', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(AcnForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnreportForm = (function (_super) {
            __extends(AcnreportForm, _super);
            function AcnreportForm() {
                _super.apply(this, arguments);
            }
            AcnreportForm.formKey = 'ACN.Acnreport';
            return AcnreportForm;
        }(Serenity.PrefixedContext));
        ACN.AcnreportForm = AcnreportForm;
        [['Title', function () { return Serenity.StringEditor; }], ['Acnid', function () { return Serenity.LookupEditor; }], ['userid', function () { return Serenity.StringEditor; }], ['status', function () { return Serenity.StringEditor; }], ['Qc', function () { return Serenity.LookupEditor; }], ['Keyfacts', function () { return ACN.KeyfactsEditor; }]].forEach(function (x) { return Object.defineProperty(AcnreportForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnreportRow;
        (function (AcnreportRow) {
            AcnreportRow.idProperty = 'ReportId';
            AcnreportRow.nameProperty = 'Title';
            AcnreportRow.localTextPrefix = 'ACN.Acnreport';
            AcnreportRow.lookupKey = 'AcnreportRow';
            function getLookup() {
                return Q.getLookup('AcnreportRow');
            }
            AcnreportRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = AcnreportRow.Fields || (AcnreportRow.Fields = {}));
            ['ReportId', 'Title', 'Acnid', 'Download', 'userid', 'status', 'Qc', 'AcnidAcnTilte', 'AcnidPhaseNo', 'AcnidLocation', 'AcnidFromdate', 'AcnidTodate', 'AcnidPeriodfrom', 'AcnidPeriodto', 'AcnidCreationdate', 'Keyfacts'].forEach(function (x) { return Fields[x] = x; });
        })(AcnreportRow = ACN.AcnreportRow || (ACN.AcnreportRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnreportService;
        (function (AcnreportService) {
            AcnreportService.baseUrl = 'ACN/Acnreport';
            var Methods;
            (function (Methods) {
            })(Methods = AcnreportService.Methods || (AcnreportService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AcnreportService[x] = function (r, s, o) { return Q.serviceRequest(AcnreportService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AcnreportService.baseUrl + '/' + x;
            });
        })(AcnreportService = ACN.AcnreportService || (ACN.AcnreportService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnReviewRefForm = (function (_super) {
            __extends(AcnReviewRefForm, _super);
            function AcnReviewRefForm() {
                _super.apply(this, arguments);
            }
            AcnReviewRefForm.formKey = 'ACN.AcnReviewRef';
            return AcnReviewRefForm;
        }(Serenity.PrefixedContext));
        ACN.AcnReviewRefForm = AcnReviewRefForm;
        [['AcnReviewId', function () { return Serenity.IntegerEditor; }], ['ReportId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(AcnReviewRefForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnReviewRefRow;
        (function (AcnReviewRefRow) {
            AcnReviewRefRow.idProperty = 'AcnReviewRefId';
            AcnReviewRefRow.localTextPrefix = 'ACN.AcnReviewRef';
            var Fields;
            (function (Fields) {
            })(Fields = AcnReviewRefRow.Fields || (AcnReviewRefRow.Fields = {}));
            ['AcnReviewRefId', 'AcnReviewId', 'ReportId'].forEach(function (x) { return Fields[x] = x; });
        })(AcnReviewRefRow = ACN.AcnReviewRefRow || (ACN.AcnReviewRefRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnReviewRefService;
        (function (AcnReviewRefService) {
            AcnReviewRefService.baseUrl = 'ACN/AcnReviewRef';
            var Methods;
            (function (Methods) {
            })(Methods = AcnReviewRefService.Methods || (AcnReviewRefService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AcnReviewRefService[x] = function (r, s, o) { return Q.serviceRequest(AcnReviewRefService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AcnReviewRefService.baseUrl + '/' + x;
            });
        })(AcnReviewRefService = ACN.AcnReviewRefService || (ACN.AcnReviewRefService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnRow;
        (function (AcnRow) {
            AcnRow.idProperty = 'AcnId';
            AcnRow.nameProperty = 'AcnTilte';
            AcnRow.localTextPrefix = 'ACN.Acn';
            AcnRow.lookupKey = 'ACN.Acn';
            function getLookup() {
                return Q.getLookup('ACN.Acn');
            }
            AcnRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = AcnRow.Fields || (AcnRow.Fields = {}));
            ['AcnId', 'AcnTilte', 'Auditor', 'Auditee', 'PhaseNo', 'location', 'Fromdate', 'Todate', 'Periodfrom', 'Periodto', 'creationdate', 'ScopeList', 'Preview', 'send'].forEach(function (x) { return Fields[x] = x; });
        })(AcnRow = ACN.AcnRow || (ACN.AcnRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnService;
        (function (AcnService) {
            AcnService.baseUrl = 'ACN/Acn';
            var Methods;
            (function (Methods) {
            })(Methods = AcnService.Methods || (AcnService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'Sendmail'].forEach(function (x) {
                AcnService[x] = function (r, s, o) { return Q.serviceRequest(AcnService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AcnService.baseUrl + '/' + x;
            });
        })(AcnService = ACN.AcnService || (ACN.AcnService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AodForm = (function (_super) {
            __extends(AodForm, _super);
            function AodForm() {
                _super.apply(this, arguments);
            }
            AodForm.formKey = 'ACN.Aod';
            return AodForm;
        }(Serenity.PrefixedContext));
        ACN.AodForm = AodForm;
        [['Sbu', function () { return Serenity.StringEditor; }], ['AcnidLocation', function () { return Serenity.StringEditor; }], ['Meetingid', function () { return Serenity.LookupEditor; }], ['AcnidPhaseNo', function () { return Serenity.IntegerEditor; }], ['AcnidCreationdate', function () { return Serenity.StringEditor; }], ['MeetingidPlanedcloseddate', function () { return Serenity.DateEditor; }], ['Actualcomencementdate', function () { return Serenity.DateEditor; }], ['MeetingidAuditopeningmeetingdate', function () { return Serenity.DateEditor; }], ['Actualcompltedate', function () { return Serenity.DateEditor; }], ['ProcessOwner', function () { return Serenity.StringEditor; }], ['Functionalhead', function () { return Serenity.StringEditor; }], ['AcnidPeriodfrom', function () { return Serenity.StringEditor; }], ['AcnidPeriodto', function () { return Serenity.StringEditor; }], ['AcnidFromdate', function () { return Serenity.StringEditor; }], ['AcnidTodate', function () { return Serenity.StringEditor; }], ['Areaofscope', function () { return Serenity.StringEditor; }], ['Exclusions', function () { return Serenity.StringEditor; }], ['Reasons', function () { return Serenity.StringEditor; }], ['Acnid', function () { return Serenity.IntegerEditor; }], ['inputfromauditee', function () { return ACN.InputfromauditeeEditor; }], ['Satisfactionrating', function () { return ACN.SatisfactionratingEditor; }], ['Observationpending', function () { return ACN.ObservationpendingEditor; }], ['Currentauditobservation', function () { return ACN.CurrentauditobservationEditor; }]].forEach(function (x) { return Object.defineProperty(AodForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AodRow;
        (function (AodRow) {
            AodRow.idProperty = 'AodId';
            AodRow.nameProperty = 'Actualcomencementdate';
            AodRow.localTextPrefix = 'ACN.Aod';
            var Fields;
            (function (Fields) {
            })(Fields = AodRow.Fields || (AodRow.Fields = {}));
            ['AodId', 'Meetingid', 'Actualcomencementdate', 'Actualcompltedate', 'ProcessOwner', 'Functionalhead', 'Areaofscope', 'Exclusions', 'Reasons', 'Sbu', 'Acnid', 'Preview', 'Send', 'MeetingidAcnid', 'MeetingidTitle', 'MeetingidAuditscope', 'MeetingidPeriod', 'MeetingidTime', 'MeetingidVenue', 'MeetingidAuditor', 'MeetingidAuditee', 'MeetingidDownload', 'MeetingidUserid', 'MeetingidMomdate', 'MeetingidPlanedcloseddate', 'MeetingidAuditopeningmeetingdate', 'AcnidAcnTilte', 'AcnidPhaseNo', 'AcnidLocation', 'AcnidFromdate', 'AcnidTodate', 'AcnidPeriodfrom', 'AcnidPeriodto', 'AcnidCreationdate', 'AcnidUserid', 'inputfromauditee', 'Satisfactionrating', 'Observationpending', 'Currentauditobservation'].forEach(function (x) { return Fields[x] = x; });
        })(AodRow = ACN.AodRow || (ACN.AodRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AodService;
        (function (AodService) {
            AodService.baseUrl = 'ACN/Aod';
            var Methods;
            (function (Methods) {
            })(Methods = AodService.Methods || (AodService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'Sendmail'].forEach(function (x) {
                AodService[x] = function (r, s, o) { return Q.serviceRequest(AodService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AodService.baseUrl + '/' + x;
            });
        })(AodService = ACN.AodService || (ACN.AodService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AuditobservationForm = (function (_super) {
            __extends(AuditobservationForm, _super);
            function AuditobservationForm() {
                _super.apply(this, arguments);
            }
            AuditobservationForm.formKey = 'ACN.Auditobservation';
            return AuditobservationForm;
        }(Serenity.PrefixedContext));
        ACN.AuditobservationForm = AuditobservationForm;
        [['AcnId', function () { return Serenity.LookupEditor; }], ['Observationtitle', function () { return Serenity.StringEditor; }], ['Observationsynopsis', function () { return Serenity.TextAreaEditor; }], ['Detailedobservation', function () { return Serenity.TextAreaEditor; }], ['rootList', function () { return ACN.RootcauseEditor; }], ['SuggestionList', function () { return ACN.SuggestionEditor; }], ['Category', function () { return Serenity.LookupEditor; }], ['Consequence', function () { return Serenity.LookupEditor; }], ['Likelihood', function () { return Serenity.LookupEditor; }], ['RiskRating', function () { return Serenity.StringEditor; }], ['Agreeobservation', function () { return Serenity.LookupEditor; }], ['Justification', function () { return Serenity.TextAreaEditor; }], ['Suggestion', function () { return Serenity.LookupEditor; }], ['Alternateplan', function () { return Serenity.TextAreaEditor; }], ['Name', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.StringEditor; }], ['Targetdate', function () { return Serenity.DateEditor; }]].forEach(function (x) { return Object.defineProperty(AuditobservationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AuditobservationRow;
        (function (AuditobservationRow) {
            AuditobservationRow.idProperty = 'AuditobservationId';
            AuditobservationRow.nameProperty = 'Observationtitle';
            AuditobservationRow.localTextPrefix = 'ACN.Auditobservation';
            AuditobservationRow.lookupKey = 'ACN.AuditobservationRow';
            function getLookup() {
                return Q.getLookup('ACN.AuditobservationRow');
            }
            AuditobservationRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = AuditobservationRow.Fields || (AuditobservationRow.Fields = {}));
            ['AuditobservationId', 'AcnId', 'Observationtitle', 'Observationsynopsis', 'Detailedobservation', 'Category', 'RiskRating', 'Agreeobservation', 'Justification', 'Suggestion', 'Alternateplan', 'Name', 'Email', 'Targetdate', 'Consequence', 'Likelihood', 'AcnAcnTilte', 'AcnPhaseNo', 'AcnLocation', 'AcnFromdate', 'AcnTodate', 'AcnPeriodfrom', 'AcnPeriodto', 'AcnCreationdate', 'rootList', 'SuggestionList'].forEach(function (x) { return Fields[x] = x; });
        })(AuditobservationRow = ACN.AuditobservationRow || (ACN.AuditobservationRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AuditobservationService;
        (function (AuditobservationService) {
            AuditobservationService.baseUrl = 'ACN/Auditobservation';
            var Methods;
            (function (Methods) {
            })(Methods = AuditobservationService.Methods || (AuditobservationService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AuditobservationService[x] = function (r, s, o) { return Q.serviceRequest(AuditobservationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AuditobservationService.baseUrl + '/' + x;
            });
        })(AuditobservationService = ACN.AuditobservationService || (ACN.AuditobservationService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var CategoryForm = (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm() {
                _super.apply(this, arguments);
            }
            CategoryForm.formKey = 'ACN.Category';
            return CategoryForm;
        }(Serenity.PrefixedContext));
        ACN.CategoryForm = CategoryForm;
        [['Categoryname', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(CategoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'Categoryid';
            CategoryRow.nameProperty = 'Categoryname';
            CategoryRow.localTextPrefix = 'ACN.Category';
            CategoryRow.lookupKey = 'ACN.CategoryRow';
            function getLookup() {
                return Q.getLookup('ACN.CategoryRow');
            }
            CategoryRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CategoryRow.Fields || (CategoryRow.Fields = {}));
            ['Categoryid', 'Categoryname'].forEach(function (x) { return Fields[x] = x; });
        })(CategoryRow = ACN.CategoryRow || (ACN.CategoryRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'ACN/Category';
            var Methods;
            (function (Methods) {
            })(Methods = CategoryService.Methods || (CategoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CategoryService[x] = function (r, s, o) { return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CategoryService.baseUrl + '/' + x;
            });
        })(CategoryService = ACN.CategoryService || (ACN.CategoryService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ConformationForm = (function (_super) {
            __extends(ConformationForm, _super);
            function ConformationForm() {
                _super.apply(this, arguments);
            }
            ConformationForm.formKey = 'ACN.Conformation';
            return ConformationForm;
        }(Serenity.PrefixedContext));
        ACN.ConformationForm = ConformationForm;
        [['Conformationname', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ConformationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ConformationRow;
        (function (ConformationRow) {
            ConformationRow.idProperty = 'ConformationId';
            ConformationRow.nameProperty = 'Conformationname';
            ConformationRow.localTextPrefix = 'ACN.Conformation';
            ConformationRow.lookupKey = 'ACN.ConformationRow';
            function getLookup() {
                return Q.getLookup('ACN.ConformationRow');
            }
            ConformationRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ConformationRow.Fields || (ConformationRow.Fields = {}));
            ['ConformationId', 'Conformationname'].forEach(function (x) { return Fields[x] = x; });
        })(ConformationRow = ACN.ConformationRow || (ACN.ConformationRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ConformationService;
        (function (ConformationService) {
            ConformationService.baseUrl = 'ACN/Conformation';
            var Methods;
            (function (Methods) {
            })(Methods = ConformationService.Methods || (ConformationService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ConformationService[x] = function (r, s, o) { return Q.serviceRequest(ConformationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ConformationService.baseUrl + '/' + x;
            });
        })(ConformationService = ACN.ConformationService || (ACN.ConformationService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var CurrentauditobservationForm = (function (_super) {
            __extends(CurrentauditobservationForm, _super);
            function CurrentauditobservationForm() {
                _super.apply(this, arguments);
            }
            CurrentauditobservationForm.formKey = 'ACN.Currentauditobservation';
            return CurrentauditobservationForm;
        }(Serenity.PrefixedContext));
        ACN.CurrentauditobservationForm = CurrentauditobservationForm;
        [['Observation', function () { return Serenity.StringEditor; }], ['Comments', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(CurrentauditobservationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var CurrentauditobservationRow;
        (function (CurrentauditobservationRow) {
            CurrentauditobservationRow.idProperty = 'Id';
            CurrentauditobservationRow.nameProperty = 'Observation';
            CurrentauditobservationRow.localTextPrefix = 'ACN.Currentauditobservation';
            var Fields;
            (function (Fields) {
            })(Fields = CurrentauditobservationRow.Fields || (CurrentauditobservationRow.Fields = {}));
            ['Id', 'Observation', 'Comments', 'Aodid', 'AodidMeetingid', 'AodidActualcomencementdate', 'AodidActualcompltedate', 'AodidProcessOwner', 'AodidFunctionalhead', 'AodidAreaofscope', 'AodidExclusions', 'AodidReasons', 'AodidSbu', 'AodidAcnid'].forEach(function (x) { return Fields[x] = x; });
        })(CurrentauditobservationRow = ACN.CurrentauditobservationRow || (ACN.CurrentauditobservationRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var CurrentauditobservationService;
        (function (CurrentauditobservationService) {
            CurrentauditobservationService.baseUrl = 'ACN/Currentauditobservation';
            var Methods;
            (function (Methods) {
            })(Methods = CurrentauditobservationService.Methods || (CurrentauditobservationService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CurrentauditobservationService[x] = function (r, s, o) { return Q.serviceRequest(CurrentauditobservationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CurrentauditobservationService.baseUrl + '/' + x;
            });
        })(CurrentauditobservationService = ACN.CurrentauditobservationService || (ACN.CurrentauditobservationService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var DarClarificationsForm = (function (_super) {
            __extends(DarClarificationsForm, _super);
            function DarClarificationsForm() {
                _super.apply(this, arguments);
            }
            DarClarificationsForm.formKey = 'ACN.DarClarifications';
            return DarClarificationsForm;
        }(Serenity.PrefixedContext));
        ACN.DarClarificationsForm = DarClarificationsForm;
        [['ReportId', function () { return Serenity.LookupEditor; }], ['AcnId', function () { return Serenity.LookupEditor; }], ['Status', function () { return Serenity.LookupEditor; }], ['NoteList', function () { return coromendal.Northwind.NotesEditor; }]].forEach(function (x) { return Object.defineProperty(DarClarificationsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var DarClarificationsRow;
        (function (DarClarificationsRow) {
            DarClarificationsRow.idProperty = 'DarClarificationsId';
            DarClarificationsRow.localTextPrefix = 'ACN.DarClarifications';
            var Fields;
            (function (Fields) {
            })(Fields = DarClarificationsRow.Fields || (DarClarificationsRow.Fields = {}));
            ['DarClarificationsId', 'ReportId', 'AcnId', 'Status', 'ReportTitle', 'ReportAcnid', 'ReportDownload', 'ReportUserid', 'ReportStatus', 'NoteList'].forEach(function (x) { return Fields[x] = x; });
        })(DarClarificationsRow = ACN.DarClarificationsRow || (ACN.DarClarificationsRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var DarClarificationsService;
        (function (DarClarificationsService) {
            DarClarificationsService.baseUrl = 'ACN/DarClarifications';
            var Methods;
            (function (Methods) {
            })(Methods = DarClarificationsService.Methods || (DarClarificationsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                DarClarificationsService[x] = function (r, s, o) { return Q.serviceRequest(DarClarificationsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = DarClarificationsService.baseUrl + '/' + x;
            });
        })(DarClarificationsService = ACN.DarClarificationsService || (ACN.DarClarificationsService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var DaRreleaseForm = (function (_super) {
            __extends(DaRreleaseForm, _super);
            function DaRreleaseForm() {
                _super.apply(this, arguments);
            }
            DaRreleaseForm.formKey = 'ACN.DaRrelease';
            return DaRreleaseForm;
        }(Serenity.PrefixedContext));
        ACN.DaRreleaseForm = DaRreleaseForm;
        [['ReportId', function () { return Serenity.LookupEditor; }], ['AcnId', function () { return Serenity.LookupEditor; }], ['Status', function () { return Serenity.LookupEditor; }], ['NoteList', function () { return coromendal.Northwind.NotesEditor; }]].forEach(function (x) { return Object.defineProperty(DaRreleaseForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var DaRreleaseRow;
        (function (DaRreleaseRow) {
            DaRreleaseRow.idProperty = 'DaRreleaseId';
            DaRreleaseRow.localTextPrefix = 'ACN.DaRrelease';
            var Fields;
            (function (Fields) {
            })(Fields = DaRreleaseRow.Fields || (DaRreleaseRow.Fields = {}));
            ['DaRreleaseId', 'ReportId', 'AcnId', 'Status', 'NoteList', 'ReportTitle', 'ReportAcnid', 'ReportDownload', 'ReportUserid', 'ReportStatus'].forEach(function (x) { return Fields[x] = x; });
        })(DaRreleaseRow = ACN.DaRreleaseRow || (ACN.DaRreleaseRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var DaRreleaseService;
        (function (DaRreleaseService) {
            DaRreleaseService.baseUrl = 'ACN/DaRrelease';
            var Methods;
            (function (Methods) {
            })(Methods = DaRreleaseService.Methods || (DaRreleaseService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                DaRreleaseService[x] = function (r, s, o) { return Q.serviceRequest(DaRreleaseService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = DaRreleaseService.baseUrl + '/' + x;
            });
        })(DaRreleaseService = ACN.DaRreleaseService || (ACN.DaRreleaseService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FeedbackForm = (function (_super) {
            __extends(FeedbackForm, _super);
            function FeedbackForm() {
                _super.apply(this, arguments);
            }
            FeedbackForm.formKey = 'ACN.Feedback';
            return FeedbackForm;
        }(Serenity.PrefixedContext));
        ACN.FeedbackForm = FeedbackForm;
        [['FeedbackMeetingId', function () { return Serenity.LookupEditor; }], ['FeedbackQuestionId', function () { return Serenity.LookupEditor; }], ['FeedbackRating', function () { return Serenity.IntegerEditor; }], ['FeedbackRemarks', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(FeedbackForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FeedbackRow;
        (function (FeedbackRow) {
            FeedbackRow.idProperty = 'FeedbackId';
            FeedbackRow.nameProperty = 'FeedbackRemarks';
            FeedbackRow.localTextPrefix = 'ACN.Feedback';
            FeedbackRow.lookupKey = 'FeedbackRow';
            function getLookup() {
                return Q.getLookup('FeedbackRow');
            }
            FeedbackRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = FeedbackRow.Fields || (FeedbackRow.Fields = {}));
            ['FeedbackId', 'FeedbackQuestionId', 'FeedbackMeetingId', 'FeedbackRating', 'FeedbackRemarks', 'Preview', 'FeedbackQuestionQuestiontext', 'FeedbackMeetingAcnid', 'FeedbackMeetingTitle', 'FeedbackMeetingAuditscope', 'FeedbackMeetingPeriod', 'FeedbackMeetingTime', 'FeedbackMeetingVenue', 'FeedbackMeetingAuditor', 'FeedbackMeetingAuditee'].forEach(function (x) { return Fields[x] = x; });
        })(FeedbackRow = ACN.FeedbackRow || (ACN.FeedbackRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FeedbackService;
        (function (FeedbackService) {
            FeedbackService.baseUrl = 'ACN/Feedback';
            var Methods;
            (function (Methods) {
            })(Methods = FeedbackService.Methods || (FeedbackService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                FeedbackService[x] = function (r, s, o) { return Q.serviceRequest(FeedbackService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = FeedbackService.baseUrl + '/' + x;
            });
        })(FeedbackService = ACN.FeedbackService || (ACN.FeedbackService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FeedbackvalueForm = (function (_super) {
            __extends(FeedbackvalueForm, _super);
            function FeedbackvalueForm() {
                _super.apply(this, arguments);
            }
            FeedbackvalueForm.formKey = 'ACN.Feedbackvalue';
            return FeedbackvalueForm;
        }(Serenity.PrefixedContext));
        ACN.FeedbackvalueForm = FeedbackvalueForm;
        [['Value', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(FeedbackvalueForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FeedbackvalueRow;
        (function (FeedbackvalueRow) {
            FeedbackvalueRow.idProperty = 'Feedbackvalueid';
            FeedbackvalueRow.nameProperty = 'Value';
            FeedbackvalueRow.localTextPrefix = 'ACN.Feedbackvalue';
            FeedbackvalueRow.lookupKey = 'FeedbackvalueRow';
            function getLookup() {
                return Q.getLookup('FeedbackvalueRow');
            }
            FeedbackvalueRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = FeedbackvalueRow.Fields || (FeedbackvalueRow.Fields = {}));
            ['Feedbackvalueid', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(FeedbackvalueRow = ACN.FeedbackvalueRow || (ACN.FeedbackvalueRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FeedbackvalueService;
        (function (FeedbackvalueService) {
            FeedbackvalueService.baseUrl = 'ACN/Feedbackvalue';
            var Methods;
            (function (Methods) {
            })(Methods = FeedbackvalueService.Methods || (FeedbackvalueService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                FeedbackvalueService[x] = function (r, s, o) { return Q.serviceRequest(FeedbackvalueService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = FeedbackvalueService.baseUrl + '/' + x;
            });
        })(FeedbackvalueService = ACN.FeedbackvalueService || (ACN.FeedbackvalueService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FinalstatusvalueForm = (function (_super) {
            __extends(FinalstatusvalueForm, _super);
            function FinalstatusvalueForm() {
                _super.apply(this, arguments);
            }
            FinalstatusvalueForm.formKey = 'ACN.Finalstatusvalue';
            return FinalstatusvalueForm;
        }(Serenity.PrefixedContext));
        ACN.FinalstatusvalueForm = FinalstatusvalueForm;
        [['Value', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(FinalstatusvalueForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FinalstatusvalueRow;
        (function (FinalstatusvalueRow) {
            FinalstatusvalueRow.idProperty = 'Finalstatusid';
            FinalstatusvalueRow.nameProperty = 'Value';
            FinalstatusvalueRow.localTextPrefix = 'ACN.Finalstatusvalue';
            FinalstatusvalueRow.lookupKey = 'FinalstatusvalueRow';
            function getLookup() {
                return Q.getLookup('FinalstatusvalueRow');
            }
            FinalstatusvalueRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = FinalstatusvalueRow.Fields || (FinalstatusvalueRow.Fields = {}));
            ['Finalstatusid', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(FinalstatusvalueRow = ACN.FinalstatusvalueRow || (ACN.FinalstatusvalueRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FinalstatusvalueService;
        (function (FinalstatusvalueService) {
            FinalstatusvalueService.baseUrl = 'ACN/Finalstatusvalue';
            var Methods;
            (function (Methods) {
            })(Methods = FinalstatusvalueService.Methods || (FinalstatusvalueService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                FinalstatusvalueService[x] = function (r, s, o) { return Q.serviceRequest(FinalstatusvalueService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = FinalstatusvalueService.baseUrl + '/' + x;
            });
        })(FinalstatusvalueService = ACN.FinalstatusvalueService || (ACN.FinalstatusvalueService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var InputfromauditeeForm = (function (_super) {
            __extends(InputfromauditeeForm, _super);
            function InputfromauditeeForm() {
                _super.apply(this, arguments);
            }
            InputfromauditeeForm.formKey = 'ACN.Inputfromauditee';
            return InputfromauditeeForm;
        }(Serenity.PrefixedContext));
        ACN.InputfromauditeeForm = InputfromauditeeForm;
        [['Additionalareacovered', function () { return Serenity.StringEditor; }], ['Issues', function () { return Serenity.StringEditor; }], ['Newimprovements', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(InputfromauditeeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var InputfromauditeeRow;
        (function (InputfromauditeeRow) {
            InputfromauditeeRow.idProperty = 'InputauditId';
            InputfromauditeeRow.nameProperty = 'Additionalareacovered';
            InputfromauditeeRow.localTextPrefix = 'ACN.Inputfromauditee';
            var Fields;
            (function (Fields) {
            })(Fields = InputfromauditeeRow.Fields || (InputfromauditeeRow.Fields = {}));
            ['InputauditId', 'Aodid', 'Additionalareacovered', 'Issues', 'Newimprovements', 'AodidMeetingid', 'AodidActualcomencementdate', 'AodidActualcompltedate', 'AodidProcessOwner', 'AodidFunctionalhead', 'AodidAreaofscope', 'AodidExclusions', 'AodidReasons', 'AodidSbu', 'AodidAcnid'].forEach(function (x) { return Fields[x] = x; });
        })(InputfromauditeeRow = ACN.InputfromauditeeRow || (ACN.InputfromauditeeRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var InputfromauditeeService;
        (function (InputfromauditeeService) {
            InputfromauditeeService.baseUrl = 'ACN/Inputfromauditee';
            var Methods;
            (function (Methods) {
            })(Methods = InputfromauditeeService.Methods || (InputfromauditeeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                InputfromauditeeService[x] = function (r, s, o) { return Q.serviceRequest(InputfromauditeeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = InputfromauditeeService.baseUrl + '/' + x;
            });
        })(InputfromauditeeService = ACN.InputfromauditeeService || (ACN.InputfromauditeeService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var KeyfactsForm = (function (_super) {
            __extends(KeyfactsForm, _super);
            function KeyfactsForm() {
                _super.apply(this, arguments);
            }
            KeyfactsForm.formKey = 'ACN.Keyfacts';
            return KeyfactsForm;
        }(Serenity.PrefixedContext));
        ACN.KeyfactsForm = KeyfactsForm;
        [['Particulars', function () { return Serenity.StringEditor; }], ['Value', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(KeyfactsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var KeyfactsRow;
        (function (KeyfactsRow) {
            KeyfactsRow.idProperty = 'KeyfactsId';
            KeyfactsRow.nameProperty = 'Particulars';
            KeyfactsRow.localTextPrefix = 'ACN.Keyfacts';
            var Fields;
            (function (Fields) {
            })(Fields = KeyfactsRow.Fields || (KeyfactsRow.Fields = {}));
            ['KeyfactsId', 'AcnId', 'Particulars', 'Value', 'Reportid', 'AcnAcnTilte', 'AcnPhaseNo', 'AcnLocation', 'AcnFromdate', 'AcnTodate', 'AcnPeriodfrom', 'AcnPeriodto', 'AcnCreationdate', 'AcnUserid', 'ReportidTitle', 'ReportidAcnid', 'ReportidDownload', 'ReportidUserid', 'ReportidStatus'].forEach(function (x) { return Fields[x] = x; });
        })(KeyfactsRow = ACN.KeyfactsRow || (ACN.KeyfactsRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var KeyfactsService;
        (function (KeyfactsService) {
            KeyfactsService.baseUrl = 'ACN/Keyfacts';
            var Methods;
            (function (Methods) {
            })(Methods = KeyfactsService.Methods || (KeyfactsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                KeyfactsService[x] = function (r, s, o) { return Q.serviceRequest(KeyfactsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = KeyfactsService.baseUrl + '/' + x;
            });
        })(KeyfactsService = ACN.KeyfactsService || (ACN.KeyfactsService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var LikeliwoodvalueForm = (function (_super) {
            __extends(LikeliwoodvalueForm, _super);
            function LikeliwoodvalueForm() {
                _super.apply(this, arguments);
            }
            LikeliwoodvalueForm.formKey = 'ACN.Likeliwoodvalue';
            return LikeliwoodvalueForm;
        }(Serenity.PrefixedContext));
        ACN.LikeliwoodvalueForm = LikeliwoodvalueForm;
        [['Likeliwoodvaluename', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LikeliwoodvalueForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var LikeliwoodvalueRow;
        (function (LikeliwoodvalueRow) {
            LikeliwoodvalueRow.idProperty = 'Likeliwoodvalueid';
            LikeliwoodvalueRow.nameProperty = 'Likeliwoodvaluename';
            LikeliwoodvalueRow.localTextPrefix = 'ACN.Likeliwoodvalue';
            LikeliwoodvalueRow.lookupKey = 'LikeliwoodvalueRow';
            function getLookup() {
                return Q.getLookup('LikeliwoodvalueRow');
            }
            LikeliwoodvalueRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LikeliwoodvalueRow.Fields || (LikeliwoodvalueRow.Fields = {}));
            ['Likeliwoodvalueid', 'Likeliwoodvaluename'].forEach(function (x) { return Fields[x] = x; });
        })(LikeliwoodvalueRow = ACN.LikeliwoodvalueRow || (ACN.LikeliwoodvalueRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var LikeliwoodvalueService;
        (function (LikeliwoodvalueService) {
            LikeliwoodvalueService.baseUrl = 'ACN/Likeliwoodvalue';
            var Methods;
            (function (Methods) {
            })(Methods = LikeliwoodvalueService.Methods || (LikeliwoodvalueService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LikeliwoodvalueService[x] = function (r, s, o) { return Q.serviceRequest(LikeliwoodvalueService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LikeliwoodvalueService.baseUrl + '/' + x;
            });
        })(LikeliwoodvalueService = ACN.LikeliwoodvalueService || (ACN.LikeliwoodvalueService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditeeForm = (function (_super) {
            __extends(MeetingAbsentauditeeForm, _super);
            function MeetingAbsentauditeeForm() {
                _super.apply(this, arguments);
            }
            MeetingAbsentauditeeForm.formKey = 'ACN.MeetingAbsentauditee';
            return MeetingAbsentauditeeForm;
        }(Serenity.PrefixedContext));
        ACN.MeetingAbsentauditeeForm = MeetingAbsentauditeeForm;
        [['AbsentUser', function () { return Serenity.LookupEditor; }], ['Reason', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingAbsentauditeeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditeeRow;
        (function (MeetingAbsentauditeeRow) {
            MeetingAbsentauditeeRow.idProperty = 'MeetingAbsentauditeeId';
            MeetingAbsentauditeeRow.nameProperty = 'Reason';
            MeetingAbsentauditeeRow.localTextPrefix = 'ACN.MeetingAbsentauditee';
            MeetingAbsentauditeeRow.lookupKey = 'ACN.MeetingAbsentauditee';
            function getLookup() {
                return Q.getLookup('ACN.MeetingAbsentauditee');
            }
            MeetingAbsentauditeeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = MeetingAbsentauditeeRow.Fields || (MeetingAbsentauditeeRow.Fields = {}));
            ['MeetingAbsentauditeeId', 'MeetingId', 'AbsentUser', 'Reason', 'MeetingAcnid', 'MeetingTitle', 'MeetingAuditscope', 'MeetingPeriod', 'MeetingTime', 'MeetingVenue', 'MeetingAuditor', 'MeetingAuditee', 'MeetingDownload', 'MeetingUserid', 'MeetingMomdate', 'MeetingPlanedcloseddate', 'MeetingAuditopeningmeetingdate', 'MeetingSend'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingAbsentauditeeRow = ACN.MeetingAbsentauditeeRow || (ACN.MeetingAbsentauditeeRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditeeService;
        (function (MeetingAbsentauditeeService) {
            MeetingAbsentauditeeService.baseUrl = 'ACN/MeetingAbsentauditee';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingAbsentauditeeService.Methods || (MeetingAbsentauditeeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingAbsentauditeeService[x] = function (r, s, o) { return Q.serviceRequest(MeetingAbsentauditeeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingAbsentauditeeService.baseUrl + '/' + x;
            });
        })(MeetingAbsentauditeeService = ACN.MeetingAbsentauditeeService || (ACN.MeetingAbsentauditeeService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditordetailsForm = (function (_super) {
            __extends(MeetingAbsentauditordetailsForm, _super);
            function MeetingAbsentauditordetailsForm() {
                _super.apply(this, arguments);
            }
            MeetingAbsentauditordetailsForm.formKey = 'ACN.MeetingAbsentauditordetails';
            return MeetingAbsentauditordetailsForm;
        }(Serenity.PrefixedContext));
        ACN.MeetingAbsentauditordetailsForm = MeetingAbsentauditordetailsForm;
        [['MeetingAbsentauditorId', function () { return Serenity.IntegerEditor; }], ['MeetingId', function () { return Serenity.IntegerEditor; }], ['AbsentUser', function () { return Serenity.IntegerEditor; }], ['Reason', function () { return Serenity.StringEditor; }], ['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingAbsentauditordetailsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditordetailsRow;
        (function (MeetingAbsentauditordetailsRow) {
            MeetingAbsentauditordetailsRow.idProperty = 'MeetingAbsentauditorId';
            MeetingAbsentauditordetailsRow.nameProperty = 'Reason';
            MeetingAbsentauditordetailsRow.localTextPrefix = 'ACN.MeetingAbsentauditordetails';
            var Fields;
            (function (Fields) {
            })(Fields = MeetingAbsentauditordetailsRow.Fields || (MeetingAbsentauditordetailsRow.Fields = {}));
            ['MeetingAbsentauditorId', 'MeetingId', 'AbsentUser', 'Reason', 'Name', 'MeetingAcnid', 'MeetingTitle', 'MeetingAuditscope', 'MeetingPeriod', 'MeetingTime', 'MeetingVenue', 'MeetingAuditor', 'MeetingAuditee', 'MeetingDownload', 'MeetingUserid', 'MeetingMomdate', 'MeetingPlanedcloseddate', 'MeetingAuditopeningmeetingdate', 'MeetingSend'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingAbsentauditordetailsRow = ACN.MeetingAbsentauditordetailsRow || (ACN.MeetingAbsentauditordetailsRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditordetailsService;
        (function (MeetingAbsentauditordetailsService) {
            MeetingAbsentauditordetailsService.baseUrl = 'ACN/MeetingAbsentauditordetails';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingAbsentauditordetailsService.Methods || (MeetingAbsentauditordetailsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingAbsentauditordetailsService[x] = function (r, s, o) { return Q.serviceRequest(MeetingAbsentauditordetailsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingAbsentauditordetailsService.baseUrl + '/' + x;
            });
        })(MeetingAbsentauditordetailsService = ACN.MeetingAbsentauditordetailsService || (ACN.MeetingAbsentauditordetailsService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditorForm = (function (_super) {
            __extends(MeetingAbsentauditorForm, _super);
            function MeetingAbsentauditorForm() {
                _super.apply(this, arguments);
            }
            MeetingAbsentauditorForm.formKey = 'ACN.MeetingAbsentauditor';
            return MeetingAbsentauditorForm;
        }(Serenity.PrefixedContext));
        ACN.MeetingAbsentauditorForm = MeetingAbsentauditorForm;
        [['MeetingAbsentauditorId', function () { return Serenity.IntegerEditor; }], ['MeetingId', function () { return Serenity.IntegerEditor; }], ['AbsentUser', function () { return Serenity.LookupEditor; }], ['Reason', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingAbsentauditorForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditorRow;
        (function (MeetingAbsentauditorRow) {
            MeetingAbsentauditorRow.idProperty = 'MeetingAbsentauditorId';
            MeetingAbsentauditorRow.nameProperty = 'Reason';
            MeetingAbsentauditorRow.localTextPrefix = 'ACN.MeetingAbsentauditor';
            var Fields;
            (function (Fields) {
            })(Fields = MeetingAbsentauditorRow.Fields || (MeetingAbsentauditorRow.Fields = {}));
            ['MeetingAbsentauditorId', 'MeetingId', 'AbsentUser', 'Reason', 'MeetingAcnid', 'MeetingTitle', 'MeetingAuditscope', 'MeetingPeriod', 'MeetingTime', 'MeetingVenue', 'MeetingAuditor', 'MeetingAuditee', 'MeetingDownload', 'MeetingUserid', 'MeetingMomdate', 'MeetingPlanedcloseddate', 'MeetingAuditopeningmeetingdate', 'MeetingSend'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingAbsentauditorRow = ACN.MeetingAbsentauditorRow || (ACN.MeetingAbsentauditorRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditorService;
        (function (MeetingAbsentauditorService) {
            MeetingAbsentauditorService.baseUrl = 'ACN/MeetingAbsentauditor';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingAbsentauditorService.Methods || (MeetingAbsentauditorService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingAbsentauditorService[x] = function (r, s, o) { return Q.serviceRequest(MeetingAbsentauditorService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingAbsentauditorService.baseUrl + '/' + x;
            });
        })(MeetingAbsentauditorService = ACN.MeetingAbsentauditorService || (ACN.MeetingAbsentauditorService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentForm = (function (_super) {
            __extends(MeetingAbsentForm, _super);
            function MeetingAbsentForm() {
                _super.apply(this, arguments);
            }
            MeetingAbsentForm.formKey = 'ACN.MeetingAbsent';
            return MeetingAbsentForm;
        }(Serenity.PrefixedContext));
        ACN.MeetingAbsentForm = MeetingAbsentForm;
        [['AbsentUser', function () { return Serenity.LookupEditor; }], ['Reason', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingAbsentForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentRow;
        (function (MeetingAbsentRow) {
            MeetingAbsentRow.idProperty = 'MeetingAbsentId';
            MeetingAbsentRow.nameProperty = 'Reason';
            MeetingAbsentRow.localTextPrefix = 'ACN.MeetingAbsent';
            var Fields;
            (function (Fields) {
            })(Fields = MeetingAbsentRow.Fields || (MeetingAbsentRow.Fields = {}));
            ['MeetingAbsentId', 'MeetingId', 'AbsentUser', 'Reason', 'MeetingAcnid', 'MeetingTitle', 'MeetingAuditscope', 'MeetingPeriod', 'MeetingTime', 'MeetingVenue', 'MeetingAuditor', 'MeetingAuditee', 'MeetingDownload', 'MeetingUserid'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingAbsentRow = ACN.MeetingAbsentRow || (ACN.MeetingAbsentRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentService;
        (function (MeetingAbsentService) {
            MeetingAbsentService.baseUrl = 'ACN/MeetingAbsent';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingAbsentService.Methods || (MeetingAbsentService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingAbsentService[x] = function (r, s, o) { return Q.serviceRequest(MeetingAbsentService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingAbsentService.baseUrl + '/' + x;
            });
        })(MeetingAbsentService = ACN.MeetingAbsentService || (ACN.MeetingAbsentService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingIssueForm = (function (_super) {
            __extends(MeetingIssueForm, _super);
            function MeetingIssueForm() {
                _super.apply(this, arguments);
            }
            MeetingIssueForm.formKey = 'ACN.MeetingIssue';
            return MeetingIssueForm;
        }(Serenity.PrefixedContext));
        ACN.MeetingIssueForm = MeetingIssueForm;
        [['AreaofOperation', function () { return Serenity.StringEditor; }], ['Issue', function () { return Serenity.StringEditor; }], ['Status', function () { return Serenity.StringEditor; }], ['ExpectedDate', function () { return Serenity.DateEditor; }], ['Comments', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingIssueForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingIssueRow;
        (function (MeetingIssueRow) {
            MeetingIssueRow.idProperty = 'MeetingIssueId';
            MeetingIssueRow.nameProperty = 'AreaofOperation';
            MeetingIssueRow.localTextPrefix = 'ACN.MeetingIssue';
            var Fields;
            (function (Fields) {
            })(Fields = MeetingIssueRow.Fields || (MeetingIssueRow.Fields = {}));
            ['MeetingIssueId', 'MeetingId', 'AreaofOperation', 'Issue', 'Status', 'ExpectedDate', 'Comments', 'MeetingAcnid', 'MeetingTitle', 'MeetingAuditscope', 'MeetingPeriod', 'MeetingTime', 'MeetingVenue', 'MeetingAuditor', 'MeetingAuditee', 'MeetingDownload', 'MeetingUserid'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingIssueRow = ACN.MeetingIssueRow || (ACN.MeetingIssueRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingIssueService;
        (function (MeetingIssueService) {
            MeetingIssueService.baseUrl = 'ACN/MeetingIssue';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingIssueService.Methods || (MeetingIssueService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingIssueService[x] = function (r, s, o) { return Q.serviceRequest(MeetingIssueService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingIssueService.baseUrl + '/' + x;
            });
        })(MeetingIssueService = ACN.MeetingIssueService || (ACN.MeetingIssueService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingPointsForm = (function (_super) {
            __extends(MeetingPointsForm, _super);
            function MeetingPointsForm() {
                _super.apply(this, arguments);
            }
            MeetingPointsForm.formKey = 'ACN.MeetingPoints';
            return MeetingPointsForm;
        }(Serenity.PrefixedContext));
        ACN.MeetingPointsForm = MeetingPointsForm;
        [['Points', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingPointsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingPointsRow;
        (function (MeetingPointsRow) {
            MeetingPointsRow.idProperty = 'MeetingPointsId';
            MeetingPointsRow.nameProperty = 'Points';
            MeetingPointsRow.localTextPrefix = 'ACN.MeetingPoints';
            var Fields;
            (function (Fields) {
            })(Fields = MeetingPointsRow.Fields || (MeetingPointsRow.Fields = {}));
            ['MeetingPointsId', 'MeetingId', 'Points', 'MeetingAcnid', 'MeetingTitle', 'MeetingAuditscope', 'MeetingPeriod', 'MeetingTime', 'MeetingVenue', 'MeetingAuditor', 'MeetingAuditee', 'MeetingDownload', 'MeetingUserid'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingPointsRow = ACN.MeetingPointsRow || (ACN.MeetingPointsRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingPointsService;
        (function (MeetingPointsService) {
            MeetingPointsService.baseUrl = 'ACN/MeetingPoints';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingPointsService.Methods || (MeetingPointsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingPointsService[x] = function (r, s, o) { return Q.serviceRequest(MeetingPointsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingPointsService.baseUrl + '/' + x;
            });
        })(MeetingPointsService = ACN.MeetingPointsService || (ACN.MeetingPointsService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MinutesofmeetingForm = (function (_super) {
            __extends(MinutesofmeetingForm, _super);
            function MinutesofmeetingForm() {
                _super.apply(this, arguments);
            }
            MinutesofmeetingForm.formKey = 'ACN.Minutesofmeeting';
            return MinutesofmeetingForm;
        }(Serenity.PrefixedContext));
        ACN.MinutesofmeetingForm = MinutesofmeetingForm;
        [['AcnidPhaseNo', function () { return Serenity.IntegerEditor; }], ['AcnidCreationdate', function () { return Serenity.DateEditor; }], ['planeddate', function () { return Serenity.DateEditor; }], ['auditopeneddate', function () { return Serenity.DateEditor; }], ['momdate', function () { return Serenity.DateEditor; }], ['Acnid', function () { return Serenity.LookupEditor; }], ['MeetingTitle', function () { return Serenity.StringEditor; }], ['AcnidScopeList', function () { return ACN.ScopeEditor; }], ['AcnidPeriodfrom', function () { return Serenity.StringEditor; }], ['AcnidPeriodto', function () { return Serenity.StringEditor; }], ['AcnidFromdate', function () { return Serenity.StringEditor; }], ['AcnidTodate', function () { return Serenity.StringEditor; }], ['AbsentList', function () { return ACN.MeetingAbsentauditorEditor; }], ['AuditeeAbsent', function () { return ACN.MeetingAbsentauditeeEditor; }], ['PreviousObservationaudit', function () { return ACN.ObservationpreviousauditEditor; }], ['PointsList', function () { return ACN.MeetingPointsEditor; }], ['NoteList', function () { return coromendal.Northwind.NotesEditor; }], ['Newimprovements', function () { return ACN.NewiprovementsEditor; }], ['Newchanges', function () { return ACN.NewchangesEditor; }]].forEach(function (x) { return Object.defineProperty(MinutesofmeetingForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MinutesofmeetingRow;
        (function (MinutesofmeetingRow) {
            MinutesofmeetingRow.idProperty = 'Meetingid';
            MinutesofmeetingRow.nameProperty = 'MeetingTitle';
            MinutesofmeetingRow.localTextPrefix = 'ACN.Minutesofmeeting';
            MinutesofmeetingRow.lookupKey = 'MinutesofmeetingRow';
            function getLookup() {
                return Q.getLookup('MinutesofmeetingRow');
            }
            MinutesofmeetingRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = MinutesofmeetingRow.Fields || (MinutesofmeetingRow.Fields = {}));
            ['Meetingid', 'Acnid', 'MeetingTitle', 'Auditscope', 'Period', 'Time', 'Venue', 'Auditor', 'Auditee', 'Download', 'Userid', 'momdate', 'planeddate', 'auditopeneddate', 'DetailList', 'AuditeeAbsent', 'AbsentList', 'PointsList', 'PreviousObservationaudit', 'Newchanges', 'Newimprovements', 'NoteList', 'AcnidAcnTilte', 'AcnidPhaseNo', 'AcnidLocation', 'AcnidFromdate', 'AcnidTodate', 'AcnidPeriodfrom', 'AcnidPeriodto', 'AcnidCreationdate', 'AcnidUserid', 'AcnidScopeList', 'UseridUsername', 'UseridDisplayName', 'UseridEmail', 'UseridSource', 'UseridPasswordHash', 'UseridPasswordSalt', 'UseridInsertDate', 'UseridInsertUserId', 'UseridUpdateDate', 'UseridUpdateUserId', 'UseridIsActive', 'UseridLastDirectoryUpdate'].forEach(function (x) { return Fields[x] = x; });
        })(MinutesofmeetingRow = ACN.MinutesofmeetingRow || (ACN.MinutesofmeetingRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MinutesofmeetingService;
        (function (MinutesofmeetingService) {
            MinutesofmeetingService.baseUrl = 'ACN/Minutesofmeeting';
            var Methods;
            (function (Methods) {
            })(Methods = MinutesofmeetingService.Methods || (MinutesofmeetingService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'Sendmail'].forEach(function (x) {
                MinutesofmeetingService[x] = function (r, s, o) { return Q.serviceRequest(MinutesofmeetingService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MinutesofmeetingService.baseUrl + '/' + x;
            });
        })(MinutesofmeetingService = ACN.MinutesofmeetingService || (ACN.MinutesofmeetingService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var NewchangesForm = (function (_super) {
            __extends(NewchangesForm, _super);
            function NewchangesForm() {
                _super.apply(this, arguments);
            }
            NewchangesForm.formKey = 'ACN.Newchanges';
            return NewchangesForm;
        }(Serenity.PrefixedContext));
        ACN.NewchangesForm = NewchangesForm;
        [['Observation', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(NewchangesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var NewchangesRow;
        (function (NewchangesRow) {
            NewchangesRow.idProperty = 'NewchangesId';
            NewchangesRow.nameProperty = 'Observation';
            NewchangesRow.localTextPrefix = 'ACN.Newchanges';
            var Fields;
            (function (Fields) {
            })(Fields = NewchangesRow.Fields || (NewchangesRow.Fields = {}));
            ['NewchangesId', 'MeetingId', 'Observation', 'MeetingAcnid', 'MeetingAuditscope', 'MeetingPeriod', 'MeetingTime', 'MeetingVenue', 'MeetingAuditor', 'MeetingAuditee', 'MeetingDownload', 'MeetingUserid'].forEach(function (x) { return Fields[x] = x; });
        })(NewchangesRow = ACN.NewchangesRow || (ACN.NewchangesRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var NewchangesService;
        (function (NewchangesService) {
            NewchangesService.baseUrl = 'ACN/Newchanges';
            var Methods;
            (function (Methods) {
            })(Methods = NewchangesService.Methods || (NewchangesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                NewchangesService[x] = function (r, s, o) { return Q.serviceRequest(NewchangesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = NewchangesService.baseUrl + '/' + x;
            });
        })(NewchangesService = ACN.NewchangesService || (ACN.NewchangesService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var NewiprovementsForm = (function (_super) {
            __extends(NewiprovementsForm, _super);
            function NewiprovementsForm() {
                _super.apply(this, arguments);
            }
            NewiprovementsForm.formKey = 'ACN.Newiprovements';
            return NewiprovementsForm;
        }(Serenity.PrefixedContext));
        ACN.NewiprovementsForm = NewiprovementsForm;
        [['MeetingId', function () { return Serenity.IntegerEditor; }], ['Observation', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(NewiprovementsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var NewiprovementsRow;
        (function (NewiprovementsRow) {
            NewiprovementsRow.idProperty = 'NewiprovementsId';
            NewiprovementsRow.nameProperty = 'Observation';
            NewiprovementsRow.localTextPrefix = 'ACN.Newiprovements';
            var Fields;
            (function (Fields) {
            })(Fields = NewiprovementsRow.Fields || (NewiprovementsRow.Fields = {}));
            ['NewiprovementsId', 'MeetingId', 'Observation', 'MeetingAcnid', 'MeetingAuditscope', 'MeetingPeriod', 'MeetingTime', 'MeetingVenue', 'MeetingAuditor', 'MeetingAuditee', 'MeetingDownload', 'MeetingUserid'].forEach(function (x) { return Fields[x] = x; });
        })(NewiprovementsRow = ACN.NewiprovementsRow || (ACN.NewiprovementsRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var NewiprovementsService;
        (function (NewiprovementsService) {
            NewiprovementsService.baseUrl = 'ACN/Newiprovements';
            var Methods;
            (function (Methods) {
            })(Methods = NewiprovementsService.Methods || (NewiprovementsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                NewiprovementsService[x] = function (r, s, o) { return Q.serviceRequest(NewiprovementsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = NewiprovementsService.baseUrl + '/' + x;
            });
        })(NewiprovementsService = ACN.NewiprovementsService || (ACN.NewiprovementsService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ObservationpendingForm = (function (_super) {
            __extends(ObservationpendingForm, _super);
            function ObservationpendingForm() {
                _super.apply(this, arguments);
            }
            ObservationpendingForm.formKey = 'ACN.Observationpending';
            return ObservationpendingForm;
        }(Serenity.PrefixedContext));
        ACN.ObservationpendingForm = ObservationpendingForm;
        [['Reportreference', function () { return Serenity.StringEditor; }], ['Briefdescription', function () { return Serenity.TextAreaEditor; }], ['Originaltargetdate', function () { return Serenity.DateEditor; }], ['Revisedtargetdate', function () { return Serenity.DateEditor; }], ['Remarks', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ObservationpendingForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ObservationpendingRow;
        (function (ObservationpendingRow) {
            ObservationpendingRow.idProperty = 'ObservationpendingId';
            ObservationpendingRow.nameProperty = 'Reportreference';
            ObservationpendingRow.localTextPrefix = 'ACN.Observationpending';
            var Fields;
            (function (Fields) {
            })(Fields = ObservationpendingRow.Fields || (ObservationpendingRow.Fields = {}));
            ['ObservationpendingId', 'Reportreference', 'Briefdescription', 'Originaltargetdate', 'Revisedtargetdate', 'Remarks', 'Aodid', 'AodidMeetingid', 'AodidActualcomencementdate', 'AodidActualcompltedate', 'AodidProcessOwner', 'AodidFunctionalhead', 'AodidAreaofscope', 'AodidExclusions', 'AodidReasons', 'AodidSbu', 'AodidAcnid'].forEach(function (x) { return Fields[x] = x; });
        })(ObservationpendingRow = ACN.ObservationpendingRow || (ACN.ObservationpendingRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ObservationpendingService;
        (function (ObservationpendingService) {
            ObservationpendingService.baseUrl = 'ACN/Observationpending';
            var Methods;
            (function (Methods) {
            })(Methods = ObservationpendingService.Methods || (ObservationpendingService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ObservationpendingService[x] = function (r, s, o) { return Q.serviceRequest(ObservationpendingService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ObservationpendingService.baseUrl + '/' + x;
            });
        })(ObservationpendingService = ACN.ObservationpendingService || (ACN.ObservationpendingService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ObservationpreviousauditForm = (function (_super) {
            __extends(ObservationpreviousauditForm, _super);
            function ObservationpreviousauditForm() {
                _super.apply(this, arguments);
            }
            ObservationpreviousauditForm.formKey = 'ACN.Observationpreviousaudit';
            return ObservationpreviousauditForm;
        }(Serenity.PrefixedContext));
        ACN.ObservationpreviousauditForm = ObservationpreviousauditForm;
        [['Observation', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ObservationpreviousauditForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ObservationpreviousauditRow;
        (function (ObservationpreviousauditRow) {
            ObservationpreviousauditRow.idProperty = 'ObservationpreviousauditId';
            ObservationpreviousauditRow.nameProperty = 'Observation';
            ObservationpreviousauditRow.localTextPrefix = 'ACN.Observationpreviousaudit';
            var Fields;
            (function (Fields) {
            })(Fields = ObservationpreviousauditRow.Fields || (ObservationpreviousauditRow.Fields = {}));
            ['ObservationpreviousauditId', 'MeetingId', 'Observation', 'MeetingAcnid', 'MeetingAuditscope', 'MeetingPeriod', 'MeetingTime', 'MeetingVenue', 'MeetingAuditor', 'MeetingAuditee', 'MeetingDownload', 'MeetingUserid'].forEach(function (x) { return Fields[x] = x; });
        })(ObservationpreviousauditRow = ACN.ObservationpreviousauditRow || (ACN.ObservationpreviousauditRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ObservationpreviousauditService;
        (function (ObservationpreviousauditService) {
            ObservationpreviousauditService.baseUrl = 'ACN/Observationpreviousaudit';
            var Methods;
            (function (Methods) {
            })(Methods = ObservationpreviousauditService.Methods || (ObservationpreviousauditService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ObservationpreviousauditService[x] = function (r, s, o) { return Q.serviceRequest(ObservationpreviousauditService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ObservationpreviousauditService.baseUrl + '/' + x;
            });
        })(ObservationpreviousauditService = ACN.ObservationpreviousauditService || (ACN.ObservationpreviousauditService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var PercentageForm = (function (_super) {
            __extends(PercentageForm, _super);
            function PercentageForm() {
                _super.apply(this, arguments);
            }
            PercentageForm.formKey = 'ACN.Percentage';
            return PercentageForm;
        }(Serenity.PrefixedContext));
        ACN.PercentageForm = PercentageForm;
        [['Percentageid', function () { return Serenity.IntegerEditor; }], ['Percentagename', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(PercentageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var PercentageRow;
        (function (PercentageRow) {
            PercentageRow.idProperty = 'Percentageid';
            PercentageRow.nameProperty = 'Percentagename';
            PercentageRow.localTextPrefix = 'ACN.Percentage';
            var Fields;
            (function (Fields) {
            })(Fields = PercentageRow.Fields || (PercentageRow.Fields = {}));
            ['Percentageid', 'Percentagename'].forEach(function (x) { return Fields[x] = x; });
        })(PercentageRow = ACN.PercentageRow || (ACN.PercentageRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var PercentageService;
        (function (PercentageService) {
            PercentageService.baseUrl = 'ACN/Percentage';
            var Methods;
            (function (Methods) {
            })(Methods = PercentageService.Methods || (PercentageService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PercentageService[x] = function (r, s, o) { return Q.serviceRequest(PercentageService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PercentageService.baseUrl + '/' + x;
            });
        })(PercentageService = ACN.PercentageService || (ACN.PercentageService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var QuestionsForm = (function (_super) {
            __extends(QuestionsForm, _super);
            function QuestionsForm() {
                _super.apply(this, arguments);
            }
            QuestionsForm.formKey = 'ACN.Questions';
            return QuestionsForm;
        }(Serenity.PrefixedContext));
        ACN.QuestionsForm = QuestionsForm;
        [['Questiontext', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(QuestionsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var QuestionsRow;
        (function (QuestionsRow) {
            QuestionsRow.idProperty = 'QuestionId';
            QuestionsRow.nameProperty = 'Questiontext';
            QuestionsRow.localTextPrefix = 'ACN.Questions';
            QuestionsRow.lookupKey = 'QuestionsRow';
            function getLookup() {
                return Q.getLookup('QuestionsRow');
            }
            QuestionsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = QuestionsRow.Fields || (QuestionsRow.Fields = {}));
            ['QuestionId', 'Questiontext'].forEach(function (x) { return Fields[x] = x; });
        })(QuestionsRow = ACN.QuestionsRow || (ACN.QuestionsRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var QuestionsService;
        (function (QuestionsService) {
            QuestionsService.baseUrl = 'ACN/Questions';
            var Methods;
            (function (Methods) {
            })(Methods = QuestionsService.Methods || (QuestionsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                QuestionsService[x] = function (r, s, o) { return Q.serviceRequest(QuestionsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = QuestionsService.baseUrl + '/' + x;
            });
        })(QuestionsService = ACN.QuestionsService || (ACN.QuestionsService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RiskmatrixForm = (function (_super) {
            __extends(RiskmatrixForm, _super);
            function RiskmatrixForm() {
                _super.apply(this, arguments);
            }
            RiskmatrixForm.formKey = 'ACN.Riskmatrix';
            return RiskmatrixForm;
        }(Serenity.PrefixedContext));
        ACN.RiskmatrixForm = RiskmatrixForm;
        [['Likelihood', function () { return Serenity.LookupEditor; }], ['Consequence', function () { return Serenity.LookupEditor; }], ['Value', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RiskmatrixForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RiskmatrixRow;
        (function (RiskmatrixRow) {
            RiskmatrixRow.idProperty = 'Riskmatrixid';
            RiskmatrixRow.nameProperty = 'Value';
            RiskmatrixRow.localTextPrefix = 'ACN.Riskmatrix';
            var Fields;
            (function (Fields) {
            })(Fields = RiskmatrixRow.Fields || (RiskmatrixRow.Fields = {}));
            ['Riskmatrixid', 'Likelihood', 'Consequence', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(RiskmatrixRow = ACN.RiskmatrixRow || (ACN.RiskmatrixRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RiskmatrixService;
        (function (RiskmatrixService) {
            RiskmatrixService.baseUrl = 'ACN/Riskmatrix';
            var Methods;
            (function (Methods) {
            })(Methods = RiskmatrixService.Methods || (RiskmatrixService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RiskmatrixService[x] = function (r, s, o) { return Q.serviceRequest(RiskmatrixService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RiskmatrixService.baseUrl + '/' + x;
            });
        })(RiskmatrixService = ACN.RiskmatrixService || (ACN.RiskmatrixService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RiskratingForm = (function (_super) {
            __extends(RiskratingForm, _super);
            function RiskratingForm() {
                _super.apply(this, arguments);
            }
            RiskratingForm.formKey = 'ACN.Riskrating';
            return RiskratingForm;
        }(Serenity.PrefixedContext));
        ACN.RiskratingForm = RiskratingForm;
        [['Riskratingname', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RiskratingForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RiskratingRow;
        (function (RiskratingRow) {
            RiskratingRow.idProperty = 'Riskratingid';
            RiskratingRow.nameProperty = 'Riskratingname';
            RiskratingRow.localTextPrefix = 'ACN.Riskrating';
            RiskratingRow.lookupKey = 'RiskratingRow';
            function getLookup() {
                return Q.getLookup('RiskratingRow');
            }
            RiskratingRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RiskratingRow.Fields || (RiskratingRow.Fields = {}));
            ['Riskratingid', 'Riskratingname'].forEach(function (x) { return Fields[x] = x; });
        })(RiskratingRow = ACN.RiskratingRow || (ACN.RiskratingRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RiskratingService;
        (function (RiskratingService) {
            RiskratingService.baseUrl = 'ACN/Riskrating';
            var Methods;
            (function (Methods) {
            })(Methods = RiskratingService.Methods || (RiskratingService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RiskratingService[x] = function (r, s, o) { return Q.serviceRequest(RiskratingService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RiskratingService.baseUrl + '/' + x;
            });
        })(RiskratingService = ACN.RiskratingService || (ACN.RiskratingService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RootcauseForm = (function (_super) {
            __extends(RootcauseForm, _super);
            function RootcauseForm() {
                _super.apply(this, arguments);
            }
            RootcauseForm.formKey = 'ACN.Rootcause';
            return RootcauseForm;
        }(Serenity.PrefixedContext));
        ACN.RootcauseForm = RootcauseForm;
        [['Rootcause', function () { return Serenity.StringEditor; }], ['Impact', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RootcauseForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RootcauseRow;
        (function (RootcauseRow) {
            RootcauseRow.idProperty = 'RootcauseId';
            RootcauseRow.nameProperty = 'Rootcause';
            RootcauseRow.localTextPrefix = 'ACN.Rootcause';
            RootcauseRow.lookupKey = 'ACN.RootcauseRow';
            function getLookup() {
                return Q.getLookup('ACN.RootcauseRow');
            }
            RootcauseRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RootcauseRow.Fields || (RootcauseRow.Fields = {}));
            ['RootcauseId', 'AuditobservationId', 'Rootcause', 'Impact', 'AuditobservationAcnId', 'AuditobservationObservationtitle', 'AuditobservationObservationsynopsis', 'AuditobservationDetailedobservation', 'AuditobservationCategory', 'AuditobservationRiskRating', 'AuditobservationAgreeobservation', 'AuditobservationJustification', 'AuditobservationSuggestion', 'AuditobservationAlternateplan', 'AuditobservationName', 'AuditobservationEmail', 'AuditobservationTargetdate'].forEach(function (x) { return Fields[x] = x; });
        })(RootcauseRow = ACN.RootcauseRow || (ACN.RootcauseRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RootcauseService;
        (function (RootcauseService) {
            RootcauseService.baseUrl = 'ACN/Rootcause';
            var Methods;
            (function (Methods) {
            })(Methods = RootcauseService.Methods || (RootcauseService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RootcauseService[x] = function (r, s, o) { return Q.serviceRequest(RootcauseService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RootcauseService.baseUrl + '/' + x;
            });
        })(RootcauseService = ACN.RootcauseService || (ACN.RootcauseService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SatisfactionratingForm = (function (_super) {
            __extends(SatisfactionratingForm, _super);
            function SatisfactionratingForm() {
                _super.apply(this, arguments);
            }
            SatisfactionratingForm.formKey = 'ACN.Satisfactionrating';
            return SatisfactionratingForm;
        }(Serenity.PrefixedContext));
        ACN.SatisfactionratingForm = SatisfactionratingForm;
        [['weightlabel', function () { return Serenity.StringEditor; }], ['scorelabel', function () { return Serenity.StringEditor; }], ['ratinglabel', function () { return Serenity.StringEditor; }], ['comeentslabel', function () { return Serenity.StringEditor; }], ['Documentweigtage', function () { return Serenity.StringEditor; }], ['Documentscore', function () { return Serenity.LookupEditor; }], ['Documentrating', function () { return Serenity.LookupEditor; }], ['Documentcomments', function () { return Serenity.StringEditor; }], ['Complianceweightage', function () { return Serenity.StringEditor; }], ['Compliancescore', function () { return Serenity.LookupEditor; }], ['Compliancerating', function () { return Serenity.LookupEditor; }], ['Compliancecomment', function () { return Serenity.StringEditor; }], ['Processfincontrollweightage', function () { return Serenity.StringEditor; }], ['Processfincontrollscore', function () { return Serenity.LookupEditor; }], ['Processfincontrollrating', function () { return Serenity.LookupEditor; }], ['Processfincontrollscorecmnts', function () { return Serenity.StringEditor; }], ['Responseweightage', function () { return Serenity.StringEditor; }], ['Responsescore', function () { return Serenity.LookupEditor; }], ['Responserating', function () { return Serenity.LookupEditor; }], ['Responsecmnts', function () { return Serenity.StringEditor; }], ['Preauditweightage', function () { return Serenity.StringEditor; }], ['Preauditscore', function () { return Serenity.LookupEditor; }], ['Preauditrating', function () { return Serenity.LookupEditor; }], ['Preauditcmnts', function () { return Serenity.StringEditor; }], ['Newinitiativeweight', function () { return Serenity.StringEditor; }], ['Newinitiativescore', function () { return Serenity.LookupEditor; }], ['Newinitiativerating', function () { return Serenity.LookupEditor; }], ['Newinitiativecmnts', function () { return Serenity.StringEditor; }], ['Totalscore', function () { return Serenity.StringEditor; }], ['totalscore1', function () { return Serenity.StringEditor; }], ['totalscore2', function () { return Serenity.StringEditor; }], ['totalscore3', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SatisfactionratingForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SatisfactionratingRow;
        (function (SatisfactionratingRow) {
            SatisfactionratingRow.idProperty = 'SatisfactionratingId';
            SatisfactionratingRow.nameProperty = 'Documentcomments';
            SatisfactionratingRow.localTextPrefix = 'ACN.Satisfactionrating';
            var Fields;
            (function (Fields) {
            })(Fields = SatisfactionratingRow.Fields || (SatisfactionratingRow.Fields = {}));
            ['SatisfactionratingId', 'Documentscore', 'Documentcomments', 'Compliancescore', 'Compliancecomment', 'Processfincontrollscore', 'Processfincontrollscorecmnts', 'Responsescore', 'Responsecmnts', 'Preauditscore', 'Preauditcmnts', 'Newinitiativescore', 'Totalscore', 'Aodid', 'Documentrating', 'Documentweigtage', 'Complianceweightage', 'Compliancerating', 'Processfincontrollweightage', 'Processfincontrollrating', 'Responserating', 'Responseweightage', 'Preauditweightage', 'Preauditrating', 'Newinitiativecmnts', 'Newinitiativeweight', 'Newinitiativerating', 'scorelabel', 'comeentslabel', 'ratinglabel', 'weightlabel', 'totalscore1', 'totalscore2', 'totalscore3', 'AodidMeetingid', 'AodidActualcomencementdate', 'AodidActualcompltedate', 'AodidProcessOwner', 'AodidFunctionalhead', 'AodidAreaofscope', 'AodidExclusions', 'AodidReasons', 'AodidSbu', 'AodidAcnid'].forEach(function (x) { return Fields[x] = x; });
        })(SatisfactionratingRow = ACN.SatisfactionratingRow || (ACN.SatisfactionratingRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SatisfactionratingService;
        (function (SatisfactionratingService) {
            SatisfactionratingService.baseUrl = 'ACN/Satisfactionrating';
            var Methods;
            (function (Methods) {
            })(Methods = SatisfactionratingService.Methods || (SatisfactionratingService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SatisfactionratingService[x] = function (r, s, o) { return Q.serviceRequest(SatisfactionratingService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SatisfactionratingService.baseUrl + '/' + x;
            });
        })(SatisfactionratingService = ACN.SatisfactionratingService || (ACN.SatisfactionratingService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SbuForm = (function (_super) {
            __extends(SbuForm, _super);
            function SbuForm() {
                _super.apply(this, arguments);
            }
            SbuForm.formKey = 'ACN.Sbu';
            return SbuForm;
        }(Serenity.PrefixedContext));
        ACN.SbuForm = SbuForm;
        [['Sbuid', function () { return Serenity.IntegerEditor; }], ['Sbuname', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SbuForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SbuRow;
        (function (SbuRow) {
            SbuRow.idProperty = 'Sbuid';
            SbuRow.nameProperty = 'Sbuname';
            SbuRow.localTextPrefix = 'ACN.Sbu';
            var Fields;
            (function (Fields) {
            })(Fields = SbuRow.Fields || (SbuRow.Fields = {}));
            ['Sbuid', 'Sbuname'].forEach(function (x) { return Fields[x] = x; });
        })(SbuRow = ACN.SbuRow || (ACN.SbuRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SbuService;
        (function (SbuService) {
            SbuService.baseUrl = 'ACN/Sbu';
            var Methods;
            (function (Methods) {
            })(Methods = SbuService.Methods || (SbuService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SbuService[x] = function (r, s, o) { return Q.serviceRequest(SbuService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SbuService.baseUrl + '/' + x;
            });
        })(SbuService = ACN.SbuService || (ACN.SbuService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ScopeForm = (function (_super) {
            __extends(ScopeForm, _super);
            function ScopeForm() {
                _super.apply(this, arguments);
            }
            ScopeForm.formKey = 'ACN.Scope';
            return ScopeForm;
        }(Serenity.PrefixedContext));
        ACN.ScopeForm = ScopeForm;
        [['Title', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ScopeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ScopeRow;
        (function (ScopeRow) {
            ScopeRow.idProperty = 'ScopeId';
            ScopeRow.nameProperty = 'Title';
            ScopeRow.localTextPrefix = 'ACN.Scope';
            var Fields;
            (function (Fields) {
            })(Fields = ScopeRow.Fields || (ScopeRow.Fields = {}));
            ['ScopeId', 'Title', 'AcnId', 'AcnAcnTilte', 'AcnPhaseNo', 'AcnLocation', 'AcnFromdate', 'AcnTodate', 'AcnPeriodfrom', 'AcnPeriodto', 'AcnCreationdate'].forEach(function (x) { return Fields[x] = x; });
        })(ScopeRow = ACN.ScopeRow || (ACN.ScopeRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ScopeService;
        (function (ScopeService) {
            ScopeService.baseUrl = 'ACN/Scope';
            var Methods;
            (function (Methods) {
            })(Methods = ScopeService.Methods || (ScopeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ScopeService[x] = function (r, s, o) { return Q.serviceRequest(ScopeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ScopeService.baseUrl + '/' + x;
            });
        })(ScopeService = ACN.ScopeService || (ACN.ScopeService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SuggestionForm = (function (_super) {
            __extends(SuggestionForm, _super);
            function SuggestionForm() {
                _super.apply(this, arguments);
            }
            SuggestionForm.formKey = 'ACN.Suggestion';
            return SuggestionForm;
        }(Serenity.PrefixedContext));
        ACN.SuggestionForm = SuggestionForm;
        [['Suggestion', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SuggestionForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SuggestionRow;
        (function (SuggestionRow) {
            SuggestionRow.idProperty = 'SuggestionId';
            SuggestionRow.nameProperty = 'Suggestion';
            SuggestionRow.localTextPrefix = 'ACN.Suggestion';
            SuggestionRow.lookupKey = 'ACN.SuggestionRow';
            function getLookup() {
                return Q.getLookup('ACN.SuggestionRow');
            }
            SuggestionRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SuggestionRow.Fields || (SuggestionRow.Fields = {}));
            ['SuggestionId', 'AuditobservationId', 'Suggestion', 'AuditobservationAcnId', 'AuditobservationObservationtitle', 'AuditobservationObservationsynopsis', 'AuditobservationDetailedobservation', 'AuditobservationCategory', 'AuditobservationRiskRating', 'AuditobservationAgreeobservation', 'AuditobservationJustification', 'AuditobservationSuggestion', 'AuditobservationAlternateplan', 'AuditobservationName', 'AuditobservationEmail', 'AuditobservationTargetdate'].forEach(function (x) { return Fields[x] = x; });
        })(SuggestionRow = ACN.SuggestionRow || (ACN.SuggestionRow = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SuggestionService;
        (function (SuggestionService) {
            SuggestionService.baseUrl = 'ACN/Suggestion';
            var Methods;
            (function (Methods) {
            })(Methods = SuggestionService.Methods || (SuggestionService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SuggestionService[x] = function (r, s, o) { return Q.serviceRequest(SuggestionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SuggestionService.baseUrl + '/' + x;
            });
        })(SuggestionService = ACN.SuggestionService || (ACN.SuggestionService = {}));
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var AcnMasterForm = (function (_super) {
            __extends(AcnMasterForm, _super);
            function AcnMasterForm() {
                _super.apply(this, arguments);
            }
            AcnMasterForm.formKey = 'Administration.AcnMaster';
            return AcnMasterForm;
        }(Serenity.PrefixedContext));
        Administration.AcnMasterForm = AcnMasterForm;
        [['AcnId', function () { return Serenity.IntegerEditor; }], ['AcnTilte', function () { return Serenity.StringEditor; }], ['PhaseNo', function () { return Serenity.IntegerEditor; }], ['Location', function () { return Serenity.StringEditor; }], ['Fromdate', function () { return Serenity.StringEditor; }], ['Todate', function () { return Serenity.StringEditor; }], ['Periodfrom', function () { return Serenity.StringEditor; }], ['Periodto', function () { return Serenity.StringEditor; }], ['Creationdate', function () { return Serenity.StringEditor; }], ['Userid', function () { return Serenity.IntegerEditor; }], ['Preview', function () { return Serenity.StringEditor; }], ['Send', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(AcnMasterForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var AcnMasterRow;
        (function (AcnMasterRow) {
            AcnMasterRow.idProperty = 'AcnId';
            AcnMasterRow.nameProperty = 'AcnTilte';
            AcnMasterRow.localTextPrefix = 'Administration.AcnMaster';
            var Fields;
            (function (Fields) {
            })(Fields = AcnMasterRow.Fields || (AcnMasterRow.Fields = {}));
            ['AcnId', 'AcnTilte', 'PhaseNo', 'Location', 'Fromdate', 'Todate', 'Periodfrom', 'Periodto', 'Creationdate', 'Userid', 'Preview', 'Send', 'UseridUsername', 'UseridDisplayName', 'UseridEmail', 'UseridSource', 'UseridPasswordHash', 'UseridPasswordSalt', 'UseridInsertDate', 'UseridInsertUserId', 'UseridUpdateDate', 'UseridUpdateUserId', 'UseridIsActive', 'UseridLastDirectoryUpdate', 'UseridRoleId'].forEach(function (x) { return Fields[x] = x; });
        })(AcnMasterRow = Administration.AcnMasterRow || (Administration.AcnMasterRow = {}));
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var AcnMasterService;
        (function (AcnMasterService) {
            AcnMasterService.baseUrl = 'Administration/AcnMaster';
            var Methods;
            (function (Methods) {
            })(Methods = AcnMasterService.Methods || (AcnMasterService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AcnMasterService[x] = function (r, s, o) { return Q.serviceRequest(AcnMasterService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AcnMasterService.baseUrl + '/' + x;
            });
        })(AcnMasterService = Administration.AcnMasterService || (Administration.AcnMasterService = {}));
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var LanguageForm = (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                _super.apply(this, arguments);
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            ['Id', 'LanguageId', 'LanguageName'].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LanguageService[x] = function (r, s, o) { return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var MasterAcnForm = (function (_super) {
            __extends(MasterAcnForm, _super);
            function MasterAcnForm() {
                _super.apply(this, arguments);
            }
            MasterAcnForm.formKey = 'Administration.MasterAcn';
            return MasterAcnForm;
        }(Serenity.PrefixedContext));
        Administration.MasterAcnForm = MasterAcnForm;
        [['Title', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(MasterAcnForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var MasterAcnRow;
        (function (MasterAcnRow) {
            MasterAcnRow.idProperty = 'Id';
            MasterAcnRow.nameProperty = 'Title';
            MasterAcnRow.localTextPrefix = 'Administration.MasterAcn';
            var Fields;
            (function (Fields) {
            })(Fields = MasterAcnRow.Fields || (MasterAcnRow.Fields = {}));
            ['Id', 'Title'].forEach(function (x) { return Fields[x] = x; });
        })(MasterAcnRow = Administration.MasterAcnRow || (Administration.MasterAcnRow = {}));
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var MasterAcnService;
        (function (MasterAcnService) {
            MasterAcnService.baseUrl = 'Administration/MasterAcn';
            var Methods;
            (function (Methods) {
            })(Methods = MasterAcnService.Methods || (MasterAcnService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MasterAcnService[x] = function (r, s, o) { return Q.serviceRequest(MasterAcnService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MasterAcnService.baseUrl + '/' + x;
            });
        })(MasterAcnService = Administration.MasterAcnService || (Administration.MasterAcnService = {}));
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var RoleForm = (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                _super.apply(this, arguments);
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            ['RolePermissionId', 'RoleId', 'PermissionKey', 'RoleRoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) { return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            ['RoleId', 'RoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RoleService[x] = function (r, s, o) { return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            ['List', 'Update'].forEach(function (x) {
                TranslationService[x] = function (r, s, o) { return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var UserForm = (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                _super.apply(this, arguments);
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }], ['RoleId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            ['UserPermissionId', 'UserId', 'PermissionKey', 'Granted', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            ['Update', 'List', 'ListRolePermissions', 'ListPermissionKeys'].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) { return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.lookupKey = 'UserRoleRow';
            function getLookup() {
                return Q.getLookup('UserRoleRow');
            }
            UserRoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            ['UserRoleId', 'UserId', 'RoleId', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) { return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'UserRow';
            function getLookup() {
                return Q.getLookup('UserRow');
            }
            UserRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            ['UserId', 'Username', 'Source', 'PasswordHash', 'PasswordSalt', 'DisplayName', 'Email', 'LastDirectoryUpdate', 'IsActive', 'Password', 'PasswordConfirm', 'RoleId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Undelete', 'Retrieve', 'List'].forEach(function (x) {
                UserService[x] = function (r, s, o) { return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Adminstration;
    (function (Adminstration) {
        var AcnMasterForm = (function (_super) {
            __extends(AcnMasterForm, _super);
            function AcnMasterForm() {
                _super.apply(this, arguments);
            }
            AcnMasterForm.formKey = 'Adminstration.AcnMaster';
            return AcnMasterForm;
        }(Serenity.PrefixedContext));
        Adminstration.AcnMasterForm = AcnMasterForm;
        [['AcnId', function () { return Serenity.IntegerEditor; }], ['AcnTilte', function () { return Serenity.StringEditor; }], ['PhaseNo', function () { return Serenity.IntegerEditor; }], ['Location', function () { return Serenity.StringEditor; }], ['Fromdate', function () { return Serenity.StringEditor; }], ['Todate', function () { return Serenity.StringEditor; }], ['Periodfrom', function () { return Serenity.StringEditor; }], ['Periodto', function () { return Serenity.StringEditor; }], ['Creationdate', function () { return Serenity.StringEditor; }], ['Userid', function () { return Serenity.IntegerEditor; }], ['Preview', function () { return Serenity.StringEditor; }], ['Send', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(AcnMasterForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Adminstration = coromendal.Adminstration || (coromendal.Adminstration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Adminstration;
    (function (Adminstration) {
        var AcnMasterRow;
        (function (AcnMasterRow) {
            AcnMasterRow.idProperty = 'AcnId';
            AcnMasterRow.nameProperty = 'AcnTilte';
            AcnMasterRow.localTextPrefix = 'Adminstration.AcnMaster';
            var Fields;
            (function (Fields) {
            })(Fields = AcnMasterRow.Fields || (AcnMasterRow.Fields = {}));
            ['AcnId', 'AcnTilte', 'PhaseNo', 'Location', 'Fromdate', 'Todate', 'Periodfrom', 'Periodto', 'Creationdate', 'Userid', 'Preview', 'Send', 'UseridUsername', 'UseridDisplayName', 'UseridEmail', 'UseridSource', 'UseridPasswordHash', 'UseridPasswordSalt', 'UseridInsertDate', 'UseridInsertUserId', 'UseridUpdateDate', 'UseridUpdateUserId', 'UseridIsActive', 'UseridLastDirectoryUpdate', 'UseridRoleId'].forEach(function (x) { return Fields[x] = x; });
        })(AcnMasterRow = Adminstration.AcnMasterRow || (Adminstration.AcnMasterRow = {}));
    })(Adminstration = coromendal.Adminstration || (coromendal.Adminstration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Adminstration;
    (function (Adminstration) {
        var AcnMasterService;
        (function (AcnMasterService) {
            AcnMasterService.baseUrl = 'Adminstration/AcnMaster';
            var Methods;
            (function (Methods) {
            })(Methods = AcnMasterService.Methods || (AcnMasterService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AcnMasterService[x] = function (r, s, o) { return Q.serviceRequest(AcnMasterService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AcnMasterService.baseUrl + '/' + x;
            });
        })(AcnMasterService = Adminstration.AcnMasterService || (Adminstration.AcnMasterService = {}));
    })(Adminstration = coromendal.Adminstration || (coromendal.Adminstration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var BasicSamplesService;
        (function (BasicSamplesService) {
            BasicSamplesService.baseUrl = 'BasicSamples/BasicSamples';
            var Methods;
            (function (Methods) {
            })(Methods = BasicSamplesService.Methods || (BasicSamplesService.Methods = {}));
            ['OrdersByShipper', 'OrderBulkAction'].forEach(function (x) {
                BasicSamplesService[x] = function (r, s, o) { return Q.serviceRequest(BasicSamplesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BasicSamplesService.baseUrl + '/' + x;
            });
        })(BasicSamplesService = BasicSamples.BasicSamplesService || (BasicSamples.BasicSamplesService = {}));
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var FilteredLookupInDetailForm = (function (_super) {
            __extends(FilteredLookupInDetailForm, _super);
            function FilteredLookupInDetailForm() {
                _super.apply(this, arguments);
            }
            FilteredLookupInDetailForm.formKey = 'BasicSamples.FilteredLookupInDetail';
            return FilteredLookupInDetailForm;
        }(Serenity.PrefixedContext));
        BasicSamples.FilteredLookupInDetailForm = FilteredLookupInDetailForm;
        [['CustomerID', function () { return coromendal.Northwind.CustomerEditor; }], ['OrderDate', function () { return Serenity.DateEditor; }], ['CategoryID', function () { return Serenity.LookupEditor; }], ['DetailList', function () { return BasicSamples.FilteredLookupDetailEditor; }]].forEach(function (x) { return Object.defineProperty(FilteredLookupInDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var LookupFilterByMultipleForm = (function (_super) {
            __extends(LookupFilterByMultipleForm, _super);
            function LookupFilterByMultipleForm() {
                _super.apply(this, arguments);
            }
            LookupFilterByMultipleForm.formKey = 'BasicSamples.LookupFilterByMultiple';
            return LookupFilterByMultipleForm;
        }(Serenity.PrefixedContext));
        BasicSamples.LookupFilterByMultipleForm = LookupFilterByMultipleForm;
        [['ProductName', function () { return Serenity.StringEditor; }], ['ProductImage', function () { return Serenity.ImageUploadEditor; }], ['Discontinued', function () { return Serenity.BooleanEditor; }], ['SupplierID', function () { return Serenity.LookupEditor; }], ['CategoryID', function () { return BasicSamples.ProduceSeafoodCategoryEditor; }], ['QuantityPerUnit', function () { return Serenity.StringEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['UnitsInStock', function () { return Serenity.IntegerEditor; }], ['UnitsOnOrder', function () { return Serenity.IntegerEditor; }], ['ReorderLevel', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(LookupFilterByMultipleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var PopulateLinkedDataForm = (function (_super) {
            __extends(PopulateLinkedDataForm, _super);
            function PopulateLinkedDataForm() {
                _super.apply(this, arguments);
            }
            PopulateLinkedDataForm.formKey = 'BasicSamples.PopulateLinkedData';
            return PopulateLinkedDataForm;
        }(Serenity.PrefixedContext));
        BasicSamples.PopulateLinkedDataForm = PopulateLinkedDataForm;
        [['CustomerID', function () { return coromendal.Northwind.CustomerEditor; }], ['CustomerContactName', function () { return Serenity.StringEditor; }], ['CustomerContactTitle', function () { return Serenity.StringEditor; }], ['CustomerCity', function () { return Serenity.StringEditor; }], ['CustomerRegion', function () { return Serenity.StringEditor; }], ['CustomerCountry', function () { return Serenity.StringEditor; }], ['CustomerPhone', function () { return Serenity.StringEditor; }], ['CustomerFax', function () { return Serenity.StringEditor; }], ['OrderDate', function () { return Serenity.DateEditor; }], ['RequiredDate', function () { return Serenity.DateEditor; }], ['EmployeeID', function () { return Serenity.LookupEditor; }], ['DetailList', function () { return coromendal.Northwind.OrderDetailsEditor; }]].forEach(function (x) { return Object.defineProperty(PopulateLinkedDataForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportForm = (function (_super) {
            __extends(ProductExcelImportForm, _super);
            function ProductExcelImportForm() {
                _super.apply(this, arguments);
            }
            ProductExcelImportForm.formKey = 'BasicSamples.ProductExcelImport';
            return ProductExcelImportForm;
        }(Serenity.PrefixedContext));
        BasicSamples.ProductExcelImportForm = ProductExcelImportForm;
        [['FileName', function () { return Serenity.ImageUploadEditor; }]].forEach(function (x) { return Object.defineProperty(ProductExcelImportForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportService;
        (function (ProductExcelImportService) {
            ProductExcelImportService.baseUrl = 'BasicSamples/ProductExcelImport';
            var Methods;
            (function (Methods) {
            })(Methods = ProductExcelImportService.Methods || (ProductExcelImportService.Methods = {}));
            ['ExcelImport'].forEach(function (x) {
                ProductExcelImportService[x] = function (r, s, o) { return Q.serviceRequest(ProductExcelImportService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductExcelImportService.baseUrl + '/' + x;
            });
        })(ProductExcelImportService = BasicSamples.ProductExcelImportService || (BasicSamples.ProductExcelImportService = {}));
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var VSGalleryQAService;
        (function (VSGalleryQAService) {
            VSGalleryQAService.baseUrl = 'BasicSamples/VSGalleryQA';
            var Methods;
            (function (Methods) {
            })(Methods = VSGalleryQAService.Methods || (VSGalleryQAService.Methods = {}));
            ['List'].forEach(function (x) {
                VSGalleryQAService[x] = function (r, s, o) { return Q.serviceRequest(VSGalleryQAService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = VSGalleryQAService.baseUrl + '/' + x;
            });
        })(VSGalleryQAService = BasicSamples.VSGalleryQAService || (BasicSamples.VSGalleryQAService = {}));
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            ['UserPreferenceId', 'UserId', 'PreferenceType', 'Name', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = coromendal.Common || (coromendal.Common = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            ['Update', 'Retrieve'].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) { return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = coromendal.Common || (coromendal.Common = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var MasterAcn;
    (function (MasterAcn) {
        var MasterAcnForm = (function (_super) {
            __extends(MasterAcnForm, _super);
            function MasterAcnForm() {
                _super.apply(this, arguments);
            }
            MasterAcnForm.formKey = 'MasterAcn.MasterAcn';
            return MasterAcnForm;
        }(Serenity.PrefixedContext));
        MasterAcn.MasterAcnForm = MasterAcnForm;
        [['Title', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(MasterAcnForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MasterAcn = coromendal.MasterAcn || (coromendal.MasterAcn = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var MasterAcn;
    (function (MasterAcn) {
        var MasterAcnRow;
        (function (MasterAcnRow) {
            MasterAcnRow.idProperty = 'Id';
            MasterAcnRow.nameProperty = 'Title';
            MasterAcnRow.localTextPrefix = 'MasterAcn.MasterAcn';
            var Fields;
            (function (Fields) {
            })(Fields = MasterAcnRow.Fields || (MasterAcnRow.Fields = {}));
            ['Id', 'Title'].forEach(function (x) { return Fields[x] = x; });
        })(MasterAcnRow = MasterAcn.MasterAcnRow || (MasterAcn.MasterAcnRow = {}));
    })(MasterAcn = coromendal.MasterAcn || (coromendal.MasterAcn = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var MasterAcn;
    (function (MasterAcn) {
        var MasterAcnService;
        (function (MasterAcnService) {
            MasterAcnService.baseUrl = 'MasterAcn/MasterAcn';
            var Methods;
            (function (Methods) {
            })(Methods = MasterAcnService.Methods || (MasterAcnService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MasterAcnService[x] = function (r, s, o) { return Q.serviceRequest(MasterAcnService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MasterAcnService.baseUrl + '/' + x;
            });
        })(MasterAcnService = MasterAcn.MasterAcnService || (MasterAcn.MasterAcnService = {}));
    })(MasterAcn = coromendal.MasterAcn || (coromendal.MasterAcn = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                _super.apply(this, arguments);
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = coromendal.Membership || (coromendal.Membership = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                _super.apply(this, arguments);
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = coromendal.Membership || (coromendal.Membership = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Membership;
    (function (Membership) {
        var LoginForm = (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                _super.apply(this, arguments);
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = coromendal.Membership || (coromendal.Membership = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                _super.apply(this, arguments);
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = coromendal.Membership || (coromendal.Membership = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Membership;
    (function (Membership) {
        var SignUpForm = (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                _super.apply(this, arguments);
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = coromendal.Membership || (coromendal.Membership = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CategoryForm = (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm() {
                _super.apply(this, arguments);
            }
            CategoryForm.formKey = 'Northwind.Category';
            return CategoryForm;
        }(Serenity.PrefixedContext));
        Northwind.CategoryForm = CategoryForm;
        [['CategoryName', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(CategoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangRow;
        (function (CategoryLangRow) {
            CategoryLangRow.idProperty = 'Id';
            CategoryLangRow.nameProperty = 'CategoryName';
            CategoryLangRow.localTextPrefix = 'Northwind.CategoryLang';
            var Fields;
            (function (Fields) {
            })(Fields = CategoryLangRow.Fields || (CategoryLangRow.Fields = {}));
            ['Id', 'CategoryId', 'LanguageId', 'CategoryName', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(CategoryLangRow = Northwind.CategoryLangRow || (Northwind.CategoryLangRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangService;
        (function (CategoryLangService) {
            CategoryLangService.baseUrl = 'Northwind/CategoryLang';
            var Methods;
            (function (Methods) {
            })(Methods = CategoryLangService.Methods || (CategoryLangService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CategoryLangService[x] = function (r, s, o) { return Q.serviceRequest(CategoryLangService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CategoryLangService.baseUrl + '/' + x;
            });
        })(CategoryLangService = Northwind.CategoryLangService || (Northwind.CategoryLangService = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'CategoryID';
            CategoryRow.nameProperty = 'CategoryName';
            CategoryRow.localTextPrefix = 'Northwind.Category';
            CategoryRow.lookupKey = 'Northwind.Category';
            function getLookup() {
                return Q.getLookup('Northwind.Category');
            }
            CategoryRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CategoryRow.Fields || (CategoryRow.Fields = {}));
            ['CategoryID', 'CategoryName', 'Description', 'Picture'].forEach(function (x) { return Fields[x] = x; });
        })(CategoryRow = Northwind.CategoryRow || (Northwind.CategoryRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'Northwind/Category';
            var Methods;
            (function (Methods) {
            })(Methods = CategoryService.Methods || (CategoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'RetrieveLocalization', 'Retrieve', 'List'].forEach(function (x) {
                CategoryService[x] = function (r, s, o) { return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CategoryService.baseUrl + '/' + x;
            });
        })(CategoryService = Northwind.CategoryService || (Northwind.CategoryService = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CustomerCustomerDemoRow;
        (function (CustomerCustomerDemoRow) {
            CustomerCustomerDemoRow.idProperty = 'ID';
            CustomerCustomerDemoRow.nameProperty = 'CustomerID';
            CustomerCustomerDemoRow.localTextPrefix = 'Northwind.CustomerCustomerDemo';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerCustomerDemoRow.Fields || (CustomerCustomerDemoRow.Fields = {}));
            ['ID', 'CustomerID', 'CustomerTypeID', 'CustomerCompanyName', 'CustomerContactName', 'CustomerContactTitle', 'CustomerAddress', 'CustomerCity', 'CustomerRegion', 'CustomerPostalCode', 'CustomerCountry', 'CustomerPhone', 'CustomerFax', 'CustomerTypeCustomerDesc'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerCustomerDemoRow = Northwind.CustomerCustomerDemoRow || (Northwind.CustomerCustomerDemoRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CustomerDemographicRow;
        (function (CustomerDemographicRow) {
            CustomerDemographicRow.idProperty = 'ID';
            CustomerDemographicRow.nameProperty = 'CustomerTypeID';
            CustomerDemographicRow.localTextPrefix = 'Northwind.CustomerDemographic';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerDemographicRow.Fields || (CustomerDemographicRow.Fields = {}));
            ['ID', 'CustomerTypeID', 'CustomerDesc'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerDemographicRow = Northwind.CustomerDemographicRow || (Northwind.CustomerDemographicRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CustomerForm = (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm() {
                _super.apply(this, arguments);
            }
            CustomerForm.formKey = 'Northwind.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Northwind.CustomerForm = CustomerForm;
        [['CustomerID', function () { return Serenity.StringEditor; }], ['CompanyName', function () { return Serenity.StringEditor; }], ['ContactName', function () { return Serenity.StringEditor; }], ['ContactTitle', function () { return Serenity.StringEditor; }], ['Representatives', function () { return Serenity.LookupEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['City', function () { return Serenity.StringEditor; }], ['Region', function () { return Serenity.StringEditor; }], ['PostalCode', function () { return Serenity.StringEditor; }], ['Country', function () { return Serenity.StringEditor; }], ['Phone', function () { return Serenity.StringEditor; }], ['Fax', function () { return Serenity.StringEditor; }], ['NoteList', function () { return Northwind.NotesEditor; }]].forEach(function (x) { return Object.defineProperty(CustomerForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CustomerRepresentativesRow;
        (function (CustomerRepresentativesRow) {
            CustomerRepresentativesRow.idProperty = 'RepresentativeId';
            CustomerRepresentativesRow.localTextPrefix = 'CustomerRepresentatives';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRepresentativesRow.Fields || (CustomerRepresentativesRow.Fields = {}));
            ['RepresentativeId', 'CustomerId', 'EmployeeId'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerRepresentativesRow = Northwind.CustomerRepresentativesRow || (Northwind.CustomerRepresentativesRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'ID';
            CustomerRow.nameProperty = 'CompanyName';
            CustomerRow.localTextPrefix = 'Northwind.Customer';
            CustomerRow.lookupKey = 'Northwind.Customer';
            function getLookup() {
                return Q.getLookup('Northwind.Customer');
            }
            CustomerRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRow.Fields || (CustomerRow.Fields = {}));
            ['ID', 'CustomerID', 'CompanyName', 'ContactName', 'ContactTitle', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone', 'Fax', 'NoteList', 'Representatives'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerRow = Northwind.CustomerRow || (Northwind.CustomerRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Northwind/Customer';
            var Methods;
            (function (Methods) {
            })(Methods = CustomerService.Methods || (CustomerService.Methods = {}));
            ['Create', 'Update', 'Delete', 'GetNextNumber', 'Retrieve', 'List'].forEach(function (x) {
                CustomerService[x] = function (r, s, o) { return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CustomerService.baseUrl + '/' + x;
            });
        })(CustomerService = Northwind.CustomerService || (Northwind.CustomerService = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'EmployeeID';
            EmployeeRow.nameProperty = 'FullName';
            EmployeeRow.localTextPrefix = 'Northwind.Employee';
            EmployeeRow.lookupKey = 'Northwind.Employee';
            function getLookup() {
                return Q.getLookup('Northwind.Employee');
            }
            EmployeeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeRow.Fields || (EmployeeRow.Fields = {}));
            ['EmployeeID', 'LastName', 'FirstName', 'FullName', 'Title', 'TitleOfCourtesy', 'BirthDate', 'HireDate', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'HomePhone', 'Extension', 'Photo', 'Notes', 'ReportsTo', 'PhotoPath', 'ReportsToFullName', 'ReportsToLastName', 'ReportsToFirstName', 'ReportsToTitle', 'ReportsToTitleOfCourtesy', 'ReportsToBirthDate', 'ReportsToHireDate', 'ReportsToAddress', 'ReportsToCity', 'ReportsToRegion', 'ReportsToPostalCode', 'ReportsToCountry', 'ReportsToHomePhone', 'ReportsToExtension', 'ReportsToPhoto', 'ReportsToNotes', 'ReportsToReportsTo', 'ReportsToPhotoPath', 'Gender'].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeRow = Northwind.EmployeeRow || (Northwind.EmployeeRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var EmployeeTerritoryRow;
        (function (EmployeeTerritoryRow) {
            EmployeeTerritoryRow.idProperty = 'EmployeeID';
            EmployeeTerritoryRow.nameProperty = 'TerritoryID';
            EmployeeTerritoryRow.localTextPrefix = 'Northwind.EmployeeTerritory';
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeTerritoryRow.Fields || (EmployeeTerritoryRow.Fields = {}));
            ['EmployeeID', 'TerritoryID', 'EmployeeLastName', 'EmployeeFirstName', 'EmployeeTitle', 'EmployeeTitleOfCourtesy', 'EmployeeBirthDate', 'EmployeeHireDate', 'EmployeeAddress', 'EmployeeCity', 'EmployeeRegion', 'EmployeePostalCode', 'EmployeeCountry', 'EmployeeHomePhone', 'EmployeeExtension', 'EmployeePhoto', 'EmployeeNotes', 'EmployeeReportsTo', 'EmployeePhotoPath', 'TerritoryTerritoryDescription', 'TerritoryRegionID'].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeTerritoryRow = Northwind.EmployeeTerritoryRow || (Northwind.EmployeeTerritoryRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Northwind.Gender || (Northwind.Gender = {}));
        var Gender = Northwind.Gender;
        Serenity.Decorators.registerEnum(Gender, 'coromendal.Northwind.Entities.Gender');
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'Northwind.Note';
            var Fields;
            (function (Fields) {
            })(Fields = NoteRow.Fields || (NoteRow.Fields = {}));
            ['NoteId', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertDate', 'InsertUserDisplayName'].forEach(function (x) { return Fields[x] = x; });
        })(NoteRow = Northwind.NoteRow || (Northwind.NoteRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailForm = (function (_super) {
            __extends(OrderDetailForm, _super);
            function OrderDetailForm() {
                _super.apply(this, arguments);
            }
            OrderDetailForm.formKey = 'Northwind.OrderDetail';
            return OrderDetailForm;
        }(Serenity.PrefixedContext));
        Northwind.OrderDetailForm = OrderDetailForm;
        [['ProductID', function () { return Serenity.LookupEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['Quantity', function () { return Serenity.IntegerEditor; }], ['Discount', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(OrderDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailRow;
        (function (OrderDetailRow) {
            OrderDetailRow.idProperty = 'DetailID';
            OrderDetailRow.localTextPrefix = 'Northwind.OrderDetail';
            var Fields;
            (function (Fields) {
            })(Fields = OrderDetailRow.Fields || (OrderDetailRow.Fields = {}));
            ['DetailID', 'OrderID', 'ProductID', 'UnitPrice', 'Quantity', 'Discount', 'OrderCustomerID', 'OrderEmployeeID', 'OrderDate', 'OrderShippedDate', 'OrderShipVia', 'OrderShipCity', 'OrderShipCountry', 'ProductName', 'ProductDiscontinued', 'ProductSupplierID', 'ProductQuantityPerUnit', 'ProductUnitPrice', 'LineTotal'].forEach(function (x) { return Fields[x] = x; });
        })(OrderDetailRow = Northwind.OrderDetailRow || (Northwind.OrderDetailRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailService;
        (function (OrderDetailService) {
            OrderDetailService.baseUrl = 'Northwind/OrderDetail';
            var Methods;
            (function (Methods) {
            })(Methods = OrderDetailService.Methods || (OrderDetailService.Methods = {}));
            ['Retrieve', 'List'].forEach(function (x) {
                OrderDetailService[x] = function (r, s, o) { return Q.serviceRequest(OrderDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OrderDetailService.baseUrl + '/' + x;
            });
        })(OrderDetailService = Northwind.OrderDetailService || (Northwind.OrderDetailService = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var OrderForm = (function (_super) {
            __extends(OrderForm, _super);
            function OrderForm() {
                _super.apply(this, arguments);
            }
            OrderForm.formKey = 'Northwind.Order';
            return OrderForm;
        }(Serenity.PrefixedContext));
        Northwind.OrderForm = OrderForm;
        [['CustomerID', function () { return Northwind.CustomerEditor; }], ['OrderDate', function () { return Serenity.DateEditor; }], ['RequiredDate', function () { return Serenity.DateEditor; }], ['EmployeeID', function () { return Serenity.LookupEditor; }], ['DetailList', function () { return Northwind.OrderDetailsEditor; }], ['ShippedDate', function () { return Serenity.DateEditor; }], ['ShipVia', function () { return Serenity.LookupEditor; }], ['Freight', function () { return Serenity.DecimalEditor; }], ['ShipName', function () { return Serenity.StringEditor; }], ['ShipAddress', function () { return Serenity.StringEditor; }], ['ShipCity', function () { return Serenity.StringEditor; }], ['ShipRegion', function () { return Serenity.StringEditor; }], ['ShipPostalCode', function () { return Serenity.StringEditor; }], ['ShipCountry', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(OrderForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var OrderRow;
        (function (OrderRow) {
            OrderRow.idProperty = 'OrderID';
            OrderRow.nameProperty = 'CustomerID';
            OrderRow.localTextPrefix = 'Northwind.Order';
            OrderRow.lookupKey = 'Northwind.OrderShipCity';
            function getLookup() {
                return Q.getLookup('Northwind.OrderShipCity');
            }
            OrderRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = OrderRow.Fields || (OrderRow.Fields = {}));
            ['OrderID', 'CustomerID', 'EmployeeID', 'OrderDate', 'RequiredDate', 'ShippedDate', 'ShipVia', 'Freight', 'ShipName', 'ShipAddress', 'ShipCity', 'ShipRegion', 'ShipPostalCode', 'ShipCountry', 'CustomerCompanyName', 'CustomerContactName', 'CustomerContactTitle', 'CustomerCity', 'CustomerRegion', 'CustomerCountry', 'CustomerPhone', 'CustomerFax', 'EmployeeFullName', 'EmployeeGender', 'ShipViaCompanyName', 'ShipViaPhone', 'ShippingState', 'DetailList'].forEach(function (x) { return Fields[x] = x; });
        })(OrderRow = Northwind.OrderRow || (Northwind.OrderRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var OrderService;
        (function (OrderService) {
            OrderService.baseUrl = 'Northwind/Order';
            var Methods;
            (function (Methods) {
            })(Methods = OrderService.Methods || (OrderService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                OrderService[x] = function (r, s, o) { return Q.serviceRequest(OrderService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OrderService.baseUrl + '/' + x;
            });
        })(OrderService = Northwind.OrderService || (Northwind.OrderService = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        (function (OrderShippingState) {
            OrderShippingState[OrderShippingState["NotShipped"] = 0] = "NotShipped";
            OrderShippingState[OrderShippingState["Shipped"] = 1] = "Shipped";
        })(Northwind.OrderShippingState || (Northwind.OrderShippingState = {}));
        var OrderShippingState = Northwind.OrderShippingState;
        Serenity.Decorators.registerEnum(OrderShippingState, 'Northwind.OrderShippingState');
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var ProductForm = (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm() {
                _super.apply(this, arguments);
            }
            ProductForm.formKey = 'Northwind.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        Northwind.ProductForm = ProductForm;
        [['ProductName', function () { return Serenity.StringEditor; }], ['ProductImage', function () { return Serenity.ImageUploadEditor; }], ['Discontinued', function () { return Serenity.BooleanEditor; }], ['SupplierID', function () { return Serenity.LookupEditor; }], ['CategoryID', function () { return Serenity.LookupEditor; }], ['QuantityPerUnit', function () { return Serenity.StringEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['UnitsInStock', function () { return Serenity.IntegerEditor; }], ['UnitsOnOrder', function () { return Serenity.IntegerEditor; }], ['ReorderLevel', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ProductForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var ProductLangRow;
        (function (ProductLangRow) {
            ProductLangRow.idProperty = 'Id';
            ProductLangRow.nameProperty = 'ProductName';
            ProductLangRow.localTextPrefix = 'Northwind.ProductLang';
            var Fields;
            (function (Fields) {
            })(Fields = ProductLangRow.Fields || (ProductLangRow.Fields = {}));
            ['Id', 'ProductId', 'LanguageId', 'ProductName'].forEach(function (x) { return Fields[x] = x; });
        })(ProductLangRow = Northwind.ProductLangRow || (Northwind.ProductLangRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var ProductLangService;
        (function (ProductLangService) {
            ProductLangService.baseUrl = 'Northwind/ProductLang';
            var Methods;
            (function (Methods) {
            })(Methods = ProductLangService.Methods || (ProductLangService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductLangService[x] = function (r, s, o) { return Q.serviceRequest(ProductLangService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductLangService.baseUrl + '/' + x;
            });
        })(ProductLangService = Northwind.ProductLangService || (Northwind.ProductLangService = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var ProductLogRow;
        (function (ProductLogRow) {
            ProductLogRow.idProperty = 'ProductLogID';
            ProductLogRow.localTextPrefix = 'Northwind.ProductLog';
            var Fields;
            (function (Fields) {
            })(Fields = ProductLogRow.Fields || (ProductLogRow.Fields = {}));
            ['ProductLogID', 'OperationType', 'ChangingUserId', 'ValidFrom', 'ValidUntil', 'ProductID', 'ProductName', 'ProductImage', 'Discontinued', 'SupplierID', 'CategoryID', 'QuantityPerUnit', 'UnitPrice', 'UnitsInStock', 'UnitsOnOrder', 'ReorderLevel'].forEach(function (x) { return Fields[x] = x; });
        })(ProductLogRow = Northwind.ProductLogRow || (Northwind.ProductLogRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'ProductID';
            ProductRow.nameProperty = 'ProductName';
            ProductRow.localTextPrefix = 'Northwind.Product';
            ProductRow.lookupKey = 'Northwind.Product';
            function getLookup() {
                return Q.getLookup('Northwind.Product');
            }
            ProductRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductRow.Fields || (ProductRow.Fields = {}));
            ['ProductID', 'ProductName', 'ProductImage', 'Discontinued', 'SupplierID', 'CategoryID', 'QuantityPerUnit', 'UnitPrice', 'UnitsInStock', 'UnitsOnOrder', 'ReorderLevel', 'SupplierCompanyName', 'SupplierContactName', 'SupplierContactTitle', 'SupplierAddress', 'SupplierCity', 'SupplierRegion', 'SupplierPostalCode', 'SupplierCountry', 'SupplierPhone', 'SupplierFax', 'SupplierHomePage', 'CategoryName', 'CategoryDescription', 'CategoryPicture'].forEach(function (x) { return Fields[x] = x; });
        })(ProductRow = Northwind.ProductRow || (Northwind.ProductRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Northwind/Product';
            var Methods;
            (function (Methods) {
            })(Methods = ProductService.Methods || (ProductService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'RetrieveLocalization', 'List'].forEach(function (x) {
                ProductService[x] = function (r, s, o) { return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductService.baseUrl + '/' + x;
            });
        })(ProductService = Northwind.ProductService || (Northwind.ProductService = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var RegionForm = (function (_super) {
            __extends(RegionForm, _super);
            function RegionForm() {
                _super.apply(this, arguments);
            }
            RegionForm.formKey = 'Northwind.Region';
            return RegionForm;
        }(Serenity.PrefixedContext));
        Northwind.RegionForm = RegionForm;
        [['RegionID', function () { return Serenity.IntegerEditor; }], ['RegionDescription', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RegionForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var RegionRow;
        (function (RegionRow) {
            RegionRow.idProperty = 'RegionID';
            RegionRow.nameProperty = 'RegionDescription';
            RegionRow.localTextPrefix = 'Northwind.Region';
            RegionRow.lookupKey = 'Northwind.Region';
            function getLookup() {
                return Q.getLookup('Northwind.Region');
            }
            RegionRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RegionRow.Fields || (RegionRow.Fields = {}));
            ['RegionID', 'RegionDescription'].forEach(function (x) { return Fields[x] = x; });
        })(RegionRow = Northwind.RegionRow || (Northwind.RegionRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var RegionService;
        (function (RegionService) {
            RegionService.baseUrl = 'Northwind/Region';
            var Methods;
            (function (Methods) {
            })(Methods = RegionService.Methods || (RegionService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RegionService[x] = function (r, s, o) { return Q.serviceRequest(RegionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RegionService.baseUrl + '/' + x;
            });
        })(RegionService = Northwind.RegionService || (Northwind.RegionService = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryRow;
        (function (SalesByCategoryRow) {
            SalesByCategoryRow.nameProperty = 'CategoryName';
            SalesByCategoryRow.localTextPrefix = 'Northwind.SalesByCategory';
            var Fields;
            (function (Fields) {
            })(Fields = SalesByCategoryRow.Fields || (SalesByCategoryRow.Fields = {}));
            ['CategoryId', 'CategoryName', 'ProductName', 'ProductSales'].forEach(function (x) { return Fields[x] = x; });
        })(SalesByCategoryRow = Northwind.SalesByCategoryRow || (Northwind.SalesByCategoryRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryService;
        (function (SalesByCategoryService) {
            SalesByCategoryService.baseUrl = 'Northwind/SalesByCategory';
            var Methods;
            (function (Methods) {
            })(Methods = SalesByCategoryService.Methods || (SalesByCategoryService.Methods = {}));
            ['List'].forEach(function (x) {
                SalesByCategoryService[x] = function (r, s, o) { return Q.serviceRequest(SalesByCategoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SalesByCategoryService.baseUrl + '/' + x;
            });
        })(SalesByCategoryService = Northwind.SalesByCategoryService || (Northwind.SalesByCategoryService = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var ShipperForm = (function (_super) {
            __extends(ShipperForm, _super);
            function ShipperForm() {
                _super.apply(this, arguments);
            }
            ShipperForm.formKey = 'Northwind.Shipper';
            return ShipperForm;
        }(Serenity.PrefixedContext));
        Northwind.ShipperForm = ShipperForm;
        [['CompanyName', function () { return Serenity.StringEditor; }], ['Phone', function () { return Northwind.PhoneEditor; }]].forEach(function (x) { return Object.defineProperty(ShipperForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var ShipperRow;
        (function (ShipperRow) {
            ShipperRow.idProperty = 'ShipperID';
            ShipperRow.nameProperty = 'CompanyName';
            ShipperRow.localTextPrefix = 'Northwind.Shipper';
            ShipperRow.lookupKey = 'Northwind.Shipper';
            function getLookup() {
                return Q.getLookup('Northwind.Shipper');
            }
            ShipperRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ShipperRow.Fields || (ShipperRow.Fields = {}));
            ['ShipperID', 'CompanyName', 'Phone'].forEach(function (x) { return Fields[x] = x; });
        })(ShipperRow = Northwind.ShipperRow || (Northwind.ShipperRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var ShipperService;
        (function (ShipperService) {
            ShipperService.baseUrl = 'Northwind/Shipper';
            var Methods;
            (function (Methods) {
            })(Methods = ShipperService.Methods || (ShipperService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ShipperService[x] = function (r, s, o) { return Q.serviceRequest(ShipperService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ShipperService.baseUrl + '/' + x;
            });
        })(ShipperService = Northwind.ShipperService || (Northwind.ShipperService = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var SupplierForm = (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm() {
                _super.apply(this, arguments);
            }
            SupplierForm.formKey = 'Northwind.Supplier';
            return SupplierForm;
        }(Serenity.PrefixedContext));
        Northwind.SupplierForm = SupplierForm;
        [['CompanyName', function () { return Serenity.StringEditor; }], ['ContactName', function () { return Serenity.StringEditor; }], ['ContactTitle', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['Region', function () { return Serenity.StringEditor; }], ['PostalCode', function () { return Serenity.StringEditor; }], ['Country', function () { return Serenity.StringEditor; }], ['City', function () { return Serenity.StringEditor; }], ['Phone', function () { return Serenity.StringEditor; }], ['Fax', function () { return Serenity.StringEditor; }], ['HomePage', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SupplierForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'SupplierID';
            SupplierRow.nameProperty = 'CompanyName';
            SupplierRow.localTextPrefix = 'Northwind.Supplier';
            SupplierRow.lookupKey = 'Northwind.Supplier';
            function getLookup() {
                return Q.getLookup('Northwind.Supplier');
            }
            SupplierRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SupplierRow.Fields || (SupplierRow.Fields = {}));
            ['SupplierID', 'CompanyName', 'ContactName', 'ContactTitle', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone', 'Fax', 'HomePage'].forEach(function (x) { return Fields[x] = x; });
        })(SupplierRow = Northwind.SupplierRow || (Northwind.SupplierRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'Northwind/Supplier';
            var Methods;
            (function (Methods) {
            })(Methods = SupplierService.Methods || (SupplierService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SupplierService[x] = function (r, s, o) { return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SupplierService.baseUrl + '/' + x;
            });
        })(SupplierService = Northwind.SupplierService || (Northwind.SupplierService = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var TerritoryForm = (function (_super) {
            __extends(TerritoryForm, _super);
            function TerritoryForm() {
                _super.apply(this, arguments);
            }
            TerritoryForm.formKey = 'Northwind.Territory';
            return TerritoryForm;
        }(Serenity.PrefixedContext));
        Northwind.TerritoryForm = TerritoryForm;
        [['TerritoryID', function () { return Serenity.StringEditor; }], ['TerritoryDescription', function () { return Serenity.StringEditor; }], ['RegionID', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(TerritoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var TerritoryRow;
        (function (TerritoryRow) {
            TerritoryRow.idProperty = 'ID';
            TerritoryRow.nameProperty = 'TerritoryID';
            TerritoryRow.localTextPrefix = 'Northwind.Territory';
            TerritoryRow.lookupKey = 'Northwind.Territory';
            function getLookup() {
                return Q.getLookup('Northwind.Territory');
            }
            TerritoryRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TerritoryRow.Fields || (TerritoryRow.Fields = {}));
            ['ID', 'TerritoryID', 'TerritoryDescription', 'RegionID', 'RegionDescription'].forEach(function (x) { return Fields[x] = x; });
        })(TerritoryRow = Northwind.TerritoryRow || (Northwind.TerritoryRow = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Northwind;
    (function (Northwind) {
        var TerritoryService;
        (function (TerritoryService) {
            TerritoryService.baseUrl = 'Northwind/Territory';
            var Methods;
            (function (Methods) {
            })(Methods = TerritoryService.Methods || (TerritoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TerritoryService[x] = function (r, s, o) { return Q.serviceRequest(TerritoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TerritoryService.baseUrl + '/' + x;
            });
        })(TerritoryService = Northwind.TerritoryService || (Northwind.TerritoryService = {}));
    })(Northwind = coromendal.Northwind || (coromendal.Northwind = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicProgressDialog = (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = this;
            _super.call(this);
            this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    coromendal.BasicProgressDialog = BasicProgressDialog;
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.bind('dialogbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = coromendal.DialogUtils || (coromendal.DialogUtils = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = coromendal.Common || (coromendal.Common = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = coromendal.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = coromendal.LanguageList || (coromendal.LanguageList = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        Q.postToUrl({
                            url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                            params: {
                                key: options.reportKey,
                                ext: Q.coalesce(options.extension, 'pdf'),
                                opt: (options.getParams == null ? '' : $.toJSON(options.getParams()))
                            },
                            target: Q.coalesce(options.target, '_blank')
                        });
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = coromendal.Common || (coromendal.Common = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Common;
    (function (Common) {
        var WordExportHelper;
        (function (WordExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Word'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-word-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_2 = columns; _i < columns_2.length; _i++) {
                            var column = columns_2[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            WordExportHelper.createToolButton = createToolButton;
        })(WordExportHelper = Common.WordExportHelper || (Common.WordExportHelper = {}));
    })(Common = coromendal.Common || (coromendal.Common = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var VSGalleryQAGrid = (function (_super) {
            __extends(VSGalleryQAGrid, _super);
            function VSGalleryQAGrid(container) {
                _super.call(this, container);
            }
            VSGalleryQAGrid.prototype.getColumnsKey = function () { return "BasicSamples.VSGalleryQA"; };
            VSGalleryQAGrid.prototype.getIdProperty = function () { return "ThreadId"; };
            VSGalleryQAGrid.prototype.getService = function () { return BasicSamples.VSGalleryQAService.baseUrl; };
            VSGalleryQAGrid.prototype.getButtons = function () {
                return [];
            };
            VSGalleryQAGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 250;
                return opt;
            };
            VSGalleryQAGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == 'Posts'; }).format = function (ctx) {
                    var posts = ctx.value;
                    if (!posts || !posts.length)
                        return "";
                    var i = 0;
                    var text = "<ul class='posts'>";
                    for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
                        var post = posts_1[_i];
                        text += "<li class='" + (i++ % 2 == 0 ? 'even' : 'odd') + "'><h4>";
                        text += post.PostedByName + " - ";
                        text += Q.formatDate(Q.parseISODateTime(post.PostedOn), 'dd/MM/yyyy HH:mm');
                        text += "</h4><pre>";
                        text += Q.htmlEncode(post.Message);
                        text += "</pre></li>";
                    }
                    text += "</ul>";
                    return text;
                };
                return columns;
            };
            VSGalleryQAGrid.prototype.getInitialTitle = function () {
                return null;
            };
            VSGalleryQAGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VSGalleryQAGrid);
            return VSGalleryQAGrid;
        }(Serenity.EntityGrid));
        BasicSamples.VSGalleryQAGrid = VSGalleryQAGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var ViewWithoutIDGrid = (function (_super) {
            __extends(ViewWithoutIDGrid, _super);
            function ViewWithoutIDGrid(container) {
                _super.call(this, container);
                // this is our autoincrementing counter
                this.nextId = 1;
            }
            ViewWithoutIDGrid.prototype.getColumnsKey = function () { return "Northwind.SalesByCategory"; };
            ViewWithoutIDGrid.prototype.getIdProperty = function () { return "__id"; };
            ViewWithoutIDGrid.prototype.getNameProperty = function () { return coromendal.Northwind.SalesByCategoryRow.nameProperty; };
            ViewWithoutIDGrid.prototype.getLocalTextPrefix = function () { return coromendal.Northwind.SalesByCategoryRow.localTextPrefix; };
            ViewWithoutIDGrid.prototype.getService = function () { return coromendal.Northwind.SalesByCategoryService.baseUrl; };
            /**
             * This method is called to preprocess data returned from the list service
             */
            ViewWithoutIDGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in SalesByCategoryRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            ViewWithoutIDGrid.prototype.getButtons = function () {
                return [];
            };
            ViewWithoutIDGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewWithoutIDGrid);
            return ViewWithoutIDGrid;
        }(Serenity.EntityGrid));
        BasicSamples.ViewWithoutIDGrid = ViewWithoutIDGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Supplier/SupplierGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var RemovingAddButton = (function (_super) {
            __extends(RemovingAddButton, _super);
            function RemovingAddButton(container) {
                _super.call(this, container);
            }
            /**
             * This method is called to get list of buttons to be created.
             */
            RemovingAddButton.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            RemovingAddButton = __decorate([
                Serenity.Decorators.registerClass()
            ], RemovingAddButton);
            return RemovingAddButton;
        }(coromendal.Northwind.SupplierGrid));
        BasicSamples.RemovingAddButton = RemovingAddButton;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportDialog = (function (_super) {
            __extends(ProductExcelImportDialog, _super);
            function ProductExcelImportDialog() {
                _super.call(this);
                this.form = new BasicSamples.ProductExcelImportForm(this.idPrefix);
            }
            ProductExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            ProductExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            BasicSamples.ProductExcelImportService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: 'Cancel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            ProductExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductExcelImportDialog);
            return ProductExcelImportDialog;
        }(Serenity.PropertyDialog));
        BasicSamples.ProductExcelImportDialog = ProductExcelImportDialog;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportGrid = (function (_super) {
            __extends(ProductExcelImportGrid, _super);
            function ProductExcelImportGrid(container) {
                _super.call(this, container);
            }
            /**
             * This method is called to get list of buttons to be created.
             */
            ProductExcelImportGrid.prototype.getButtons = function () {
                var _this = this;
                // call base method to get list of buttons
                var buttons = _super.prototype.getButtons.call(this);
                // add our import button
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new BasicSamples.ProductExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            ProductExcelImportGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductExcelImportGrid);
            return ProductExcelImportGrid;
        }(coromendal.Northwind.ProductGrid));
        BasicSamples.ProductExcelImportGrid = ProductExcelImportGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineImageFormatter = (function () {
            function InlineImageFormatter() {
            }
            InlineImageFormatter.prototype.format = function (ctx) {
                var file = (this.fileProperty ? ctx.item[this.fileProperty] : ctx.value);
                if (!file || !file.length)
                    return "";
                var href = Q.resolveUrl("~/upload/" + file);
                if (this.thumb) {
                    var parts = file.split('.');
                    file = parts.slice(0, parts.length - 1).join('.') + '_t.jpg';
                }
                var src = Q.resolveUrl('~/upload/' + file);
                return ("<a class=\"inline-image\" target='_blank' href=\"" + href + "\">") +
                    ("<img src=\"" + src + "\" style='max-height: 145px; max-width: 100%;' /></a>");
            };
            InlineImageFormatter.prototype.initializeColumn = function (column) {
                if (this.fileProperty) {
                    column.referencedFields = column.referencedFields || [];
                    column.referencedFields.push(this.fileProperty);
                }
            };
            __decorate([
                Serenity.Decorators.option()
            ], InlineImageFormatter.prototype, "fileProperty", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], InlineImageFormatter.prototype, "thumb", void 0);
            InlineImageFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], InlineImageFormatter);
            return InlineImageFormatter;
        }());
        BasicSamples.InlineImageFormatter = InlineImageFormatter;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineImageInGrid = (function (_super) {
            __extends(InlineImageInGrid, _super);
            function InlineImageInGrid(container) {
                _super.call(this, container);
            }
            InlineImageInGrid.prototype.getColumnsKey = function () { return "BasicSamples.InlineImageInGrid"; };
            InlineImageInGrid.prototype.getDialogType = function () { return coromendal.Northwind.ProductDialog; };
            InlineImageInGrid.prototype.getIdProperty = function () { return coromendal.Northwind.ProductRow.idProperty; };
            InlineImageInGrid.prototype.getLocalTextPrefix = function () { return coromendal.Northwind.ProductRow.localTextPrefix; };
            InlineImageInGrid.prototype.getService = function () { return coromendal.Northwind.ProductService.baseUrl; };
            InlineImageInGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 150;
                return opt;
            };
            InlineImageInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InlineImageInGrid);
            return InlineImageInGrid;
        }(Serenity.EntityGrid));
        BasicSamples.InlineImageInGrid = InlineImageInGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var InitialValuesForQuickFilters = (function (_super) {
            __extends(InitialValuesForQuickFilters, _super);
            function InitialValuesForQuickFilters(container) {
                _super.call(this, container);
            }
            /**
             * This method is called to get list of quick filters to be created for this grid.
             * By default, it returns quick filter objects corresponding to properties that
             * have a [QuickFilter] attribute at server side OrderColumns.cs
             */
            InitialValuesForQuickFilters.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                // get a reference to order row field names
                var fld = coromendal.Northwind.OrderRow.Fields;
                // quick filter init method is a good place to set initial
                // value for a quick filter editor, just after it is created
                Q.first(filters, function (x) { return x.field == fld.OrderDate; }).init = function (w) {
                    // w is a reference to the editor for this quick filter widget
                    // here we cast it to DateEditor, and set its value as date.
                    // note that in Javascript, months are 0 based, so date below
                    // is actually 1998-05-01
                    w.valueAsDate = new Date(1998, 4, 1);
                    // setting start date was simple. but this quick filter is actually
                    // a combination of two date editors. to get reference to second one,
                    // need to find its next sibling element by its class
                    var endDate = w.element.nextAll(".s-DateEditor").getWidget(Serenity.DateEditor);
                    endDate.valueAsDate = new Date(1998, 6, 1);
                };
                Q.first(filters, function (x) { return x.field == fld.ShippingState; }).init = function (w) {
                    // enum editor has a string value, so need to call toString()
                    w.value = coromendal.Northwind.OrderShippingState.NotShipped.toString();
                };
                return filters;
            };
            /**
             * This method is another possible place to modify quick filter widgets.
             * It is where the quick filter widgets are actually created.
             *
             * By default, it calls getQuickFilters() then renders UI for these
             * quick filters.
             *
             * We could use getQuickFilters() method for ShipVia too,
             * but this is for demonstration purposes
             */
            InitialValuesForQuickFilters.prototype.createQuickFilters = function () {
                // let base class to create quick filters first
                _super.prototype.createQuickFilters.call(this);
                // get a reference to order row field names
                var fld = coromendal.Northwind.OrderRow.Fields;
                // find a quick filter widget by its field name
                this.findQuickFilter(Serenity.LookupEditor, fld.ShipVia).values = ["1", "2"];
            };
            InitialValuesForQuickFilters = __decorate([
                Serenity.Decorators.registerClass()
            ], InitialValuesForQuickFilters);
            return InitialValuesForQuickFilters;
        }(coromendal.Northwind.OrderGrid));
        BasicSamples.InitialValuesForQuickFilters = InitialValuesForQuickFilters;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var GroupingAndSummariesInGrid = (function (_super) {
            __extends(GroupingAndSummariesInGrid, _super);
            function GroupingAndSummariesInGrid(container) {
                _super.call(this, container);
            }
            GroupingAndSummariesInGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Avg('UnitPrice'),
                        new Slick.Aggregators.Sum('UnitsInStock'),
                        new Slick.Aggregators.Max('UnitsOnOrder'),
                        new Slick.Aggregators.Avg('ReorderLevel')
                    ]
                });
                return grid;
            };
            GroupingAndSummariesInGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field === 'UnitsOnOrder'; })
                    .groupTotalsFormatter = function (totals, col) {
                    return (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');
                };
                Q.first(columns, function (x) { return x.field === 'ReorderLevel'; })
                    .groupTotalsFormatter = function (totals, col) {
                    return (totals.avg ? ('avg: ' + Q.coalesce(Q.formatNumber(totals.avg[col.field], '0.'), '')) : '');
                };
                return columns;
            };
            GroupingAndSummariesInGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            GroupingAndSummariesInGrid.prototype.usePager = function () {
                return false;
            };
            GroupingAndSummariesInGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Group By Category',
                        cssClass: 'expand-all-button',
                        onClick: function () { return _this.view.setGrouping([{
                                getter: 'CategoryName'
                            }]); }
                    },
                    {
                        title: 'Group By Category and Supplier',
                        cssClass: 'expand-all-button',
                        onClick: function () { return _this.view.setGrouping([{
                                formatter: function (x) { return 'Category: ' + x.value + ' (' + x.count + ' items)'; },
                                getter: 'CategoryName'
                            }, {
                                formatter: function (x) { return 'Supplier: ' + x.value + ' (' + x.count + ' items)'; },
                                getter: 'SupplierCompanyName'
                            }]); }
                    }, {
                        title: 'No Grouping',
                        cssClass: 'collapse-all-button',
                        onClick: function () { return _this.view.setGrouping([]); }
                    }];
            };
            GroupingAndSummariesInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GroupingAndSummariesInGrid);
            return GroupingAndSummariesInGrid;
        }(coromendal.Northwind.ProductGrid));
        BasicSamples.GroupingAndSummariesInGrid = GroupingAndSummariesInGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var GridFilteredByCriteria = (function (_super) {
            __extends(GridFilteredByCriteria, _super);
            function GridFilteredByCriteria(container) {
                _super.call(this, container);
            }
            GridFilteredByCriteria.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['UnitsInStock'], '>', 10], [['CategoryName'], '!=', 'Condiments'], [['Discontinued'], '=', 0]);
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '>', 10] (which means string 'A' is greater than 10
                return true;
            };
            GridFilteredByCriteria = __decorate([
                Serenity.Decorators.registerClass()
            ], GridFilteredByCriteria);
            return GridFilteredByCriteria;
        }(coromendal.Northwind.ProductGrid));
        BasicSamples.GridFilteredByCriteria = GridFilteredByCriteria;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomLinksInGrid = (function (_super) {
            __extends(CustomLinksInGrid, _super);
            function CustomLinksInGrid(container) {
                _super.call(this, container);
            }
            /**
             * We override getColumns() to change format functions for some columns.
             * You could also write them as formatter classes, and use them at server side
             */
            CustomLinksInGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var fld = coromendal.Northwind.OrderRow.Fields;
                Q.first(columns, function (x) { return x.field == fld.CustomerCompanyName; }).format =
                    function (ctx) { return ("<a href=\"javascript:;\" class=\"customer-link\">" + Q.htmlEncode(ctx.value) + "</a>"); };
                Q.first(columns, function (x) { return x.field == fld.OrderDate; }).format =
                    function (ctx) { return ("<a href=\"javascript:;\" class=\"date-link\">" + Q.formatDate(Q.parseISODateTime(ctx.value)) + "</a>"); };
                Q.first(columns, function (x) { return x.field == fld.EmployeeFullName; }).format =
                    function (ctx) { return ("<a href=\"javascript:;\" class=\"employee-link\">" + Q.htmlEncode(ctx.value) + "</a>"); };
                Q.first(columns, function (x) { return x.field == fld.ShipCountry; }).format =
                    function (ctx) { return ("<a href=\"javascript:;\" class=\"ship-country-link\">" + Q.htmlEncode(ctx.value) + "</a>"); };
                return columns;
            };
            CustomLinksInGrid.prototype.onClick = function (e, row, cell) {
                // let base grid handle clicks for its edit links
                _super.prototype.onClick.call(this, e, row, cell);
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                var item = this.itemAt(row);
                // get reference to clicked element
                var target = $(e.target);
                if (target.hasClass("customer-link")) {
                    e.preventDefault();
                    var message = Q.format("<p>You have clicked an order from customer: {0}.</p>" +
                        "<p>If you click Yes, i'll open Customer dialog.</p>" +
                        "<p>If you click No, i'll open Order dialog.</p>", Q.htmlEncode(item.CustomerCompanyName));
                    Q.confirm(message, function () {
                        // CustomerDialog doesn't use CustomerID but ID (identity)
                        // so need to find customer to get its actual ID
                        var customer = Q.first(coromendal.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == item.CustomerID; });
                        new coromendal.Northwind.CustomerDialog().loadByIdAndOpenDialog(customer.ID);
                    }, {
                        htmlEncode: false,
                        onNo: function () {
                            new coromendal.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                        }
                    });
                }
                else if (target.hasClass("date-link")) {
                    e.preventDefault();
                    var ordersInSameDate = Q.count(this.view.getItems(), function (x) { return x.OrderDate == item.OrderDate; });
                    Q.notifyInfo("You clicked an order from date " +
                        Q.formatDate(Q.parseISODateTime(item.OrderDate)) + ". There are " +
                        ordersInSameDate + " orders from the same date that is loaded in grid at the moment");
                }
                else if (target.hasClass("employee-link")) {
                    e.preventDefault();
                    Q.notifySuccess("You clicked an employee name, " +
                        "so i've opened a new Order Dialog from same customer " +
                        "with that employee prepopulated!");
                    new coromendal.Northwind.OrderDialog().loadEntityAndOpenDialog({
                        CustomerID: item.CustomerID,
                        EmployeeID: item.EmployeeID
                    });
                }
                else if (target.hasClass("ship-country-link")) {
                    e.preventDefault();
                    Q.notifySuccess("Let's filter the grid to orders from " + item.ShipCountry);
                    var countryFilter = this.findQuickFilter(Serenity.LookupEditor, coromendal.Northwind.OrderRow.Fields.ShipCountry);
                    countryFilter.value = item.ShipCountry;
                }
            };
            /**
             * This method is called for columns with [EditLink] attribute,
             * but only for edit links of this grid's own item type.
             * It is also called by Add Product button with a NULL entityOrId
             * parameter so we should check that entityOrId is a string
             * to be sure it is originating from a link.
             *
             * As we changed format for other columns, this will only be called
             * for links in remaining OrderID column
             */
            CustomLinksInGrid.prototype.editItem = function (entityOrId) {
                // check that this is an edit link click, not add button, ID is always a string
                if (typeof entityOrId == "string") {
                    // convert ID to an integer, and find order with that ID
                    var item = this.view.getItemById(Q.toId(entityOrId));
                    // date is a ISO string, so need to parse it first
                    var date = Q.formatDate(Q.parseISODateTime(item.OrderDate));
                    // ask for confirmation
                    Q.confirm(Q.format("You clicked edit link for order with ID: {0} and Date: {1}. Should i open that order?", item.OrderID, date), function () {
                        new coromendal.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                    });
                }
                else {
                    _super.prototype.editItem.call(this, entityOrId);
                }
            };
            CustomLinksInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomLinksInGrid);
            return CustomLinksInGrid;
        }(coromendal.Northwind.OrderGrid));
        BasicSamples.CustomLinksInGrid = CustomLinksInGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var ConditionalFormattingGrid = (function (_super) {
            __extends(ConditionalFormattingGrid, _super);
            function ConditionalFormattingGrid(container) {
                _super.call(this, container);
            }
            ConditionalFormattingGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ConditionalFormattingGrid.prototype.getDialogType = function () { return coromendal.Northwind.ProductDialog; };
            ConditionalFormattingGrid.prototype.getIdProperty = function () { return coromendal.Northwind.ProductRow.idProperty; };
            ConditionalFormattingGrid.prototype.getLocalTextPrefix = function () { return coromendal.Northwind.ProductRow.localTextPrefix; };
            ConditionalFormattingGrid.prototype.getService = function () { return coromendal.Northwind.ProductService.baseUrl; };
            /**
             * We override getColumns() to be able to add a custom CSS class to UnitPrice
             * We could also add this class in ProductColumns.cs but didn't want to modify
             * it solely for this sample.
             */
            ConditionalFormattingGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var fld = coromendal.Northwind.ProductRow.Fields;
                // adding a specific css class to UnitPrice column, 
                // to be able to format cell with a different background
                Q.first(columns, function (x) { return x.field == fld.UnitPrice; }).cssClass += " col-unit-price";
                return columns;
            };
            /**
             * This method is called for all rows
             * @param item Data item for current row
             * @param index Index of the row in grid
             */
            ConditionalFormattingGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.Discontinued == true)
                    klass += " discontinued";
                else if (item.UnitsInStock <= 0)
                    klass += " out-of-stock";
                else if (item.UnitsInStock < 20)
                    klass += " critical-stock";
                else if (item.UnitsInStock > 50)
                    klass += " needs-reorder";
                if (item.UnitPrice >= 50)
                    klass += " high-price";
                else if (item.UnitPrice >= 20)
                    klass += " medium-price";
                else
                    klass += " low-price";
                return Q.trimToNull(klass);
            };
            ConditionalFormattingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ConditionalFormattingGrid);
            return ConditionalFormattingGrid;
        }(Serenity.EntityGrid));
        BasicSamples.ConditionalFormattingGrid = ConditionalFormattingGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var CancellableBulkActionGrid = (function (_super) {
            __extends(CancellableBulkActionGrid, _super);
            function CancellableBulkActionGrid(container) {
                _super.call(this, container);
            }
            CancellableBulkActionGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            CancellableBulkActionGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Perform Bulk Action on Selected Orders',
                        cssClass: 'send-button',
                        onClick: function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            var action = new BasicSamples.OrderBulkAction();
                            action.done = function () { return _this.rowSelection.resetCheckedAndRefresh(); };
                            action.execute(_this.rowSelection.getSelectedKeys());
                        }
                    }];
            };
            CancellableBulkActionGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            CancellableBulkActionGrid.prototype.getViewOptions = function () {
                var opt = _super.prototype.getViewOptions.call(this);
                opt.rowsPerPage = 2500;
                return opt;
            };
            CancellableBulkActionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CancellableBulkActionGrid);
            return CancellableBulkActionGrid;
        }(coromendal.Northwind.OrderGrid));
        BasicSamples.CancellableBulkActionGrid = CancellableBulkActionGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Product/ProductDialog.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our custom product dialog that uses a different product form
         * (LookupFilterByMultipleForm) with our special category editor.
         */
        var LookupFilterByMultipleDialog = (function (_super) {
            __extends(LookupFilterByMultipleDialog, _super);
            function LookupFilterByMultipleDialog() {
                _super.apply(this, arguments);
            }
            LookupFilterByMultipleDialog.prototype.getFormKey = function () { return BasicSamples.LookupFilterByMultipleForm.formKey; };
            LookupFilterByMultipleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LookupFilterByMultipleDialog);
            return LookupFilterByMultipleDialog;
        }(coromendal.Northwind.ProductDialog));
        BasicSamples.LookupFilterByMultipleDialog = LookupFilterByMultipleDialog;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var LookupFilterByMultipleGrid = (function (_super) {
            __extends(LookupFilterByMultipleGrid, _super);
            function LookupFilterByMultipleGrid(container) {
                _super.call(this, container);
            }
            LookupFilterByMultipleGrid.prototype.getDialogType = function () { return BasicSamples.LookupFilterByMultipleDialog; };
            /**
             * This method is called just before List request is sent to service.
             * You have an opportunity here to cancel request or modify it.
             * Here we'll add a custom criteria to list request.
             */
            LookupFilterByMultipleGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // this has no relation to our lookup editor but as we'll allow picking only 
                // categories of Produce and Seafood in product dialog, it's better to show
                // only products from these categories in grid too
                var request = this.view.params;
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['CategoryName'], 'in', [['Produce', 'Seafood']]]);
                // brackets used are important above, NOT ['CategoryName', 'in', ['Produce', 'Seafood']]
                return true;
            };
            LookupFilterByMultipleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LookupFilterByMultipleGrid);
            return LookupFilterByMultipleGrid;
        }(coromendal.Northwind.ProductGrid));
        BasicSamples.LookupFilterByMultipleGrid = LookupFilterByMultipleGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our category editor that will show only categories of Produce and
         * Seafood. We are subclassing LookupEditorBase which also LookupEditor
         * derives from.
         *
         * After compiling and transforming templates, this editor type will be
         * available in server side to use in our LookupFilterByMultipleForm,
         * which is a version of ProductForm that uses our custom editor.
         */
        var ProduceSeafoodCategoryEditor = (function (_super) {
            __extends(ProduceSeafoodCategoryEditor, _super);
            function ProduceSeafoodCategoryEditor(container, opt) {
                _super.call(this, container, opt);
            }
            /**
             * Normally LookupEditor requires a lookup key to determine which set of
             * lookup data to show in editor. As our editor will only show category
             * data, we lock it to category lookup key.
             */
            ProduceSeafoodCategoryEditor.prototype.getLookupKey = function () {
                return coromendal.Northwind.CategoryRow.lookupKey;
            };
            /**
             * Here we are filtering by category name but you could filter by any field.
             * Just make sure the fields you filter on has [LookupInclude] attribute on them,
             * otherwise their value will be null in client side as they are not sent back
             * from server in lookup script.
             */
            ProduceSeafoodCategoryEditor.prototype.getItems = function (lookup) {
                return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                    return x.CategoryName === 'Produce' || x.CategoryName === 'Seafood';
                });
            };
            ProduceSeafoodCategoryEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ProduceSeafoodCategoryEditor);
            return ProduceSeafoodCategoryEditor;
        }(Serenity.LookupEditorBase));
        BasicSamples.ProduceSeafoodCategoryEditor = ProduceSeafoodCategoryEditor;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailsEditor.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of Order Details editor with a CategoryID property
         */
        var FilteredLookupDetailEditor = (function (_super) {
            __extends(FilteredLookupDetailEditor, _super);
            function FilteredLookupDetailEditor(container) {
                _super.call(this, container);
            }
            FilteredLookupDetailEditor.prototype.getDialogType = function () { return BasicSamples.FilteredLookupOrderDetailDialog; };
            /**
             * This method is called to initialize an edit dialog created by
             * grid editor when Add button or an edit link is clicked
             * We have an opportunity here to pass CategoryID to edit dialog
             */
            FilteredLookupDetailEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing category ID from grid editor to detail dialog
                dialog.categoryID = this.categoryID;
            };
            FilteredLookupDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], FilteredLookupDetailEditor);
            return FilteredLookupDetailEditor;
        }(coromendal.Northwind.OrderDetailsEditor));
        BasicSamples.FilteredLookupDetailEditor = FilteredLookupDetailEditor;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Basic order dialog with a category selection
         */
        var FilteredLookupInDetailDialog = (function (_super) {
            __extends(FilteredLookupInDetailDialog, _super);
            function FilteredLookupInDetailDialog() {
                var _this = this;
                _super.call(this);
                this.form = new BasicSamples.FilteredLookupInDetailForm(this.idPrefix);
                this.form.CategoryID.change(function (e) {
                    _this.form.DetailList.categoryID = Q.toId(_this.form.CategoryID.value);
                });
            }
            FilteredLookupInDetailDialog.prototype.getFormKey = function () { return BasicSamples.FilteredLookupInDetailForm.formKey; };
            FilteredLookupInDetailDialog.prototype.getIdProperty = function () { return coromendal.Northwind.OrderRow.idProperty; };
            FilteredLookupInDetailDialog.prototype.getLocalTextPrefix = function () { return coromendal.Northwind.OrderRow.localTextPrefix; };
            FilteredLookupInDetailDialog.prototype.getNameProperty = function () { return coromendal.Northwind.OrderRow.nameProperty; };
            FilteredLookupInDetailDialog.prototype.getService = function () { return coromendal.Northwind.OrderService.baseUrl; };
            FilteredLookupInDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupInDetailDialog);
            return FilteredLookupInDetailDialog;
        }(Serenity.EntityDialog));
        BasicSamples.FilteredLookupInDetailDialog = FilteredLookupInDetailDialog;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
         */
        var FilteredLookupInDetailGrid = (function (_super) {
            __extends(FilteredLookupInDetailGrid, _super);
            function FilteredLookupInDetailGrid(container) {
                _super.call(this, container);
            }
            FilteredLookupInDetailGrid.prototype.getDialogType = function () { return BasicSamples.FilteredLookupInDetailDialog; };
            FilteredLookupInDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupInDetailGrid);
            return FilteredLookupInDetailGrid;
        }(coromendal.Northwind.OrderGrid));
        BasicSamples.FilteredLookupInDetailGrid = FilteredLookupInDetailGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailDialog.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of order detail dialog with a CategoryID property
         * that will be used to set CascadeValue of product editor
         */
        var FilteredLookupOrderDetailDialog = (function (_super) {
            __extends(FilteredLookupOrderDetailDialog, _super);
            function FilteredLookupOrderDetailDialog() {
                _super.call(this);
                this.form = new coromendal.Northwind.OrderDetailForm(this.idPrefix);
                // we can set cascade field in constructor
                // we could also use FilterField but in this case, when CategoryID is null
                // lookup editor would show all products in any category
                this.form.ProductID.cascadeField = coromendal.Northwind.ProductRow.Fields.CategoryID;
                // but CategoryID value is not yet available here as detail editor will set it 
                // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity
            }
            /**
             * This method is called just before an entity is loaded to dialog
             * This is also called for new record mode with an empty entity
             */
            FilteredLookupOrderDetailDialog.prototype.beforeLoadEntity = function (entity) {
                _super.prototype.beforeLoadEntity.call(this, entity);
                // setting cascade value here
                // make sure you have [LookupInclude] on CategoryID property of ProductRow
                // otherwise this field won't be available in lookup script (will always be null),
                // so can't be filtered and you'll end up with an empty product list.
                this.form.ProductID.cascadeValue = this.categoryID;
            };
            FilteredLookupOrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupOrderDetailDialog);
            return FilteredLookupOrderDetailDialog;
        }(coromendal.Northwind.OrderDetailDialog));
        BasicSamples.FilteredLookupOrderDetailDialog = FilteredLookupOrderDetailDialog;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Customer/CustomerDialog.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var SerialAutoNumberDialog = (function (_super) {
            __extends(SerialAutoNumberDialog, _super);
            function SerialAutoNumberDialog() {
                var _this = this;
                _super.call(this);
                this.form.CustomerID.element.on('keyup', function (e) {
                    // only auto number when a key between 'A' and 'Z' is pressed
                    if (e.which >= 65 && e.which <= 90)
                        _this.getNextNumber();
                });
            }
            SerialAutoNumberDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // fill next number in new record mode
                if (this.isNew())
                    this.getNextNumber();
            };
            SerialAutoNumberDialog.prototype.getNextNumber = function () {
                var _this = this;
                var val = Q.trimToNull(this.form.CustomerID.value);
                // we will only get next number when customer ID is empty or 1 character in length
                if (!val || val.length <= 1) {
                    // if no customer ID yet (new record mode probably) use 'C' as a prefix
                    var prefix = (val || 'C').toUpperCase();
                    // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                    coromendal.Northwind.CustomerService.GetNextNumber({
                        Prefix: prefix,
                        Length: 5 // we want service to search for and return serials of 5 in length
                    }, function (response) {
                        _this.form.CustomerID.value = response.Serial;
                        // this is to mark numerical part after prefix
                        _this.form.CustomerID.element[0].setSelectionRange(prefix.length, response.Serial.length);
                    });
                }
            };
            SerialAutoNumberDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SerialAutoNumberDialog);
            return SerialAutoNumberDialog;
        }(coromendal.Northwind.CustomerDialog));
        BasicSamples.SerialAutoNumberDialog = SerialAutoNumberDialog;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Customer/CustomerGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of CustomerGrid to override dialog type to SerialAutoNumberDialog
         */
        var SerialAutoNumberGrid = (function (_super) {
            __extends(SerialAutoNumberGrid, _super);
            function SerialAutoNumberGrid(container) {
                _super.call(this, container);
            }
            SerialAutoNumberGrid.prototype.getDialogType = function () { return BasicSamples.SerialAutoNumberDialog; };
            SerialAutoNumberGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SerialAutoNumberGrid);
            return SerialAutoNumberGrid;
        }(coromendal.Northwind.CustomerGrid));
        BasicSamples.SerialAutoNumberGrid = SerialAutoNumberGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Adding Responsive attribute makes this dialog use full screen in mobile devices.
         */
        var ResponsiveDialog = (function (_super) {
            __extends(ResponsiveDialog, _super);
            function ResponsiveDialog() {
                _super.call(this);
            }
            ResponsiveDialog.prototype.getFormKey = function () { return coromendal.Northwind.OrderForm.formKey; };
            ResponsiveDialog.prototype.getIdProperty = function () { return coromendal.Northwind.OrderRow.idProperty; };
            ResponsiveDialog.prototype.getLocalTextPrefix = function () { return coromendal.Northwind.OrderRow.localTextPrefix; };
            ResponsiveDialog.prototype.getNameProperty = function () { return coromendal.Northwind.OrderRow.nameProperty; };
            ResponsiveDialog.prototype.getService = function () { return coromendal.Northwind.OrderService.baseUrl; };
            ResponsiveDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], ResponsiveDialog);
            return ResponsiveDialog;
        }(Serenity.EntityDialog));
        BasicSamples.ResponsiveDialog = ResponsiveDialog;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to ResponsiveDialog
         */
        var ResponsiveGrid = (function (_super) {
            __extends(ResponsiveGrid, _super);
            function ResponsiveGrid(container) {
                _super.call(this, container);
            }
            ResponsiveGrid.prototype.getDialogType = function () { return BasicSamples.ResponsiveDialog; };
            ResponsiveGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ResponsiveGrid);
            return ResponsiveGrid;
        }(coromendal.Northwind.OrderGrid));
        BasicSamples.ResponsiveGrid = ResponsiveGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Supplier/SupplierDialog.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var ReadOnlyDialog = (function (_super) {
            __extends(ReadOnlyDialog, _super);
            function ReadOnlyDialog() {
                _super.apply(this, arguments);
            }
            /**
             * This is the method that gets list of tool
             * buttons to be created in a dialog.
             *
             * Here we'll remove save and close button, and
             * apply changes buttons.
             */
            ReadOnlyDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                // We could also remove delete button here, but for demonstration 
                // purposes we'll hide it in another method (updateInterface)
                // buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
                return buttons;
            };
            /**
             * This method is a good place to update states of
             * interface elements. It is called after dialog
             * is initialized and an entity is loaded into dialog.
             * This is also called in new item mode.
             */
            ReadOnlyDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // finding all editor elements and setting their readonly attribute
                // note that this helper method only works with basic inputs, 
                // some editors require widget based set readonly overload (setReadOnly)
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                // remove required asterisk (*)
                this.element.find('sup').hide();
                // here is a way to locate a button by its css class
                // note that this method is not available in 
                // getToolbarButtons() because buttons are not 
                // created there yet!
                // 
                // this.toolbar.findButton('delete-button').hide();
                // entity dialog also has reference variables to
                // its default buttons, lets use them to hide delete button
                this.deleteButton.hide();
                // we could also hide save buttons just like delete button,
                // but they are null now as we removed them in getToolbarButtons()
                // if we didn't we could write like this:
                // 
                // this.applyChangesButton.hide();
                // this.saveAndCloseButton.hide();
                // instead of hiding, we could disable a button
                // 
                // this.deleteButton.toggleClass('disabled', true);
            };
            /**
             * This method is called when dialog title needs to be updated.
             * Base class returns something like 'Edit xyz' for edit mode,
             * and 'New xyz' for new record mode.
             *
             * But our dialog is readonly, so we should change it to 'View xyz'
             */
            ReadOnlyDialog.prototype.getEntityTitle = function () {
                if (!this.isEditMode()) {
                    // we shouldn't hit here, but anyway for demo...
                    return "How did you manage to open this dialog in new record mode?";
                }
                else {
                    // entitySingular is type of record this dialog edits. something like 'Supplier'.
                    // you could hardcode it, but this is for demonstration
                    var entityType = _super.prototype.getEntitySingular.call(this);
                    // get name field value of record this dialog edits
                    var name_1 = this.getEntityNameFieldValue() || "";
                    // you could use Q.format with a local text, but again demo...
                    return 'View ' + entityType + " (" + name_1 + ")";
                }
            };
            /**
             * This method is actually the one that calls getEntityTitle()
             * and updates the dialog title. We could do it here too...
             */
            ReadOnlyDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
                // remove super.updateTitle() call above and uncomment 
                // below line if you'd like to use this version
                // 
                // this.dialogTitle = 'View Supplier (' + this.getEntityNameFieldValue() + ')';
            };
            ReadOnlyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReadOnlyDialog);
            return ReadOnlyDialog;
        }(coromendal.Northwind.SupplierDialog));
        BasicSamples.ReadOnlyDialog = ReadOnlyDialog;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Supplier/SupplierGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A readonly grid that launches ReadOnlyDialog
         */
        var ReadOnlyGrid = (function (_super) {
            __extends(ReadOnlyGrid, _super);
            function ReadOnlyGrid(container) {
                _super.call(this, container);
            }
            ReadOnlyGrid.prototype.getDialogType = function () { return BasicSamples.ReadOnlyDialog; };
            /**
             * Removing add button from grid using its css class
             */
            ReadOnlyGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            ReadOnlyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReadOnlyGrid);
            return ReadOnlyGrid;
        }(coromendal.Northwind.SupplierGrid));
        BasicSamples.ReadOnlyGrid = ReadOnlyGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var PopulateLinkedDataDialog = (function (_super) {
            __extends(PopulateLinkedDataDialog, _super);
            function PopulateLinkedDataDialog() {
                var _this = this;
                _super.call(this);
                this.form = new BasicSamples.PopulateLinkedDataForm(this.idPrefix);
                // "changeSelect2" is only fired when user changes the selection
                // but "change" is fired when dialog sets customer on load too
                // so we prefer "changeSelect2", as initial customer details 
                // will get populated by initial load, we don't want extra call
                this.form.CustomerID.changeSelect2(function (e) {
                    var customerID = _this.form.CustomerID.value;
                    if (Q.isEmptyOrNull(customerID)) {
                        _this.setCustomerDetails({});
                        return;
                    }
                    // in northwind CustomerID is a string like "ALFKI", 
                    // while its actual integer ID value is 1.
                    // so we need to convert customer ID to ID.
                    // you won't have to do this conversion with your tables
                    var id = Q.first(coromendal.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
                    coromendal.Northwind.CustomerService.Retrieve({
                        EntityId: id
                    }, function (response) {
                        _this.setCustomerDetails(response.Entity);
                    });
                });
            }
            PopulateLinkedDataDialog.prototype.getFormKey = function () { return BasicSamples.PopulateLinkedDataForm.formKey; };
            PopulateLinkedDataDialog.prototype.getIdProperty = function () { return coromendal.Northwind.OrderRow.idProperty; };
            PopulateLinkedDataDialog.prototype.getLocalTextPrefix = function () { return coromendal.Northwind.OrderRow.localTextPrefix; };
            PopulateLinkedDataDialog.prototype.getNameProperty = function () { return coromendal.Northwind.OrderRow.nameProperty; };
            PopulateLinkedDataDialog.prototype.getService = function () { return coromendal.Northwind.OrderService.baseUrl; };
            PopulateLinkedDataDialog.prototype.setCustomerDetails = function (details) {
                this.form.CustomerCity.value = details.City;
                this.form.CustomerContactName.value = details.ContactName;
                this.form.CustomerContactTitle.value = details.ContactTitle;
                this.form.CustomerCountry.value = details.Country;
                this.form.CustomerFax.value = details.Fax;
                this.form.CustomerPhone.value = details.Phone;
                this.form.CustomerRegion.value = details.Region;
            };
            /**
             * This dialog will have CSS class "s-PopulateLinkedDataDialog"
             * We are changing it here to "s-OrderDialog", to make it use default OrderDialog styles
             * This has no effect other than looks on populate linked data demonstration
             */
            PopulateLinkedDataDialog.prototype.getCssClass = function () {
                return _super.prototype.getCssClass.call(this) + " s-OrderDialog s-Northwind-OrderDialog";
            };
            PopulateLinkedDataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PopulateLinkedDataDialog);
            return PopulateLinkedDataDialog;
        }(Serenity.EntityDialog));
        BasicSamples.PopulateLinkedDataDialog = PopulateLinkedDataDialog;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A subclass of OrderGrid that launches PopulateLinkedDataDialog
         */
        var PopulateLinkedDataGrid = (function (_super) {
            __extends(PopulateLinkedDataGrid, _super);
            function PopulateLinkedDataGrid(container) {
                _super.call(this, container);
            }
            PopulateLinkedDataGrid.prototype.getDialogType = function () { return BasicSamples.PopulateLinkedDataDialog; };
            PopulateLinkedDataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PopulateLinkedDataGrid);
            return PopulateLinkedDataGrid;
        }(coromendal.Northwind.OrderGrid));
        BasicSamples.PopulateLinkedDataGrid = PopulateLinkedDataGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Styling for columns is done with CSS in site.basicsamples.less file.
         * When comparing this to MultiColumnDialog sample, you may notice that
         * this version requires much less JS and CSS code.
         */
        var MultiColumnResponsiveDialog = (function (_super) {
            __extends(MultiColumnResponsiveDialog, _super);
            function MultiColumnResponsiveDialog() {
                _super.call(this);
            }
            MultiColumnResponsiveDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MultiColumnResponsiveDialog);
            return MultiColumnResponsiveDialog;
        }(coromendal.Northwind.OrderDialog));
        BasicSamples.MultiColumnResponsiveDialog = MultiColumnResponsiveDialog;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to MultiColumnResponsiveDialog
         */
        var MultiColumnResponsiveGrid = (function (_super) {
            __extends(MultiColumnResponsiveGrid, _super);
            function MultiColumnResponsiveGrid(container) {
                _super.call(this, container);
            }
            MultiColumnResponsiveGrid.prototype.getDialogType = function () { return BasicSamples.MultiColumnResponsiveDialog; };
            MultiColumnResponsiveGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MultiColumnResponsiveGrid);
            return MultiColumnResponsiveGrid;
        }(coromendal.Northwind.OrderGrid));
        BasicSamples.MultiColumnResponsiveGrid = MultiColumnResponsiveGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Category/CategoryDialog.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var GetInsertedRecordIdDialog = (function (_super) {
            __extends(GetInsertedRecordIdDialog, _super);
            function GetInsertedRecordIdDialog() {
                _super.apply(this, arguments);
            }
            /**
             * This method is called after the save request to service
             * is completed succesfully. This can be an insert or update.
             *
             * @param response Response that is returned from server
             */
            GetInsertedRecordIdDialog.prototype.onSaveSuccess = function (response) {
                // check that this is an insert
                if (this.isNew) {
                    Q.notifySuccess("Just inserted a category with ID: " + response.EntityId);
                    // you could also open a new dialog
                    // new Northwind.CategoryDialog().loadByIdAndOpenDialog(response.EntityId);
                    // but let's better load inserted record using Retrieve service
                    coromendal.Northwind.CategoryService.Retrieve({
                        EntityId: response.EntityId
                    }, function (resp) {
                        Q.notifyInfo("Looks like the category you added has name: " + resp.Entity.CategoryName);
                    });
                }
            };
            GetInsertedRecordIdDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GetInsertedRecordIdDialog);
            return GetInsertedRecordIdDialog;
        }(coromendal.Northwind.CategoryDialog));
        BasicSamples.GetInsertedRecordIdDialog = GetInsertedRecordIdDialog;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Category/CategoryGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of CategoryGrid to override dialog type to GetInsertedRecordIdDialog
         */
        var GetInsertedRecordIdGrid = (function (_super) {
            __extends(GetInsertedRecordIdGrid, _super);
            function GetInsertedRecordIdGrid(container) {
                _super.call(this, container);
            }
            GetInsertedRecordIdGrid.prototype.getDialogType = function () { return BasicSamples.GetInsertedRecordIdDialog; };
            GetInsertedRecordIdGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GetInsertedRecordIdGrid);
            return GetInsertedRecordIdGrid;
        }(coromendal.Northwind.CategoryGrid));
        BasicSamples.GetInsertedRecordIdGrid = GetInsertedRecordIdGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var DialogBoxes;
        (function (DialogBoxes) {
            function initializePage() {
                confirmDialogButtons();
                confirmWithCustomTitle();
                information();
                warning();
                alert();
            }
            DialogBoxes.initializePage = initializePage;
            function confirmDialogButtons() {
                // here we demonstrate how you can detect which button user has clicked
                // second parameter is Yes handler and it is called only when user clicks Yes.
                // third parameter has some additional options, that you should only use when needed
                $('#ConfirmDialogButtons').click(function () {
                    Q.confirm("Click one of buttons, or close dialog with [x] on top right, i'll tell you what you did!", function () {
                        Q.notifySuccess("You clicked YES. Great!");
                    }, {
                        onNo: function () {
                            Q.notifyInfo("You clicked NO. Why?");
                        },
                        onCancel: function () {
                            Q.notifyError("You clicked X. Operation is cancelled. Will try again?");
                        }
                    });
                });
            }
            function confirmWithCustomTitle() {
                $('#ConfirmWithCustomTitle').click(function () {
                    Q.confirm("This confirmation has a custom title", function () {
                        Q.notifySuccess("Allright!");
                    }, {
                        title: 'Some Custom Confirmation Title'
                    });
                });
            }
            function information() {
                $('#Information').click(function () {
                    Q.information("What a nice day", function () {
                        Q.notifySuccess("No problem!");
                    });
                });
            }
            function warning() {
                $('#Warning').click(function () {
                    Q.warning("Hey, be careful!");
                });
            }
            function alert() {
                $('#Alert').click(function () {
                    Q.alert("Houston, we got a problem!");
                });
            }
        })(DialogBoxes = BasicSamples.DialogBoxes || (BasicSamples.DialogBoxes = {}));
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var DefaultValuesInNewGrid = (function (_super) {
            __extends(DefaultValuesInNewGrid, _super);
            function DefaultValuesInNewGrid(container) {
                _super.call(this, container);
            }
            /**
             * This method is called when New Item button is clicked.
             * By default, it calls EditItem with an empty entity.
             * This is a good place to fill in default values for New Item button.
             */
            DefaultValuesInNewGrid.prototype.addButtonClick = function () {
                this.editItem({
                    CustomerID: 'ANTON',
                    RequiredDate: Q.formatDate(new Date(), 'yyyy-MM-dd'),
                    EmployeeID: coromendal.Northwind.EmployeeRow.getLookup().items
                        .filter(function (x) { return x.FullName === 'Robert King'; })[0].EmployeeID,
                    ShipVia: coromendal.Northwind.ShipperRow.getLookup().items
                        .filter(function (x) { return x.CompanyName === 'Speedy Express'; })[0].ShipperID
                });
            };
            DefaultValuesInNewGrid.prototype.getButtons = function () {
                var _this = this;
                // preserving default New Item button
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Add Order from the Queen',
                    cssClass: 'add-button',
                    onClick: function () {
                        // using EditItem method as a shortcut to create a new Order dialog,
                        // bind to its events, load our order row, and open dialog
                        _this.editItem({
                            CustomerID: 'QUEEN',
                            EmployeeID: coromendal.Northwind.EmployeeRow.getLookup().items
                                .filter(function (x) { return x.FullName === 'Nancy Davolio'; })[0].EmployeeID,
                            ShipVia: coromendal.Northwind.ShipperRow.getLookup().items
                                .filter(function (x) { return x.CompanyName === 'United Package'; })[0].ShipperID
                        });
                    }
                });
                buttons.push({
                    title: 'Add Order with 5 Chai by Laura', cssClass: 'add-note-button',
                    onClick: function () {
                        // we could use EditItem here too, but for demonstration
                        // purposes we are manually creating dialog this time
                        var dlg = new coromendal.Northwind.OrderDialog();
                        // let grid watch for changes to manually created dialog, 
                        // so when a new item is saved, grid can refresh itself
                        _this.initDialog(dlg);
                        // get a reference to product Chai
                        var chai = coromendal.Northwind.ProductRow.getLookup().items
                            .filter(function (x) { return x.ProductName === 'Chai'; })[0];
                        // LoadEntityAndOpenDialog, loads an OrderRow 
                        // to dialog and opens it
                        var lauraCallahanID = coromendal.Northwind.EmployeeRow.getLookup().items
                            .filter(function (x) { return x.FullName === 'Laura Callahan'; })[0].EmployeeID;
                        dlg.loadEntityAndOpenDialog({
                            CustomerID: 'GOURL',
                            EmployeeID: lauraCallahanID,
                            DetailList: [{
                                    ProductID: chai.ProductID,
                                    ProductName: chai.ProductName,
                                    UnitPrice: chai.UnitPrice,
                                    Quantity: 5,
                                    LineTotal: chai.UnitPrice * 5
                                }]
                        });
                    }
                });
                return buttons;
            };
            DefaultValuesInNewGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DefaultValuesInNewGrid);
            return DefaultValuesInNewGrid;
        }(coromendal.Northwind.OrderGrid));
        BasicSamples.DefaultValuesInNewGrid = DefaultValuesInNewGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Product/ProductDialog.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var CloneableEntityDialog = (function (_super) {
            __extends(CloneableEntityDialog, _super);
            function CloneableEntityDialog() {
                _super.apply(this, arguments);
            }
            CloneableEntityDialog.prototype.updateInterface = function () {
                // by default cloneButton is hidden in base UpdateInterface method
                _super.prototype.updateInterface.call(this);
                // here we show it if it is edit mode (not new)
                this.cloneButton.toggle(this.isEditMode());
            };
            /**
             * Overriding this method is optional to customize cloned entity
             */
            CloneableEntityDialog.prototype.getCloningEntity = function () {
                var clone = _super.prototype.getCloningEntity.call(this);
                // add (Clone) suffix if it's not already added
                var suffix = ' (Clone)';
                if (!Q.endsWith(clone.ProductName || '', suffix)) {
                    clone.ProductName = (clone.ProductName || '') + suffix;
                }
                // it's better to clear image for this sample
                // otherwise we would have to create a temporary copy of it
                // and upload
                clone.ProductImage = null;
                // let's clear fields not logical to be cloned
                clone.UnitsInStock = 0;
                clone.UnitsOnOrder = 0;
                return clone;
            };
            CloneableEntityDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], CloneableEntityDialog);
            return CloneableEntityDialog;
        }(coromendal.Northwind.ProductDialog));
        BasicSamples.CloneableEntityDialog = CloneableEntityDialog;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var CloneableEntityGrid = (function (_super) {
            __extends(CloneableEntityGrid, _super);
            function CloneableEntityGrid(container) {
                _super.call(this, container);
            }
            CloneableEntityGrid.prototype.getDialogType = function () { return BasicSamples.CloneableEntityDialog; };
            CloneableEntityGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CloneableEntityGrid);
            return CloneableEntityGrid;
        }(coromendal.Northwind.ProductGrid));
        BasicSamples.CloneableEntityGrid = CloneableEntityGrid;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChartInDialog = (function (_super) {
            __extends(ChartInDialog, _super);
            function ChartInDialog() {
                _super.apply(this, arguments);
            }
            ChartInDialog.initializePage = function () {
                $(function () {
                    $('#LaunchDialogButton').click(function (e) {
                        (new ChartInDialog()).dialogOpen();
                    });
                });
            };
            ChartInDialog.prototype.onDialogOpen = function () {
                var _this = this;
                _super.prototype.onDialogOpen.call(this);
                BasicSamples.BasicSamplesService.OrdersByShipper({}, function (response) {
                    _this.areaChart = new Morris.Area({
                        element: _this.idPrefix + 'Chart',
                        resize: true, parseTime: false,
                        data: response.Values,
                        xkey: 'Month',
                        ykeys: response.ShipperKeys, labels: response.ShipperLabels, hideHover: 'auto'
                    });
                });
                this.element.closest('.ui-dialog').bind('resize', function () { return _this.arrange(); });
            };
            ChartInDialog.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
                this.areaChart && this.areaChart.redraw();
            };
            ChartInDialog.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return "<div id='~_Chart'></div>";
            };
            ChartInDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.title = 'Orders by Shipper';
                return opt;
            };
            ChartInDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.resizable(),
                Serenity.Decorators.maximizable()
            ], ChartInDialog);
            return ChartInDialog;
        }(Serenity.TemplatedDialog));
        BasicSamples.ChartInDialog = ChartInDialog;
    })(BasicSamples = coromendal.BasicSamples || (coromendal.BasicSamples = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                _super.call(this, div);
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return {
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }; });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = this;
                _super.call(this, opt);
                this.permissions = new Administration.RoleCheckEditor(this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = this;
                _super.call(this, container, opt);
                this.rolePermissions = {};
                var titleByKey = {};
                var permissionKeys = this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return {
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }; });
                this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                this.setItems(items);
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.rolePermissions[x.Key]); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.rolePermissions[item.Key]);
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            PermissionCheckEditor.prototype.get_value = function () {
                var result = [];
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                        result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.set_value = function (value) {
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.GrantRevoke = null;
                }
                if (value != null) {
                    for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                        var row = value_1[_b];
                        var r = this.view.getItemById(row.PermissionKey);
                        if (r) {
                            r.GrantRevoke = Q.coalesce(row.Granted, true);
                        }
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor.prototype.get_rolePermissions = function () {
                return Object.keys(this.rolePermissions);
            };
            PermissionCheckEditor.prototype.set_rolePermissions = function (value) {
                this.rolePermissions = {};
                if (value) {
                    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                        var k = value_2[_i];
                        this.rolePermissions[k] = true;
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = this;
                _super.call(this, opt);
                this.permissions = new Administration.PermissionCheckEditor(this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities);
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.set_rolePermissions(response.Entities);
                });
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.get_value(),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var AcnListFormatter = (function () {
            function AcnListFormatter() {
            }
            AcnListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Administration.UserRow.getLookup().itemById;
                console.log(byId);
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.Username : x); }).join(", ");
            };
            AcnListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], AcnListFormatter);
            return AcnListFormatter;
        }());
        Administration.AcnListFormatter = AcnListFormatter;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var UserDialog = (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = this;
                _super.call(this);
                this.form = new Administration.UserForm(this.idPrefix);
                this.form.Password.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                this.form.PasswordConfirm.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var UserFormatter = (function () {
            function UserFormatter() {
            }
            UserFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList)
                    return "";
                var name = "";
                var byId = Administration.UserRow.getLookup().itemById;
                for (var key in byId) {
                    if (idList == byId[key].UserId) {
                        name = byId[key].Username;
                    }
                }
                return name;
            };
            UserFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], UserFormatter);
            return UserFormatter;
        }());
        Administration.UserFormatter = UserFormatter;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var UserGrid = (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                _super.call(this, container);
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = coromendal.Authorization || (coromendal.Authorization = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = this;
                _super.call(this, container);
                this.element.on('keyup.' + this.uniqueName + ' change.' + this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return RSVP.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = this;
                _super.call(this, opt);
                this.permissions = new Administration.PermissionCheckEditor(this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities.map(function (x) { return ({ PermissionKey: x }); }));
                });
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.get_value().map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var RoleDialog = (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.RoleForm(this.idPrefix);
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var RoleFormater = (function () {
            function RoleFormater() {
            }
            RoleFormater.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList)
                    return "";
                var name = "";
                var byId = Administration.RoleRow.getLookup().itemById;
                for (var key in byId) {
                    if (idList == byId[key].RoleId) {
                        name = byId[key].RoleName;
                    }
                }
                return name;
            };
            RoleFormater = __decorate([
                Serenity.Decorators.registerFormatter()
            ], RoleFormater);
            return RoleFormater;
        }());
        Administration.RoleFormater = RoleFormater;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var RoleGrid = (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                _super.call(this, container);
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var MasterAcnDialog = (function (_super) {
            __extends(MasterAcnDialog, _super);
            function MasterAcnDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.MasterAcnForm(this.idPrefix);
            }
            MasterAcnDialog.prototype.getFormKey = function () { return Administration.MasterAcnForm.formKey; };
            MasterAcnDialog.prototype.getIdProperty = function () { return Administration.MasterAcnRow.idProperty; };
            MasterAcnDialog.prototype.getLocalTextPrefix = function () { return Administration.MasterAcnRow.localTextPrefix; };
            MasterAcnDialog.prototype.getNameProperty = function () { return Administration.MasterAcnRow.nameProperty; };
            MasterAcnDialog.prototype.getService = function () { return Administration.MasterAcnService.baseUrl; };
            MasterAcnDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MasterAcnDialog);
            return MasterAcnDialog;
        }(Serenity.EntityDialog));
        Administration.MasterAcnDialog = MasterAcnDialog;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var MasterAcnEditor = (function (_super) {
            __extends(MasterAcnEditor, _super);
            function MasterAcnEditor(container) {
                _super.call(this, container);
            }
            MasterAcnEditor.prototype.getColumnsKey = function () { return 'Administration.MasterAcn'; };
            MasterAcnEditor.prototype.getDialogType = function () { return Administration.MasterAcnEditorDialog; };
            MasterAcnEditor.prototype.getLocalTextPrefix = function () { return Administration.MasterAcnRow.localTextPrefix; };
            MasterAcnEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterAcnEditor);
            return MasterAcnEditor;
        }(coromendal.Common.GridEditorBase));
        Administration.MasterAcnEditor = MasterAcnEditor;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var MasterAcnEditorDialog = (function (_super) {
            __extends(MasterAcnEditorDialog, _super);
            function MasterAcnEditorDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.MasterAcnForm(this.idPrefix);
            }
            MasterAcnEditorDialog.prototype.getFormKey = function () { return Administration.MasterAcnForm.formKey; };
            MasterAcnEditorDialog.prototype.getLocalTextPrefix = function () { return Administration.MasterAcnRow.localTextPrefix; };
            MasterAcnEditorDialog.prototype.getNameProperty = function () { return Administration.MasterAcnRow.nameProperty; };
            MasterAcnEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MasterAcnEditorDialog);
            return MasterAcnEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        Administration.MasterAcnEditorDialog = MasterAcnEditorDialog;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var MasterAcnGrid = (function (_super) {
            __extends(MasterAcnGrid, _super);
            function MasterAcnGrid(container) {
                _super.call(this, container);
            }
            MasterAcnGrid.prototype.getColumnsKey = function () { return 'Administration.MasterAcn'; };
            MasterAcnGrid.prototype.getDialogType = function () { return Administration.MasterAcnDialog; };
            MasterAcnGrid.prototype.getIdProperty = function () { return Administration.MasterAcnRow.idProperty; };
            MasterAcnGrid.prototype.getLocalTextPrefix = function () { return Administration.MasterAcnRow.localTextPrefix; };
            MasterAcnGrid.prototype.getService = function () { return Administration.MasterAcnService.baseUrl; };
            MasterAcnGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MasterAcnGrid);
            return MasterAcnGrid;
        }(Serenity.EntityGrid));
        Administration.MasterAcnGrid = MasterAcnGrid;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.LanguageForm(this.idPrefix);
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                _super.call(this, container);
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = coromendal.Administration || (coromendal.Administration = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SuggestionDialog = (function (_super) {
            __extends(SuggestionDialog, _super);
            function SuggestionDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.SuggestionForm(this.idPrefix);
            }
            SuggestionDialog.prototype.getFormKey = function () { return ACN.SuggestionForm.formKey; };
            SuggestionDialog.prototype.getIdProperty = function () { return ACN.SuggestionRow.idProperty; };
            SuggestionDialog.prototype.getLocalTextPrefix = function () { return ACN.SuggestionRow.localTextPrefix; };
            SuggestionDialog.prototype.getNameProperty = function () { return ACN.SuggestionRow.nameProperty; };
            SuggestionDialog.prototype.getService = function () { return ACN.SuggestionService.baseUrl; };
            SuggestionDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SuggestionDialog);
            return SuggestionDialog;
        }(Serenity.EntityDialog));
        ACN.SuggestionDialog = SuggestionDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SuggestionEditor = (function (_super) {
            __extends(SuggestionEditor, _super);
            function SuggestionEditor(container) {
                _super.call(this, container);
            }
            SuggestionEditor.prototype.getColumnsKey = function () { return 'ACN.Suggestion'; };
            SuggestionEditor.prototype.getDialogType = function () { return ACN.SuggestionEditorDialog; };
            SuggestionEditor.prototype.getLocalTextPrefix = function () { return ACN.SuggestionRow.localTextPrefix; };
            SuggestionEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SuggestionEditor);
            return SuggestionEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.SuggestionEditor = SuggestionEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SuggestionEditorDialog = (function (_super) {
            __extends(SuggestionEditorDialog, _super);
            function SuggestionEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.SuggestionForm(this.idPrefix);
            }
            SuggestionEditorDialog.prototype.getFormKey = function () { return ACN.SuggestionForm.formKey; };
            SuggestionEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.SuggestionRow.localTextPrefix; };
            SuggestionEditorDialog.prototype.getNameProperty = function () { return ACN.SuggestionRow.nameProperty; };
            SuggestionEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SuggestionEditorDialog);
            return SuggestionEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.SuggestionEditorDialog = SuggestionEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SuggestionGrid = (function (_super) {
            __extends(SuggestionGrid, _super);
            function SuggestionGrid(container) {
                _super.call(this, container);
            }
            SuggestionGrid.prototype.getColumnsKey = function () { return 'ACN.Suggestion'; };
            SuggestionGrid.prototype.getDialogType = function () { return ACN.SuggestionDialog; };
            SuggestionGrid.prototype.getIdProperty = function () { return ACN.SuggestionRow.idProperty; };
            SuggestionGrid.prototype.getLocalTextPrefix = function () { return ACN.SuggestionRow.localTextPrefix; };
            SuggestionGrid.prototype.getService = function () { return ACN.SuggestionService.baseUrl; };
            SuggestionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SuggestionGrid);
            return SuggestionGrid;
        }(Serenity.EntityGrid));
        ACN.SuggestionGrid = SuggestionGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ScopeDialog = (function (_super) {
            __extends(ScopeDialog, _super);
            function ScopeDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.ScopeForm(this.idPrefix);
            }
            ScopeDialog.prototype.getFormKey = function () { return ACN.ScopeForm.formKey; };
            ScopeDialog.prototype.getIdProperty = function () { return ACN.ScopeRow.idProperty; };
            ScopeDialog.prototype.getLocalTextPrefix = function () { return ACN.ScopeRow.localTextPrefix; };
            ScopeDialog.prototype.getNameProperty = function () { return ACN.ScopeRow.nameProperty; };
            ScopeDialog.prototype.getService = function () { return ACN.ScopeService.baseUrl; };
            ScopeDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ScopeDialog);
            return ScopeDialog;
        }(Serenity.EntityDialog));
        ACN.ScopeDialog = ScopeDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ScopeEditor = (function (_super) {
            __extends(ScopeEditor, _super);
            function ScopeEditor(container) {
                _super.call(this, container);
            }
            ScopeEditor.prototype.getColumnsKey = function () { return 'ACN.Scope'; };
            ScopeEditor.prototype.getDialogType = function () { return ACN.ScopeEditorDialog; };
            ScopeEditor.prototype.getLocalTextPrefix = function () { return ACN.ScopeRow.localTextPrefix; };
            ScopeEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ScopeEditor);
            return ScopeEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.ScopeEditor = ScopeEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ScopeEditorDialog = (function (_super) {
            __extends(ScopeEditorDialog, _super);
            function ScopeEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.ScopeForm(this.idPrefix);
            }
            ScopeEditorDialog.prototype.getFormKey = function () { return ACN.ScopeForm.formKey; };
            ScopeEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.ScopeRow.localTextPrefix; };
            ScopeEditorDialog.prototype.getNameProperty = function () { return ACN.ScopeRow.nameProperty; };
            ScopeEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ScopeEditorDialog);
            return ScopeEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.ScopeEditorDialog = ScopeEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SbuDialog = (function (_super) {
            __extends(SbuDialog, _super);
            function SbuDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.SbuForm(this.idPrefix);
            }
            SbuDialog.prototype.getFormKey = function () { return ACN.SbuForm.formKey; };
            SbuDialog.prototype.getIdProperty = function () { return ACN.SbuRow.idProperty; };
            SbuDialog.prototype.getLocalTextPrefix = function () { return ACN.SbuRow.localTextPrefix; };
            SbuDialog.prototype.getNameProperty = function () { return ACN.SbuRow.nameProperty; };
            SbuDialog.prototype.getService = function () { return ACN.SbuService.baseUrl; };
            SbuDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SbuDialog);
            return SbuDialog;
        }(Serenity.EntityDialog));
        ACN.SbuDialog = SbuDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SbuEditor = (function (_super) {
            __extends(SbuEditor, _super);
            function SbuEditor(container) {
                _super.call(this, container);
            }
            SbuEditor.prototype.getColumnsKey = function () { return 'ACN.Sbu'; };
            SbuEditor.prototype.getDialogType = function () { return ACN.SbuEditorDialog; };
            SbuEditor.prototype.getLocalTextPrefix = function () { return ACN.SbuRow.localTextPrefix; };
            SbuEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SbuEditor);
            return SbuEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.SbuEditor = SbuEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SbuEditorDialog = (function (_super) {
            __extends(SbuEditorDialog, _super);
            function SbuEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.SbuForm(this.idPrefix);
            }
            SbuEditorDialog.prototype.getFormKey = function () { return ACN.SbuForm.formKey; };
            SbuEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.SbuRow.localTextPrefix; };
            SbuEditorDialog.prototype.getNameProperty = function () { return ACN.SbuRow.nameProperty; };
            SbuEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SbuEditorDialog);
            return SbuEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.SbuEditorDialog = SbuEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SbuGrid = (function (_super) {
            __extends(SbuGrid, _super);
            function SbuGrid(container) {
                _super.call(this, container);
            }
            SbuGrid.prototype.getColumnsKey = function () { return 'ACN.Sbu'; };
            SbuGrid.prototype.getDialogType = function () { return ACN.SbuDialog; };
            SbuGrid.prototype.getIdProperty = function () { return ACN.SbuRow.idProperty; };
            SbuGrid.prototype.getLocalTextPrefix = function () { return ACN.SbuRow.localTextPrefix; };
            SbuGrid.prototype.getService = function () { return ACN.SbuService.baseUrl; };
            SbuGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SbuGrid);
            return SbuGrid;
        }(Serenity.EntityGrid));
        ACN.SbuGrid = SbuGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SatisfactionratingDialog = (function (_super) {
            __extends(SatisfactionratingDialog, _super);
            function SatisfactionratingDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.SatisfactionratingForm(this.idPrefix);
            }
            SatisfactionratingDialog.prototype.getFormKey = function () { return ACN.SatisfactionratingForm.formKey; };
            SatisfactionratingDialog.prototype.getIdProperty = function () { return ACN.SatisfactionratingRow.idProperty; };
            SatisfactionratingDialog.prototype.getLocalTextPrefix = function () { return ACN.SatisfactionratingRow.localTextPrefix; };
            SatisfactionratingDialog.prototype.getNameProperty = function () { return ACN.SatisfactionratingRow.nameProperty; };
            SatisfactionratingDialog.prototype.getService = function () { return ACN.SatisfactionratingService.baseUrl; };
            SatisfactionratingDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SatisfactionratingDialog);
            return SatisfactionratingDialog;
        }(Serenity.EntityDialog));
        ACN.SatisfactionratingDialog = SatisfactionratingDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SatisfactionratingEditor = (function (_super) {
            __extends(SatisfactionratingEditor, _super);
            function SatisfactionratingEditor(container) {
                _super.call(this, container);
            }
            SatisfactionratingEditor.prototype.getColumnsKey = function () { return 'ACN.Satisfactionrating'; };
            SatisfactionratingEditor.prototype.getDialogType = function () { return ACN.SatisfactionratingEditorDialog; };
            SatisfactionratingEditor.prototype.getLocalTextPrefix = function () { return ACN.SatisfactionratingRow.localTextPrefix; };
            SatisfactionratingEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SatisfactionratingEditor);
            return SatisfactionratingEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.SatisfactionratingEditor = SatisfactionratingEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SatisfactionratingEditorDialog = (function (_super) {
            __extends(SatisfactionratingEditorDialog, _super);
            function SatisfactionratingEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.SatisfactionratingForm(this.idPrefix);
            }
            SatisfactionratingEditorDialog.prototype.getFormKey = function () { return ACN.SatisfactionratingForm.formKey; };
            SatisfactionratingEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.SatisfactionratingRow.localTextPrefix; };
            SatisfactionratingEditorDialog.prototype.getNameProperty = function () { return ACN.SatisfactionratingRow.nameProperty; };
            SatisfactionratingEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SatisfactionratingEditorDialog);
            return SatisfactionratingEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.SatisfactionratingEditorDialog = SatisfactionratingEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var SatisfactionratingGrid = (function (_super) {
            __extends(SatisfactionratingGrid, _super);
            function SatisfactionratingGrid(container) {
                _super.call(this, container);
            }
            SatisfactionratingGrid.prototype.getColumnsKey = function () { return 'ACN.Satisfactionrating'; };
            SatisfactionratingGrid.prototype.getDialogType = function () { return ACN.SatisfactionratingDialog; };
            SatisfactionratingGrid.prototype.getIdProperty = function () { return ACN.SatisfactionratingRow.idProperty; };
            SatisfactionratingGrid.prototype.getLocalTextPrefix = function () { return ACN.SatisfactionratingRow.localTextPrefix; };
            SatisfactionratingGrid.prototype.getService = function () { return ACN.SatisfactionratingService.baseUrl; };
            SatisfactionratingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SatisfactionratingGrid);
            return SatisfactionratingGrid;
        }(Serenity.EntityGrid));
        ACN.SatisfactionratingGrid = SatisfactionratingGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RootcauseDialog = (function (_super) {
            __extends(RootcauseDialog, _super);
            function RootcauseDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.RootcauseForm(this.idPrefix);
            }
            RootcauseDialog.prototype.getFormKey = function () { return ACN.RootcauseForm.formKey; };
            RootcauseDialog.prototype.getIdProperty = function () { return ACN.RootcauseRow.idProperty; };
            RootcauseDialog.prototype.getLocalTextPrefix = function () { return ACN.RootcauseRow.localTextPrefix; };
            RootcauseDialog.prototype.getNameProperty = function () { return ACN.RootcauseRow.nameProperty; };
            RootcauseDialog.prototype.getService = function () { return ACN.RootcauseService.baseUrl; };
            RootcauseDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], RootcauseDialog);
            return RootcauseDialog;
        }(Serenity.EntityDialog));
        ACN.RootcauseDialog = RootcauseDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RootcauseEditor = (function (_super) {
            __extends(RootcauseEditor, _super);
            function RootcauseEditor(container) {
                _super.call(this, container);
            }
            RootcauseEditor.prototype.getColumnsKey = function () { return 'ACN.Rootcause'; };
            RootcauseEditor.prototype.getDialogType = function () { return ACN.RootcauseEditorDialog; };
            RootcauseEditor.prototype.getLocalTextPrefix = function () { return ACN.RootcauseRow.localTextPrefix; };
            RootcauseEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], RootcauseEditor);
            return RootcauseEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.RootcauseEditor = RootcauseEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RootcauseEditorDialog = (function (_super) {
            __extends(RootcauseEditorDialog, _super);
            function RootcauseEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.RootcauseForm(this.idPrefix);
            }
            RootcauseEditorDialog.prototype.getFormKey = function () { return ACN.RootcauseForm.formKey; };
            RootcauseEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.RootcauseRow.localTextPrefix; };
            RootcauseEditorDialog.prototype.getNameProperty = function () { return ACN.RootcauseRow.nameProperty; };
            RootcauseEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], RootcauseEditorDialog);
            return RootcauseEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.RootcauseEditorDialog = RootcauseEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RootcauseGrid = (function (_super) {
            __extends(RootcauseGrid, _super);
            function RootcauseGrid(container) {
                _super.call(this, container);
            }
            RootcauseGrid.prototype.getColumnsKey = function () { return 'ACN.Rootcause'; };
            RootcauseGrid.prototype.getDialogType = function () { return ACN.RootcauseDialog; };
            RootcauseGrid.prototype.getIdProperty = function () { return ACN.RootcauseRow.idProperty; };
            RootcauseGrid.prototype.getLocalTextPrefix = function () { return ACN.RootcauseRow.localTextPrefix; };
            RootcauseGrid.prototype.getService = function () { return ACN.RootcauseService.baseUrl; };
            RootcauseGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RootcauseGrid);
            return RootcauseGrid;
        }(Serenity.EntityGrid));
        ACN.RootcauseGrid = RootcauseGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RiskratingDialog = (function (_super) {
            __extends(RiskratingDialog, _super);
            function RiskratingDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.RiskratingForm(this.idPrefix);
            }
            RiskratingDialog.prototype.getFormKey = function () { return ACN.RiskratingForm.formKey; };
            RiskratingDialog.prototype.getIdProperty = function () { return ACN.RiskratingRow.idProperty; };
            RiskratingDialog.prototype.getLocalTextPrefix = function () { return ACN.RiskratingRow.localTextPrefix; };
            RiskratingDialog.prototype.getNameProperty = function () { return ACN.RiskratingRow.nameProperty; };
            RiskratingDialog.prototype.getService = function () { return ACN.RiskratingService.baseUrl; };
            RiskratingDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], RiskratingDialog);
            return RiskratingDialog;
        }(Serenity.EntityDialog));
        ACN.RiskratingDialog = RiskratingDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RiskratingEditor = (function (_super) {
            __extends(RiskratingEditor, _super);
            function RiskratingEditor(container) {
                _super.call(this, container);
            }
            RiskratingEditor.prototype.getColumnsKey = function () { return 'ACN.Riskrating'; };
            RiskratingEditor.prototype.getDialogType = function () { return ACN.RiskratingEditorDialog; };
            RiskratingEditor.prototype.getLocalTextPrefix = function () { return ACN.RiskratingRow.localTextPrefix; };
            RiskratingEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], RiskratingEditor);
            return RiskratingEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.RiskratingEditor = RiskratingEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RiskratingEditorDialog = (function (_super) {
            __extends(RiskratingEditorDialog, _super);
            function RiskratingEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.RiskratingForm(this.idPrefix);
            }
            RiskratingEditorDialog.prototype.getFormKey = function () { return ACN.RiskratingForm.formKey; };
            RiskratingEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.RiskratingRow.localTextPrefix; };
            RiskratingEditorDialog.prototype.getNameProperty = function () { return ACN.RiskratingRow.nameProperty; };
            RiskratingEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], RiskratingEditorDialog);
            return RiskratingEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.RiskratingEditorDialog = RiskratingEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RiskratingGrid = (function (_super) {
            __extends(RiskratingGrid, _super);
            function RiskratingGrid(container) {
                _super.call(this, container);
            }
            RiskratingGrid.prototype.getColumnsKey = function () { return 'ACN.Riskrating'; };
            RiskratingGrid.prototype.getDialogType = function () { return ACN.RiskratingDialog; };
            RiskratingGrid.prototype.getIdProperty = function () { return ACN.RiskratingRow.idProperty; };
            RiskratingGrid.prototype.getLocalTextPrefix = function () { return ACN.RiskratingRow.localTextPrefix; };
            RiskratingGrid.prototype.getService = function () { return ACN.RiskratingService.baseUrl; };
            RiskratingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RiskratingGrid);
            return RiskratingGrid;
        }(Serenity.EntityGrid));
        ACN.RiskratingGrid = RiskratingGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RiskmatrixDialog = (function (_super) {
            __extends(RiskmatrixDialog, _super);
            function RiskmatrixDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.RiskmatrixForm(this.idPrefix);
            }
            RiskmatrixDialog.prototype.getFormKey = function () { return ACN.RiskmatrixForm.formKey; };
            RiskmatrixDialog.prototype.getIdProperty = function () { return ACN.RiskmatrixRow.idProperty; };
            RiskmatrixDialog.prototype.getLocalTextPrefix = function () { return ACN.RiskmatrixRow.localTextPrefix; };
            RiskmatrixDialog.prototype.getNameProperty = function () { return ACN.RiskmatrixRow.nameProperty; };
            RiskmatrixDialog.prototype.getService = function () { return ACN.RiskmatrixService.baseUrl; };
            RiskmatrixDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], RiskmatrixDialog);
            return RiskmatrixDialog;
        }(Serenity.EntityDialog));
        ACN.RiskmatrixDialog = RiskmatrixDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RiskmatrixEditor = (function (_super) {
            __extends(RiskmatrixEditor, _super);
            function RiskmatrixEditor(container) {
                _super.call(this, container);
            }
            RiskmatrixEditor.prototype.getColumnsKey = function () { return 'ACN.Riskmatrix'; };
            RiskmatrixEditor.prototype.getDialogType = function () { return ACN.RiskmatrixEditorDialog; };
            RiskmatrixEditor.prototype.getLocalTextPrefix = function () { return ACN.RiskmatrixRow.localTextPrefix; };
            RiskmatrixEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], RiskmatrixEditor);
            return RiskmatrixEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.RiskmatrixEditor = RiskmatrixEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RiskmatrixEditorDialog = (function (_super) {
            __extends(RiskmatrixEditorDialog, _super);
            function RiskmatrixEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.RiskmatrixForm(this.idPrefix);
            }
            RiskmatrixEditorDialog.prototype.getFormKey = function () { return ACN.RiskmatrixForm.formKey; };
            RiskmatrixEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.RiskmatrixRow.localTextPrefix; };
            RiskmatrixEditorDialog.prototype.getNameProperty = function () { return ACN.RiskmatrixRow.nameProperty; };
            RiskmatrixEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], RiskmatrixEditorDialog);
            return RiskmatrixEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.RiskmatrixEditorDialog = RiskmatrixEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var RiskmatrixGrid = (function (_super) {
            __extends(RiskmatrixGrid, _super);
            function RiskmatrixGrid(container) {
                _super.call(this, container);
            }
            RiskmatrixGrid.prototype.getColumnsKey = function () { return 'ACN.Riskmatrix'; };
            RiskmatrixGrid.prototype.getDialogType = function () { return ACN.RiskmatrixDialog; };
            RiskmatrixGrid.prototype.getIdProperty = function () { return ACN.RiskmatrixRow.idProperty; };
            RiskmatrixGrid.prototype.getLocalTextPrefix = function () { return ACN.RiskmatrixRow.localTextPrefix; };
            RiskmatrixGrid.prototype.getService = function () { return ACN.RiskmatrixService.baseUrl; };
            RiskmatrixGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RiskmatrixGrid);
            return RiskmatrixGrid;
        }(Serenity.EntityGrid));
        ACN.RiskmatrixGrid = RiskmatrixGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var QuestionsDialog = (function (_super) {
            __extends(QuestionsDialog, _super);
            function QuestionsDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.QuestionsForm(this.idPrefix);
            }
            QuestionsDialog.prototype.getFormKey = function () { return ACN.QuestionsForm.formKey; };
            QuestionsDialog.prototype.getIdProperty = function () { return ACN.QuestionsRow.idProperty; };
            QuestionsDialog.prototype.getLocalTextPrefix = function () { return ACN.QuestionsRow.localTextPrefix; };
            QuestionsDialog.prototype.getNameProperty = function () { return ACN.QuestionsRow.nameProperty; };
            QuestionsDialog.prototype.getService = function () { return ACN.QuestionsService.baseUrl; };
            QuestionsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], QuestionsDialog);
            return QuestionsDialog;
        }(Serenity.EntityDialog));
        ACN.QuestionsDialog = QuestionsDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var QuestionsEditor = (function (_super) {
            __extends(QuestionsEditor, _super);
            function QuestionsEditor(container) {
                _super.call(this, container);
            }
            QuestionsEditor.prototype.getColumnsKey = function () { return 'ACN.Questions'; };
            QuestionsEditor.prototype.getDialogType = function () { return ACN.QuestionsEditorDialog; };
            QuestionsEditor.prototype.getLocalTextPrefix = function () { return ACN.QuestionsRow.localTextPrefix; };
            QuestionsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], QuestionsEditor);
            return QuestionsEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.QuestionsEditor = QuestionsEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var QuestionsEditorDialog = (function (_super) {
            __extends(QuestionsEditorDialog, _super);
            function QuestionsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.QuestionsForm(this.idPrefix);
            }
            QuestionsEditorDialog.prototype.getFormKey = function () { return ACN.QuestionsForm.formKey; };
            QuestionsEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.QuestionsRow.localTextPrefix; };
            QuestionsEditorDialog.prototype.getNameProperty = function () { return ACN.QuestionsRow.nameProperty; };
            QuestionsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], QuestionsEditorDialog);
            return QuestionsEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.QuestionsEditorDialog = QuestionsEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var QuestionsGrid = (function (_super) {
            __extends(QuestionsGrid, _super);
            function QuestionsGrid(container) {
                _super.call(this, container);
            }
            QuestionsGrid.prototype.getColumnsKey = function () { return 'ACN.Questions'; };
            QuestionsGrid.prototype.getDialogType = function () { return ACN.QuestionsDialog; };
            QuestionsGrid.prototype.getIdProperty = function () { return ACN.QuestionsRow.idProperty; };
            QuestionsGrid.prototype.getLocalTextPrefix = function () { return ACN.QuestionsRow.localTextPrefix; };
            QuestionsGrid.prototype.getService = function () { return ACN.QuestionsService.baseUrl; };
            QuestionsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], QuestionsGrid);
            return QuestionsGrid;
        }(Serenity.EntityGrid));
        ACN.QuestionsGrid = QuestionsGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var PercentageDialog = (function (_super) {
            __extends(PercentageDialog, _super);
            function PercentageDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.PercentageForm(this.idPrefix);
            }
            PercentageDialog.prototype.getFormKey = function () { return ACN.PercentageForm.formKey; };
            PercentageDialog.prototype.getIdProperty = function () { return ACN.PercentageRow.idProperty; };
            PercentageDialog.prototype.getLocalTextPrefix = function () { return ACN.PercentageRow.localTextPrefix; };
            PercentageDialog.prototype.getNameProperty = function () { return ACN.PercentageRow.nameProperty; };
            PercentageDialog.prototype.getService = function () { return ACN.PercentageService.baseUrl; };
            PercentageDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PercentageDialog);
            return PercentageDialog;
        }(Serenity.EntityDialog));
        ACN.PercentageDialog = PercentageDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var PercentageEditor = (function (_super) {
            __extends(PercentageEditor, _super);
            function PercentageEditor(container) {
                _super.call(this, container);
            }
            PercentageEditor.prototype.getColumnsKey = function () { return 'ACN.Percentage'; };
            PercentageEditor.prototype.getDialogType = function () { return ACN.PercentageEditorDialog; };
            PercentageEditor.prototype.getLocalTextPrefix = function () { return ACN.PercentageRow.localTextPrefix; };
            PercentageEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PercentageEditor);
            return PercentageEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.PercentageEditor = PercentageEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var PercentageEditorDialog = (function (_super) {
            __extends(PercentageEditorDialog, _super);
            function PercentageEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.PercentageForm(this.idPrefix);
            }
            PercentageEditorDialog.prototype.getFormKey = function () { return ACN.PercentageForm.formKey; };
            PercentageEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.PercentageRow.localTextPrefix; };
            PercentageEditorDialog.prototype.getNameProperty = function () { return ACN.PercentageRow.nameProperty; };
            PercentageEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PercentageEditorDialog);
            return PercentageEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.PercentageEditorDialog = PercentageEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var PercentageGrid = (function (_super) {
            __extends(PercentageGrid, _super);
            function PercentageGrid(container) {
                _super.call(this, container);
            }
            PercentageGrid.prototype.getColumnsKey = function () { return 'ACN.Percentage'; };
            PercentageGrid.prototype.getDialogType = function () { return ACN.PercentageDialog; };
            PercentageGrid.prototype.getIdProperty = function () { return ACN.PercentageRow.idProperty; };
            PercentageGrid.prototype.getLocalTextPrefix = function () { return ACN.PercentageRow.localTextPrefix; };
            PercentageGrid.prototype.getService = function () { return ACN.PercentageService.baseUrl; };
            PercentageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PercentageGrid);
            return PercentageGrid;
        }(Serenity.EntityGrid));
        ACN.PercentageGrid = PercentageGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ObservationpreviousauditDialog = (function (_super) {
            __extends(ObservationpreviousauditDialog, _super);
            function ObservationpreviousauditDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.ObservationpreviousauditForm(this.idPrefix);
            }
            ObservationpreviousauditDialog.prototype.getFormKey = function () { return ACN.ObservationpreviousauditForm.formKey; };
            ObservationpreviousauditDialog.prototype.getIdProperty = function () { return ACN.ObservationpreviousauditRow.idProperty; };
            ObservationpreviousauditDialog.prototype.getLocalTextPrefix = function () { return ACN.ObservationpreviousauditRow.localTextPrefix; };
            ObservationpreviousauditDialog.prototype.getNameProperty = function () { return ACN.ObservationpreviousauditRow.nameProperty; };
            ObservationpreviousauditDialog.prototype.getService = function () { return ACN.ObservationpreviousauditService.baseUrl; };
            ObservationpreviousauditDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ObservationpreviousauditDialog);
            return ObservationpreviousauditDialog;
        }(Serenity.EntityDialog));
        ACN.ObservationpreviousauditDialog = ObservationpreviousauditDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ObservationpreviousauditEditor = (function (_super) {
            __extends(ObservationpreviousauditEditor, _super);
            function ObservationpreviousauditEditor(container) {
                _super.call(this, container);
            }
            ObservationpreviousauditEditor.prototype.getColumnsKey = function () { return 'ACN.Observationpreviousaudit'; };
            ObservationpreviousauditEditor.prototype.getDialogType = function () { return ACN.ObservationpreviousauditEditorDialog; };
            ObservationpreviousauditEditor.prototype.getLocalTextPrefix = function () { return ACN.ObservationpreviousauditRow.localTextPrefix; };
            ObservationpreviousauditEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ObservationpreviousauditEditor);
            return ObservationpreviousauditEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.ObservationpreviousauditEditor = ObservationpreviousauditEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ObservationpreviousauditEditorDialog = (function (_super) {
            __extends(ObservationpreviousauditEditorDialog, _super);
            function ObservationpreviousauditEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.ObservationpreviousauditForm(this.idPrefix);
            }
            ObservationpreviousauditEditorDialog.prototype.getFormKey = function () { return ACN.ObservationpreviousauditForm.formKey; };
            ObservationpreviousauditEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.ObservationpreviousauditRow.localTextPrefix; };
            ObservationpreviousauditEditorDialog.prototype.getNameProperty = function () { return ACN.ObservationpreviousauditRow.nameProperty; };
            ObservationpreviousauditEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ObservationpreviousauditEditorDialog);
            return ObservationpreviousauditEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.ObservationpreviousauditEditorDialog = ObservationpreviousauditEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ObservationpreviousauditGrid = (function (_super) {
            __extends(ObservationpreviousauditGrid, _super);
            function ObservationpreviousauditGrid(container) {
                _super.call(this, container);
            }
            ObservationpreviousauditGrid.prototype.getColumnsKey = function () { return 'ACN.Observationpreviousaudit'; };
            ObservationpreviousauditGrid.prototype.getDialogType = function () { return ACN.ObservationpreviousauditDialog; };
            ObservationpreviousauditGrid.prototype.getIdProperty = function () { return ACN.ObservationpreviousauditRow.idProperty; };
            ObservationpreviousauditGrid.prototype.getLocalTextPrefix = function () { return ACN.ObservationpreviousauditRow.localTextPrefix; };
            ObservationpreviousauditGrid.prototype.getService = function () { return ACN.ObservationpreviousauditService.baseUrl; };
            ObservationpreviousauditGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ObservationpreviousauditGrid);
            return ObservationpreviousauditGrid;
        }(Serenity.EntityGrid));
        ACN.ObservationpreviousauditGrid = ObservationpreviousauditGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ObservationpendingDialog = (function (_super) {
            __extends(ObservationpendingDialog, _super);
            function ObservationpendingDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.ObservationpendingForm(this.idPrefix);
            }
            ObservationpendingDialog.prototype.getFormKey = function () { return ACN.ObservationpendingForm.formKey; };
            ObservationpendingDialog.prototype.getIdProperty = function () { return ACN.ObservationpendingRow.idProperty; };
            ObservationpendingDialog.prototype.getLocalTextPrefix = function () { return ACN.ObservationpendingRow.localTextPrefix; };
            ObservationpendingDialog.prototype.getNameProperty = function () { return ACN.ObservationpendingRow.nameProperty; };
            ObservationpendingDialog.prototype.getService = function () { return ACN.ObservationpendingService.baseUrl; };
            ObservationpendingDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ObservationpendingDialog);
            return ObservationpendingDialog;
        }(Serenity.EntityDialog));
        ACN.ObservationpendingDialog = ObservationpendingDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ObservationpendingEditor = (function (_super) {
            __extends(ObservationpendingEditor, _super);
            function ObservationpendingEditor(container) {
                _super.call(this, container);
            }
            ObservationpendingEditor.prototype.getColumnsKey = function () { return 'ACN.Observationpending'; };
            ObservationpendingEditor.prototype.getDialogType = function () { return ACN.ObservationpendingEditorDialog; };
            ObservationpendingEditor.prototype.getLocalTextPrefix = function () { return ACN.ObservationpendingRow.localTextPrefix; };
            ObservationpendingEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ObservationpendingEditor);
            return ObservationpendingEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.ObservationpendingEditor = ObservationpendingEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ObservationpendingEditorDialog = (function (_super) {
            __extends(ObservationpendingEditorDialog, _super);
            function ObservationpendingEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.ObservationpendingForm(this.idPrefix);
            }
            ObservationpendingEditorDialog.prototype.getFormKey = function () { return ACN.ObservationpendingForm.formKey; };
            ObservationpendingEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.ObservationpendingRow.localTextPrefix; };
            ObservationpendingEditorDialog.prototype.getNameProperty = function () { return ACN.ObservationpendingRow.nameProperty; };
            ObservationpendingEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ObservationpendingEditorDialog);
            return ObservationpendingEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.ObservationpendingEditorDialog = ObservationpendingEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ObservationpendingGrid = (function (_super) {
            __extends(ObservationpendingGrid, _super);
            function ObservationpendingGrid(container) {
                _super.call(this, container);
            }
            ObservationpendingGrid.prototype.getColumnsKey = function () { return 'ACN.Observationpending'; };
            ObservationpendingGrid.prototype.getDialogType = function () { return ACN.ObservationpendingDialog; };
            ObservationpendingGrid.prototype.getIdProperty = function () { return ACN.ObservationpendingRow.idProperty; };
            ObservationpendingGrid.prototype.getLocalTextPrefix = function () { return ACN.ObservationpendingRow.localTextPrefix; };
            ObservationpendingGrid.prototype.getService = function () { return ACN.ObservationpendingService.baseUrl; };
            ObservationpendingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ObservationpendingGrid);
            return ObservationpendingGrid;
        }(Serenity.EntityGrid));
        ACN.ObservationpendingGrid = ObservationpendingGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var NewiprovementsDialog = (function (_super) {
            __extends(NewiprovementsDialog, _super);
            function NewiprovementsDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.NewiprovementsForm(this.idPrefix);
            }
            NewiprovementsDialog.prototype.getFormKey = function () { return ACN.NewiprovementsForm.formKey; };
            NewiprovementsDialog.prototype.getIdProperty = function () { return ACN.NewiprovementsRow.idProperty; };
            NewiprovementsDialog.prototype.getLocalTextPrefix = function () { return ACN.NewiprovementsRow.localTextPrefix; };
            NewiprovementsDialog.prototype.getNameProperty = function () { return ACN.NewiprovementsRow.nameProperty; };
            NewiprovementsDialog.prototype.getService = function () { return ACN.NewiprovementsService.baseUrl; };
            NewiprovementsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], NewiprovementsDialog);
            return NewiprovementsDialog;
        }(Serenity.EntityDialog));
        ACN.NewiprovementsDialog = NewiprovementsDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var NewiprovementsEditor = (function (_super) {
            __extends(NewiprovementsEditor, _super);
            function NewiprovementsEditor(container) {
                _super.call(this, container);
            }
            NewiprovementsEditor.prototype.getColumnsKey = function () { return 'ACN.Newiprovements'; };
            NewiprovementsEditor.prototype.getDialogType = function () { return ACN.NewiprovementsEditorDialog; };
            NewiprovementsEditor.prototype.getLocalTextPrefix = function () { return ACN.NewiprovementsRow.localTextPrefix; };
            NewiprovementsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], NewiprovementsEditor);
            return NewiprovementsEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.NewiprovementsEditor = NewiprovementsEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var NewiprovementsEditorDialog = (function (_super) {
            __extends(NewiprovementsEditorDialog, _super);
            function NewiprovementsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.NewiprovementsForm(this.idPrefix);
            }
            NewiprovementsEditorDialog.prototype.getFormKey = function () { return ACN.NewiprovementsForm.formKey; };
            NewiprovementsEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.NewiprovementsRow.localTextPrefix; };
            NewiprovementsEditorDialog.prototype.getNameProperty = function () { return ACN.NewiprovementsRow.nameProperty; };
            NewiprovementsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], NewiprovementsEditorDialog);
            return NewiprovementsEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.NewiprovementsEditorDialog = NewiprovementsEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var NewiprovementsGrid = (function (_super) {
            __extends(NewiprovementsGrid, _super);
            function NewiprovementsGrid(container) {
                _super.call(this, container);
            }
            NewiprovementsGrid.prototype.getColumnsKey = function () { return 'ACN.Newiprovements'; };
            NewiprovementsGrid.prototype.getDialogType = function () { return ACN.NewiprovementsDialog; };
            NewiprovementsGrid.prototype.getIdProperty = function () { return ACN.NewiprovementsRow.idProperty; };
            NewiprovementsGrid.prototype.getLocalTextPrefix = function () { return ACN.NewiprovementsRow.localTextPrefix; };
            NewiprovementsGrid.prototype.getService = function () { return ACN.NewiprovementsService.baseUrl; };
            NewiprovementsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NewiprovementsGrid);
            return NewiprovementsGrid;
        }(Serenity.EntityGrid));
        ACN.NewiprovementsGrid = NewiprovementsGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var NewchangesDialog = (function (_super) {
            __extends(NewchangesDialog, _super);
            function NewchangesDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.NewchangesForm(this.idPrefix);
            }
            NewchangesDialog.prototype.getFormKey = function () { return ACN.NewchangesForm.formKey; };
            NewchangesDialog.prototype.getIdProperty = function () { return ACN.NewchangesRow.idProperty; };
            NewchangesDialog.prototype.getLocalTextPrefix = function () { return ACN.NewchangesRow.localTextPrefix; };
            NewchangesDialog.prototype.getNameProperty = function () { return ACN.NewchangesRow.nameProperty; };
            NewchangesDialog.prototype.getService = function () { return ACN.NewchangesService.baseUrl; };
            NewchangesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], NewchangesDialog);
            return NewchangesDialog;
        }(Serenity.EntityDialog));
        ACN.NewchangesDialog = NewchangesDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var NewchangesEditor = (function (_super) {
            __extends(NewchangesEditor, _super);
            function NewchangesEditor(container) {
                _super.call(this, container);
            }
            NewchangesEditor.prototype.getColumnsKey = function () { return 'ACN.Newchanges'; };
            NewchangesEditor.prototype.getDialogType = function () { return ACN.NewchangesEditorDialog; };
            NewchangesEditor.prototype.getLocalTextPrefix = function () { return ACN.NewchangesRow.localTextPrefix; };
            NewchangesEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], NewchangesEditor);
            return NewchangesEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.NewchangesEditor = NewchangesEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var NewchangesEditorDialog = (function (_super) {
            __extends(NewchangesEditorDialog, _super);
            function NewchangesEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.NewchangesForm(this.idPrefix);
            }
            NewchangesEditorDialog.prototype.getFormKey = function () { return ACN.NewchangesForm.formKey; };
            NewchangesEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.NewchangesRow.localTextPrefix; };
            NewchangesEditorDialog.prototype.getNameProperty = function () { return ACN.NewchangesRow.nameProperty; };
            NewchangesEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], NewchangesEditorDialog);
            return NewchangesEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.NewchangesEditorDialog = NewchangesEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var NewchangesGrid = (function (_super) {
            __extends(NewchangesGrid, _super);
            function NewchangesGrid(container) {
                _super.call(this, container);
            }
            NewchangesGrid.prototype.getColumnsKey = function () { return 'ACN.Newchanges'; };
            NewchangesGrid.prototype.getDialogType = function () { return ACN.NewchangesDialog; };
            NewchangesGrid.prototype.getIdProperty = function () { return ACN.NewchangesRow.idProperty; };
            NewchangesGrid.prototype.getLocalTextPrefix = function () { return ACN.NewchangesRow.localTextPrefix; };
            NewchangesGrid.prototype.getService = function () { return ACN.NewchangesService.baseUrl; };
            NewchangesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NewchangesGrid);
            return NewchangesGrid;
        }(Serenity.EntityGrid));
        ACN.NewchangesGrid = NewchangesGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AuditorListFormatter = (function () {
            function AuditorListFormatter() {
            }
            AuditorListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = ACN.AcnAuditorRow.Fields.AcnAuditorId;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.Name : x); }).join(", ");
            };
            AuditorListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], AuditorListFormatter);
            return AuditorListFormatter;
        }());
        ACN.AuditorListFormatter = AuditorListFormatter;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MinutesofmeetingDialog = (function (_super) {
            __extends(MinutesofmeetingDialog, _super);
            function MinutesofmeetingDialog() {
                var _this = this;
                _super.call(this);
                this.form = new ACN.MinutesofmeetingForm(this.idPrefix);
                this.form.Acnid.changeSelect2(function (e) {
                    var AcnID = _this.form.Acnid.value;
                    console.log(_this.form.Acnid.value);
                    if (Q.isEmptyOrNull(AcnID)) {
                        _this.setCustomerDetails({});
                        return;
                    }
                    var id = Q.first(ACN.AcnRow.getLookup().items, function (x) { return x.AcnId == parseInt(AcnID); }).AcnId;
                    ACN.AcnService.Retrieve({
                        EntityId: id
                    }, function (response) {
                        _this.setCustomerDetails(response.Entity);
                    });
                });
            }
            MinutesofmeetingDialog.prototype.getFormKey = function () { return ACN.MinutesofmeetingForm.formKey; };
            MinutesofmeetingDialog.prototype.getIdProperty = function () { return ACN.MinutesofmeetingRow.idProperty; };
            MinutesofmeetingDialog.prototype.getLocalTextPrefix = function () { return ACN.MinutesofmeetingRow.localTextPrefix; };
            MinutesofmeetingDialog.prototype.getNameProperty = function () { return ACN.MinutesofmeetingRow.nameProperty; };
            MinutesofmeetingDialog.prototype.getService = function () { return ACN.MinutesofmeetingService.baseUrl; };
            MinutesofmeetingDialog.prototype.setCustomerDetails = function (details) {
                this.form.AcnidPhaseNo.value = details.PhaseNo;
                this.form.AcnidCreationdate.value = details.creationdate;
                this.form.AcnidPeriodfrom.value = details.Periodfrom;
                this.form.AcnidPeriodto.value = details.Periodto;
                this.form.AcnidFromdate.value = details.Fromdate;
                this.form.AcnidTodate.value = details.Todate;
                this.form.AcnidScopeList.value = details.ScopeList;
                this.form.MeetingTitle.value = details.AcnTilte;
            };
            MinutesofmeetingDialog.prototype.setCustomerDetail = function (details) {
                this.form.AcnidScopeList.value = details.ScopeList;
            };
            MinutesofmeetingDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                if (Q.isEmptyOrNull(this.form.Acnid.value)) {
                    this.setCustomerDetail({});
                    return;
                }
                var id = Q.first(ACN.AcnRow.getLookup().items, function (x) { return x.AcnId == parseInt(_this.form.Acnid.value); }).AcnId;
                ACN.AcnService.Retrieve({
                    EntityId: id
                }, function (response) {
                    _this.setCustomerDetail(response.Entity);
                });
            };
            MinutesofmeetingDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MinutesofmeetingDialog);
            return MinutesofmeetingDialog;
        }(Serenity.EntityDialog));
        ACN.MinutesofmeetingDialog = MinutesofmeetingDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MinutesofmeetingEditor = (function (_super) {
            __extends(MinutesofmeetingEditor, _super);
            function MinutesofmeetingEditor(container) {
                _super.call(this, container);
            }
            MinutesofmeetingEditor.prototype.getColumnsKey = function () { return 'ACN.Minutesofmeeting'; };
            MinutesofmeetingEditor.prototype.getDialogType = function () { return ACN.MinutesofmeetingEditorDialog; };
            MinutesofmeetingEditor.prototype.getLocalTextPrefix = function () { return ACN.MinutesofmeetingRow.localTextPrefix; };
            MinutesofmeetingEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], MinutesofmeetingEditor);
            return MinutesofmeetingEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.MinutesofmeetingEditor = MinutesofmeetingEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MinutesofmeetingEditorDialog = (function (_super) {
            __extends(MinutesofmeetingEditorDialog, _super);
            function MinutesofmeetingEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.MinutesofmeetingForm(this.idPrefix);
            }
            MinutesofmeetingEditorDialog.prototype.getFormKey = function () { return ACN.MinutesofmeetingForm.formKey; };
            MinutesofmeetingEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.MinutesofmeetingRow.localTextPrefix; };
            MinutesofmeetingEditorDialog.prototype.getNameProperty = function () { return ACN.MinutesofmeetingRow.nameProperty; };
            MinutesofmeetingEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MinutesofmeetingEditorDialog);
            return MinutesofmeetingEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.MinutesofmeetingEditorDialog = MinutesofmeetingEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var Rid = 0;
        var MinutesofmeetingGrid = (function (_super) {
            __extends(MinutesofmeetingGrid, _super);
            function MinutesofmeetingGrid(container) {
                _super.call(this, container);
            }
            MinutesofmeetingGrid.prototype.getColumnsKey = function () { return 'ACN.Minutesofmeeting'; };
            MinutesofmeetingGrid.prototype.getDialogType = function () { return ACN.MinutesofmeetingDialog; };
            MinutesofmeetingGrid.prototype.getIdProperty = function () { return ACN.MinutesofmeetingRow.idProperty; };
            MinutesofmeetingGrid.prototype.getLocalTextPrefix = function () { return ACN.MinutesofmeetingRow.localTextPrefix; };
            MinutesofmeetingGrid.prototype.getService = function () { return ACN.MinutesofmeetingService.baseUrl; };
            MinutesofmeetingGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var fld = ACN.MinutesofmeetingRow.Fields;
                var request = Q.deepClone(this.getView().params);
                // var r = (UserDefinition)Authorization.UserDefinition;
                Q.serviceCall({ service: 'ACN/Minutesofmeeting/getRoleId', request: request, onSuccess: this.GetRoleId });
                console.log(Rid);
                Q.first(columns, function (x) { return x.field == fld.Auditscope; }).format =
                    function (ctx) { return "<a href=\"\" class=\"send previewbtn\"></a>"; };
                if ((coromendal.Authorization.userDefinition.RoleId == 4) || (coromendal.Authorization.userDefinition.RoleId == 1)) {
                    Q.first(columns, function (x) { return x.field == fld.Venue; }).format =
                        function (ctx) { return "<a href=\"\" class=\"send sendbtn\"></a>"; };
                }
                return columns;
            };
            MinutesofmeetingGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.hasClass("previewbtn")) {
                    e.preventDefault();
                    var request = Q.deepClone(this.getView().params);
                    request.ContainsField = String(item.Meetingid);
                    request.ContainsText = "preview";
                    Q.serviceCall({ service: 'ACN/Minutesofmeeting/Sendmail', request: request, onSuccess: this.preview });
                }
                if (target.hasClass("sendbtn")) {
                    e.preventDefault();
                    var request = Q.deepClone(this.getView().params);
                    request.ContainsField = String(item.Meetingid);
                    request.ContainsText = "mail";
                    //Q.serviceCall({ service: 'ACN/Acn/Sendmail', request: request, onSuccess: this.preview });
                    Q.postToService({ service: 'ACN/Minutesofmeeting/Sendmail', request: request, target: '_blank' });
                }
            };
            MinutesofmeetingGrid.prototype.preview = function (respose) {
                Q.iframeDialog({ html: respose });
                // console.log(respose);        
            };
            MinutesofmeetingGrid.prototype.GetRoleId = function (respose) {
                Rid = respose.msg;
                // Q.iframeDialog(Rid);
                console.log(respose);
            };
            MinutesofmeetingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MinutesofmeetingGrid);
            return MinutesofmeetingGrid;
        }(Serenity.EntityGrid));
        ACN.MinutesofmeetingGrid = MinutesofmeetingGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingPointsDialog = (function (_super) {
            __extends(MeetingPointsDialog, _super);
            function MeetingPointsDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.MeetingPointsForm(this.idPrefix);
            }
            MeetingPointsDialog.prototype.getFormKey = function () { return ACN.MeetingPointsForm.formKey; };
            MeetingPointsDialog.prototype.getIdProperty = function () { return ACN.MeetingPointsRow.idProperty; };
            MeetingPointsDialog.prototype.getLocalTextPrefix = function () { return ACN.MeetingPointsRow.localTextPrefix; };
            MeetingPointsDialog.prototype.getNameProperty = function () { return ACN.MeetingPointsRow.nameProperty; };
            MeetingPointsDialog.prototype.getService = function () { return ACN.MeetingPointsService.baseUrl; };
            MeetingPointsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MeetingPointsDialog);
            return MeetingPointsDialog;
        }(Serenity.EntityDialog));
        ACN.MeetingPointsDialog = MeetingPointsDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingPointsEditor = (function (_super) {
            __extends(MeetingPointsEditor, _super);
            function MeetingPointsEditor(container) {
                _super.call(this, container);
            }
            MeetingPointsEditor.prototype.getColumnsKey = function () { return 'ACN.MeetingPoints'; };
            MeetingPointsEditor.prototype.getDialogType = function () { return ACN.MeetingPointsEditorDialog; };
            MeetingPointsEditor.prototype.getLocalTextPrefix = function () { return ACN.MeetingPointsRow.localTextPrefix; };
            MeetingPointsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingPointsEditor);
            return MeetingPointsEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.MeetingPointsEditor = MeetingPointsEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingPointsEditorDialog = (function (_super) {
            __extends(MeetingPointsEditorDialog, _super);
            function MeetingPointsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.MeetingPointsForm(this.idPrefix);
            }
            MeetingPointsEditorDialog.prototype.getFormKey = function () { return ACN.MeetingPointsForm.formKey; };
            MeetingPointsEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.MeetingPointsRow.localTextPrefix; };
            MeetingPointsEditorDialog.prototype.getNameProperty = function () { return ACN.MeetingPointsRow.nameProperty; };
            MeetingPointsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MeetingPointsEditorDialog);
            return MeetingPointsEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.MeetingPointsEditorDialog = MeetingPointsEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingPointsGrid = (function (_super) {
            __extends(MeetingPointsGrid, _super);
            function MeetingPointsGrid(container) {
                _super.call(this, container);
            }
            MeetingPointsGrid.prototype.getColumnsKey = function () { return 'ACN.MeetingPoints'; };
            MeetingPointsGrid.prototype.getDialogType = function () { return ACN.MeetingPointsDialog; };
            MeetingPointsGrid.prototype.getIdProperty = function () { return ACN.MeetingPointsRow.idProperty; };
            MeetingPointsGrid.prototype.getLocalTextPrefix = function () { return ACN.MeetingPointsRow.localTextPrefix; };
            MeetingPointsGrid.prototype.getService = function () { return ACN.MeetingPointsService.baseUrl; };
            MeetingPointsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingPointsGrid);
            return MeetingPointsGrid;
        }(Serenity.EntityGrid));
        ACN.MeetingPointsGrid = MeetingPointsGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingIssueDialog = (function (_super) {
            __extends(MeetingIssueDialog, _super);
            function MeetingIssueDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.MeetingIssueForm(this.idPrefix);
            }
            MeetingIssueDialog.prototype.getFormKey = function () { return ACN.MeetingIssueForm.formKey; };
            MeetingIssueDialog.prototype.getIdProperty = function () { return ACN.MeetingIssueRow.idProperty; };
            MeetingIssueDialog.prototype.getLocalTextPrefix = function () { return ACN.MeetingIssueRow.localTextPrefix; };
            MeetingIssueDialog.prototype.getNameProperty = function () { return ACN.MeetingIssueRow.nameProperty; };
            MeetingIssueDialog.prototype.getService = function () { return ACN.MeetingIssueService.baseUrl; };
            MeetingIssueDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MeetingIssueDialog);
            return MeetingIssueDialog;
        }(Serenity.EntityDialog));
        ACN.MeetingIssueDialog = MeetingIssueDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingIssueEditor = (function (_super) {
            __extends(MeetingIssueEditor, _super);
            function MeetingIssueEditor(container) {
                _super.call(this, container);
            }
            MeetingIssueEditor.prototype.getColumnsKey = function () { return 'ACN.MeetingIssue'; };
            MeetingIssueEditor.prototype.getDialogType = function () { return ACN.MeetingIssueEditorDialog; };
            MeetingIssueEditor.prototype.getLocalTextPrefix = function () { return ACN.MeetingIssueRow.localTextPrefix; };
            MeetingIssueEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingIssueEditor);
            return MeetingIssueEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.MeetingIssueEditor = MeetingIssueEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingIssueEditorDialog = (function (_super) {
            __extends(MeetingIssueEditorDialog, _super);
            function MeetingIssueEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.MeetingIssueForm(this.idPrefix);
            }
            MeetingIssueEditorDialog.prototype.getFormKey = function () { return ACN.MeetingIssueForm.formKey; };
            MeetingIssueEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.MeetingIssueRow.localTextPrefix; };
            MeetingIssueEditorDialog.prototype.getNameProperty = function () { return ACN.MeetingIssueRow.nameProperty; };
            MeetingIssueEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MeetingIssueEditorDialog);
            return MeetingIssueEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.MeetingIssueEditorDialog = MeetingIssueEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingIssueGrid = (function (_super) {
            __extends(MeetingIssueGrid, _super);
            function MeetingIssueGrid(container) {
                _super.call(this, container);
            }
            MeetingIssueGrid.prototype.getColumnsKey = function () { return 'ACN.MeetingIssue'; };
            MeetingIssueGrid.prototype.getDialogType = function () { return ACN.MeetingIssueDialog; };
            MeetingIssueGrid.prototype.getIdProperty = function () { return ACN.MeetingIssueRow.idProperty; };
            MeetingIssueGrid.prototype.getLocalTextPrefix = function () { return ACN.MeetingIssueRow.localTextPrefix; };
            MeetingIssueGrid.prototype.getService = function () { return ACN.MeetingIssueService.baseUrl; };
            MeetingIssueGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingIssueGrid);
            return MeetingIssueGrid;
        }(Serenity.EntityGrid));
        ACN.MeetingIssueGrid = MeetingIssueGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditordetailsDialog = (function (_super) {
            __extends(MeetingAbsentauditordetailsDialog, _super);
            function MeetingAbsentauditordetailsDialog() {
                var _this = this;
                _super.call(this);
                this.form = new ACN.MeetingAbsentauditordetailsForm(this.idPrefix);
                this.form.AbsentUser.changeSelect2(function (e) {
                    var MeetingID = _this.form.AbsentUser.value;
                    console.log(_this.form.AbsentUser.value);
                    var id1 = Q.first(ACN.MinutesofmeetingRow.getLookup().items, function (x) { return x.Meetingid == MeetingID; });
                    ACN.MinutesofmeetingService.Retrieve({
                        EntityId: id1
                    }, function (response) {
                        _this.setMeetingDetails(response.Entity);
                    });
                });
            }
            MeetingAbsentauditordetailsDialog.prototype.getFormKey = function () { return ACN.MeetingAbsentauditordetailsForm.formKey; };
            MeetingAbsentauditordetailsDialog.prototype.getIdProperty = function () { return ACN.MeetingAbsentauditordetailsRow.idProperty; };
            MeetingAbsentauditordetailsDialog.prototype.getLocalTextPrefix = function () { return ACN.MeetingAbsentauditordetailsRow.localTextPrefix; };
            MeetingAbsentauditordetailsDialog.prototype.getNameProperty = function () { return ACN.MeetingAbsentauditordetailsRow.nameProperty; };
            MeetingAbsentauditordetailsDialog.prototype.getService = function () { return ACN.MeetingAbsentauditordetailsService.baseUrl; };
            MeetingAbsentauditordetailsDialog.prototype.setMeetingDetails = function (meetingdetails) {
                this.form.Name.value = meetingdetails.UseridDisplayName;
            };
            MeetingAbsentauditordetailsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MeetingAbsentauditordetailsDialog);
            return MeetingAbsentauditordetailsDialog;
        }(Serenity.EntityDialog));
        ACN.MeetingAbsentauditordetailsDialog = MeetingAbsentauditordetailsDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditordetailsEditor = (function (_super) {
            __extends(MeetingAbsentauditordetailsEditor, _super);
            function MeetingAbsentauditordetailsEditor(container) {
                _super.call(this, container);
            }
            MeetingAbsentauditordetailsEditor.prototype.getColumnsKey = function () { return 'ACN.MeetingAbsentauditordetails'; };
            MeetingAbsentauditordetailsEditor.prototype.getDialogType = function () { return ACN.MeetingAbsentauditordetailsEditorDialog; };
            MeetingAbsentauditordetailsEditor.prototype.getLocalTextPrefix = function () { return ACN.MeetingAbsentauditordetailsRow.localTextPrefix; };
            MeetingAbsentauditordetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingAbsentauditordetailsEditor);
            return MeetingAbsentauditordetailsEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.MeetingAbsentauditordetailsEditor = MeetingAbsentauditordetailsEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditordetailsEditorDialog = (function (_super) {
            __extends(MeetingAbsentauditordetailsEditorDialog, _super);
            function MeetingAbsentauditordetailsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.MeetingAbsentauditordetailsForm(this.idPrefix);
            }
            MeetingAbsentauditordetailsEditorDialog.prototype.getFormKey = function () { return ACN.MeetingAbsentauditordetailsForm.formKey; };
            MeetingAbsentauditordetailsEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.MeetingAbsentauditordetailsRow.localTextPrefix; };
            MeetingAbsentauditordetailsEditorDialog.prototype.getNameProperty = function () { return ACN.MeetingAbsentauditordetailsRow.nameProperty; };
            MeetingAbsentauditordetailsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MeetingAbsentauditordetailsEditorDialog);
            return MeetingAbsentauditordetailsEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.MeetingAbsentauditordetailsEditorDialog = MeetingAbsentauditordetailsEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditordetailsGrid = (function (_super) {
            __extends(MeetingAbsentauditordetailsGrid, _super);
            function MeetingAbsentauditordetailsGrid(container) {
                _super.call(this, container);
            }
            MeetingAbsentauditordetailsGrid.prototype.getColumnsKey = function () { return 'ACN.MeetingAbsentauditordetails'; };
            MeetingAbsentauditordetailsGrid.prototype.getDialogType = function () { return ACN.MeetingAbsentauditordetailsDialog; };
            MeetingAbsentauditordetailsGrid.prototype.getIdProperty = function () { return ACN.MeetingAbsentauditordetailsRow.idProperty; };
            MeetingAbsentauditordetailsGrid.prototype.getLocalTextPrefix = function () { return ACN.MeetingAbsentauditordetailsRow.localTextPrefix; };
            MeetingAbsentauditordetailsGrid.prototype.getService = function () { return ACN.MeetingAbsentauditordetailsService.baseUrl; };
            MeetingAbsentauditordetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingAbsentauditordetailsGrid);
            return MeetingAbsentauditordetailsGrid;
        }(Serenity.EntityGrid));
        ACN.MeetingAbsentauditordetailsGrid = MeetingAbsentauditordetailsGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditorDialog = (function (_super) {
            __extends(MeetingAbsentauditorDialog, _super);
            function MeetingAbsentauditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.MeetingAbsentauditorForm(this.idPrefix);
            }
            MeetingAbsentauditorDialog.prototype.getFormKey = function () { return ACN.MeetingAbsentauditorForm.formKey; };
            MeetingAbsentauditorDialog.prototype.getIdProperty = function () { return ACN.MeetingAbsentauditorRow.idProperty; };
            MeetingAbsentauditorDialog.prototype.getLocalTextPrefix = function () { return ACN.MeetingAbsentauditorRow.localTextPrefix; };
            MeetingAbsentauditorDialog.prototype.getNameProperty = function () { return ACN.MeetingAbsentauditorRow.nameProperty; };
            MeetingAbsentauditorDialog.prototype.getService = function () { return ACN.MeetingAbsentauditorService.baseUrl; };
            MeetingAbsentauditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MeetingAbsentauditorDialog);
            return MeetingAbsentauditorDialog;
        }(Serenity.EntityDialog));
        ACN.MeetingAbsentauditorDialog = MeetingAbsentauditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditorEditor = (function (_super) {
            __extends(MeetingAbsentauditorEditor, _super);
            function MeetingAbsentauditorEditor(container) {
                _super.call(this, container);
            }
            MeetingAbsentauditorEditor.prototype.getColumnsKey = function () { return 'ACN.MeetingAbsentauditor'; };
            MeetingAbsentauditorEditor.prototype.getDialogType = function () { return ACN.MeetingAbsentauditorEditorDialog; };
            MeetingAbsentauditorEditor.prototype.getLocalTextPrefix = function () { return ACN.MeetingAbsentauditorRow.localTextPrefix; };
            MeetingAbsentauditorEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingAbsentauditorEditor);
            return MeetingAbsentauditorEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.MeetingAbsentauditorEditor = MeetingAbsentauditorEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditorEditorDialog = (function (_super) {
            __extends(MeetingAbsentauditorEditorDialog, _super);
            function MeetingAbsentauditorEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.MeetingAbsentauditorForm(this.idPrefix);
            }
            MeetingAbsentauditorEditorDialog.prototype.getFormKey = function () { return ACN.MeetingAbsentauditorForm.formKey; };
            MeetingAbsentauditorEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.MeetingAbsentauditorRow.localTextPrefix; };
            MeetingAbsentauditorEditorDialog.prototype.getNameProperty = function () { return ACN.MeetingAbsentauditorRow.nameProperty; };
            MeetingAbsentauditorEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MeetingAbsentauditorEditorDialog);
            return MeetingAbsentauditorEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.MeetingAbsentauditorEditorDialog = MeetingAbsentauditorEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditorGrid = (function (_super) {
            __extends(MeetingAbsentauditorGrid, _super);
            function MeetingAbsentauditorGrid(container) {
                _super.call(this, container);
            }
            MeetingAbsentauditorGrid.prototype.getColumnsKey = function () { return 'ACN.MeetingAbsentauditor'; };
            MeetingAbsentauditorGrid.prototype.getDialogType = function () { return ACN.MeetingAbsentauditorDialog; };
            MeetingAbsentauditorGrid.prototype.getIdProperty = function () { return ACN.MeetingAbsentauditorRow.idProperty; };
            MeetingAbsentauditorGrid.prototype.getLocalTextPrefix = function () { return ACN.MeetingAbsentauditorRow.localTextPrefix; };
            MeetingAbsentauditorGrid.prototype.getService = function () { return ACN.MeetingAbsentauditorService.baseUrl; };
            MeetingAbsentauditorGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingAbsentauditorGrid);
            return MeetingAbsentauditorGrid;
        }(Serenity.EntityGrid));
        ACN.MeetingAbsentauditorGrid = MeetingAbsentauditorGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditeeDialog = (function (_super) {
            __extends(MeetingAbsentauditeeDialog, _super);
            function MeetingAbsentauditeeDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.MeetingAbsentauditeeForm(this.idPrefix);
            }
            MeetingAbsentauditeeDialog.prototype.getFormKey = function () { return ACN.MeetingAbsentauditeeForm.formKey; };
            MeetingAbsentauditeeDialog.prototype.getIdProperty = function () { return ACN.MeetingAbsentauditeeRow.idProperty; };
            MeetingAbsentauditeeDialog.prototype.getLocalTextPrefix = function () { return ACN.MeetingAbsentauditeeRow.localTextPrefix; };
            MeetingAbsentauditeeDialog.prototype.getNameProperty = function () { return ACN.MeetingAbsentauditeeRow.nameProperty; };
            MeetingAbsentauditeeDialog.prototype.getService = function () { return ACN.MeetingAbsentauditeeService.baseUrl; };
            MeetingAbsentauditeeDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MeetingAbsentauditeeDialog);
            return MeetingAbsentauditeeDialog;
        }(Serenity.EntityDialog));
        ACN.MeetingAbsentauditeeDialog = MeetingAbsentauditeeDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditeeEditor = (function (_super) {
            __extends(MeetingAbsentauditeeEditor, _super);
            function MeetingAbsentauditeeEditor(container) {
                _super.call(this, container);
            }
            MeetingAbsentauditeeEditor.prototype.getColumnsKey = function () { return 'ACN.MeetingAbsentauditee'; };
            MeetingAbsentauditeeEditor.prototype.getDialogType = function () { return ACN.MeetingAbsentauditeeEditorDialog; };
            MeetingAbsentauditeeEditor.prototype.getLocalTextPrefix = function () { return ACN.MeetingAbsentauditeeRow.localTextPrefix; };
            MeetingAbsentauditeeEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingAbsentauditeeEditor);
            return MeetingAbsentauditeeEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.MeetingAbsentauditeeEditor = MeetingAbsentauditeeEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditeeEditorDialog = (function (_super) {
            __extends(MeetingAbsentauditeeEditorDialog, _super);
            function MeetingAbsentauditeeEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.MeetingAbsentauditeeForm(this.idPrefix);
            }
            MeetingAbsentauditeeEditorDialog.prototype.getFormKey = function () { return ACN.MeetingAbsentauditeeForm.formKey; };
            MeetingAbsentauditeeEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.MeetingAbsentauditeeRow.localTextPrefix; };
            MeetingAbsentauditeeEditorDialog.prototype.getNameProperty = function () { return ACN.MeetingAbsentauditeeRow.nameProperty; };
            MeetingAbsentauditeeEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MeetingAbsentauditeeEditorDialog);
            return MeetingAbsentauditeeEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.MeetingAbsentauditeeEditorDialog = MeetingAbsentauditeeEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentauditeeGrid = (function (_super) {
            __extends(MeetingAbsentauditeeGrid, _super);
            function MeetingAbsentauditeeGrid(container) {
                _super.call(this, container);
            }
            MeetingAbsentauditeeGrid.prototype.getColumnsKey = function () { return 'ACN.MeetingAbsentauditee'; };
            MeetingAbsentauditeeGrid.prototype.getDialogType = function () { return ACN.MeetingAbsentauditeeDialog; };
            MeetingAbsentauditeeGrid.prototype.getIdProperty = function () { return ACN.MeetingAbsentauditeeRow.idProperty; };
            MeetingAbsentauditeeGrid.prototype.getLocalTextPrefix = function () { return ACN.MeetingAbsentauditeeRow.localTextPrefix; };
            MeetingAbsentauditeeGrid.prototype.getService = function () { return ACN.MeetingAbsentauditeeService.baseUrl; };
            MeetingAbsentauditeeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingAbsentauditeeGrid);
            return MeetingAbsentauditeeGrid;
        }(Serenity.EntityGrid));
        ACN.MeetingAbsentauditeeGrid = MeetingAbsentauditeeGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentDialog = (function (_super) {
            __extends(MeetingAbsentDialog, _super);
            function MeetingAbsentDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.MeetingAbsentForm(this.idPrefix);
            }
            MeetingAbsentDialog.prototype.getFormKey = function () { return ACN.MeetingAbsentForm.formKey; };
            MeetingAbsentDialog.prototype.getIdProperty = function () { return ACN.MeetingAbsentRow.idProperty; };
            MeetingAbsentDialog.prototype.getLocalTextPrefix = function () { return ACN.MeetingAbsentRow.localTextPrefix; };
            MeetingAbsentDialog.prototype.getNameProperty = function () { return ACN.MeetingAbsentRow.nameProperty; };
            MeetingAbsentDialog.prototype.getService = function () { return ACN.MeetingAbsentService.baseUrl; };
            MeetingAbsentDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MeetingAbsentDialog);
            return MeetingAbsentDialog;
        }(Serenity.EntityDialog));
        ACN.MeetingAbsentDialog = MeetingAbsentDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentEditor = (function (_super) {
            __extends(MeetingAbsentEditor, _super);
            function MeetingAbsentEditor(container) {
                _super.call(this, container);
            }
            MeetingAbsentEditor.prototype.getColumnsKey = function () { return 'ACN.MeetingAbsent'; };
            MeetingAbsentEditor.prototype.getDialogType = function () { return ACN.MeetingAbsentEditorDialog; };
            MeetingAbsentEditor.prototype.getLocalTextPrefix = function () { return ACN.MeetingAbsentRow.localTextPrefix; };
            MeetingAbsentEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingAbsentEditor);
            return MeetingAbsentEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.MeetingAbsentEditor = MeetingAbsentEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentEditorDialog = (function (_super) {
            __extends(MeetingAbsentEditorDialog, _super);
            function MeetingAbsentEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.MeetingAbsentForm(this.idPrefix);
            }
            MeetingAbsentEditorDialog.prototype.getFormKey = function () { return ACN.MeetingAbsentForm.formKey; };
            MeetingAbsentEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.MeetingAbsentRow.localTextPrefix; };
            MeetingAbsentEditorDialog.prototype.getNameProperty = function () { return ACN.MeetingAbsentRow.nameProperty; };
            MeetingAbsentEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MeetingAbsentEditorDialog);
            return MeetingAbsentEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.MeetingAbsentEditorDialog = MeetingAbsentEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var MeetingAbsentGrid = (function (_super) {
            __extends(MeetingAbsentGrid, _super);
            function MeetingAbsentGrid(container) {
                _super.call(this, container);
            }
            MeetingAbsentGrid.prototype.getColumnsKey = function () { return 'ACN.MeetingAbsent'; };
            MeetingAbsentGrid.prototype.getDialogType = function () { return ACN.MeetingAbsentDialog; };
            MeetingAbsentGrid.prototype.getIdProperty = function () { return ACN.MeetingAbsentRow.idProperty; };
            MeetingAbsentGrid.prototype.getLocalTextPrefix = function () { return ACN.MeetingAbsentRow.localTextPrefix; };
            MeetingAbsentGrid.prototype.getService = function () { return ACN.MeetingAbsentService.baseUrl; };
            MeetingAbsentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingAbsentGrid);
            return MeetingAbsentGrid;
        }(Serenity.EntityGrid));
        ACN.MeetingAbsentGrid = MeetingAbsentGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var LikeliwoodvalueDialog = (function (_super) {
            __extends(LikeliwoodvalueDialog, _super);
            function LikeliwoodvalueDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.LikeliwoodvalueForm(this.idPrefix);
            }
            LikeliwoodvalueDialog.prototype.getFormKey = function () { return ACN.LikeliwoodvalueForm.formKey; };
            LikeliwoodvalueDialog.prototype.getIdProperty = function () { return ACN.LikeliwoodvalueRow.idProperty; };
            LikeliwoodvalueDialog.prototype.getLocalTextPrefix = function () { return ACN.LikeliwoodvalueRow.localTextPrefix; };
            LikeliwoodvalueDialog.prototype.getNameProperty = function () { return ACN.LikeliwoodvalueRow.nameProperty; };
            LikeliwoodvalueDialog.prototype.getService = function () { return ACN.LikeliwoodvalueService.baseUrl; };
            LikeliwoodvalueDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], LikeliwoodvalueDialog);
            return LikeliwoodvalueDialog;
        }(Serenity.EntityDialog));
        ACN.LikeliwoodvalueDialog = LikeliwoodvalueDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var LikeliwoodvalueEditor = (function (_super) {
            __extends(LikeliwoodvalueEditor, _super);
            function LikeliwoodvalueEditor(container) {
                _super.call(this, container);
            }
            LikeliwoodvalueEditor.prototype.getColumnsKey = function () { return 'ACN.Likeliwoodvalue'; };
            LikeliwoodvalueEditor.prototype.getDialogType = function () { return ACN.LikeliwoodvalueEditorDialog; };
            LikeliwoodvalueEditor.prototype.getLocalTextPrefix = function () { return ACN.LikeliwoodvalueRow.localTextPrefix; };
            LikeliwoodvalueEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], LikeliwoodvalueEditor);
            return LikeliwoodvalueEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.LikeliwoodvalueEditor = LikeliwoodvalueEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var LikeliwoodvalueEditorDialog = (function (_super) {
            __extends(LikeliwoodvalueEditorDialog, _super);
            function LikeliwoodvalueEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.LikeliwoodvalueForm(this.idPrefix);
            }
            LikeliwoodvalueEditorDialog.prototype.getFormKey = function () { return ACN.LikeliwoodvalueForm.formKey; };
            LikeliwoodvalueEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.LikeliwoodvalueRow.localTextPrefix; };
            LikeliwoodvalueEditorDialog.prototype.getNameProperty = function () { return ACN.LikeliwoodvalueRow.nameProperty; };
            LikeliwoodvalueEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], LikeliwoodvalueEditorDialog);
            return LikeliwoodvalueEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.LikeliwoodvalueEditorDialog = LikeliwoodvalueEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var LikeliwoodvalueGrid = (function (_super) {
            __extends(LikeliwoodvalueGrid, _super);
            function LikeliwoodvalueGrid(container) {
                _super.call(this, container);
            }
            LikeliwoodvalueGrid.prototype.getColumnsKey = function () { return 'ACN.Likeliwoodvalue'; };
            LikeliwoodvalueGrid.prototype.getDialogType = function () { return ACN.LikeliwoodvalueDialog; };
            LikeliwoodvalueGrid.prototype.getIdProperty = function () { return ACN.LikeliwoodvalueRow.idProperty; };
            LikeliwoodvalueGrid.prototype.getLocalTextPrefix = function () { return ACN.LikeliwoodvalueRow.localTextPrefix; };
            LikeliwoodvalueGrid.prototype.getService = function () { return ACN.LikeliwoodvalueService.baseUrl; };
            LikeliwoodvalueGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LikeliwoodvalueGrid);
            return LikeliwoodvalueGrid;
        }(Serenity.EntityGrid));
        ACN.LikeliwoodvalueGrid = LikeliwoodvalueGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var KeyfactsDialog = (function (_super) {
            __extends(KeyfactsDialog, _super);
            function KeyfactsDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.KeyfactsForm(this.idPrefix);
            }
            KeyfactsDialog.prototype.getFormKey = function () { return ACN.KeyfactsForm.formKey; };
            KeyfactsDialog.prototype.getIdProperty = function () { return ACN.KeyfactsRow.idProperty; };
            KeyfactsDialog.prototype.getLocalTextPrefix = function () { return ACN.KeyfactsRow.localTextPrefix; };
            KeyfactsDialog.prototype.getNameProperty = function () { return ACN.KeyfactsRow.nameProperty; };
            KeyfactsDialog.prototype.getService = function () { return ACN.KeyfactsService.baseUrl; };
            KeyfactsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], KeyfactsDialog);
            return KeyfactsDialog;
        }(Serenity.EntityDialog));
        ACN.KeyfactsDialog = KeyfactsDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var KeyfactsEditor = (function (_super) {
            __extends(KeyfactsEditor, _super);
            function KeyfactsEditor(container) {
                _super.call(this, container);
            }
            KeyfactsEditor.prototype.getColumnsKey = function () { return 'ACN.Keyfacts'; };
            KeyfactsEditor.prototype.getDialogType = function () { return ACN.KeyfactsEditorDialog; };
            KeyfactsEditor.prototype.getLocalTextPrefix = function () { return ACN.KeyfactsRow.localTextPrefix; };
            KeyfactsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], KeyfactsEditor);
            return KeyfactsEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.KeyfactsEditor = KeyfactsEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var KeyfactsEditorDialog = (function (_super) {
            __extends(KeyfactsEditorDialog, _super);
            function KeyfactsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.KeyfactsForm(this.idPrefix);
            }
            KeyfactsEditorDialog.prototype.getFormKey = function () { return ACN.KeyfactsForm.formKey; };
            KeyfactsEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.KeyfactsRow.localTextPrefix; };
            KeyfactsEditorDialog.prototype.getNameProperty = function () { return ACN.KeyfactsRow.nameProperty; };
            KeyfactsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], KeyfactsEditorDialog);
            return KeyfactsEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.KeyfactsEditorDialog = KeyfactsEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var KeyfactsGrid = (function (_super) {
            __extends(KeyfactsGrid, _super);
            function KeyfactsGrid(container) {
                _super.call(this, container);
            }
            KeyfactsGrid.prototype.getColumnsKey = function () { return 'ACN.Keyfacts'; };
            KeyfactsGrid.prototype.getDialogType = function () { return ACN.KeyfactsDialog; };
            KeyfactsGrid.prototype.getIdProperty = function () { return ACN.KeyfactsRow.idProperty; };
            KeyfactsGrid.prototype.getLocalTextPrefix = function () { return ACN.KeyfactsRow.localTextPrefix; };
            KeyfactsGrid.prototype.getService = function () { return ACN.KeyfactsService.baseUrl; };
            KeyfactsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], KeyfactsGrid);
            return KeyfactsGrid;
        }(Serenity.EntityGrid));
        ACN.KeyfactsGrid = KeyfactsGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var InputfromauditeeDialog = (function (_super) {
            __extends(InputfromauditeeDialog, _super);
            function InputfromauditeeDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.InputfromauditeeForm(this.idPrefix);
            }
            InputfromauditeeDialog.prototype.getFormKey = function () { return ACN.InputfromauditeeForm.formKey; };
            InputfromauditeeDialog.prototype.getIdProperty = function () { return ACN.InputfromauditeeRow.idProperty; };
            InputfromauditeeDialog.prototype.getLocalTextPrefix = function () { return ACN.InputfromauditeeRow.localTextPrefix; };
            InputfromauditeeDialog.prototype.getNameProperty = function () { return ACN.InputfromauditeeRow.nameProperty; };
            InputfromauditeeDialog.prototype.getService = function () { return ACN.InputfromauditeeService.baseUrl; };
            InputfromauditeeDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], InputfromauditeeDialog);
            return InputfromauditeeDialog;
        }(Serenity.EntityDialog));
        ACN.InputfromauditeeDialog = InputfromauditeeDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var InputfromauditeeEditor = (function (_super) {
            __extends(InputfromauditeeEditor, _super);
            function InputfromauditeeEditor(container) {
                _super.call(this, container);
            }
            InputfromauditeeEditor.prototype.getColumnsKey = function () { return 'ACN.Inputfromauditee'; };
            InputfromauditeeEditor.prototype.getDialogType = function () { return ACN.InputfromauditeeEditorDialog; };
            InputfromauditeeEditor.prototype.getLocalTextPrefix = function () { return ACN.InputfromauditeeRow.localTextPrefix; };
            InputfromauditeeEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], InputfromauditeeEditor);
            return InputfromauditeeEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.InputfromauditeeEditor = InputfromauditeeEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var InputfromauditeeEditorDialog = (function (_super) {
            __extends(InputfromauditeeEditorDialog, _super);
            function InputfromauditeeEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.InputfromauditeeForm(this.idPrefix);
            }
            InputfromauditeeEditorDialog.prototype.getFormKey = function () { return ACN.InputfromauditeeForm.formKey; };
            InputfromauditeeEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.InputfromauditeeRow.localTextPrefix; };
            InputfromauditeeEditorDialog.prototype.getNameProperty = function () { return ACN.InputfromauditeeRow.nameProperty; };
            InputfromauditeeEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], InputfromauditeeEditorDialog);
            return InputfromauditeeEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.InputfromauditeeEditorDialog = InputfromauditeeEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var InputfromauditeeGrid = (function (_super) {
            __extends(InputfromauditeeGrid, _super);
            function InputfromauditeeGrid(container) {
                _super.call(this, container);
            }
            InputfromauditeeGrid.prototype.getColumnsKey = function () { return 'ACN.Inputfromauditee'; };
            InputfromauditeeGrid.prototype.getDialogType = function () { return ACN.InputfromauditeeDialog; };
            InputfromauditeeGrid.prototype.getIdProperty = function () { return ACN.InputfromauditeeRow.idProperty; };
            InputfromauditeeGrid.prototype.getLocalTextPrefix = function () { return ACN.InputfromauditeeRow.localTextPrefix; };
            InputfromauditeeGrid.prototype.getService = function () { return ACN.InputfromauditeeService.baseUrl; };
            InputfromauditeeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InputfromauditeeGrid);
            return InputfromauditeeGrid;
        }(Serenity.EntityGrid));
        ACN.InputfromauditeeGrid = InputfromauditeeGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FinalstatusvalueDialog = (function (_super) {
            __extends(FinalstatusvalueDialog, _super);
            function FinalstatusvalueDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.FinalstatusvalueForm(this.idPrefix);
            }
            FinalstatusvalueDialog.prototype.getFormKey = function () { return ACN.FinalstatusvalueForm.formKey; };
            FinalstatusvalueDialog.prototype.getIdProperty = function () { return ACN.FinalstatusvalueRow.idProperty; };
            FinalstatusvalueDialog.prototype.getLocalTextPrefix = function () { return ACN.FinalstatusvalueRow.localTextPrefix; };
            FinalstatusvalueDialog.prototype.getNameProperty = function () { return ACN.FinalstatusvalueRow.nameProperty; };
            FinalstatusvalueDialog.prototype.getService = function () { return ACN.FinalstatusvalueService.baseUrl; };
            FinalstatusvalueDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], FinalstatusvalueDialog);
            return FinalstatusvalueDialog;
        }(Serenity.EntityDialog));
        ACN.FinalstatusvalueDialog = FinalstatusvalueDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FinalstatusvalueEditor = (function (_super) {
            __extends(FinalstatusvalueEditor, _super);
            function FinalstatusvalueEditor(container) {
                _super.call(this, container);
            }
            FinalstatusvalueEditor.prototype.getColumnsKey = function () { return 'ACN.Finalstatusvalue'; };
            FinalstatusvalueEditor.prototype.getDialogType = function () { return ACN.FinalstatusvalueEditorDialog; };
            FinalstatusvalueEditor.prototype.getLocalTextPrefix = function () { return ACN.FinalstatusvalueRow.localTextPrefix; };
            FinalstatusvalueEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], FinalstatusvalueEditor);
            return FinalstatusvalueEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.FinalstatusvalueEditor = FinalstatusvalueEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FinalstatusvalueEditorDialog = (function (_super) {
            __extends(FinalstatusvalueEditorDialog, _super);
            function FinalstatusvalueEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.FinalstatusvalueForm(this.idPrefix);
            }
            FinalstatusvalueEditorDialog.prototype.getFormKey = function () { return ACN.FinalstatusvalueForm.formKey; };
            FinalstatusvalueEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.FinalstatusvalueRow.localTextPrefix; };
            FinalstatusvalueEditorDialog.prototype.getNameProperty = function () { return ACN.FinalstatusvalueRow.nameProperty; };
            FinalstatusvalueEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], FinalstatusvalueEditorDialog);
            return FinalstatusvalueEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.FinalstatusvalueEditorDialog = FinalstatusvalueEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FinalstatusvalueGrid = (function (_super) {
            __extends(FinalstatusvalueGrid, _super);
            function FinalstatusvalueGrid(container) {
                _super.call(this, container);
            }
            FinalstatusvalueGrid.prototype.getColumnsKey = function () { return 'ACN.Finalstatusvalue'; };
            FinalstatusvalueGrid.prototype.getDialogType = function () { return ACN.FinalstatusvalueDialog; };
            FinalstatusvalueGrid.prototype.getIdProperty = function () { return ACN.FinalstatusvalueRow.idProperty; };
            FinalstatusvalueGrid.prototype.getLocalTextPrefix = function () { return ACN.FinalstatusvalueRow.localTextPrefix; };
            FinalstatusvalueGrid.prototype.getService = function () { return ACN.FinalstatusvalueService.baseUrl; };
            FinalstatusvalueGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FinalstatusvalueGrid);
            return FinalstatusvalueGrid;
        }(Serenity.EntityGrid));
        ACN.FinalstatusvalueGrid = FinalstatusvalueGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FinalTextFormat = (function () {
            function FinalTextFormat() {
            }
            FinalTextFormat.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList)
                    return "";
                var name = "";
                var byId = ACN.FinalstatusvalueRow.getLookup().itemById;
                for (var key in byId) {
                    if (idList == byId[key].Finalstatusid) {
                        name = byId[key].Value;
                    }
                }
                return name;
            };
            FinalTextFormat = __decorate([
                Serenity.Decorators.registerFormatter()
            ], FinalTextFormat);
            return FinalTextFormat;
        }());
        ACN.FinalTextFormat = FinalTextFormat;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FeedbackvalueDialog = (function (_super) {
            __extends(FeedbackvalueDialog, _super);
            function FeedbackvalueDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.FeedbackvalueForm(this.idPrefix);
            }
            FeedbackvalueDialog.prototype.getFormKey = function () { return ACN.FeedbackvalueForm.formKey; };
            FeedbackvalueDialog.prototype.getIdProperty = function () { return ACN.FeedbackvalueRow.idProperty; };
            FeedbackvalueDialog.prototype.getLocalTextPrefix = function () { return ACN.FeedbackvalueRow.localTextPrefix; };
            FeedbackvalueDialog.prototype.getNameProperty = function () { return ACN.FeedbackvalueRow.nameProperty; };
            FeedbackvalueDialog.prototype.getService = function () { return ACN.FeedbackvalueService.baseUrl; };
            FeedbackvalueDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], FeedbackvalueDialog);
            return FeedbackvalueDialog;
        }(Serenity.EntityDialog));
        ACN.FeedbackvalueDialog = FeedbackvalueDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FeedbackvalueEditor = (function (_super) {
            __extends(FeedbackvalueEditor, _super);
            function FeedbackvalueEditor(container) {
                _super.call(this, container);
            }
            FeedbackvalueEditor.prototype.getColumnsKey = function () { return 'ACN.Feedbackvalue'; };
            FeedbackvalueEditor.prototype.getDialogType = function () { return ACN.FeedbackvalueEditorDialog; };
            FeedbackvalueEditor.prototype.getLocalTextPrefix = function () { return ACN.FeedbackvalueRow.localTextPrefix; };
            FeedbackvalueEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], FeedbackvalueEditor);
            return FeedbackvalueEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.FeedbackvalueEditor = FeedbackvalueEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FeedbackvalueEditorDialog = (function (_super) {
            __extends(FeedbackvalueEditorDialog, _super);
            function FeedbackvalueEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.FeedbackvalueForm(this.idPrefix);
            }
            FeedbackvalueEditorDialog.prototype.getFormKey = function () { return ACN.FeedbackvalueForm.formKey; };
            FeedbackvalueEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.FeedbackvalueRow.localTextPrefix; };
            FeedbackvalueEditorDialog.prototype.getNameProperty = function () { return ACN.FeedbackvalueRow.nameProperty; };
            FeedbackvalueEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], FeedbackvalueEditorDialog);
            return FeedbackvalueEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.FeedbackvalueEditorDialog = FeedbackvalueEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FeedbackvalueGrid = (function (_super) {
            __extends(FeedbackvalueGrid, _super);
            function FeedbackvalueGrid(container) {
                _super.call(this, container);
            }
            FeedbackvalueGrid.prototype.getColumnsKey = function () { return 'ACN.Feedbackvalue'; };
            FeedbackvalueGrid.prototype.getDialogType = function () { return ACN.FeedbackvalueDialog; };
            FeedbackvalueGrid.prototype.getIdProperty = function () { return ACN.FeedbackvalueRow.idProperty; };
            FeedbackvalueGrid.prototype.getLocalTextPrefix = function () { return ACN.FeedbackvalueRow.localTextPrefix; };
            FeedbackvalueGrid.prototype.getService = function () { return ACN.FeedbackvalueService.baseUrl; };
            FeedbackvalueGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FeedbackvalueGrid);
            return FeedbackvalueGrid;
        }(Serenity.EntityGrid));
        ACN.FeedbackvalueGrid = FeedbackvalueGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FeedbackDialog = (function (_super) {
            __extends(FeedbackDialog, _super);
            function FeedbackDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.FeedbackForm(this.idPrefix);
            }
            FeedbackDialog.prototype.getFormKey = function () { return ACN.FeedbackForm.formKey; };
            FeedbackDialog.prototype.getIdProperty = function () { return ACN.FeedbackRow.idProperty; };
            FeedbackDialog.prototype.getLocalTextPrefix = function () { return ACN.FeedbackRow.localTextPrefix; };
            FeedbackDialog.prototype.getNameProperty = function () { return ACN.FeedbackRow.nameProperty; };
            FeedbackDialog.prototype.getService = function () { return ACN.FeedbackService.baseUrl; };
            FeedbackDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], FeedbackDialog);
            return FeedbackDialog;
        }(Serenity.EntityDialog));
        ACN.FeedbackDialog = FeedbackDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FeedbackEditor = (function (_super) {
            __extends(FeedbackEditor, _super);
            function FeedbackEditor(container) {
                _super.call(this, container);
            }
            FeedbackEditor.prototype.getColumnsKey = function () { return 'ACN.Feedback'; };
            FeedbackEditor.prototype.getDialogType = function () { return ACN.FeedbackEditorDialog; };
            FeedbackEditor.prototype.getLocalTextPrefix = function () { return ACN.FeedbackRow.localTextPrefix; };
            FeedbackEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], FeedbackEditor);
            return FeedbackEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.FeedbackEditor = FeedbackEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FeedbackEditorDialog = (function (_super) {
            __extends(FeedbackEditorDialog, _super);
            function FeedbackEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.FeedbackForm(this.idPrefix);
            }
            FeedbackEditorDialog.prototype.getFormKey = function () { return ACN.FeedbackForm.formKey; };
            FeedbackEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.FeedbackRow.localTextPrefix; };
            FeedbackEditorDialog.prototype.getNameProperty = function () { return ACN.FeedbackRow.nameProperty; };
            FeedbackEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], FeedbackEditorDialog);
            return FeedbackEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.FeedbackEditorDialog = FeedbackEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var FeedbackGrid = (function (_super) {
            __extends(FeedbackGrid, _super);
            function FeedbackGrid(container) {
                _super.call(this, container);
            }
            FeedbackGrid.prototype.getColumnsKey = function () { return 'ACN.Feedback'; };
            FeedbackGrid.prototype.getDialogType = function () { return ACN.FeedbackDialog; };
            FeedbackGrid.prototype.getIdProperty = function () { return ACN.FeedbackRow.idProperty; };
            FeedbackGrid.prototype.getLocalTextPrefix = function () { return ACN.FeedbackRow.localTextPrefix; };
            FeedbackGrid.prototype.getService = function () { return ACN.FeedbackService.baseUrl; };
            FeedbackGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FeedbackGrid);
            return FeedbackGrid;
        }(Serenity.EntityGrid));
        ACN.FeedbackGrid = FeedbackGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var DaRreleaseDialog = (function (_super) {
            __extends(DaRreleaseDialog, _super);
            function DaRreleaseDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.DaRreleaseForm(this.idPrefix);
            }
            DaRreleaseDialog.prototype.getFormKey = function () { return ACN.DaRreleaseForm.formKey; };
            DaRreleaseDialog.prototype.getIdProperty = function () { return ACN.DaRreleaseRow.idProperty; };
            DaRreleaseDialog.prototype.getLocalTextPrefix = function () { return ACN.DaRreleaseRow.localTextPrefix; };
            DaRreleaseDialog.prototype.getService = function () { return ACN.DaRreleaseService.baseUrl; };
            DaRreleaseDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], DaRreleaseDialog);
            return DaRreleaseDialog;
        }(Serenity.EntityDialog));
        ACN.DaRreleaseDialog = DaRreleaseDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var DaRreleaseEditor = (function (_super) {
            __extends(DaRreleaseEditor, _super);
            function DaRreleaseEditor(container) {
                _super.call(this, container);
            }
            DaRreleaseEditor.prototype.getColumnsKey = function () { return 'ACN.DaRrelease'; };
            DaRreleaseEditor.prototype.getDialogType = function () { return ACN.DaRreleaseEditorDialog; };
            DaRreleaseEditor.prototype.getLocalTextPrefix = function () { return ACN.DaRreleaseRow.localTextPrefix; };
            DaRreleaseEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], DaRreleaseEditor);
            return DaRreleaseEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.DaRreleaseEditor = DaRreleaseEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var DaRreleaseEditorDialog = (function (_super) {
            __extends(DaRreleaseEditorDialog, _super);
            function DaRreleaseEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.DaRreleaseForm(this.idPrefix);
            }
            DaRreleaseEditorDialog.prototype.getFormKey = function () { return ACN.DaRreleaseForm.formKey; };
            DaRreleaseEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.DaRreleaseRow.localTextPrefix; };
            DaRreleaseEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], DaRreleaseEditorDialog);
            return DaRreleaseEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.DaRreleaseEditorDialog = DaRreleaseEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var DaRreleaseGrid = (function (_super) {
            __extends(DaRreleaseGrid, _super);
            function DaRreleaseGrid(container) {
                _super.call(this, container);
            }
            DaRreleaseGrid.prototype.getColumnsKey = function () { return 'ACN.DaRrelease'; };
            DaRreleaseGrid.prototype.getDialogType = function () { return ACN.DaRreleaseDialog; };
            DaRreleaseGrid.prototype.getIdProperty = function () { return ACN.DaRreleaseRow.idProperty; };
            DaRreleaseGrid.prototype.getLocalTextPrefix = function () { return ACN.DaRreleaseRow.localTextPrefix; };
            DaRreleaseGrid.prototype.getService = function () { return ACN.DaRreleaseService.baseUrl; };
            DaRreleaseGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DaRreleaseGrid);
            return DaRreleaseGrid;
        }(Serenity.EntityGrid));
        ACN.DaRreleaseGrid = DaRreleaseGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var DarClarificationsDialog = (function (_super) {
            __extends(DarClarificationsDialog, _super);
            function DarClarificationsDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.DarClarificationsForm(this.idPrefix);
            }
            DarClarificationsDialog.prototype.getFormKey = function () { return ACN.DarClarificationsForm.formKey; };
            DarClarificationsDialog.prototype.getIdProperty = function () { return ACN.DarClarificationsRow.idProperty; };
            DarClarificationsDialog.prototype.getLocalTextPrefix = function () { return ACN.DarClarificationsRow.localTextPrefix; };
            DarClarificationsDialog.prototype.getService = function () { return ACN.DarClarificationsService.baseUrl; };
            DarClarificationsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], DarClarificationsDialog);
            return DarClarificationsDialog;
        }(Serenity.EntityDialog));
        ACN.DarClarificationsDialog = DarClarificationsDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var DarClarificationsEditor = (function (_super) {
            __extends(DarClarificationsEditor, _super);
            function DarClarificationsEditor(container) {
                _super.call(this, container);
            }
            DarClarificationsEditor.prototype.getColumnsKey = function () { return 'ACN.DarClarifications'; };
            DarClarificationsEditor.prototype.getDialogType = function () { return ACN.DarClarificationsEditorDialog; };
            DarClarificationsEditor.prototype.getLocalTextPrefix = function () { return ACN.DarClarificationsRow.localTextPrefix; };
            DarClarificationsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], DarClarificationsEditor);
            return DarClarificationsEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.DarClarificationsEditor = DarClarificationsEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var DarClarificationsEditorDialog = (function (_super) {
            __extends(DarClarificationsEditorDialog, _super);
            function DarClarificationsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.DarClarificationsForm(this.idPrefix);
            }
            DarClarificationsEditorDialog.prototype.getFormKey = function () { return ACN.DarClarificationsForm.formKey; };
            DarClarificationsEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.DarClarificationsRow.localTextPrefix; };
            DarClarificationsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], DarClarificationsEditorDialog);
            return DarClarificationsEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.DarClarificationsEditorDialog = DarClarificationsEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var DarClarificationsGrid = (function (_super) {
            __extends(DarClarificationsGrid, _super);
            function DarClarificationsGrid(container) {
                _super.call(this, container);
            }
            DarClarificationsGrid.prototype.getColumnsKey = function () { return 'ACN.DarClarifications'; };
            DarClarificationsGrid.prototype.getDialogType = function () { return ACN.DarClarificationsDialog; };
            DarClarificationsGrid.prototype.getIdProperty = function () { return ACN.DarClarificationsRow.idProperty; };
            DarClarificationsGrid.prototype.getLocalTextPrefix = function () { return ACN.DarClarificationsRow.localTextPrefix; };
            DarClarificationsGrid.prototype.getService = function () { return ACN.DarClarificationsService.baseUrl; };
            DarClarificationsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DarClarificationsGrid);
            return DarClarificationsGrid;
        }(Serenity.EntityGrid));
        ACN.DarClarificationsGrid = DarClarificationsGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var CurrentauditobservationDialog = (function (_super) {
            __extends(CurrentauditobservationDialog, _super);
            function CurrentauditobservationDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.CurrentauditobservationForm(this.idPrefix);
            }
            CurrentauditobservationDialog.prototype.getFormKey = function () { return ACN.CurrentauditobservationForm.formKey; };
            CurrentauditobservationDialog.prototype.getIdProperty = function () { return ACN.CurrentauditobservationRow.idProperty; };
            CurrentauditobservationDialog.prototype.getLocalTextPrefix = function () { return ACN.CurrentauditobservationRow.localTextPrefix; };
            CurrentauditobservationDialog.prototype.getNameProperty = function () { return ACN.CurrentauditobservationRow.nameProperty; };
            CurrentauditobservationDialog.prototype.getService = function () { return ACN.CurrentauditobservationService.baseUrl; };
            CurrentauditobservationDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CurrentauditobservationDialog);
            return CurrentauditobservationDialog;
        }(Serenity.EntityDialog));
        ACN.CurrentauditobservationDialog = CurrentauditobservationDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var CurrentauditobservationEditor = (function (_super) {
            __extends(CurrentauditobservationEditor, _super);
            function CurrentauditobservationEditor(container) {
                _super.call(this, container);
            }
            CurrentauditobservationEditor.prototype.getColumnsKey = function () { return 'ACN.Currentauditobservation'; };
            CurrentauditobservationEditor.prototype.getDialogType = function () { return ACN.CurrentauditobservationEditorDialog; };
            CurrentauditobservationEditor.prototype.getLocalTextPrefix = function () { return ACN.CurrentauditobservationRow.localTextPrefix; };
            CurrentauditobservationEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], CurrentauditobservationEditor);
            return CurrentauditobservationEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.CurrentauditobservationEditor = CurrentauditobservationEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var CurrentauditobservationEditorDialog = (function (_super) {
            __extends(CurrentauditobservationEditorDialog, _super);
            function CurrentauditobservationEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.CurrentauditobservationForm(this.idPrefix);
            }
            CurrentauditobservationEditorDialog.prototype.getFormKey = function () { return ACN.CurrentauditobservationForm.formKey; };
            CurrentauditobservationEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.CurrentauditobservationRow.localTextPrefix; };
            CurrentauditobservationEditorDialog.prototype.getNameProperty = function () { return ACN.CurrentauditobservationRow.nameProperty; };
            CurrentauditobservationEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CurrentauditobservationEditorDialog);
            return CurrentauditobservationEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.CurrentauditobservationEditorDialog = CurrentauditobservationEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var CurrentauditobservationGrid = (function (_super) {
            __extends(CurrentauditobservationGrid, _super);
            function CurrentauditobservationGrid(container) {
                _super.call(this, container);
            }
            CurrentauditobservationGrid.prototype.getColumnsKey = function () { return 'ACN.Currentauditobservation'; };
            CurrentauditobservationGrid.prototype.getDialogType = function () { return ACN.CurrentauditobservationDialog; };
            CurrentauditobservationGrid.prototype.getIdProperty = function () { return ACN.CurrentauditobservationRow.idProperty; };
            CurrentauditobservationGrid.prototype.getLocalTextPrefix = function () { return ACN.CurrentauditobservationRow.localTextPrefix; };
            CurrentauditobservationGrid.prototype.getService = function () { return ACN.CurrentauditobservationService.baseUrl; };
            CurrentauditobservationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CurrentauditobservationGrid);
            return CurrentauditobservationGrid;
        }(Serenity.EntityGrid));
        ACN.CurrentauditobservationGrid = CurrentauditobservationGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ConformationDialog = (function (_super) {
            __extends(ConformationDialog, _super);
            function ConformationDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.ConformationForm(this.idPrefix);
            }
            ConformationDialog.prototype.getFormKey = function () { return ACN.ConformationForm.formKey; };
            ConformationDialog.prototype.getIdProperty = function () { return ACN.ConformationRow.idProperty; };
            ConformationDialog.prototype.getLocalTextPrefix = function () { return ACN.ConformationRow.localTextPrefix; };
            ConformationDialog.prototype.getNameProperty = function () { return ACN.ConformationRow.nameProperty; };
            ConformationDialog.prototype.getService = function () { return ACN.ConformationService.baseUrl; };
            ConformationDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ConformationDialog);
            return ConformationDialog;
        }(Serenity.EntityDialog));
        ACN.ConformationDialog = ConformationDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ConformationEditor = (function (_super) {
            __extends(ConformationEditor, _super);
            function ConformationEditor(container) {
                _super.call(this, container);
            }
            ConformationEditor.prototype.getColumnsKey = function () { return 'ACN.Conformation'; };
            ConformationEditor.prototype.getDialogType = function () { return ACN.ConformationEditorDialog; };
            ConformationEditor.prototype.getLocalTextPrefix = function () { return ACN.ConformationRow.localTextPrefix; };
            ConformationEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ConformationEditor);
            return ConformationEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.ConformationEditor = ConformationEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ConformationEditorDialog = (function (_super) {
            __extends(ConformationEditorDialog, _super);
            function ConformationEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.ConformationForm(this.idPrefix);
            }
            ConformationEditorDialog.prototype.getFormKey = function () { return ACN.ConformationForm.formKey; };
            ConformationEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.ConformationRow.localTextPrefix; };
            ConformationEditorDialog.prototype.getNameProperty = function () { return ACN.ConformationRow.nameProperty; };
            ConformationEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ConformationEditorDialog);
            return ConformationEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.ConformationEditorDialog = ConformationEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var ConformationGrid = (function (_super) {
            __extends(ConformationGrid, _super);
            function ConformationGrid(container) {
                _super.call(this, container);
            }
            ConformationGrid.prototype.getColumnsKey = function () { return 'ACN.Conformation'; };
            ConformationGrid.prototype.getDialogType = function () { return ACN.ConformationDialog; };
            ConformationGrid.prototype.getIdProperty = function () { return ACN.ConformationRow.idProperty; };
            ConformationGrid.prototype.getLocalTextPrefix = function () { return ACN.ConformationRow.localTextPrefix; };
            ConformationGrid.prototype.getService = function () { return ACN.ConformationService.baseUrl; };
            ConformationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ConformationGrid);
            return ConformationGrid;
        }(Serenity.EntityGrid));
        ACN.ConformationGrid = ConformationGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var CategoryDialog = (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.CategoryForm(this.idPrefix);
            }
            CategoryDialog.prototype.getFormKey = function () { return ACN.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return ACN.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return ACN.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return ACN.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return ACN.CategoryService.baseUrl; };
            CategoryDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CategoryDialog);
            return CategoryDialog;
        }(Serenity.EntityDialog));
        ACN.CategoryDialog = CategoryDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var CategoryEditor = (function (_super) {
            __extends(CategoryEditor, _super);
            function CategoryEditor(container) {
                _super.call(this, container);
            }
            CategoryEditor.prototype.getColumnsKey = function () { return 'ACN.Category'; };
            CategoryEditor.prototype.getDialogType = function () { return ACN.CategoryEditorDialog; };
            CategoryEditor.prototype.getLocalTextPrefix = function () { return ACN.CategoryRow.localTextPrefix; };
            CategoryEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryEditor);
            return CategoryEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.CategoryEditor = CategoryEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var CategoryEditorDialog = (function (_super) {
            __extends(CategoryEditorDialog, _super);
            function CategoryEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.CategoryForm(this.idPrefix);
            }
            CategoryEditorDialog.prototype.getFormKey = function () { return ACN.CategoryForm.formKey; };
            CategoryEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.CategoryRow.localTextPrefix; };
            CategoryEditorDialog.prototype.getNameProperty = function () { return ACN.CategoryRow.nameProperty; };
            CategoryEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CategoryEditorDialog);
            return CategoryEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.CategoryEditorDialog = CategoryEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var CategoryGrid = (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                _super.call(this, container);
            }
            CategoryGrid.prototype.getColumnsKey = function () { return 'ACN.Category'; };
            CategoryGrid.prototype.getDialogType = function () { return ACN.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return ACN.CategoryRow.idProperty; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return ACN.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return ACN.CategoryService.baseUrl; };
            CategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryGrid);
            return CategoryGrid;
        }(Serenity.EntityGrid));
        ACN.CategoryGrid = CategoryGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AuditobservationDialog = (function (_super) {
            __extends(AuditobservationDialog, _super);
            function AuditobservationDialog() {
                var _this = this;
                _super.call(this);
                this.form = new ACN.AuditobservationForm(this.idPrefix);
                this.form.AcnId.changeSelect2(function (e) {
                    var ancid = _this.form.AcnId.value;
                    //var Consequence = this.form.Consequence.value;
                    if ((Q.isEmptyOrNull(ancid))) {
                        return;
                    }
                    else {
                        _this.form.Name.value = coromendal.Authorization.userDefinition.DisplayName;
                        _this.form.Email.value = coromendal.Authorization.userDefinition.Email;
                    }
                    _this.form.Likelihood.changeSelect2(function (e) {
                        var Likelihood = _this.form.Likelihood.value;
                        var Consequence = _this.form.Consequence.value;
                        if ((Q.isEmptyOrNull(Likelihood)) && (Q.isEmptyOrNull(Consequence))) {
                            return;
                        }
                        else {
                            if ((_this.form.Likelihood.value == "1") && (_this.form.Consequence.value == "1")) {
                                _this.form.RiskRating.value = "LOW";
                            }
                            if ((_this.form.Likelihood.value == "1") && (_this.form.Consequence.value == "2")) {
                                _this.form.RiskRating.value = "LOW";
                            }
                            if ((_this.form.Likelihood.value == "1") && (_this.form.Consequence.value == "3")) {
                                _this.form.RiskRating.value = "LOW";
                            }
                            if ((_this.form.Likelihood.value == "1") && (_this.form.Consequence.value == "4")) {
                                _this.form.RiskRating.value = "Medium";
                            }
                            if ((_this.form.Likelihood.value == "2") && (_this.form.Consequence.value == "1")) {
                                _this.form.RiskRating.value = "LOW";
                            }
                            if ((_this.form.Likelihood.value == "2") && (_this.form.Consequence.value == "2")) {
                                _this.form.RiskRating.value = "Medium";
                            }
                            if ((_this.form.Likelihood.value == "2") && (_this.form.Consequence.value == "3")) {
                                _this.form.RiskRating.value = "Medium";
                            }
                            if ((_this.form.Likelihood.value == "2") && (_this.form.Consequence.value == "4")) {
                                _this.form.RiskRating.value = "Medium";
                            }
                            if ((_this.form.Likelihood.value == "3") && (_this.form.Consequence.value == "1")) {
                                _this.form.RiskRating.value = "LOW";
                            }
                            if ((_this.form.Likelihood.value == "3") && (_this.form.Consequence.value == "2")) {
                                _this.form.RiskRating.value = "Medium";
                            }
                            if ((_this.form.Likelihood.value == "3") && (_this.form.Consequence.value == "3")) {
                                _this.form.RiskRating.value = "High";
                            }
                            if ((_this.form.Likelihood.value == "3") && (_this.form.Consequence.value == "4")) {
                                _this.form.RiskRating.value = "High";
                            }
                            if ((_this.form.Likelihood.value == "4") && (_this.form.Consequence.value == "1")) {
                                _this.form.RiskRating.value = "Medium";
                            }
                            if ((_this.form.Likelihood.value == "4") && (_this.form.Consequence.value == "2")) {
                                _this.form.RiskRating.value = "High";
                            }
                            if ((_this.form.Likelihood.value == "4") && (_this.form.Consequence.value == "3")) {
                                _this.form.RiskRating.value = "High";
                            }
                            if ((_this.form.Likelihood.value == "4") && (_this.form.Consequence.value == "4")) {
                                _this.form.RiskRating.value = "High";
                            }
                        }
                    });
                });
            }
            AuditobservationDialog.prototype.getFormKey = function () { return ACN.AuditobservationForm.formKey; };
            AuditobservationDialog.prototype.getIdProperty = function () { return ACN.AuditobservationRow.idProperty; };
            AuditobservationDialog.prototype.getLocalTextPrefix = function () { return ACN.AuditobservationRow.localTextPrefix; };
            AuditobservationDialog.prototype.getNameProperty = function () { return ACN.AuditobservationRow.nameProperty; };
            AuditobservationDialog.prototype.getService = function () { return ACN.AuditobservationService.baseUrl; };
            AuditobservationDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AuditobservationDialog);
            return AuditobservationDialog;
        }(Serenity.EntityDialog));
        ACN.AuditobservationDialog = AuditobservationDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AuditobservationEditor = (function (_super) {
            __extends(AuditobservationEditor, _super);
            function AuditobservationEditor(container) {
                _super.call(this, container);
            }
            AuditobservationEditor.prototype.getColumnsKey = function () { return 'ACN.Auditobservation'; };
            AuditobservationEditor.prototype.getDialogType = function () { return ACN.AuditobservationEditorDialog; };
            AuditobservationEditor.prototype.getLocalTextPrefix = function () { return ACN.AuditobservationRow.localTextPrefix; };
            AuditobservationEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AuditobservationEditor);
            return AuditobservationEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.AuditobservationEditor = AuditobservationEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AuditobservationEditorDialog = (function (_super) {
            __extends(AuditobservationEditorDialog, _super);
            function AuditobservationEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AuditobservationForm(this.idPrefix);
            }
            AuditobservationEditorDialog.prototype.getFormKey = function () { return ACN.AuditobservationForm.formKey; };
            AuditobservationEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.AuditobservationRow.localTextPrefix; };
            AuditobservationEditorDialog.prototype.getNameProperty = function () { return ACN.AuditobservationRow.nameProperty; };
            AuditobservationEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AuditobservationEditorDialog);
            return AuditobservationEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.AuditobservationEditorDialog = AuditobservationEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AuditobservationGrid = (function (_super) {
            __extends(AuditobservationGrid, _super);
            function AuditobservationGrid(container) {
                _super.call(this, container);
            }
            AuditobservationGrid.prototype.getColumnsKey = function () { return 'ACN.Auditobservation'; };
            AuditobservationGrid.prototype.getDialogType = function () { return ACN.AuditobservationDialog; };
            AuditobservationGrid.prototype.getIdProperty = function () { return ACN.AuditobservationRow.idProperty; };
            AuditobservationGrid.prototype.getLocalTextPrefix = function () { return ACN.AuditobservationRow.localTextPrefix; };
            AuditobservationGrid.prototype.getService = function () { return ACN.AuditobservationService.baseUrl; };
            AuditobservationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AuditobservationGrid);
            return AuditobservationGrid;
        }(Serenity.EntityGrid));
        ACN.AuditobservationGrid = AuditobservationGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AodDialog = (function (_super) {
            __extends(AodDialog, _super);
            function AodDialog() {
                var _this = this;
                _super.call(this);
                this.form = new ACN.AodForm(this.idPrefix);
                this.form.Meetingid.changeSelect2(function (e) {
                    var MeetingID = _this.form.Meetingid.value;
                    console.log(_this.form.Meetingid.value);
                    if (Q.isEmptyOrNull(MeetingID)) {
                        _this.setMeetingDetails({});
                        return;
                    }
                    var id1 = Q.first(ACN.MinutesofmeetingRow.getLookup().items, function (x) { return x.Meetingid == parseInt(MeetingID); }).Meetingid;
                    ACN.MinutesofmeetingService.Retrieve({
                        EntityId: id1
                    }, function (response) {
                        _this.setMeetingDetails(response.Entity);
                    });
                });
            }
            AodDialog.prototype.getFormKey = function () { return ACN.AodForm.formKey; };
            AodDialog.prototype.getIdProperty = function () { return ACN.AodRow.idProperty; };
            AodDialog.prototype.getLocalTextPrefix = function () { return ACN.AodRow.localTextPrefix; };
            AodDialog.prototype.getNameProperty = function () { return ACN.AodRow.nameProperty; };
            AodDialog.prototype.getService = function () { return ACN.AodService.baseUrl; };
            AodDialog.prototype.setMeetingDetails = function (meetingdetails) {
                this.form.Acnid.value = meetingdetails.Acnid;
                this.form.AcnidPhaseNo.value = meetingdetails.AcnidPhaseNo;
                this.form.AcnidCreationdate.value = meetingdetails.AcnidCreationdate;
                this.form.MeetingidPlanedcloseddate.value = meetingdetails.planeddate;
                this.form.MeetingidAuditopeningmeetingdate.value = meetingdetails.auditopeneddate;
                this.form.AcnidFromdate.value = meetingdetails.AcnidFromdate;
                this.form.AcnidTodate.value = meetingdetails.AcnidTodate;
                this.form.AcnidPeriodfrom.value = meetingdetails.AcnidPeriodfrom;
                this.form.AcnidPeriodto.value = meetingdetails.AcnidPeriodto;
                this.form.AcnidLocation.value = meetingdetails.AcnidLocation;
            };
            AodDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AodDialog);
            return AodDialog;
        }(Serenity.EntityDialog));
        ACN.AodDialog = AodDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AodEditor = (function (_super) {
            __extends(AodEditor, _super);
            function AodEditor(container) {
                _super.call(this, container);
            }
            AodEditor.prototype.getColumnsKey = function () { return 'ACN.Aod'; };
            AodEditor.prototype.getDialogType = function () { return ACN.AodEditorDialog; };
            AodEditor.prototype.getLocalTextPrefix = function () { return ACN.AodRow.localTextPrefix; };
            AodEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AodEditor);
            return AodEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.AodEditor = AodEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AodEditorDialog = (function (_super) {
            __extends(AodEditorDialog, _super);
            function AodEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AodForm(this.idPrefix);
            }
            AodEditorDialog.prototype.getFormKey = function () { return ACN.AodForm.formKey; };
            AodEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.AodRow.localTextPrefix; };
            AodEditorDialog.prototype.getNameProperty = function () { return ACN.AodRow.nameProperty; };
            AodEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AodEditorDialog);
            return AodEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.AodEditorDialog = AodEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AodGrid = (function (_super) {
            __extends(AodGrid, _super);
            function AodGrid(container) {
                _super.call(this, container);
            }
            AodGrid.prototype.getColumnsKey = function () { return 'ACN.Aod'; };
            AodGrid.prototype.getDialogType = function () { return ACN.AodDialog; };
            AodGrid.prototype.getIdProperty = function () { return ACN.AodRow.idProperty; };
            AodGrid.prototype.getLocalTextPrefix = function () { return ACN.AodRow.localTextPrefix; };
            AodGrid.prototype.getService = function () { return ACN.AodService.baseUrl; };
            AodGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var fld = ACN.AodRow.Fields;
                Q.first(columns, function (x) { return x.field == fld.Preview; }).format =
                    function (ctx) { return "<a href=\"\" class=\"send previewbtn\"></a>"; };
                if ((coromendal.Authorization.userDefinition.RoleId == 4) || (coromendal.Authorization.userDefinition.RoleId == 1)) {
                    Q.first(columns, function (x) { return x.field == fld.Send; }).format =
                        function (ctx) { return "<a href=\"\" class=\"send sendbtn\"></a>"; };
                }
                return columns;
            };
            AodGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.hasClass("previewbtn")) {
                    e.preventDefault();
                    var request = Q.deepClone(this.getView().params);
                    request.ContainsField = String(item.AodId);
                    request.ContainsText = "preview";
                    Q.serviceCall({ service: 'ACN/Aod/Sendmail', request: request, onSuccess: this.preview });
                }
                if (target.hasClass("sendbtn")) {
                    e.preventDefault();
                    var request = Q.deepClone(this.getView().params);
                    request.ContainsField = String(item.AodId);
                    request.ContainsText = "mail";
                    //Q.serviceCall({ service: 'ACN/Acn/Sendmail', request: request, onSuccess: this.preview });
                    Q.postToService({ service: 'ACN/Aod/Sendmail', request: request, target: '_blank' });
                }
            };
            AodGrid.prototype.preview = function (respose) {
                Q.iframeDialog({ html: respose });
                // console.log(respose);        
            };
            AodGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AodGrid);
            return AodGrid;
        }(Serenity.EntityGrid));
        ACN.AodGrid = AodGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnReviewRefDialog = (function (_super) {
            __extends(AcnReviewRefDialog, _super);
            function AcnReviewRefDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnReviewRefForm(this.idPrefix);
            }
            AcnReviewRefDialog.prototype.getFormKey = function () { return ACN.AcnReviewRefForm.formKey; };
            AcnReviewRefDialog.prototype.getIdProperty = function () { return ACN.AcnReviewRefRow.idProperty; };
            AcnReviewRefDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnReviewRefRow.localTextPrefix; };
            AcnReviewRefDialog.prototype.getService = function () { return ACN.AcnReviewRefService.baseUrl; };
            AcnReviewRefDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnReviewRefDialog);
            return AcnReviewRefDialog;
        }(Serenity.EntityDialog));
        ACN.AcnReviewRefDialog = AcnReviewRefDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnReviewRefEditor = (function (_super) {
            __extends(AcnReviewRefEditor, _super);
            function AcnReviewRefEditor(container) {
                _super.call(this, container);
            }
            AcnReviewRefEditor.prototype.getColumnsKey = function () { return 'ACN.AcnReviewRef'; };
            AcnReviewRefEditor.prototype.getDialogType = function () { return ACN.AcnReviewRefEditorDialog; };
            AcnReviewRefEditor.prototype.getLocalTextPrefix = function () { return ACN.AcnReviewRefRow.localTextPrefix; };
            AcnReviewRefEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnReviewRefEditor);
            return AcnReviewRefEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.AcnReviewRefEditor = AcnReviewRefEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnReviewRefEditorDialog = (function (_super) {
            __extends(AcnReviewRefEditorDialog, _super);
            function AcnReviewRefEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnReviewRefForm(this.idPrefix);
            }
            AcnReviewRefEditorDialog.prototype.getFormKey = function () { return ACN.AcnReviewRefForm.formKey; };
            AcnReviewRefEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnReviewRefRow.localTextPrefix; };
            AcnReviewRefEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnReviewRefEditorDialog);
            return AcnReviewRefEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.AcnReviewRefEditorDialog = AcnReviewRefEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnReviewRefGrid = (function (_super) {
            __extends(AcnReviewRefGrid, _super);
            function AcnReviewRefGrid(container) {
                _super.call(this, container);
            }
            AcnReviewRefGrid.prototype.getColumnsKey = function () { return 'ACN.AcnReviewRef'; };
            AcnReviewRefGrid.prototype.getDialogType = function () { return ACN.AcnReviewRefDialog; };
            AcnReviewRefGrid.prototype.getIdProperty = function () { return ACN.AcnReviewRefRow.idProperty; };
            AcnReviewRefGrid.prototype.getLocalTextPrefix = function () { return ACN.AcnReviewRefRow.localTextPrefix; };
            AcnReviewRefGrid.prototype.getService = function () { return ACN.AcnReviewRefService.baseUrl; };
            AcnReviewRefGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnReviewRefGrid);
            return AcnReviewRefGrid;
        }(Serenity.EntityGrid));
        ACN.AcnReviewRefGrid = AcnReviewRefGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnreportDialog = (function (_super) {
            __extends(AcnreportDialog, _super);
            function AcnreportDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnreportForm(this.idPrefix);
            }
            AcnreportDialog.prototype.getFormKey = function () { return ACN.AcnreportForm.formKey; };
            AcnreportDialog.prototype.getIdProperty = function () { return ACN.AcnreportRow.idProperty; };
            AcnreportDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnreportRow.localTextPrefix; };
            AcnreportDialog.prototype.getNameProperty = function () { return ACN.AcnreportRow.nameProperty; };
            AcnreportDialog.prototype.getService = function () { return ACN.AcnreportService.baseUrl; };
            AcnreportDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnreportDialog);
            return AcnreportDialog;
        }(Serenity.EntityDialog));
        ACN.AcnreportDialog = AcnreportDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnreportEditor = (function (_super) {
            __extends(AcnreportEditor, _super);
            function AcnreportEditor(container) {
                _super.call(this, container);
            }
            AcnreportEditor.prototype.getColumnsKey = function () { return 'ACN.Acnreport'; };
            AcnreportEditor.prototype.getDialogType = function () { return ACN.AcnreportEditorDialog; };
            AcnreportEditor.prototype.getLocalTextPrefix = function () { return ACN.AcnreportRow.localTextPrefix; };
            AcnreportEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnreportEditor);
            return AcnreportEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.AcnreportEditor = AcnreportEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnreportEditorDialog = (function (_super) {
            __extends(AcnreportEditorDialog, _super);
            function AcnreportEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnreportForm(this.idPrefix);
            }
            AcnreportEditorDialog.prototype.getFormKey = function () { return ACN.AcnreportForm.formKey; };
            AcnreportEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnreportRow.localTextPrefix; };
            AcnreportEditorDialog.prototype.getNameProperty = function () { return ACN.AcnreportRow.nameProperty; };
            AcnreportEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnreportEditorDialog);
            return AcnreportEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.AcnreportEditorDialog = AcnreportEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnreportGrid = (function (_super) {
            __extends(AcnreportGrid, _super);
            function AcnreportGrid(container) {
                _super.call(this, container);
            }
            AcnreportGrid.prototype.getColumnsKey = function () { return 'ACN.Acnreport'; };
            AcnreportGrid.prototype.getDialogType = function () { return ACN.AcnreportDialog; };
            AcnreportGrid.prototype.getIdProperty = function () { return ACN.AcnreportRow.idProperty; };
            AcnreportGrid.prototype.getLocalTextPrefix = function () { return ACN.AcnreportRow.localTextPrefix; };
            AcnreportGrid.prototype.getService = function () { return ACN.AcnreportService.baseUrl; };
            AcnreportGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var fld = ACN.AcnreportRow.Fields;
                Q.first(columns, function (x) { return x.field == fld.Download; }).format =
                    function (ctx) { return "<div class=\"down-button\"></div>"; };
                return columns;
            };
            AcnreportGrid.prototype.onClick = function (e, row, cell) {
                var c = confirm("Are you sure you want to Generate report,once done Audit will clomplete?");
                if (c == true) {
                    _super.prototype.onClick.call(this, e, row, cell);
                    if (e.isDefaultPrevented()) {
                        return;
                    }
                    var item = this.itemAt(row);
                    var target = $(e.target);
                    if (target.hasClass("down-button")) {
                        e.preventDefault();
                        var request = Q.deepClone(this.getView().params);
                        request.ContainsField = String(item.ReportId);
                        Q.postToService({ service: 'ACN/Acnreport/DownloadWord', request: request, target: '_blank' });
                    }
                }
            };
            AcnreportGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnreportGrid);
            return AcnreportGrid;
        }(Serenity.EntityGrid));
        ACN.AcnreportGrid = AcnreportGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnFeedbackRetailDialog = (function (_super) {
            __extends(AcnFeedbackRetailDialog, _super);
            function AcnFeedbackRetailDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnFeedbackRetailForm(this.idPrefix);
            }
            AcnFeedbackRetailDialog.prototype.getFormKey = function () { return ACN.AcnFeedbackRetailForm.formKey; };
            AcnFeedbackRetailDialog.prototype.getIdProperty = function () { return ACN.AcnFeedbackRetailRow.idProperty; };
            AcnFeedbackRetailDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnFeedbackRetailRow.localTextPrefix; };
            AcnFeedbackRetailDialog.prototype.getNameProperty = function () { return ACN.AcnFeedbackRetailRow.nameProperty; };
            AcnFeedbackRetailDialog.prototype.getService = function () { return ACN.AcnFeedbackRetailService.baseUrl; };
            AcnFeedbackRetailDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnFeedbackRetailDialog);
            return AcnFeedbackRetailDialog;
        }(Serenity.EntityDialog));
        ACN.AcnFeedbackRetailDialog = AcnFeedbackRetailDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnFeedbackRetailEditor = (function (_super) {
            __extends(AcnFeedbackRetailEditor, _super);
            function AcnFeedbackRetailEditor(container) {
                _super.call(this, container);
            }
            AcnFeedbackRetailEditor.prototype.getColumnsKey = function () { return 'ACN.AcnFeedbackRetail'; };
            AcnFeedbackRetailEditor.prototype.getDialogType = function () { return ACN.AcnFeedbackRetailEditorDialog; };
            AcnFeedbackRetailEditor.prototype.getLocalTextPrefix = function () { return ACN.AcnFeedbackRetailRow.localTextPrefix; };
            AcnFeedbackRetailEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnFeedbackRetailEditor);
            return AcnFeedbackRetailEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.AcnFeedbackRetailEditor = AcnFeedbackRetailEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnFeedbackRetailEditorDialog = (function (_super) {
            __extends(AcnFeedbackRetailEditorDialog, _super);
            function AcnFeedbackRetailEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnFeedbackRetailForm(this.idPrefix);
            }
            AcnFeedbackRetailEditorDialog.prototype.getFormKey = function () { return ACN.AcnFeedbackRetailForm.formKey; };
            AcnFeedbackRetailEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnFeedbackRetailRow.localTextPrefix; };
            AcnFeedbackRetailEditorDialog.prototype.getNameProperty = function () { return ACN.AcnFeedbackRetailRow.nameProperty; };
            AcnFeedbackRetailEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnFeedbackRetailEditorDialog);
            return AcnFeedbackRetailEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.AcnFeedbackRetailEditorDialog = AcnFeedbackRetailEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnFeedbackRetailGrid = (function (_super) {
            __extends(AcnFeedbackRetailGrid, _super);
            function AcnFeedbackRetailGrid(container) {
                _super.call(this, container);
            }
            AcnFeedbackRetailGrid.prototype.getColumnsKey = function () { return 'ACN.AcnFeedbackRetail'; };
            AcnFeedbackRetailGrid.prototype.getDialogType = function () { return ACN.AcnFeedbackRetailDialog; };
            AcnFeedbackRetailGrid.prototype.getIdProperty = function () { return ACN.AcnFeedbackRetailRow.idProperty; };
            AcnFeedbackRetailGrid.prototype.getLocalTextPrefix = function () { return ACN.AcnFeedbackRetailRow.localTextPrefix; };
            AcnFeedbackRetailGrid.prototype.getService = function () { return ACN.AcnFeedbackRetailService.baseUrl; };
            AcnFeedbackRetailGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var fld = ACN.AcnFeedbackRow.Fields;
                Q.first(columns, function (x) { return x.field == fld.Preview; }).format =
                    function (ctx) { return "<a href=\"\" class=\"send previewbtn\"></a>"; };
                Q.first(columns, function (x) { return x.field == fld.Send; }).format =
                    function (ctx) { return "<a href=\"\" class=\"send sendbtn\"></a>"; };
                return columns;
            };
            AcnFeedbackRetailGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.hasClass("sendbtn")) {
                    e.preventDefault();
                    var request = Q.deepClone(this.getView().params);
                    request.ContainsField = String(item.AcnFeedbackRetailId);
                    request.ContainsText = "mail";
                    Q.postToService({ service: 'ACN/AcnFeedbackRetail/Sendmail', request: request, target: '_blank' });
                }
                if (target.hasClass("previewbtn")) {
                    e.preventDefault();
                    var request = Q.deepClone(this.getView().params);
                    request.ContainsField = String(item.AcnFeedbackRetailId);
                    request.ContainsText = "preview";
                    //Q.serviceCall({ service: 'ACN/Acn/Sendmail', request: request, onSuccess: this.preview });
                    // Q.postToService({ service: 'ACN/AcnFeedbackRetail/Sendmail', request: request, target: '_blank' });
                    Q.serviceCall({ service: 'ACN/AcnFeedbackRetail/Sendmail', request: request, onSuccess: this.preview });
                }
            };
            AcnFeedbackRetailGrid.prototype.preview = function (respose) {
                Q.iframeDialog({ html: respose });
                // console.log(respose);        
            };
            AcnFeedbackRetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnFeedbackRetailGrid);
            return AcnFeedbackRetailGrid;
        }(Serenity.EntityGrid));
        ACN.AcnFeedbackRetailGrid = AcnFeedbackRetailGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnFeedbackDialog = (function (_super) {
            __extends(AcnFeedbackDialog, _super);
            function AcnFeedbackDialog() {
                var _this = this;
                _super.call(this);
                this.form = new ACN.AcnFeedbackForm(this.idPrefix);
                this.form.Acnid.changeSelect2(function (e) {
                    var MeetingID = _this.form.Acnid.value;
                    // console.log(this.form.Meetingid.value);
                    if (Q.isEmptyOrNull(MeetingID)) {
                        _this.setMeetingDetails({});
                        return;
                    }
                    var id1 = Q.first(ACN.MinutesofmeetingRow.getLookup().items, function (x) { return x.Meetingid == parseInt(MeetingID); }).Meetingid;
                    ACN.MinutesofmeetingService.Retrieve({
                        EntityId: id1
                    }, function (response) {
                        _this.setMeetingDetails(response.Entity);
                    });
                });
            }
            AcnFeedbackDialog.prototype.getFormKey = function () { return ACN.AcnFeedbackForm.formKey; };
            AcnFeedbackDialog.prototype.getIdProperty = function () { return ACN.AcnFeedbackRow.idProperty; };
            AcnFeedbackDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnFeedbackRow.localTextPrefix; };
            AcnFeedbackDialog.prototype.getNameProperty = function () { return ACN.AcnFeedbackRow.nameProperty; };
            AcnFeedbackDialog.prototype.getService = function () { return ACN.AcnFeedbackService.baseUrl; };
            AcnFeedbackDialog.prototype.setMeetingDetails = function (meetingdetails) {
                //this.form.Name.value = Authorization.userDefinition.DisplayName;
                //console.log(Authorization.userDefinition.DisplayName);
                /// this.form.Location.value = meetingdetails.AcnidLocation;
            };
            AcnFeedbackDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnFeedbackDialog);
            return AcnFeedbackDialog;
        }(Serenity.EntityDialog));
        ACN.AcnFeedbackDialog = AcnFeedbackDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnFeedbackEditor = (function (_super) {
            __extends(AcnFeedbackEditor, _super);
            function AcnFeedbackEditor(container) {
                _super.call(this, container);
            }
            AcnFeedbackEditor.prototype.getColumnsKey = function () { return 'ACN.AcnFeedback'; };
            AcnFeedbackEditor.prototype.getDialogType = function () { return ACN.AcnFeedbackEditorDialog; };
            AcnFeedbackEditor.prototype.getLocalTextPrefix = function () { return ACN.AcnFeedbackRow.localTextPrefix; };
            AcnFeedbackEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnFeedbackEditor);
            return AcnFeedbackEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.AcnFeedbackEditor = AcnFeedbackEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnFeedbackEditorDialog = (function (_super) {
            __extends(AcnFeedbackEditorDialog, _super);
            function AcnFeedbackEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnFeedbackForm(this.idPrefix);
            }
            AcnFeedbackEditorDialog.prototype.getFormKey = function () { return ACN.AcnFeedbackForm.formKey; };
            AcnFeedbackEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnFeedbackRow.localTextPrefix; };
            AcnFeedbackEditorDialog.prototype.getNameProperty = function () { return ACN.AcnFeedbackRow.nameProperty; };
            AcnFeedbackEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnFeedbackEditorDialog);
            return AcnFeedbackEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.AcnFeedbackEditorDialog = AcnFeedbackEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnFeedbackGrid = (function (_super) {
            __extends(AcnFeedbackGrid, _super);
            function AcnFeedbackGrid(container) {
                _super.call(this, container);
            }
            AcnFeedbackGrid.prototype.getColumnsKey = function () { return 'ACN.AcnFeedback'; };
            AcnFeedbackGrid.prototype.getDialogType = function () { return ACN.AcnFeedbackDialog; };
            AcnFeedbackGrid.prototype.getIdProperty = function () { return ACN.AcnFeedbackRow.idProperty; };
            AcnFeedbackGrid.prototype.getLocalTextPrefix = function () { return ACN.AcnFeedbackRow.localTextPrefix; };
            AcnFeedbackGrid.prototype.getService = function () { return ACN.AcnFeedbackService.baseUrl; };
            AcnFeedbackGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var fld = ACN.AcnFeedbackRow.Fields;
                Q.first(columns, function (x) { return x.field == fld.Preview; }).format =
                    function (ctx) { return "<a href=\"\" class=\"send previewbtn\"></a>"; };
                if ((coromendal.Authorization.userDefinition.RoleId == 4) || (coromendal.Authorization.userDefinition.RoleId == 1)) {
                    Q.first(columns, function (x) { return x.field == fld.Send; }).format =
                        function (ctx) { return "<a href=\"\" class=\"send sendbtn\"></a>"; };
                }
                return columns;
            };
            AcnFeedbackGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.hasClass("previewbtn")) {
                    e.preventDefault();
                    var request = Q.deepClone(this.getView().params);
                    request.ContainsField = String(item.AcnFeedbackId);
                    request.ContainsText = "preview";
                    Q.serviceCall({ service: 'ACN/AcnFeedback/Sendmail', request: request, onSuccess: this.preview });
                }
                if (target.hasClass("sendbtn")) {
                    e.preventDefault();
                    var request = Q.deepClone(this.getView().params);
                    request.ContainsField = String(item.AcnFeedbackId);
                    request.ContainsText = "mail";
                    Q.postToService({ service: 'ACN/AcnFeedback/Sendmail', request: request, target: '_blank' });
                }
            };
            AcnFeedbackGrid.prototype.preview = function (respose) {
                Q.iframeDialog({ html: respose });
            };
            AcnFeedbackGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnFeedbackGrid);
            return AcnFeedbackGrid;
        }(Serenity.EntityGrid));
        ACN.AcnFeedbackGrid = AcnFeedbackGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditorRefDialog = (function (_super) {
            __extends(AcnAuditorRefDialog, _super);
            function AcnAuditorRefDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnAuditorRefForm(this.idPrefix);
            }
            AcnAuditorRefDialog.prototype.getFormKey = function () { return ACN.AcnAuditorRefForm.formKey; };
            AcnAuditorRefDialog.prototype.getIdProperty = function () { return ACN.AcnAuditorRefRow.idProperty; };
            AcnAuditorRefDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditorRefRow.localTextPrefix; };
            AcnAuditorRefDialog.prototype.getService = function () { return ACN.AcnAuditorRefService.baseUrl; };
            AcnAuditorRefDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnAuditorRefDialog);
            return AcnAuditorRefDialog;
        }(Serenity.EntityDialog));
        ACN.AcnAuditorRefDialog = AcnAuditorRefDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditorRefEditor = (function (_super) {
            __extends(AcnAuditorRefEditor, _super);
            function AcnAuditorRefEditor(container) {
                _super.call(this, container);
            }
            AcnAuditorRefEditor.prototype.getColumnsKey = function () { return 'ACN.AcnAuditorRef'; };
            AcnAuditorRefEditor.prototype.getDialogType = function () { return ACN.AcnAuditorRefEditorDialog; };
            AcnAuditorRefEditor.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditorRefRow.localTextPrefix; };
            AcnAuditorRefEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnAuditorRefEditor);
            return AcnAuditorRefEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.AcnAuditorRefEditor = AcnAuditorRefEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditorRefEditorDialog = (function (_super) {
            __extends(AcnAuditorRefEditorDialog, _super);
            function AcnAuditorRefEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnAuditorRefForm(this.idPrefix);
            }
            AcnAuditorRefEditorDialog.prototype.getFormKey = function () { return ACN.AcnAuditorRefForm.formKey; };
            AcnAuditorRefEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditorRefRow.localTextPrefix; };
            AcnAuditorRefEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnAuditorRefEditorDialog);
            return AcnAuditorRefEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.AcnAuditorRefEditorDialog = AcnAuditorRefEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditorRefGrid = (function (_super) {
            __extends(AcnAuditorRefGrid, _super);
            function AcnAuditorRefGrid(container) {
                _super.call(this, container);
            }
            AcnAuditorRefGrid.prototype.getColumnsKey = function () { return 'ACN.AcnAuditorRef'; };
            AcnAuditorRefGrid.prototype.getDialogType = function () { return ACN.AcnAuditorRefDialog; };
            AcnAuditorRefGrid.prototype.getIdProperty = function () { return ACN.AcnAuditorRefRow.idProperty; };
            AcnAuditorRefGrid.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditorRefRow.localTextPrefix; };
            AcnAuditorRefGrid.prototype.getService = function () { return ACN.AcnAuditorRefService.baseUrl; };
            AcnAuditorRefGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnAuditorRefGrid);
            return AcnAuditorRefGrid;
        }(Serenity.EntityGrid));
        ACN.AcnAuditorRefGrid = AcnAuditorRefGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditorDialog = (function (_super) {
            __extends(AcnAuditorDialog, _super);
            function AcnAuditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnAuditorForm(this.idPrefix);
            }
            AcnAuditorDialog.prototype.getFormKey = function () { return ACN.AcnAuditorForm.formKey; };
            AcnAuditorDialog.prototype.getIdProperty = function () { return ACN.AcnAuditorRow.idProperty; };
            AcnAuditorDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditorRow.localTextPrefix; };
            AcnAuditorDialog.prototype.getNameProperty = function () { return ACN.AcnAuditorRow.nameProperty; };
            AcnAuditorDialog.prototype.getService = function () { return ACN.AcnAuditorService.baseUrl; };
            AcnAuditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnAuditorDialog);
            return AcnAuditorDialog;
        }(Serenity.EntityDialog));
        ACN.AcnAuditorDialog = AcnAuditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditorEditor = (function (_super) {
            __extends(AcnAuditorEditor, _super);
            function AcnAuditorEditor(container) {
                _super.call(this, container);
            }
            AcnAuditorEditor.prototype.getColumnsKey = function () { return 'ACN.AcnAuditor'; };
            AcnAuditorEditor.prototype.getDialogType = function () { return ACN.AcnAuditorEditorDialog; };
            AcnAuditorEditor.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditorRow.localTextPrefix; };
            AcnAuditorEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnAuditorEditor);
            return AcnAuditorEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.AcnAuditorEditor = AcnAuditorEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditorEditorDialog = (function (_super) {
            __extends(AcnAuditorEditorDialog, _super);
            function AcnAuditorEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnAuditorForm(this.idPrefix);
            }
            AcnAuditorEditorDialog.prototype.getFormKey = function () { return ACN.AcnAuditorForm.formKey; };
            AcnAuditorEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditorRow.localTextPrefix; };
            AcnAuditorEditorDialog.prototype.getNameProperty = function () { return ACN.AcnAuditorRow.nameProperty; };
            AcnAuditorEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnAuditorEditorDialog);
            return AcnAuditorEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.AcnAuditorEditorDialog = AcnAuditorEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditorGrid = (function (_super) {
            __extends(AcnAuditorGrid, _super);
            function AcnAuditorGrid(container) {
                _super.call(this, container);
            }
            AcnAuditorGrid.prototype.getColumnsKey = function () { return 'ACN.AcnAuditor'; };
            AcnAuditorGrid.prototype.getDialogType = function () { return ACN.AcnAuditorDialog; };
            AcnAuditorGrid.prototype.getIdProperty = function () { return ACN.AcnAuditorRow.idProperty; };
            AcnAuditorGrid.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditorRow.localTextPrefix; };
            AcnAuditorGrid.prototype.getService = function () { return ACN.AcnAuditorService.baseUrl; };
            AcnAuditorGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnAuditorGrid);
            return AcnAuditorGrid;
        }(Serenity.EntityGrid));
        ACN.AcnAuditorGrid = AcnAuditorGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeRefDialog = (function (_super) {
            __extends(AcnAuditeeRefDialog, _super);
            function AcnAuditeeRefDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnAuditeeRefForm(this.idPrefix);
            }
            AcnAuditeeRefDialog.prototype.getFormKey = function () { return ACN.AcnAuditeeRefForm.formKey; };
            AcnAuditeeRefDialog.prototype.getIdProperty = function () { return ACN.AcnAuditeeRefRow.idProperty; };
            AcnAuditeeRefDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditeeRefRow.localTextPrefix; };
            AcnAuditeeRefDialog.prototype.getService = function () { return ACN.AcnAuditeeRefService.baseUrl; };
            AcnAuditeeRefDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnAuditeeRefDialog);
            return AcnAuditeeRefDialog;
        }(Serenity.EntityDialog));
        ACN.AcnAuditeeRefDialog = AcnAuditeeRefDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeRefEditor = (function (_super) {
            __extends(AcnAuditeeRefEditor, _super);
            function AcnAuditeeRefEditor(container) {
                _super.call(this, container);
            }
            AcnAuditeeRefEditor.prototype.getColumnsKey = function () { return 'ACN.AcnAuditeeRef'; };
            AcnAuditeeRefEditor.prototype.getDialogType = function () { return ACN.AcnAuditeeRefEditorDialog; };
            AcnAuditeeRefEditor.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditeeRefRow.localTextPrefix; };
            AcnAuditeeRefEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnAuditeeRefEditor);
            return AcnAuditeeRefEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.AcnAuditeeRefEditor = AcnAuditeeRefEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeRefEditorDialog = (function (_super) {
            __extends(AcnAuditeeRefEditorDialog, _super);
            function AcnAuditeeRefEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnAuditeeRefForm(this.idPrefix);
            }
            AcnAuditeeRefEditorDialog.prototype.getFormKey = function () { return ACN.AcnAuditeeRefForm.formKey; };
            AcnAuditeeRefEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditeeRefRow.localTextPrefix; };
            AcnAuditeeRefEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnAuditeeRefEditorDialog);
            return AcnAuditeeRefEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.AcnAuditeeRefEditorDialog = AcnAuditeeRefEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeRefGrid = (function (_super) {
            __extends(AcnAuditeeRefGrid, _super);
            function AcnAuditeeRefGrid(container) {
                _super.call(this, container);
            }
            AcnAuditeeRefGrid.prototype.getColumnsKey = function () { return 'ACN.AcnAuditeeRef'; };
            AcnAuditeeRefGrid.prototype.getDialogType = function () { return ACN.AcnAuditeeRefDialog; };
            AcnAuditeeRefGrid.prototype.getIdProperty = function () { return ACN.AcnAuditeeRefRow.idProperty; };
            AcnAuditeeRefGrid.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditeeRefRow.localTextPrefix; };
            AcnAuditeeRefGrid.prototype.getService = function () { return ACN.AcnAuditeeRefService.baseUrl; };
            AcnAuditeeRefGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnAuditeeRefGrid);
            return AcnAuditeeRefGrid;
        }(Serenity.EntityGrid));
        ACN.AcnAuditeeRefGrid = AcnAuditeeRefGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeabsRefDialog = (function (_super) {
            __extends(AcnAuditeeabsRefDialog, _super);
            function AcnAuditeeabsRefDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnAuditeeabsRefForm(this.idPrefix);
            }
            AcnAuditeeabsRefDialog.prototype.getFormKey = function () { return ACN.AcnAuditeeabsRefForm.formKey; };
            AcnAuditeeabsRefDialog.prototype.getIdProperty = function () { return ACN.AcnAuditeeabsRefRow.idProperty; };
            AcnAuditeeabsRefDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditeeabsRefRow.localTextPrefix; };
            AcnAuditeeabsRefDialog.prototype.getService = function () { return ACN.AcnAuditeeabsRefService.baseUrl; };
            AcnAuditeeabsRefDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnAuditeeabsRefDialog);
            return AcnAuditeeabsRefDialog;
        }(Serenity.EntityDialog));
        ACN.AcnAuditeeabsRefDialog = AcnAuditeeabsRefDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeabsRefEditor = (function (_super) {
            __extends(AcnAuditeeabsRefEditor, _super);
            function AcnAuditeeabsRefEditor(container) {
                _super.call(this, container);
            }
            AcnAuditeeabsRefEditor.prototype.getColumnsKey = function () { return 'ACN.AcnAuditeeabsRef'; };
            AcnAuditeeabsRefEditor.prototype.getDialogType = function () { return ACN.AcnAuditeeabsRefEditorDialog; };
            AcnAuditeeabsRefEditor.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditeeabsRefRow.localTextPrefix; };
            AcnAuditeeabsRefEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnAuditeeabsRefEditor);
            return AcnAuditeeabsRefEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.AcnAuditeeabsRefEditor = AcnAuditeeabsRefEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeabsRefEditorDialog = (function (_super) {
            __extends(AcnAuditeeabsRefEditorDialog, _super);
            function AcnAuditeeabsRefEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnAuditeeabsRefForm(this.idPrefix);
            }
            AcnAuditeeabsRefEditorDialog.prototype.getFormKey = function () { return ACN.AcnAuditeeabsRefForm.formKey; };
            AcnAuditeeabsRefEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditeeabsRefRow.localTextPrefix; };
            AcnAuditeeabsRefEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnAuditeeabsRefEditorDialog);
            return AcnAuditeeabsRefEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.AcnAuditeeabsRefEditorDialog = AcnAuditeeabsRefEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeabsRefGrid = (function (_super) {
            __extends(AcnAuditeeabsRefGrid, _super);
            function AcnAuditeeabsRefGrid(container) {
                _super.call(this, container);
            }
            AcnAuditeeabsRefGrid.prototype.getColumnsKey = function () { return 'ACN.AcnAuditeeabsRef'; };
            AcnAuditeeabsRefGrid.prototype.getDialogType = function () { return ACN.AcnAuditeeabsRefDialog; };
            AcnAuditeeabsRefGrid.prototype.getIdProperty = function () { return ACN.AcnAuditeeabsRefRow.idProperty; };
            AcnAuditeeabsRefGrid.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditeeabsRefRow.localTextPrefix; };
            AcnAuditeeabsRefGrid.prototype.getService = function () { return ACN.AcnAuditeeabsRefService.baseUrl; };
            AcnAuditeeabsRefGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnAuditeeabsRefGrid);
            return AcnAuditeeabsRefGrid;
        }(Serenity.EntityGrid));
        ACN.AcnAuditeeabsRefGrid = AcnAuditeeabsRefGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeDialog = (function (_super) {
            __extends(AcnAuditeeDialog, _super);
            function AcnAuditeeDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnAuditeeForm(this.idPrefix);
            }
            AcnAuditeeDialog.prototype.getFormKey = function () { return ACN.AcnAuditeeForm.formKey; };
            AcnAuditeeDialog.prototype.getIdProperty = function () { return ACN.AcnAuditeeRow.idProperty; };
            AcnAuditeeDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditeeRow.localTextPrefix; };
            AcnAuditeeDialog.prototype.getNameProperty = function () { return ACN.AcnAuditeeRow.nameProperty; };
            AcnAuditeeDialog.prototype.getService = function () { return ACN.AcnAuditeeService.baseUrl; };
            AcnAuditeeDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnAuditeeDialog);
            return AcnAuditeeDialog;
        }(Serenity.EntityDialog));
        ACN.AcnAuditeeDialog = AcnAuditeeDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeEditor = (function (_super) {
            __extends(AcnAuditeeEditor, _super);
            function AcnAuditeeEditor(container) {
                _super.call(this, container);
            }
            AcnAuditeeEditor.prototype.getColumnsKey = function () { return 'ACN.AcnAuditee'; };
            AcnAuditeeEditor.prototype.getDialogType = function () { return ACN.AcnAuditeeEditorDialog; };
            AcnAuditeeEditor.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditeeRow.localTextPrefix; };
            AcnAuditeeEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnAuditeeEditor);
            return AcnAuditeeEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.AcnAuditeeEditor = AcnAuditeeEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeEditorDialog = (function (_super) {
            __extends(AcnAuditeeEditorDialog, _super);
            function AcnAuditeeEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnAuditeeForm(this.idPrefix);
            }
            AcnAuditeeEditorDialog.prototype.getFormKey = function () { return ACN.AcnAuditeeForm.formKey; };
            AcnAuditeeEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditeeRow.localTextPrefix; };
            AcnAuditeeEditorDialog.prototype.getNameProperty = function () { return ACN.AcnAuditeeRow.nameProperty; };
            AcnAuditeeEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnAuditeeEditorDialog);
            return AcnAuditeeEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.AcnAuditeeEditorDialog = AcnAuditeeEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeGrid = (function (_super) {
            __extends(AcnAuditeeGrid, _super);
            function AcnAuditeeGrid(container) {
                _super.call(this, container);
            }
            AcnAuditeeGrid.prototype.getColumnsKey = function () { return 'ACN.AcnAuditee'; };
            AcnAuditeeGrid.prototype.getDialogType = function () { return ACN.AcnAuditeeDialog; };
            AcnAuditeeGrid.prototype.getIdProperty = function () { return ACN.AcnAuditeeRow.idProperty; };
            AcnAuditeeGrid.prototype.getLocalTextPrefix = function () { return ACN.AcnAuditeeRow.localTextPrefix; };
            AcnAuditeeGrid.prototype.getService = function () { return ACN.AcnAuditeeService.baseUrl; };
            AcnAuditeeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnAuditeeGrid);
            return AcnAuditeeGrid;
        }(Serenity.EntityGrid));
        ACN.AcnAuditeeGrid = AcnAuditeeGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnAuditeeListFormatter = (function () {
            function AcnAuditeeListFormatter() {
            }
            AcnAuditeeListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = ACN.AcnAuditeeRow.getLookup().itemById;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.Name : x); }).join(", ");
            };
            AcnAuditeeListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], AcnAuditeeListFormatter);
            return AcnAuditeeListFormatter;
        }());
        ACN.AcnAuditeeListFormatter = AcnAuditeeListFormatter;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnDialog = (function (_super) {
            __extends(AcnDialog, _super);
            function AcnDialog() {
                var _this = this;
                _super.call(this);
                this.form = new ACN.AcnForm(this.idPrefix);
                this.form.PhaseNo.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.PhaseNo.value == null)
                        return "Please Enter Phase No!";
                });
                this.form.AcnTilte.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.AcnTilte.value == null)
                        return "Please Enter Title!";
                });
                this.form.Periodfrom.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Periodfrom.value == null)
                        return "Please Enter Period From Date!";
                });
                this.form.Periodto.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Periodto.value == null)
                        return "Please Enter Period To Date!";
                });
                this.form.Fromdate.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Fromdate.value == null)
                        return "Please Enter From Date!";
                });
                this.form.Todate.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Todate.value == null)
                        return "Please Enter To Date!";
                });
                this.form.location.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.location.value == null)
                        return "Please Enter Location!";
                });
            }
            AcnDialog.prototype.getFormKey = function () { return ACN.AcnForm.formKey; };
            AcnDialog.prototype.getIdProperty = function () { return ACN.AcnRow.idProperty; };
            AcnDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnRow.localTextPrefix; };
            AcnDialog.prototype.getNameProperty = function () { return ACN.AcnRow.nameProperty; };
            AcnDialog.prototype.getService = function () { return ACN.AcnService.baseUrl; };
            AcnDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnDialog);
            return AcnDialog;
        }(Serenity.EntityDialog));
        ACN.AcnDialog = AcnDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnEditor = (function (_super) {
            __extends(AcnEditor, _super);
            function AcnEditor(container) {
                _super.call(this, container);
            }
            AcnEditor.prototype.getColumnsKey = function () { return 'ACN.Acn'; };
            AcnEditor.prototype.getDialogType = function () { return ACN.AcnEditorDialog; };
            AcnEditor.prototype.getLocalTextPrefix = function () { return ACN.AcnRow.localTextPrefix; };
            AcnEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnEditor);
            return AcnEditor;
        }(coromendal.Common.GridEditorBase));
        ACN.AcnEditor = AcnEditor;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnEditorDialog = (function (_super) {
            __extends(AcnEditorDialog, _super);
            function AcnEditorDialog() {
                _super.apply(this, arguments);
                this.form = new ACN.AcnForm(this.idPrefix);
            }
            AcnEditorDialog.prototype.getFormKey = function () { return ACN.AcnForm.formKey; };
            AcnEditorDialog.prototype.getLocalTextPrefix = function () { return ACN.AcnRow.localTextPrefix; };
            AcnEditorDialog.prototype.getNameProperty = function () { return ACN.AcnRow.nameProperty; };
            AcnEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AcnEditorDialog);
            return AcnEditorDialog;
        }(coromendal.Common.GridEditorDialog));
        ACN.AcnEditorDialog = AcnEditorDialog;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
var coromendal;
(function (coromendal) {
    var ACN;
    (function (ACN) {
        var AcnGrid = (function (_super) {
            __extends(AcnGrid, _super);
            function AcnGrid(container) {
                _super.call(this, container);
            }
            AcnGrid.prototype.getColumnsKey = function () { return 'ACN.Acn'; };
            AcnGrid.prototype.getDialogType = function () { return ACN.AcnDialog; };
            AcnGrid.prototype.getIdProperty = function () { return ACN.AcnRow.idProperty; };
            AcnGrid.prototype.getLocalTextPrefix = function () { return ACN.AcnRow.localTextPrefix; };
            AcnGrid.prototype.getService = function () { return ACN.AcnService.baseUrl; };
            AcnGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var fld = ACN.AcnRow.Fields;
                Q.first(columns, function (x) { return x.field == fld.Preview; }).format =
                    function (ctx) { return "<a href=\"\" class=\"send previewbtn\"></a>"; };
                if ((coromendal.Authorization.userDefinition.RoleId == 4) || (coromendal.Authorization.userDefinition.RoleId == 1)) {
                    Q.first(columns, function (x) { return x.field == fld.send; }).format =
                        function (ctx) { return "<a href=\"\" class=\"send sendbtn\"></a>"; };
                }
                return columns;
            };
            AcnGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.hasClass("previewbtn")) {
                    e.preventDefault();
                    var request = Q.deepClone(this.getView().params);
                    request.ContainsField = String(item.AcnId);
                    request.ContainsText = "preview";
                    Q.serviceCall({ service: 'ACN/Acn/Sendmail', request: request, onSuccess: this.preview });
                }
                if (target.hasClass("sendbtn")) {
                    e.preventDefault();
                    var request = Q.deepClone(this.getView().params);
                    request.ContainsField = String(item.AcnId);
                    request.ContainsText = "mail";
                    //Q.serviceCall({ service: 'ACN/Acn/Sendmail', request: request, onSuccess: this.preview });
                    Q.postToService({ service: 'ACN/Acn/Sendmail', request: request, target: '_blank' });
                }
            };
            AcnGrid.prototype.preview = function (respose) {
                Q.iframeDialog({ html: respose });
                // console.log(respose);        
            };
            AcnGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AcnGrid);
            return AcnGrid;
        }(Serenity.EntityGrid));
        ACN.AcnGrid = AcnGrid;
    })(ACN = coromendal.ACN || (coromendal.ACN = {}));
})(coromendal || (coromendal = {}));
//# sourceMappingURL=coromendal.Web.js.map