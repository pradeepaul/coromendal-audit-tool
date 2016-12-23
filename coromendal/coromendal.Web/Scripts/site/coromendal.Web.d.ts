declare namespace coromendal.Northwind {
    class TerritoryDialog extends Serenity.EntityDialog<TerritoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TerritoryForm;
        protected getLanguages(): string[][];
    }
}
declare namespace coromendal.Northwind {
    class TerritoryGrid extends Serenity.EntityGrid<TerritoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.Northwind {
    class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SupplierForm;
        protected getLanguages(): string[][];
    }
}
declare namespace coromendal.Northwind {
    class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.Northwind {
    class ShipperDialog extends Serenity.EntityDialog<ShipperRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ShipperForm;
        protected getLanguages(): string[][];
    }
}
declare namespace coromendal.Northwind {
    class ShipperFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace coromendal.Northwind {
    class ShipperGrid extends Serenity.EntityGrid<ShipperRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.Northwind {
    class PhoneEditor extends Serenity.StringEditor {
        constructor(input: JQuery);
        protected formatValue(): void;
        protected getFormattedValue(): string;
        multiple: boolean;
        get_value(): string;
        set_value(value: string): void;
        static validate(phone: string, isMultiple: boolean): string;
        static isValidPhone(phone: string): boolean;
        static formatPhone(phone: any): any;
        static formatMulti(phone: string, format: (s: string) => string): string;
        static isValidMulti(phone: string, check: (s: string) => boolean): boolean;
    }
}
declare namespace coromendal.Northwind {
    class RegionDialog extends Serenity.EntityDialog<RegionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RegionForm;
        protected getLanguages(): string[][];
    }
}
declare namespace coromendal.Northwind {
    class RegionGrid extends Serenity.EntityGrid<RegionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.Northwind {
    class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductForm;
        protected getLanguages(): string[][];
    }
}
declare namespace coromendal.Northwind {
    class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected onViewProcessData(response: any): Serenity.ListResponse<ProductRow>;
        /**
         * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
         * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
         * no event handlers to rendered cell contents
         */
        private numericInputFormatter(ctx);
        private stringInputFormatter(ctx);
        /**
         * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
         */
        private selectFormatter(ctx, idField, lookup);
        private getEffectiveValue(item, field);
        protected getColumns(): Slick.Column[];
        private inputsChange(e);
        private setSaveButtonState();
        private saveClick();
    }
}
declare namespace coromendal.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace coromendal.Northwind {
    class OrderDetailDialog extends Common.GridEditorDialog<OrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: OrderDetailForm;
        constructor();
    }
}
declare namespace coromendal.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        private nextId;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace coromendal.Northwind {
    class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace coromendal.Northwind {
    class FreightFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace coromendal.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace coromendal.BasicSamples {
    class OrderBulkAction extends Common.BulkServiceAction {
        /**
         * This controls how many service requests will be used in parallel.
         * Determine this number based on how many requests your server
         * might be able to handle, and amount of wait on external resources.
         */
        protected getParallelRequests(): number;
        /**
         * These number of records IDs will be sent to your service in one
         * service call. If your service is designed to handle one record only,
         * set it to 1. But note that, if you have 5000 records, this will
         * result in 5000 service calls / requests.
         */
        protected getBatchSize(): number;
        /**
         * This is where you should call your service.
         * Batch parameter contains the selected order IDs
         * that should be processed in this service call.
         */
        protected executeForBatch(batch: any): void;
    }
}
declare namespace coromendal.Northwind {
    class OrderDialog extends Serenity.EntityDialog<OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OrderForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace coromendal.Northwind {
    class OrderGrid extends Serenity.EntityGrid<OrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected shippingStateFilter: Serenity.EnumEditor;
        constructor(container: JQuery);
        protected createQuickFilters(): void;
        protected getButtons(): Serenity.ToolButton[];
        set_shippingState(value: number): void;
    }
}
declare namespace coromendal.Northwind {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        text: string;
        okClick: () => void;
    }
}
declare namespace coromendal.Northwind {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        value: NoteRow[];
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace coromendal.Northwind {
    class EmployeeFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        genderProperty: string;
        initializeColumn(column: Slick.Column): void;
    }
}
declare namespace coromendal.Northwind {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CustomerForm;
        private ordersGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: CustomerRow): void;
        onSaveSuccess(response: any): void;
    }
}
declare namespace coromendal.Northwind {
    class CustomerEditor extends Serenity.LookupEditorBase<CustomerRow, any> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace coromendal.Northwind {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace coromendal.Northwind {
    class CustomerOrderDialog extends OrderDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace coromendal.Northwind {
    class CustomerOrdersGrid extends OrderGrid {
        protected getDialogType(): typeof CustomerOrderDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _customerID;
        customerID: string;
    }
}
declare namespace coromendal.Northwind {
    class EmployeeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace coromendal.Northwind {
    class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CategoryForm;
        protected getLanguages(): string[][];
    }
}
declare namespace coromendal.Northwind {
    class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ScriptInitialization {
}
declare namespace coromendal.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace coromendal.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare namespace coromendal.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace coromendal.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace coromendal.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class AcnAuditeeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AcnAuditeeForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class AcnAuditeeReferenceForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AcnAuditeeReferenceForm {
        AcnAuditeeId: Serenity.IntegerEditor;
        AcnmasterId: Serenity.IntegerEditor;
    }
}
declare namespace coromendal.ACN {
    interface AcnAuditeeReferenceRow {
        AcnAuditeeReferenceId?: number;
        AcnAuditeeId?: number;
        AcnmasterId?: number;
    }
    namespace AcnAuditeeReferenceRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const AcnAuditeeReferenceId: any;
            const AcnAuditeeId: any;
            const AcnmasterId: any;
        }
    }
}
declare namespace coromendal.ACN {
    namespace AcnAuditeeReferenceService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<AcnAuditeeReferenceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AcnAuditeeReferenceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AcnAuditeeReferenceRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AcnAuditeeReferenceRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
    class AcnAuditeeRefForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AcnAuditeeRefForm {
        AcnAuditeeId: Serenity.IntegerEditor;
        AcnId: Serenity.IntegerEditor;
    }
}
declare namespace coromendal.ACN {
    interface AcnAuditeeRefRow {
        AcnAuditeeRefId?: number;
        AcnAuditeeId?: number;
        AcnId?: number;
    }
    namespace AcnAuditeeRefRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const AcnAuditeeRefId: string;
            const AcnAuditeeId: string;
            const AcnId: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace AcnAuditeeRefService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<AcnAuditeeRefRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AcnAuditeeRefRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AcnAuditeeRefRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AcnAuditeeRefRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
    interface AcnAuditeeRow {
        AcnAuditeeId?: number;
        Name?: string;
    }
    namespace AcnAuditeeRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<AcnAuditeeRow>;
        namespace Fields {
            const AcnAuditeeId: string;
            const Name: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace AcnAuditeeService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<AcnAuditeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AcnAuditeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AcnAuditeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AcnAuditeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class AcnAuditorForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AcnAuditorForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class AcnAuditorReferenceForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AcnAuditorReferenceForm {
        AcnAuditorId: Serenity.IntegerEditor;
        AcnmasterId: Serenity.IntegerEditor;
    }
}
declare namespace coromendal.ACN {
    interface AcnAuditorReferenceRow {
        AcnAuditorReferenceId?: number;
        AcnAuditorId?: number;
        AcnmasterId?: number;
    }
    namespace AcnAuditorReferenceRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const AcnAuditorReferenceId: any;
            const AcnAuditorId: any;
            const AcnmasterId: any;
        }
    }
}
declare namespace coromendal.ACN {
    namespace AcnAuditorReferenceService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<AcnAuditorReferenceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AcnAuditorReferenceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AcnAuditorReferenceRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AcnAuditorReferenceRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
    class AcnAuditorRefForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AcnAuditorRefForm {
        AcnAuditorId: Serenity.IntegerEditor;
        AcnId: Serenity.IntegerEditor;
    }
}
declare namespace coromendal.ACN {
    interface AcnAuditorRefRow {
        AcnAuditorRefId?: number;
        AcnAuditorId?: number;
        AcnId?: number;
    }
    namespace AcnAuditorRefRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const AcnAuditorRefId: string;
            const AcnAuditorId: string;
            const AcnId: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace AcnAuditorRefService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<AcnAuditorRefRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AcnAuditorRefRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AcnAuditorRefRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AcnAuditorRefRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
    interface AcnAuditorRow {
        AcnAuditorId?: number;
        Name?: string;
    }
    namespace AcnAuditorRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<AcnAuditorRow>;
        namespace Fields {
            const AcnAuditorId: string;
            const Name: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace AcnAuditorService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<AcnAuditorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AcnAuditorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AcnAuditorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AcnAuditorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class AcnFeedbackForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AcnFeedbackForm {
        Acnid: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Dept: Serenity.StringEditor;
        Reviewname: Serenity.StringEditor;
        Location: Serenity.StringEditor;
        Ques1: Serenity.LookupEditor;
        Remark1: Serenity.StringEditor;
        Ques2: Serenity.LookupEditor;
        Remark2: Serenity.StringEditor;
        Ques3: Serenity.LookupEditor;
        Remark3: Serenity.StringEditor;
        Ques4: Serenity.LookupEditor;
        Remark4: Serenity.StringEditor;
        Ques5: Serenity.LookupEditor;
        Remark5: Serenity.StringEditor;
        Ques6: Serenity.LookupEditor;
        Remark6: Serenity.StringEditor;
        Ques7: Serenity.LookupEditor;
        Remark7: Serenity.StringEditor;
        Ques8: Serenity.LookupEditor;
        Remark8: Serenity.StringEditor;
        Ques9: Serenity.LookupEditor;
        Remark9: Serenity.StringEditor;
        Ques10: Serenity.LookupEditor;
        Remark10: Serenity.StringEditor;
        Ques11: Serenity.LookupEditor;
        Remark11: Serenity.StringEditor;
        Ques12: Serenity.LookupEditor;
        Remark12: Serenity.StringEditor;
        Ques13: Serenity.LookupEditor;
        Remark13: Serenity.StringEditor;
        Ques14: Serenity.LookupEditor;
        Remark14: Serenity.StringEditor;
        Comments: Serenity.TextAreaEditor;
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class AcnFeedbackRetailForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AcnFeedbackRetailForm {
        Acnid: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Dept: Serenity.StringEditor;
        Reviewname: Serenity.StringEditor;
        Location: Serenity.StringEditor;
        Date: Serenity.StringEditor;
        Storeno: Serenity.StringEditor;
        Ques1: Serenity.LookupEditor;
        Remark1: Serenity.StringEditor;
        Ques2: Serenity.LookupEditor;
        Remark2: Serenity.StringEditor;
        Ques3: Serenity.LookupEditor;
        Remark3: Serenity.StringEditor;
        Ques4: Serenity.LookupEditor;
        Remark4: Serenity.StringEditor;
        Ques5: Serenity.LookupEditor;
        Remark5: Serenity.StringEditor;
        Ques6: Serenity.LookupEditor;
        Remark6: Serenity.StringEditor;
        Ques7: Serenity.LookupEditor;
        Remark7: Serenity.StringEditor;
        Ques8: Serenity.LookupEditor;
        Remark8: Serenity.StringEditor;
        Comments: Serenity.TextAreaEditor;
    }
}
declare namespace coromendal.ACN {
    interface AcnFeedbackRetailRow {
        AcnFeedbackRetailId?: number;
        Acnid?: number;
        Ques1?: number;
        Ques2?: number;
        Ques3?: number;
        Ques4?: number;
        Ques5?: number;
        Ques6?: number;
        Ques7?: number;
        Ques8?: number;
        Name?: string;
        Dept?: string;
        Reviewname?: string;
        Location?: string;
        Remark1?: string;
        Remark2?: string;
        Remark3?: string;
        Remark4?: string;
        Remark5?: string;
        Remark6?: string;
        Remark7?: string;
        Remark8?: string;
        Date?: string;
        Storeno?: string;
        Comments?: string;
        AcnidAcnTilte?: string;
        AcnidPhaseNo?: number;
        AcnidLocation?: string;
        AcnidFromdate?: string;
        AcnidTodate?: string;
        AcnidPeriodfrom?: string;
        AcnidPeriodto?: string;
        AcnidCreationdate?: string;
        AcnidUserid?: number;
    }
    namespace AcnFeedbackRetailRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const AcnFeedbackRetailId: string;
            const Acnid: string;
            const Ques1: string;
            const Ques2: string;
            const Ques3: string;
            const Ques4: string;
            const Ques5: string;
            const Ques6: string;
            const Ques7: string;
            const Ques8: string;
            const Name: string;
            const Dept: string;
            const Reviewname: string;
            const Location: string;
            const Remark1: string;
            const Remark2: string;
            const Remark3: string;
            const Remark4: string;
            const Remark5: string;
            const Remark6: string;
            const Remark7: string;
            const Remark8: string;
            const Date: string;
            const Storeno: string;
            const Comments: string;
            const AcnidAcnTilte: string;
            const AcnidPhaseNo: string;
            const AcnidLocation: string;
            const AcnidFromdate: string;
            const AcnidTodate: string;
            const AcnidPeriodfrom: string;
            const AcnidPeriodto: string;
            const AcnidCreationdate: string;
            const AcnidUserid: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace AcnFeedbackRetailService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<AcnFeedbackRetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AcnFeedbackRetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AcnFeedbackRetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AcnFeedbackRetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
    interface AcnFeedbackRow {
        AcnFeedbackId?: number;
        Acnid?: number;
        Ques1?: number;
        Remark1?: string;
        Ques2?: number;
        Remark2?: string;
        Ques3?: number;
        Remark3?: string;
        Ques4?: number;
        Remark4?: string;
        Ques5?: number;
        Remark5?: string;
        Ques6?: number;
        Remark6?: string;
        Ques7?: number;
        Remark7?: string;
        Ques8?: number;
        Remark8?: string;
        Ques9?: number;
        Remark9?: string;
        Ques10?: number;
        Remark10?: string;
        Ques11?: number;
        Remark11?: string;
        Ques12?: number;
        Remark12?: string;
        Ques13?: number;
        Remark13?: string;
        Ques14?: number;
        Remark14?: string;
        Name?: string;
        Dept?: string;
        Reviewname?: string;
        Location?: string;
        Comments?: string;
        AcnidAcnTilte?: string;
        AcnidPhaseNo?: number;
        AcnidLocation?: string;
        AcnidFromdate?: string;
        AcnidTodate?: string;
        AcnidPeriodfrom?: string;
        AcnidPeriodto?: string;
        AcnidCreationdate?: string;
    }
    namespace AcnFeedbackRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const AcnFeedbackId: string;
            const Acnid: string;
            const Ques1: string;
            const Remark1: string;
            const Ques2: string;
            const Remark2: string;
            const Ques3: string;
            const Remark3: string;
            const Ques4: string;
            const Remark4: string;
            const Ques5: string;
            const Remark5: string;
            const Ques6: string;
            const Remark6: string;
            const Ques7: string;
            const Remark7: string;
            const Ques8: string;
            const Remark8: string;
            const Ques9: string;
            const Remark9: string;
            const Ques10: string;
            const Remark10: string;
            const Ques11: string;
            const Remark11: string;
            const Ques12: string;
            const Remark12: string;
            const Ques13: string;
            const Remark13: string;
            const Ques14: string;
            const Remark14: string;
            const Name: string;
            const Dept: string;
            const Reviewname: string;
            const Location: string;
            const Comments: string;
            const AcnidAcnTilte: string;
            const AcnidPhaseNo: string;
            const AcnidLocation: string;
            const AcnidFromdate: string;
            const AcnidTodate: string;
            const AcnidPeriodfrom: string;
            const AcnidPeriodto: string;
            const AcnidCreationdate: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace AcnFeedbackService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<AcnFeedbackRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AcnFeedbackRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AcnFeedbackRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AcnFeedbackRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
    class AcnForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AcnForm {
        AcnTilte: Serenity.StringEditor;
        PhaseNo: Serenity.IntegerEditor;
        Auditor: Serenity.LookupEditor;
        Auditee: Serenity.LookupEditor;
        Fromdate: Serenity.DateEditor;
        Todate: Serenity.DateEditor;
        Periodfrom: Serenity.DateEditor;
        Periodto: Serenity.DateEditor;
        location: Serenity.StringEditor;
        creationdate: Serenity.DateEditor;
        ScopeList: ScopeEditor;
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class AcnreportForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AcnreportForm {
        Title: Serenity.StringEditor;
        Acnid: Serenity.LookupEditor;
        userid: Serenity.StringEditor;
        status: Serenity.StringEditor;
        Keyfacts: KeyfactsEditor;
    }
}
declare namespace coromendal.ACN {
    interface AcnreportRow {
        ReportId?: number;
        Title?: string;
        Acnid?: number;
        Download?: number;
        userid?: number;
        status?: string;
        AcnidAcnTilte?: string;
        AcnidPhaseNo?: number;
        AcnidLocation?: string;
        AcnidFromdate?: string;
        AcnidTodate?: string;
        AcnidPeriodfrom?: string;
        AcnidPeriodto?: string;
        AcnidCreationdate?: string;
        Keyfacts?: KeyfactsRow[];
    }
    namespace AcnreportRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<AcnreportRow>;
        namespace Fields {
            const ReportId: string;
            const Title: string;
            const Acnid: string;
            const Download: string;
            const userid: string;
            const status: string;
            const AcnidAcnTilte: string;
            const AcnidPhaseNo: string;
            const AcnidLocation: string;
            const AcnidFromdate: string;
            const AcnidTodate: string;
            const AcnidPeriodfrom: string;
            const AcnidPeriodto: string;
            const AcnidCreationdate: string;
            const Keyfacts: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace AcnreportService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<AcnreportRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AcnreportRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AcnreportRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AcnreportRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
    interface AcnRow {
        AcnId?: number;
        AcnTilte?: string;
        Auditor?: number[];
        Auditee?: number[];
        PhaseNo?: number;
        location?: string;
        Fromdate?: string;
        Todate?: string;
        Periodfrom?: string;
        Periodto?: string;
        creationdate?: string;
        ScopeList?: ScopeRow[];
    }
    namespace AcnRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<AcnRow>;
        namespace Fields {
            const AcnId: string;
            const AcnTilte: string;
            const Auditor: string;
            const Auditee: string;
            const PhaseNo: string;
            const location: string;
            const Fromdate: string;
            const Todate: string;
            const Periodfrom: string;
            const Periodto: string;
            const creationdate: string;
            const ScopeList: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace AcnService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<AcnRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AcnRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AcnRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AcnRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class AodForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AodForm {
        Meetingid: Serenity.LookupEditor;
        AcnidPhaseNo: Serenity.IntegerEditor;
        Acnid: Serenity.IntegerEditor;
        MeetingidMomdate: Serenity.DateEditor;
        MeetingidPlanedcloseddate: Serenity.DateEditor;
        MeetingidAuditopeningmeetingdate: Serenity.DateEditor;
        AcnidPeriodfrom: Serenity.StringEditor;
        AcnidPeriodto: Serenity.StringEditor;
        AcnidFromdate: Serenity.StringEditor;
        AcnidTodate: Serenity.StringEditor;
        Sbu: Serenity.StringEditor;
        Actualcomencementdate: Serenity.StringEditor;
        Actualcompltedate: Serenity.StringEditor;
        ProcessOwner: Serenity.StringEditor;
        Functionalhead: Serenity.StringEditor;
        Areaofscope: Serenity.StringEditor;
        Exclusions: Serenity.StringEditor;
        Reasons: Serenity.StringEditor;
        inputfromauditee: InputfromauditeeEditor;
        Satisfactionrating: SatisfactionratingEditor;
        Observationpending: ObservationpendingEditor;
        Currentauditobservation: CurrentauditobservationEditor;
    }
}
declare namespace coromendal.ACN {
    interface AodRow {
        AodId?: number;
        Meetingid?: number;
        Actualcomencementdate?: string;
        Actualcompltedate?: string;
        ProcessOwner?: string;
        Functionalhead?: string;
        Areaofscope?: string;
        Exclusions?: string;
        Reasons?: string;
        Sbu?: string;
        Acnid?: number;
        MeetingidAcnid?: number;
        MeetingidTitle?: string;
        MeetingidAuditscope?: string;
        MeetingidPeriod?: string;
        MeetingidTime?: number;
        MeetingidVenue?: string;
        MeetingidAuditor?: number;
        MeetingidAuditee?: number;
        MeetingidDownload?: number;
        MeetingidUserid?: number;
        MeetingidMomdate?: string;
        MeetingidPlanedcloseddate?: string;
        MeetingidAuditopeningmeetingdate?: string;
        AcnidAcnTilte?: string;
        AcnidPhaseNo?: number;
        AcnidLocation?: string;
        AcnidFromdate?: string;
        AcnidTodate?: string;
        AcnidPeriodfrom?: string;
        AcnidPeriodto?: string;
        AcnidCreationdate?: string;
        AcnidUserid?: number;
        inputfromauditee?: InputfromauditeeRow[];
        Satisfactionrating?: SatisfactionratingRow[];
        Observationpending?: ObservationpendingRow[];
        Currentauditobservation?: CurrentauditobservationRow[];
    }
    namespace AodRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const AodId: string;
            const Meetingid: string;
            const Actualcomencementdate: string;
            const Actualcompltedate: string;
            const ProcessOwner: string;
            const Functionalhead: string;
            const Areaofscope: string;
            const Exclusions: string;
            const Reasons: string;
            const Sbu: string;
            const Acnid: string;
            const MeetingidAcnid: string;
            const MeetingidTitle: string;
            const MeetingidAuditscope: string;
            const MeetingidPeriod: string;
            const MeetingidTime: string;
            const MeetingidVenue: string;
            const MeetingidAuditor: string;
            const MeetingidAuditee: string;
            const MeetingidDownload: string;
            const MeetingidUserid: string;
            const MeetingidMomdate: string;
            const MeetingidPlanedcloseddate: string;
            const MeetingidAuditopeningmeetingdate: string;
            const AcnidAcnTilte: string;
            const AcnidPhaseNo: string;
            const AcnidLocation: string;
            const AcnidFromdate: string;
            const AcnidTodate: string;
            const AcnidPeriodfrom: string;
            const AcnidPeriodto: string;
            const AcnidCreationdate: string;
            const AcnidUserid: string;
            const inputfromauditee: string;
            const Satisfactionrating: string;
            const Observationpending: string;
            const Currentauditobservation: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace AodService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<AodRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AodRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AodRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AodRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class AuditobservationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AuditobservationForm {
        AcnId: Serenity.LookupEditor;
        Observationtitle: Serenity.StringEditor;
        Observationsynopsis: Serenity.TextAreaEditor;
        Detailedobservation: Serenity.StringEditor;
        rootList: RootcauseEditor;
        SuggestionList: SuggestionEditor;
        Category: Serenity.LookupEditor;
        Consequence: Serenity.LookupEditor;
        Likelihood: Serenity.LookupEditor;
        RiskRating: Serenity.StringEditor;
        Agreeobservation: Serenity.LookupEditor;
        Justification: Serenity.TextAreaEditor;
        Suggestion: Serenity.LookupEditor;
        Alternateplan: Serenity.TextAreaEditor;
        Name: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Targetdate: Serenity.DateEditor;
    }
}
declare namespace coromendal.ACN {
    interface AuditobservationRow {
        AuditobservationId?: number;
        AcnId?: number;
        Observationtitle?: string;
        Observationsynopsis?: string;
        Detailedobservation?: string;
        Category?: number;
        RiskRating?: string;
        Agreeobservation?: number;
        Justification?: string;
        Suggestion?: number;
        Alternateplan?: string;
        Name?: string;
        Email?: string;
        Targetdate?: string;
        Consequence?: number;
        Likelihood?: number;
        AcnAcnTilte?: string;
        AcnPhaseNo?: number;
        AcnLocation?: string;
        AcnFromdate?: string;
        AcnTodate?: string;
        AcnPeriodfrom?: string;
        AcnPeriodto?: string;
        AcnCreationdate?: string;
        rootList?: RootcauseRow[];
        SuggestionList?: SuggestionRow[];
    }
    namespace AuditobservationRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<AuditobservationRow>;
        namespace Fields {
            const AuditobservationId: string;
            const AcnId: string;
            const Observationtitle: string;
            const Observationsynopsis: string;
            const Detailedobservation: string;
            const Category: string;
            const RiskRating: string;
            const Agreeobservation: string;
            const Justification: string;
            const Suggestion: string;
            const Alternateplan: string;
            const Name: string;
            const Email: string;
            const Targetdate: string;
            const Consequence: string;
            const Likelihood: string;
            const AcnAcnTilte: string;
            const AcnPhaseNo: string;
            const AcnLocation: string;
            const AcnFromdate: string;
            const AcnTodate: string;
            const AcnPeriodfrom: string;
            const AcnPeriodto: string;
            const AcnCreationdate: string;
            const rootList: string;
            const SuggestionList: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace AuditobservationService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<AuditobservationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AuditobservationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AuditobservationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AuditobservationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class CategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CategoryForm {
        Categoryname: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface CategoryRow {
        Categoryid?: number;
        Categoryname?: string;
    }
    namespace CategoryRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<CategoryRow>;
        namespace Fields {
            const Categoryid: string;
            const Categoryname: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace CategoryService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class ConformationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ConformationForm {
        Conformationname: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface ConformationRow {
        ConformationId?: number;
        Conformationname?: string;
    }
    namespace ConformationRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ConformationRow>;
        namespace Fields {
            const ConformationId: string;
            const Conformationname: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace ConformationService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ConformationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ConformationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConformationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConformationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class CurrentauditobservationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CurrentauditobservationForm {
        Observation: Serenity.StringEditor;
        Comments: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface CurrentauditobservationRow {
        Id?: number;
        Observation?: string;
        Comments?: string;
        Aodid?: number;
        AodidMeetingid?: number;
        AodidActualcomencementdate?: string;
        AodidActualcompltedate?: string;
        AodidProcessOwner?: string;
        AodidFunctionalhead?: string;
        AodidAreaofscope?: string;
        AodidExclusions?: string;
        AodidReasons?: string;
        AodidSbu?: string;
        AodidAcnid?: number;
    }
    namespace CurrentauditobservationRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const Id: string;
            const Observation: string;
            const Comments: string;
            const Aodid: string;
            const AodidMeetingid: string;
            const AodidActualcomencementdate: string;
            const AodidActualcompltedate: string;
            const AodidProcessOwner: string;
            const AodidFunctionalhead: string;
            const AodidAreaofscope: string;
            const AodidExclusions: string;
            const AodidReasons: string;
            const AodidSbu: string;
            const AodidAcnid: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace CurrentauditobservationService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<CurrentauditobservationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CurrentauditobservationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CurrentauditobservationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CurrentauditobservationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class FeedbackForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FeedbackForm {
        FeedbackMeetingId: Serenity.LookupEditor;
        FeedbackQuestionId: Serenity.LookupEditor;
        FeedbackRating: Serenity.IntegerEditor;
        FeedbackRemarks: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface FeedbackRow {
        FeedbackId?: number;
        FeedbackQuestionId?: number;
        FeedbackMeetingId?: number;
        FeedbackRating?: number;
        FeedbackRemarks?: string;
        FeedbackQuestionQuestiontext?: string;
        FeedbackMeetingAcnid?: number;
        FeedbackMeetingTitle?: string;
        FeedbackMeetingAuditscope?: string;
        FeedbackMeetingPeriod?: string;
        FeedbackMeetingTime?: number;
        FeedbackMeetingVenue?: string;
        FeedbackMeetingAuditor?: number;
        FeedbackMeetingAuditee?: number;
    }
    namespace FeedbackRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<FeedbackRow>;
        namespace Fields {
            const FeedbackId: string;
            const FeedbackQuestionId: string;
            const FeedbackMeetingId: string;
            const FeedbackRating: string;
            const FeedbackRemarks: string;
            const FeedbackQuestionQuestiontext: string;
            const FeedbackMeetingAcnid: string;
            const FeedbackMeetingTitle: string;
            const FeedbackMeetingAuditscope: string;
            const FeedbackMeetingPeriod: string;
            const FeedbackMeetingTime: string;
            const FeedbackMeetingVenue: string;
            const FeedbackMeetingAuditor: string;
            const FeedbackMeetingAuditee: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace FeedbackService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<FeedbackRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FeedbackRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FeedbackRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FeedbackRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class FeedbackvalueForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FeedbackvalueForm {
        Value: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface FeedbackvalueRow {
        Feedbackvalueid?: number;
        Value?: string;
    }
    namespace FeedbackvalueRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<FeedbackvalueRow>;
        namespace Fields {
            const Feedbackvalueid: string;
            const Value: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace FeedbackvalueService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<FeedbackvalueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FeedbackvalueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FeedbackvalueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FeedbackvalueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class InputfromauditeeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface InputfromauditeeForm {
        Additionalareacovered: Serenity.StringEditor;
        Issues: Serenity.StringEditor;
        Newimprovements: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface InputfromauditeeRow {
        InputauditId?: number;
        Aodid?: number;
        Additionalareacovered?: string;
        Issues?: string;
        Newimprovements?: string;
        AodidMeetingid?: number;
        AodidActualcomencementdate?: string;
        AodidActualcompltedate?: string;
        AodidProcessOwner?: string;
        AodidFunctionalhead?: string;
        AodidAreaofscope?: string;
        AodidExclusions?: string;
        AodidReasons?: string;
        AodidSbu?: string;
        AodidAcnid?: number;
    }
    namespace InputfromauditeeRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const InputauditId: string;
            const Aodid: string;
            const Additionalareacovered: string;
            const Issues: string;
            const Newimprovements: string;
            const AodidMeetingid: string;
            const AodidActualcomencementdate: string;
            const AodidActualcompltedate: string;
            const AodidProcessOwner: string;
            const AodidFunctionalhead: string;
            const AodidAreaofscope: string;
            const AodidExclusions: string;
            const AodidReasons: string;
            const AodidSbu: string;
            const AodidAcnid: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace InputfromauditeeService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<InputfromauditeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InputfromauditeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InputfromauditeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InputfromauditeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class KeyfactsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface KeyfactsForm {
        Particulars: Serenity.StringEditor;
        Value: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface KeyfactsRow {
        KeyfactsId?: number;
        AcnId?: number;
        Particulars?: string;
        Value?: string;
        Reportid?: number;
        AcnAcnTilte?: string;
        AcnPhaseNo?: number;
        AcnLocation?: string;
        AcnFromdate?: string;
        AcnTodate?: string;
        AcnPeriodfrom?: string;
        AcnPeriodto?: string;
        AcnCreationdate?: string;
        AcnUserid?: number;
        ReportidTitle?: string;
        ReportidAcnid?: number;
        ReportidDownload?: number;
        ReportidUserid?: number;
        ReportidStatus?: string;
    }
    namespace KeyfactsRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const KeyfactsId: string;
            const AcnId: string;
            const Particulars: string;
            const Value: string;
            const Reportid: string;
            const AcnAcnTilte: string;
            const AcnPhaseNo: string;
            const AcnLocation: string;
            const AcnFromdate: string;
            const AcnTodate: string;
            const AcnPeriodfrom: string;
            const AcnPeriodto: string;
            const AcnCreationdate: string;
            const AcnUserid: string;
            const ReportidTitle: string;
            const ReportidAcnid: string;
            const ReportidDownload: string;
            const ReportidUserid: string;
            const ReportidStatus: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace KeyfactsService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<KeyfactsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<KeyfactsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<KeyfactsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<KeyfactsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
    class LikeliwoodvalueForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LikeliwoodvalueForm {
        Likeliwoodvaluename: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface LikeliwoodvalueRow {
        Likeliwoodvalueid?: number;
        Likeliwoodvaluename?: string;
    }
    namespace LikeliwoodvalueRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const Likeliwoodvalueid: any;
            const Likeliwoodvaluename: any;
        }
    }
}
declare namespace coromendal.ACN {
    namespace LikeliwoodvalueService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<LikeliwoodvalueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LikeliwoodvalueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LikeliwoodvalueRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LikeliwoodvalueRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class MeetingAbsentForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MeetingAbsentForm {
        AbsentUser: Serenity.LookupEditor;
        Reason: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface MeetingAbsentRow {
        MeetingAbsentId?: number;
        MeetingId?: number;
        AbsentUser?: number;
        Reason?: string;
        MeetingAcnid?: number;
        MeetingTitle?: string;
        MeetingAuditscope?: string;
        MeetingPeriod?: string;
        MeetingTime?: number;
        MeetingVenue?: string;
        MeetingAuditor?: number;
        MeetingAuditee?: number;
        MeetingDownload?: number;
        MeetingUserid?: number;
    }
    namespace MeetingAbsentRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const MeetingAbsentId: string;
            const MeetingId: string;
            const AbsentUser: string;
            const Reason: string;
            const MeetingAcnid: string;
            const MeetingTitle: string;
            const MeetingAuditscope: string;
            const MeetingPeriod: string;
            const MeetingTime: string;
            const MeetingVenue: string;
            const MeetingAuditor: string;
            const MeetingAuditee: string;
            const MeetingDownload: string;
            const MeetingUserid: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace MeetingAbsentService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<MeetingAbsentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingAbsentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingAbsentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingAbsentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class MeetingIssueForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MeetingIssueForm {
        AreaofOperation: Serenity.StringEditor;
        Issue: Serenity.StringEditor;
        Status: Serenity.StringEditor;
        ExpectedDate: Serenity.DateEditor;
        Comments: Serenity.TextAreaEditor;
    }
}
declare namespace coromendal.ACN {
    interface MeetingIssueRow {
        MeetingIssueId?: number;
        MeetingId?: number;
        AreaofOperation?: string;
        Issue?: string;
        Status?: string;
        ExpectedDate?: string;
        Comments?: string;
        MeetingAcnid?: number;
        MeetingTitle?: string;
        MeetingAuditscope?: string;
        MeetingPeriod?: string;
        MeetingTime?: number;
        MeetingVenue?: string;
        MeetingAuditor?: number;
        MeetingAuditee?: number;
        MeetingDownload?: number;
        MeetingUserid?: number;
    }
    namespace MeetingIssueRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const MeetingIssueId: string;
            const MeetingId: string;
            const AreaofOperation: string;
            const Issue: string;
            const Status: string;
            const ExpectedDate: string;
            const Comments: string;
            const MeetingAcnid: string;
            const MeetingTitle: string;
            const MeetingAuditscope: string;
            const MeetingPeriod: string;
            const MeetingTime: string;
            const MeetingVenue: string;
            const MeetingAuditor: string;
            const MeetingAuditee: string;
            const MeetingDownload: string;
            const MeetingUserid: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace MeetingIssueService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<MeetingIssueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingIssueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingIssueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingIssueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class MeetingPointsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MeetingPointsForm {
        Points: Serenity.TextAreaEditor;
    }
}
declare namespace coromendal.ACN {
    interface MeetingPointsRow {
        MeetingPointsId?: number;
        MeetingId?: number;
        Points?: string;
        MeetingAcnid?: number;
        MeetingTitle?: string;
        MeetingAuditscope?: string;
        MeetingPeriod?: string;
        MeetingTime?: number;
        MeetingVenue?: string;
        MeetingAuditor?: number;
        MeetingAuditee?: number;
        MeetingDownload?: number;
        MeetingUserid?: number;
    }
    namespace MeetingPointsRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const MeetingPointsId: string;
            const MeetingId: string;
            const Points: string;
            const MeetingAcnid: string;
            const MeetingTitle: string;
            const MeetingAuditscope: string;
            const MeetingPeriod: string;
            const MeetingTime: string;
            const MeetingVenue: string;
            const MeetingAuditor: string;
            const MeetingAuditee: string;
            const MeetingDownload: string;
            const MeetingUserid: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace MeetingPointsService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<MeetingPointsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingPointsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingPointsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingPointsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class MinutesofmeetingForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MinutesofmeetingForm {
        Acnid: Serenity.LookupEditor;
        AcnidPhaseNo: Serenity.IntegerEditor;
        MeetingTitle: Serenity.StringEditor;
        momdate: Serenity.DateEditor;
        planeddate: Serenity.DateEditor;
        auditopeneddate: Serenity.DateEditor;
        AcnidScopeList: ScopeEditor;
        AcnidPeriodfrom: Serenity.StringEditor;
        AcnidPeriodto: Serenity.StringEditor;
        AcnidFromdate: Serenity.StringEditor;
        AcnidTodate: Serenity.StringEditor;
        AbsentList: MeetingAbsentEditor;
        PreviousObservationaudit: ObservationpreviousauditEditor;
        PointsList: MeetingPointsEditor;
        NoteList: Northwind.NotesEditor;
        Newimprovements: NewiprovementsEditor;
        Newchanges: NewchangesEditor;
    }
}
declare namespace coromendal.ACN {
    interface MinutesofmeetingRow {
        Meetingid?: number;
        Acnid?: number;
        MeetingTitle?: string;
        Auditscope?: string;
        Period?: string;
        Time?: number;
        Venue?: string;
        Auditor?: number;
        Auditee?: number;
        Download?: number;
        Userid?: number;
        momdate?: string;
        planeddate?: string;
        auditopeneddate?: string;
        DetailList?: MeetingIssueRow[];
        AbsentList?: MeetingAbsentRow[];
        PointsList?: MeetingPointsRow[];
        PreviousObservationaudit?: ObservationpreviousauditRow[];
        Newchanges?: NewchangesRow[];
        Newimprovements?: NewiprovementsRow[];
        NoteList?: Northwind.NoteRow[];
        AcnidAcnTilte?: string;
        AcnidPhaseNo?: number;
        AcnidLocation?: string;
        AcnidFromdate?: string;
        AcnidTodate?: string;
        AcnidPeriodfrom?: string;
        AcnidPeriodto?: string;
        AcnidCreationdate?: string;
        AcnidUserid?: number;
        AcnidScopeList?: ScopeRow[];
        UseridUsername?: string;
        UseridDisplayName?: string;
        UseridEmail?: string;
        UseridSource?: string;
        UseridPasswordHash?: string;
        UseridPasswordSalt?: string;
        UseridInsertDate?: string;
        UseridInsertUserId?: number;
        UseridUpdateDate?: string;
        UseridUpdateUserId?: number;
        UseridIsActive?: number;
        UseridLastDirectoryUpdate?: string;
    }
    namespace MinutesofmeetingRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<MinutesofmeetingRow>;
        namespace Fields {
            const Meetingid: string;
            const Acnid: string;
            const MeetingTitle: string;
            const Auditscope: string;
            const Period: string;
            const Time: string;
            const Venue: string;
            const Auditor: string;
            const Auditee: string;
            const Download: string;
            const Userid: string;
            const momdate: string;
            const planeddate: string;
            const auditopeneddate: string;
            const DetailList: string;
            const AbsentList: string;
            const PointsList: string;
            const PreviousObservationaudit: string;
            const Newchanges: string;
            const Newimprovements: string;
            const NoteList: string;
            const AcnidAcnTilte: string;
            const AcnidPhaseNo: string;
            const AcnidLocation: string;
            const AcnidFromdate: string;
            const AcnidTodate: string;
            const AcnidPeriodfrom: string;
            const AcnidPeriodto: string;
            const AcnidCreationdate: string;
            const AcnidUserid: string;
            const AcnidScopeList: string;
            const UseridUsername: string;
            const UseridDisplayName: string;
            const UseridEmail: string;
            const UseridSource: string;
            const UseridPasswordHash: string;
            const UseridPasswordSalt: string;
            const UseridInsertDate: string;
            const UseridInsertUserId: string;
            const UseridUpdateDate: string;
            const UseridUpdateUserId: string;
            const UseridIsActive: string;
            const UseridLastDirectoryUpdate: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace MinutesofmeetingService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<MinutesofmeetingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MinutesofmeetingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MinutesofmeetingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MinutesofmeetingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class NewchangesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface NewchangesForm {
        Observation: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface NewchangesRow {
        NewchangesId?: number;
        MeetingId?: number;
        Observation?: string;
        MeetingAcnid?: number;
        MeetingAuditscope?: string;
        MeetingPeriod?: string;
        MeetingTime?: number;
        MeetingVenue?: string;
        MeetingAuditor?: number;
        MeetingAuditee?: number;
        MeetingDownload?: number;
        MeetingUserid?: number;
    }
    namespace NewchangesRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const NewchangesId: string;
            const MeetingId: string;
            const Observation: string;
            const MeetingAcnid: string;
            const MeetingAuditscope: string;
            const MeetingPeriod: string;
            const MeetingTime: string;
            const MeetingVenue: string;
            const MeetingAuditor: string;
            const MeetingAuditee: string;
            const MeetingDownload: string;
            const MeetingUserid: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace NewchangesService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<NewchangesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NewchangesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NewchangesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NewchangesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class NewiprovementsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface NewiprovementsForm {
        Observation: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface NewiprovementsRow {
        NewiprovementsId?: number;
        MeetingId?: number;
        Observation?: string;
        MeetingAcnid?: number;
        MeetingAuditscope?: string;
        MeetingPeriod?: string;
        MeetingTime?: number;
        MeetingVenue?: string;
        MeetingAuditor?: number;
        MeetingAuditee?: number;
        MeetingDownload?: number;
        MeetingUserid?: number;
    }
    namespace NewiprovementsRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const NewiprovementsId: string;
            const MeetingId: string;
            const Observation: string;
            const MeetingAcnid: string;
            const MeetingAuditscope: string;
            const MeetingPeriod: string;
            const MeetingTime: string;
            const MeetingVenue: string;
            const MeetingAuditor: string;
            const MeetingAuditee: string;
            const MeetingDownload: string;
            const MeetingUserid: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace NewiprovementsService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<NewiprovementsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NewiprovementsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NewiprovementsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NewiprovementsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class ObservationpendingForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ObservationpendingForm {
        Reportreference: Serenity.StringEditor;
        Briefdescription: Serenity.TextAreaEditor;
        Originaltargetdate: Serenity.DateEditor;
        Revisedtargetdate: Serenity.DateEditor;
        Remarks: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface ObservationpendingRow {
        ObservationpendingId?: number;
        Reportreference?: string;
        Briefdescription?: string;
        Originaltargetdate?: string;
        Revisedtargetdate?: string;
        Remarks?: string;
        Aodid?: number;
        AodidMeetingid?: number;
        AodidActualcomencementdate?: string;
        AodidActualcompltedate?: string;
        AodidProcessOwner?: string;
        AodidFunctionalhead?: string;
        AodidAreaofscope?: string;
        AodidExclusions?: string;
        AodidReasons?: string;
        AodidSbu?: string;
        AodidAcnid?: number;
    }
    namespace ObservationpendingRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const ObservationpendingId: string;
            const Reportreference: string;
            const Briefdescription: string;
            const Originaltargetdate: string;
            const Revisedtargetdate: string;
            const Remarks: string;
            const Aodid: string;
            const AodidMeetingid: string;
            const AodidActualcomencementdate: string;
            const AodidActualcompltedate: string;
            const AodidProcessOwner: string;
            const AodidFunctionalhead: string;
            const AodidAreaofscope: string;
            const AodidExclusions: string;
            const AodidReasons: string;
            const AodidSbu: string;
            const AodidAcnid: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace ObservationpendingService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ObservationpendingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ObservationpendingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ObservationpendingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ObservationpendingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class ObservationpreviousauditForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ObservationpreviousauditForm {
        Observation: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface ObservationpreviousauditRow {
        ObservationpreviousauditId?: number;
        MeetingId?: number;
        Observation?: string;
        MeetingAcnid?: number;
        MeetingAuditscope?: string;
        MeetingPeriod?: string;
        MeetingTime?: number;
        MeetingVenue?: string;
        MeetingAuditor?: number;
        MeetingAuditee?: number;
        MeetingDownload?: number;
        MeetingUserid?: number;
    }
    namespace ObservationpreviousauditRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const ObservationpreviousauditId: string;
            const MeetingId: string;
            const Observation: string;
            const MeetingAcnid: string;
            const MeetingAuditscope: string;
            const MeetingPeriod: string;
            const MeetingTime: string;
            const MeetingVenue: string;
            const MeetingAuditor: string;
            const MeetingAuditee: string;
            const MeetingDownload: string;
            const MeetingUserid: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace ObservationpreviousauditService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ObservationpreviousauditRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ObservationpreviousauditRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ObservationpreviousauditRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ObservationpreviousauditRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class QuestionsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface QuestionsForm {
        Questiontext: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface QuestionsRow {
        QuestionId?: number;
        Questiontext?: string;
    }
    namespace QuestionsRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<QuestionsRow>;
        namespace Fields {
            const QuestionId: string;
            const Questiontext: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace QuestionsService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<QuestionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<QuestionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<QuestionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<QuestionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
    class RiskmatrixForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RiskmatrixForm {
        Likelihood: Serenity.IntegerEditor;
        Consequence: Serenity.IntegerEditor;
        Value: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface RiskmatrixRow {
        Riskmatrixid?: number;
        Likelihood?: number;
        Consequence?: number;
        Value?: string;
    }
    namespace RiskmatrixRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const Riskmatrixid: any;
            const Likelihood: any;
            const Consequence: any;
            const Value: any;
        }
    }
}
declare namespace coromendal.ACN {
    namespace RiskmatrixService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<RiskmatrixRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RiskmatrixRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RiskmatrixRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RiskmatrixRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class RiskratingForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RiskratingForm {
        Riskratingname: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface RiskratingRow {
        Riskratingid?: number;
        Riskratingname?: string;
    }
    namespace RiskratingRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<RiskratingRow>;
        namespace Fields {
            const Riskratingid: string;
            const Riskratingname: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace RiskratingService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<RiskratingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RiskratingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RiskratingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RiskratingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class RootcauseForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RootcauseForm {
        Rootcause: Serenity.StringEditor;
        Impact: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface RootcauseRow {
        RootcauseId?: number;
        AuditobservationId?: number;
        Rootcause?: string;
        Impact?: string;
        AuditobservationAcnId?: number;
        AuditobservationObservationtitle?: string;
        AuditobservationObservationsynopsis?: string;
        AuditobservationDetailedobservation?: string;
        AuditobservationCategory?: number;
        AuditobservationRiskRating?: number;
        AuditobservationAgreeobservation?: string;
        AuditobservationJustification?: number;
        AuditobservationSuggestion?: string;
        AuditobservationAlternateplan?: string;
        AuditobservationName?: string;
        AuditobservationEmail?: string;
        AuditobservationTargetdate?: string;
    }
    namespace RootcauseRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<RootcauseRow>;
        namespace Fields {
            const RootcauseId: string;
            const AuditobservationId: string;
            const Rootcause: string;
            const Impact: string;
            const AuditobservationAcnId: string;
            const AuditobservationObservationtitle: string;
            const AuditobservationObservationsynopsis: string;
            const AuditobservationDetailedobservation: string;
            const AuditobservationCategory: string;
            const AuditobservationRiskRating: string;
            const AuditobservationAgreeobservation: string;
            const AuditobservationJustification: string;
            const AuditobservationSuggestion: string;
            const AuditobservationAlternateplan: string;
            const AuditobservationName: string;
            const AuditobservationEmail: string;
            const AuditobservationTargetdate: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace RootcauseService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<RootcauseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RootcauseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RootcauseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RootcauseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class SatisfactionratingForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SatisfactionratingForm {
        Documentweigtage: Serenity.StringEditor;
        Documentscore: Serenity.IntegerEditor;
        Documentrating: Serenity.IntegerEditor;
        Documentcomments: Serenity.StringEditor;
        Complianceweightage: Serenity.StringEditor;
        Compliancescore: Serenity.StringEditor;
        Compliancerating: Serenity.StringEditor;
        Compliancecomment: Serenity.StringEditor;
        Processfincontrollweightage: Serenity.StringEditor;
        Processfincontrollscore: Serenity.StringEditor;
        Processfincontrollrating: Serenity.StringEditor;
        Processfincontrollscorecmnts: Serenity.StringEditor;
        Responseweightage: Serenity.StringEditor;
        Responsescore: Serenity.StringEditor;
        Responserating: Serenity.StringEditor;
        Responsecmnts: Serenity.StringEditor;
        Preauditweightage: Serenity.StringEditor;
        Preauditscore: Serenity.StringEditor;
        Preauditrating: Serenity.StringEditor;
        Preauditcmnts: Serenity.StringEditor;
        Newinitiativeweight: Serenity.StringEditor;
        Newinitiativescore: Serenity.StringEditor;
        Newinitiativerating: Serenity.LookupEditor;
        Newinitiativecmnts: Serenity.StringEditor;
        Totalscore: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface SatisfactionratingRow {
        SatisfactionratingId?: number;
        Documentscore?: number;
        Documentcomments?: string;
        Compliancescore?: string;
        Compliancecomment?: string;
        Processfincontrollscore?: string;
        Processfincontrollscorecmnts?: string;
        Responsescore?: string;
        Responsecmnts?: string;
        Preauditscore?: string;
        Preauditcmnts?: string;
        Newinitiativescore?: string;
        Totalscore?: string;
        Aodid?: number;
        Documentrating?: string;
        Documentweigtage?: string;
        Complianceweightage?: string;
        Compliancerating?: string;
        Processfincontrollweightage?: string;
        Processfincontrollrating?: string;
        Responserating?: string;
        Responseweightage?: string;
        Preauditweightage?: string;
        Preauditrating?: string;
        Newinitiativecmnts?: string;
        Newinitiativeweight?: string;
        Newinitiativerating?: string;
        AodidMeetingid?: number;
        AodidActualcomencementdate?: string;
        AodidActualcompltedate?: string;
        AodidProcessOwner?: string;
        AodidFunctionalhead?: string;
        AodidAreaofscope?: string;
        AodidExclusions?: string;
        AodidReasons?: string;
        AodidSbu?: string;
        AodidAcnid?: number;
    }
    namespace SatisfactionratingRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const SatisfactionratingId: string;
            const Documentscore: string;
            const Documentcomments: string;
            const Compliancescore: string;
            const Compliancecomment: string;
            const Processfincontrollscore: string;
            const Processfincontrollscorecmnts: string;
            const Responsescore: string;
            const Responsecmnts: string;
            const Preauditscore: string;
            const Preauditcmnts: string;
            const Newinitiativescore: string;
            const Totalscore: string;
            const Aodid: string;
            const Documentrating: string;
            const Documentweigtage: string;
            const Complianceweightage: string;
            const Compliancerating: string;
            const Processfincontrollweightage: string;
            const Processfincontrollrating: string;
            const Responserating: string;
            const Responseweightage: string;
            const Preauditweightage: string;
            const Preauditrating: string;
            const Newinitiativecmnts: string;
            const Newinitiativeweight: string;
            const Newinitiativerating: string;
            const AodidMeetingid: string;
            const AodidActualcomencementdate: string;
            const AodidActualcompltedate: string;
            const AodidProcessOwner: string;
            const AodidFunctionalhead: string;
            const AodidAreaofscope: string;
            const AodidExclusions: string;
            const AodidReasons: string;
            const AodidSbu: string;
            const AodidAcnid: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace SatisfactionratingService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<SatisfactionratingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SatisfactionratingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SatisfactionratingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SatisfactionratingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class ScopeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ScopeForm {
        Title: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface ScopeRow {
        ScopeId?: number;
        Title?: string;
        AcnId?: number;
        AcnAcnTilte?: string;
        AcnPhaseNo?: number;
        AcnLocation?: string;
        AcnFromdate?: string;
        AcnTodate?: string;
        AcnPeriodfrom?: string;
        AcnPeriodto?: string;
        AcnCreationdate?: string;
    }
    namespace ScopeRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const ScopeId: string;
            const Title: string;
            const AcnId: string;
            const AcnAcnTilte: string;
            const AcnPhaseNo: string;
            const AcnLocation: string;
            const AcnFromdate: string;
            const AcnTodate: string;
            const AcnPeriodfrom: string;
            const AcnPeriodto: string;
            const AcnCreationdate: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace ScopeService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ScopeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ScopeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ScopeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ScopeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.ACN {
}
declare namespace coromendal.ACN {
    class SuggestionForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SuggestionForm {
        Suggestion: Serenity.StringEditor;
    }
}
declare namespace coromendal.ACN {
    interface SuggestionRow {
        SuggestionId?: number;
        AuditobservationId?: number;
        Suggestion?: string;
        AuditobservationAcnId?: number;
        AuditobservationObservationtitle?: string;
        AuditobservationObservationsynopsis?: string;
        AuditobservationDetailedobservation?: string;
        AuditobservationCategory?: number;
        AuditobservationRiskRating?: number;
        AuditobservationAgreeobservation?: string;
        AuditobservationJustification?: number;
        AuditobservationSuggestion?: string;
        AuditobservationAlternateplan?: string;
        AuditobservationName?: string;
        AuditobservationEmail?: string;
        AuditobservationTargetdate?: string;
    }
    namespace SuggestionRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<SuggestionRow>;
        namespace Fields {
            const SuggestionId: string;
            const AuditobservationId: string;
            const Suggestion: string;
            const AuditobservationAcnId: string;
            const AuditobservationObservationtitle: string;
            const AuditobservationObservationsynopsis: string;
            const AuditobservationDetailedobservation: string;
            const AuditobservationCategory: string;
            const AuditobservationRiskRating: string;
            const AuditobservationAgreeobservation: string;
            const AuditobservationJustification: string;
            const AuditobservationSuggestion: string;
            const AuditobservationAlternateplan: string;
            const AuditobservationName: string;
            const AuditobservationEmail: string;
            const AuditobservationTargetdate: string;
        }
    }
}
declare namespace coromendal.ACN {
    namespace SuggestionService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<SuggestionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SuggestionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SuggestionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SuggestionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.Administration {
}
declare namespace coromendal.Administration {
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
}
declare namespace coromendal.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<LanguageRow>;
        namespace Fields {
            const Id: string;
            const LanguageId: string;
            const LanguageName: string;
        }
    }
}
declare namespace coromendal.Administration {
    namespace LanguageService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.Administration {
}
declare namespace coromendal.Administration {
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
}
declare namespace coromendal.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace coromendal.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace coromendal.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const RolePermissionId: string;
            const RoleId: string;
            const PermissionKey: string;
            const RoleRoleName: string;
        }
    }
}
declare namespace coromendal.Administration {
    namespace RolePermissionService {
        const baseUrl: string;
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace coromendal.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace coromendal.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<RoleRow>;
        namespace Fields {
            const RoleId: string;
            const RoleName: string;
        }
    }
}
declare namespace coromendal.Administration {
    namespace RoleService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace coromendal.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace coromendal.Administration {
    namespace TranslationService {
        const baseUrl: string;
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
            const Update: string;
        }
    }
}
declare namespace coromendal.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace coromendal.Administration {
}
declare namespace coromendal.Administration {
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
        RoleId: Serenity.LookupEditor;
    }
}
declare namespace coromendal.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace coromendal.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const UserPermissionId: string;
            const UserId: string;
            const PermissionKey: string;
            const Granted: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace coromendal.Administration {
    namespace UserPermissionService {
        const baseUrl: string;
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
            const ListRolePermissions: string;
            const ListPermissionKeys: string;
        }
    }
}
declare namespace coromendal.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace coromendal.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Username?: number;
    }
}
declare namespace coromendal.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace coromendal.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<UserRoleRow>;
        namespace Fields {
            const UserRoleId: string;
            const UserId: string;
            const RoleId: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace coromendal.Administration {
    namespace UserRoleService {
        const baseUrl: string;
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace coromendal.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace coromendal.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        RoleId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty: string;
        const isActiveProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<UserRow>;
        namespace Fields {
            const UserId: string;
            const Username: string;
            const Source: string;
            const PasswordHash: string;
            const PasswordSalt: string;
            const DisplayName: string;
            const Email: string;
            const LastDirectoryUpdate: string;
            const IsActive: string;
            const Password: string;
            const PasswordConfirm: string;
            const RoleId: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDate: string;
        }
    }
}
declare namespace coromendal.Administration {
    namespace UserService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.BasicSamples {
    namespace BasicSamplesService {
        const baseUrl: string;
        function OrdersByShipper(request: OrdersByShipperRequest, onSuccess?: (response: OrdersByShipperResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function OrderBulkAction(request: OrderBulkActionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const OrdersByShipper: string;
            const OrderBulkAction: string;
        }
    }
}
declare namespace coromendal.BasicSamples {
    class FilteredLookupInDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FilteredLookupInDetailForm {
        CustomerID: Northwind.CustomerEditor;
        OrderDate: Serenity.DateEditor;
        CategoryID: Serenity.LookupEditor;
        DetailList: FilteredLookupDetailEditor;
    }
}
declare namespace coromendal.BasicSamples {
}
declare namespace coromendal.BasicSamples {
    class LookupFilterByMultipleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LookupFilterByMultipleForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: ProduceSeafoodCategoryEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
}
declare namespace coromendal.BasicSamples {
    interface OrderBulkActionRequest extends Serenity.ServiceRequest {
        OrderIDs?: number[];
    }
}
declare namespace coromendal.BasicSamples {
    interface OrdersByShipperRequest extends Serenity.ServiceRequest {
    }
}
declare namespace coromendal.BasicSamples {
    interface OrdersByShipperResponse extends Serenity.ServiceResponse {
        Values?: {
            [key: string]: any;
        }[];
        ShipperKeys?: string[];
        ShipperLabels?: string[];
    }
}
declare namespace coromendal.BasicSamples {
    class PopulateLinkedDataForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PopulateLinkedDataForm {
        CustomerID: Northwind.CustomerEditor;
        CustomerContactName: Serenity.StringEditor;
        CustomerContactTitle: Serenity.StringEditor;
        CustomerCity: Serenity.StringEditor;
        CustomerRegion: Serenity.StringEditor;
        CustomerCountry: Serenity.StringEditor;
        CustomerPhone: Serenity.StringEditor;
        CustomerFax: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
        DetailList: Northwind.OrderDetailsEditor;
    }
}
declare namespace coromendal.BasicSamples {
    class ProductExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
}
declare namespace coromendal.BasicSamples {
    namespace ProductExcelImportService {
        const baseUrl: string;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const ExcelImport: string;
        }
    }
}
declare namespace coromendal.BasicSamples {
}
declare namespace coromendal.BasicSamples {
    interface VSGalleryQAPost {
        PostId?: number;
        PostedOn?: string;
        PostedByName?: string;
        PostedByUserId?: string;
        Message?: string;
    }
}
declare namespace coromendal.BasicSamples {
    namespace VSGalleryQAService {
        const baseUrl: string;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VSGalleryQAThread>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
        }
    }
}
declare namespace coromendal.BasicSamples {
    interface VSGalleryQAThread {
        ThreadId?: number;
        Title?: string;
        StartedOn?: string;
        StartedByName?: string;
        StartedByUserId?: string;
        LastPostOn?: string;
        PostCount?: number;
        Posts?: VSGalleryQAPost[];
    }
}
declare namespace coromendal.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace coromendal.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace coromendal.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace coromendal.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const UserPreferenceId: string;
            const UserId: string;
            const PreferenceType: string;
            const Name: string;
            const Value: string;
        }
    }
}
declare namespace coromendal.Common {
    namespace UserPreferenceService {
        const baseUrl: string;
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const Retrieve: string;
        }
    }
}
declare namespace coromendal.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace coromendal {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace coromendal {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace coromendal {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace coromendal {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace coromendal.Membership {
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace coromendal.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace coromendal.Membership {
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
}
declare namespace coromendal.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace coromendal.Membership {
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
}
declare namespace coromendal.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace coromendal.Membership {
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace coromendal.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace coromendal.Membership {
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace coromendal.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace coromendal.Northwind {
}
declare namespace coromendal.Northwind {
    class CategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CategoryForm {
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
}
declare namespace coromendal.Northwind {
    interface CategoryLangRow {
        Id?: number;
        CategoryId?: number;
        LanguageId?: number;
        CategoryName?: string;
        Description?: string;
    }
    namespace CategoryLangRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const Id: string;
            const CategoryId: string;
            const LanguageId: string;
            const CategoryName: string;
            const Description: string;
        }
    }
}
declare namespace coromendal.Northwind {
    namespace CategoryLangService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.Northwind {
    interface CategoryRow {
        CategoryID?: number;
        CategoryName?: string;
        Description?: string;
        Picture?: number[];
    }
    namespace CategoryRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<CategoryRow>;
        namespace Fields {
            const CategoryID: string;
            const CategoryName: string;
            const Description: string;
            const Picture: string;
        }
    }
}
declare namespace coromendal.Northwind {
    namespace CategoryService {
        const baseUrl: string;
        function Create(request: Serenity.SaveWithLocalizationRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveWithLocalizationRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function RetrieveLocalization(request: Serenity.RetrieveLocalizationRequest, onSuccess?: (response: Serenity.RetrieveLocalizationResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const RetrieveLocalization: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.Northwind {
}
declare namespace coromendal.Northwind {
    interface CustomerCustomerDemoRow {
        ID?: number;
        CustomerID?: string;
        CustomerTypeID?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerAddress?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerPostalCode?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerTypeCustomerDesc?: string;
    }
    namespace CustomerCustomerDemoRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const ID: string;
            const CustomerID: string;
            const CustomerTypeID: string;
            const CustomerCompanyName: string;
            const CustomerContactName: string;
            const CustomerContactTitle: string;
            const CustomerAddress: string;
            const CustomerCity: string;
            const CustomerRegion: string;
            const CustomerPostalCode: string;
            const CustomerCountry: string;
            const CustomerPhone: string;
            const CustomerFax: string;
            const CustomerTypeCustomerDesc: string;
        }
    }
}
declare namespace coromendal.Northwind {
    interface CustomerDemographicRow {
        ID?: number;
        CustomerTypeID?: string;
        CustomerDesc?: string;
    }
    namespace CustomerDemographicRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const ID: string;
            const CustomerTypeID: string;
            const CustomerDesc: string;
        }
    }
}
declare namespace coromendal.Northwind {
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CustomerForm {
        CustomerID: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Representatives: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        NoteList: NotesEditor;
    }
}
declare namespace coromendal.Northwind {
    interface CustomerRepresentativesRow {
        RepresentativeId?: number;
        CustomerId?: number;
        EmployeeId?: number;
    }
    namespace CustomerRepresentativesRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const RepresentativeId: string;
            const CustomerId: string;
            const EmployeeId: string;
        }
    }
}
declare namespace coromendal.Northwind {
    interface CustomerRow {
        ID?: number;
        CustomerID?: string;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        NoteList?: NoteRow[];
        Representatives?: number[];
    }
    namespace CustomerRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<CustomerRow>;
        namespace Fields {
            const ID: string;
            const CustomerID: string;
            const CompanyName: string;
            const ContactName: string;
            const ContactTitle: string;
            const Address: string;
            const City: string;
            const Region: string;
            const PostalCode: string;
            const Country: string;
            const Phone: string;
            const Fax: string;
            const NoteList: string;
            const Representatives: string;
        }
    }
}
declare namespace coromendal.Northwind {
    namespace CustomerService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const GetNextNumber: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.Northwind {
    interface EmployeeRow {
        EmployeeID?: number;
        LastName?: string;
        FirstName?: string;
        FullName?: string;
        Title?: string;
        TitleOfCourtesy?: string;
        BirthDate?: string;
        HireDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        HomePhone?: string;
        Extension?: string;
        Photo?: number[];
        Notes?: string;
        ReportsTo?: number;
        PhotoPath?: string;
        ReportsToFullName?: string;
        ReportsToLastName?: string;
        ReportsToFirstName?: string;
        ReportsToTitle?: string;
        ReportsToTitleOfCourtesy?: string;
        ReportsToBirthDate?: string;
        ReportsToHireDate?: string;
        ReportsToAddress?: string;
        ReportsToCity?: string;
        ReportsToRegion?: string;
        ReportsToPostalCode?: string;
        ReportsToCountry?: string;
        ReportsToHomePhone?: string;
        ReportsToExtension?: string;
        ReportsToPhoto?: number[];
        ReportsToNotes?: string;
        ReportsToReportsTo?: number;
        ReportsToPhotoPath?: string;
        Gender?: Gender;
    }
    namespace EmployeeRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<EmployeeRow>;
        namespace Fields {
            const EmployeeID: string;
            const LastName: string;
            const FirstName: string;
            const FullName: string;
            const Title: string;
            const TitleOfCourtesy: string;
            const BirthDate: string;
            const HireDate: string;
            const Address: string;
            const City: string;
            const Region: string;
            const PostalCode: string;
            const Country: string;
            const HomePhone: string;
            const Extension: string;
            const Photo: string;
            const Notes: string;
            const ReportsTo: string;
            const PhotoPath: string;
            const ReportsToFullName: string;
            const ReportsToLastName: string;
            const ReportsToFirstName: string;
            const ReportsToTitle: string;
            const ReportsToTitleOfCourtesy: string;
            const ReportsToBirthDate: string;
            const ReportsToHireDate: string;
            const ReportsToAddress: string;
            const ReportsToCity: string;
            const ReportsToRegion: string;
            const ReportsToPostalCode: string;
            const ReportsToCountry: string;
            const ReportsToHomePhone: string;
            const ReportsToExtension: string;
            const ReportsToPhoto: string;
            const ReportsToNotes: string;
            const ReportsToReportsTo: string;
            const ReportsToPhotoPath: string;
            const Gender: string;
        }
    }
}
declare namespace coromendal.Northwind {
    interface EmployeeTerritoryRow {
        EmployeeID?: number;
        TerritoryID?: string;
        EmployeeLastName?: string;
        EmployeeFirstName?: string;
        EmployeeTitle?: string;
        EmployeeTitleOfCourtesy?: string;
        EmployeeBirthDate?: string;
        EmployeeHireDate?: string;
        EmployeeAddress?: string;
        EmployeeCity?: string;
        EmployeeRegion?: string;
        EmployeePostalCode?: string;
        EmployeeCountry?: string;
        EmployeeHomePhone?: string;
        EmployeeExtension?: string;
        EmployeePhoto?: number[];
        EmployeeNotes?: string;
        EmployeeReportsTo?: number;
        EmployeePhotoPath?: string;
        TerritoryTerritoryDescription?: string;
        TerritoryRegionID?: number;
    }
    namespace EmployeeTerritoryRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const EmployeeID: string;
            const TerritoryID: string;
            const EmployeeLastName: string;
            const EmployeeFirstName: string;
            const EmployeeTitle: string;
            const EmployeeTitleOfCourtesy: string;
            const EmployeeBirthDate: string;
            const EmployeeHireDate: string;
            const EmployeeAddress: string;
            const EmployeeCity: string;
            const EmployeeRegion: string;
            const EmployeePostalCode: string;
            const EmployeeCountry: string;
            const EmployeeHomePhone: string;
            const EmployeeExtension: string;
            const EmployeePhoto: string;
            const EmployeeNotes: string;
            const EmployeeReportsTo: string;
            const EmployeePhotoPath: string;
            const TerritoryTerritoryDescription: string;
            const TerritoryRegionID: string;
        }
    }
}
declare namespace coromendal.Northwind {
    enum Gender {
        Male = 1,
        Female = 2,
    }
}
declare namespace coromendal.Northwind {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const NoteId: string;
            const EntityType: string;
            const EntityId: string;
            const Text: string;
            const InsertUserId: string;
            const InsertDate: string;
            const InsertUserDisplayName: string;
        }
    }
}
declare namespace coromendal.Northwind {
}
declare namespace coromendal.Northwind {
}
declare namespace coromendal.Northwind {
    class OrderDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface OrderDetailForm {
        ProductID: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }
}
declare namespace coromendal.Northwind {
    interface OrderDetailRow {
        DetailID?: number;
        OrderID?: number;
        ProductID?: number;
        UnitPrice?: number;
        Quantity?: number;
        Discount?: number;
        OrderCustomerID?: string;
        OrderEmployeeID?: number;
        OrderDate?: string;
        OrderShippedDate?: string;
        OrderShipVia?: number;
        OrderShipCity?: string;
        OrderShipCountry?: string;
        ProductName?: string;
        ProductDiscontinued?: boolean;
        ProductSupplierID?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        LineTotal?: number;
    }
    namespace OrderDetailRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const DetailID: string;
            const OrderID: string;
            const ProductID: string;
            const UnitPrice: string;
            const Quantity: string;
            const Discount: string;
            const OrderCustomerID: string;
            const OrderEmployeeID: string;
            const OrderDate: string;
            const OrderShippedDate: string;
            const OrderShipVia: string;
            const OrderShipCity: string;
            const OrderShipCountry: string;
            const ProductName: string;
            const ProductDiscontinued: string;
            const ProductSupplierID: string;
            const ProductQuantityPerUnit: string;
            const ProductUnitPrice: string;
            const LineTotal: string;
        }
    }
}
declare namespace coromendal.Northwind {
    namespace OrderDetailService {
        const baseUrl: string;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.Northwind {
    class OrderForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface OrderForm {
        CustomerID: CustomerEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
        DetailList: OrderDetailsEditor;
        ShippedDate: Serenity.DateEditor;
        ShipVia: Serenity.LookupEditor;
        Freight: Serenity.DecimalEditor;
        ShipName: Serenity.StringEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipRegion: Serenity.StringEditor;
        ShipPostalCode: Serenity.StringEditor;
        ShipCountry: Serenity.StringEditor;
    }
}
declare namespace coromendal.Northwind {
    interface OrderRow {
        OrderID?: number;
        CustomerID?: string;
        EmployeeID?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        ShipVia?: number;
        Freight?: number;
        ShipName?: string;
        ShipAddress?: string;
        ShipCity?: string;
        ShipRegion?: string;
        ShipPostalCode?: string;
        ShipCountry?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        EmployeeFullName?: string;
        EmployeeGender?: Gender;
        ShipViaCompanyName?: string;
        ShipViaPhone?: string;
        ShippingState?: OrderShippingState;
        DetailList?: OrderDetailRow[];
    }
    namespace OrderRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<OrderRow>;
        namespace Fields {
            const OrderID: string;
            const CustomerID: string;
            const EmployeeID: string;
            const OrderDate: string;
            const RequiredDate: string;
            const ShippedDate: string;
            const ShipVia: string;
            const Freight: string;
            const ShipName: string;
            const ShipAddress: string;
            const ShipCity: string;
            const ShipRegion: string;
            const ShipPostalCode: string;
            const ShipCountry: string;
            const CustomerCompanyName: string;
            const CustomerContactName: string;
            const CustomerContactTitle: string;
            const CustomerCity: string;
            const CustomerRegion: string;
            const CustomerCountry: string;
            const CustomerPhone: string;
            const CustomerFax: string;
            const EmployeeFullName: string;
            const EmployeeGender: string;
            const ShipViaCompanyName: string;
            const ShipViaPhone: string;
            const ShippingState: string;
            const DetailList: string;
        }
    }
}
declare namespace coromendal.Northwind {
    namespace OrderService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.Northwind {
    enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1,
    }
}
declare namespace coromendal.Northwind {
}
declare namespace coromendal.Northwind {
    class ProductForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: Serenity.LookupEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
}
declare namespace coromendal.Northwind {
    interface ProductLangRow {
        Id?: number;
        ProductId?: number;
        LanguageId?: number;
        ProductName?: string;
    }
    namespace ProductLangRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const Id: string;
            const ProductId: string;
            const LanguageId: string;
            const ProductName: string;
        }
    }
}
declare namespace coromendal.Northwind {
    namespace ProductLangService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.Northwind {
    interface ProductLogRow {
        ProductLogID?: number;
        OperationType?: Serenity.CaptureOperationType;
        ChangingUserId?: number;
        ValidFrom?: string;
        ValidUntil?: string;
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
    }
    namespace ProductLogRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const ProductLogID: string;
            const OperationType: string;
            const ChangingUserId: string;
            const ValidFrom: string;
            const ValidUntil: string;
            const ProductID: string;
            const ProductName: string;
            const ProductImage: string;
            const Discontinued: string;
            const SupplierID: string;
            const CategoryID: string;
            const QuantityPerUnit: string;
            const UnitPrice: string;
            const UnitsInStock: string;
            const UnitsOnOrder: string;
            const ReorderLevel: string;
        }
    }
}
declare namespace coromendal.Northwind {
    interface ProductRow {
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        SupplierCompanyName?: string;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierCity?: string;
        SupplierRegion?: string;
        SupplierPostalCode?: string;
        SupplierCountry?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierHomePage?: string;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryPicture?: number[];
    }
    namespace ProductRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ProductRow>;
        namespace Fields {
            const ProductID: string;
            const ProductName: string;
            const ProductImage: string;
            const Discontinued: string;
            const SupplierID: string;
            const CategoryID: string;
            const QuantityPerUnit: string;
            const UnitPrice: string;
            const UnitsInStock: string;
            const UnitsOnOrder: string;
            const ReorderLevel: string;
            const SupplierCompanyName: string;
            const SupplierContactName: string;
            const SupplierContactTitle: string;
            const SupplierAddress: string;
            const SupplierCity: string;
            const SupplierRegion: string;
            const SupplierPostalCode: string;
            const SupplierCountry: string;
            const SupplierPhone: string;
            const SupplierFax: string;
            const SupplierHomePage: string;
            const CategoryName: string;
            const CategoryDescription: string;
            const CategoryPicture: string;
        }
    }
}
declare namespace coromendal.Northwind {
    namespace ProductService {
        const baseUrl: string;
        function Create(request: Serenity.SaveWithLocalizationRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveWithLocalizationRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function RetrieveLocalization(request: Serenity.RetrieveLocalizationRequest, onSuccess?: (response: Serenity.RetrieveLocalizationResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const RetrieveLocalization: string;
            const List: string;
        }
    }
}
declare namespace coromendal.Northwind {
}
declare namespace coromendal.Northwind {
    class RegionForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RegionForm {
        RegionID: Serenity.IntegerEditor;
        RegionDescription: Serenity.StringEditor;
    }
}
declare namespace coromendal.Northwind {
    interface RegionRow {
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace RegionRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<RegionRow>;
        namespace Fields {
            const RegionID: string;
            const RegionDescription: string;
        }
    }
}
declare namespace coromendal.Northwind {
    namespace RegionService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.Northwind {
}
declare namespace coromendal.Northwind {
    interface SalesByCategoryRow {
        CategoryId?: number;
        CategoryName?: string;
        ProductName?: string;
        ProductSales?: number;
    }
    namespace SalesByCategoryRow {
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const CategoryId: string;
            const CategoryName: string;
            const ProductName: string;
            const ProductSales: string;
        }
    }
}
declare namespace coromendal.Northwind {
    namespace SalesByCategoryService {
        const baseUrl: string;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesByCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
        }
    }
}
declare namespace coromendal.Northwind {
}
declare namespace coromendal.Northwind {
    class ShipperForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ShipperForm {
        CompanyName: Serenity.StringEditor;
        Phone: PhoneEditor;
    }
}
declare namespace coromendal.Northwind {
    interface ShipperRow {
        ShipperID?: number;
        CompanyName?: string;
        Phone?: string;
    }
    namespace ShipperRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ShipperRow>;
        namespace Fields {
            const ShipperID: string;
            const CompanyName: string;
            const Phone: string;
        }
    }
}
declare namespace coromendal.Northwind {
    namespace ShipperService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.Northwind {
}
declare namespace coromendal.Northwind {
    class SupplierForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SupplierForm {
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        HomePage: Serenity.StringEditor;
    }
}
declare namespace coromendal.Northwind {
    interface SupplierRow {
        SupplierID?: number;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        HomePage?: string;
    }
    namespace SupplierRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<SupplierRow>;
        namespace Fields {
            const SupplierID: string;
            const CompanyName: string;
            const ContactName: string;
            const ContactTitle: string;
            const Address: string;
            const City: string;
            const Region: string;
            const PostalCode: string;
            const Country: string;
            const Phone: string;
            const Fax: string;
            const HomePage: string;
        }
    }
}
declare namespace coromendal.Northwind {
    namespace SupplierService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal.Northwind {
}
declare namespace coromendal.Northwind {
    class TerritoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TerritoryForm {
        TerritoryID: Serenity.StringEditor;
        TerritoryDescription: Serenity.StringEditor;
        RegionID: Serenity.LookupEditor;
    }
}
declare namespace coromendal.Northwind {
    interface TerritoryRow {
        ID?: number;
        TerritoryID?: string;
        TerritoryDescription?: string;
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace TerritoryRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<TerritoryRow>;
        namespace Fields {
            const ID: string;
            const TerritoryID: string;
            const TerritoryDescription: string;
            const RegionID: string;
            const RegionDescription: string;
        }
    }
}
declare namespace coromendal.Northwind {
    namespace TerritoryService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace coromendal {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace coromendal {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace coromendal.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace coromendal.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace coromendal.LanguageList {
    function getValue(): string[][];
}
declare namespace coromendal.Common {
    interface ReportButtonOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
        download?: boolean;
        reportKey: string;
        extension?: string;
        getParams?: () => any;
        target?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
    }
}
declare namespace coromendal.Common {
    interface WordExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace WordExportHelper {
        function createToolButton(options: WordExportOptions): Serenity.ToolButton;
    }
}
declare namespace coromendal.BasicSamples {
    class VSGalleryQAGrid extends Serenity.EntityGrid<BasicSamples.VSGalleryQAThread, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): any[];
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getInitialTitle(): any;
    }
}
declare namespace coromendal.BasicSamples {
    class ViewWithoutIDGrid extends Serenity.EntityGrid<Northwind.SalesByCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Northwind.SalesByCategoryRow>): Serenity.ListResponse<Northwind.SalesByCategoryRow>;
        protected getButtons(): any[];
    }
}
declare namespace coromendal.BasicSamples {
    class RemovingAddButton extends Northwind.SupplierGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace coromendal.BasicSamples {
    class ProductExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace coromendal.BasicSamples {
    class ProductExcelImportGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace coromendal.BasicSamples {
    class InlineImageFormatter implements Slick.Formatter, Serenity.IInitializeColumn {
        format(ctx: Slick.FormatterContext): string;
        initializeColumn(column: Slick.Column): void;
        fileProperty: string;
        thumb: boolean;
    }
}
declare namespace coromendal.BasicSamples {
    class InlineImageInGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace coromendal.BasicSamples {
    class InitialValuesForQuickFilters extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of quick filters to be created for this grid.
         * By default, it returns quick filter objects corresponding to properties that
         * have a [QuickFilter] attribute at server side OrderColumns.cs
         */
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
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
        protected createQuickFilters(): void;
    }
}
declare namespace coromendal.BasicSamples {
    class GroupingAndSummariesInGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
}
declare namespace coromendal.BasicSamples {
    class GridFilteredByCriteria extends Northwind.ProductGrid {
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
    }
}
declare namespace coromendal.BasicSamples {
    class CustomLinksInGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * We override getColumns() to change format functions for some columns.
         * You could also write them as formatter classes, and use them at server side
         */
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
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
        protected editItem(entityOrId: any): void;
    }
}
declare namespace coromendal.BasicSamples {
    class ConditionalFormattingGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * We override getColumns() to be able to add a custom CSS class to UnitPrice
         * We could also add this class in ProductColumns.cs but didn't want to modify
         * it solely for this sample.
         */
        protected getColumns(): Slick.Column[];
        /**
         * This method is called for all rows
         * @param item Data item for current row
         * @param index Index of the row in grid
         */
        protected getItemCssClass(item: Northwind.ProductRow, index: number): string;
    }
}
declare namespace coromendal.BasicSamples {
    class CancellableBulkActionGrid extends Northwind.OrderGrid {
        private rowSelection;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
        protected getColumns(): Slick.Column[];
        protected getViewOptions(): Slick.RemoteViewOptions;
    }
}
declare namespace coromendal.BasicSamples {
    /**
     * This is our custom product dialog that uses a different product form
     * (LookupFilterByMultipleForm) with our special category editor.
     */
    class LookupFilterByMultipleDialog extends Northwind.ProductDialog {
        protected getFormKey(): string;
    }
}
declare namespace coromendal.BasicSamples {
    /**
     * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
     */
    class LookupFilterByMultipleGrid extends Northwind.ProductGrid {
        protected getDialogType(): typeof LookupFilterByMultipleDialog;
        constructor(container: JQuery);
        /**
         * This method is called just before List request is sent to service.
         * You have an opportunity here to cancel request or modify it.
         * Here we'll add a custom criteria to list request.
         */
        protected onViewSubmit(): boolean;
    }
}
declare namespace coromendal.BasicSamples {
    /**
     * This is our category editor that will show only categories of Produce and
     * Seafood. We are subclassing LookupEditorBase which also LookupEditor
     * derives from.
     *
     * After compiling and transforming templates, this editor type will be
     * available in server side to use in our LookupFilterByMultipleForm,
     * which is a version of ProductForm that uses our custom editor.
     */
    class ProduceSeafoodCategoryEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Northwind.CategoryRow> {
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions);
        /**
         * Normally LookupEditor requires a lookup key to determine which set of
         * lookup data to show in editor. As our editor will only show category
         * data, we lock it to category lookup key.
         */
        protected getLookupKey(): string;
        /**
         * Here we are filtering by category name but you could filter by any field.
         * Just make sure the fields you filter on has [LookupInclude] attribute on them,
         * otherwise their value will be null in client side as they are not sent back
         * from server in lookup script.
         */
        protected getItems(lookup: Q.Lookup<Northwind.CategoryRow>): Northwind.CategoryRow[];
    }
}
declare namespace coromendal.BasicSamples {
    /**
     * Our subclass of Order Details editor with a CategoryID property
     */
    class FilteredLookupDetailEditor extends Northwind.OrderDetailsEditor {
        protected getDialogType(): typeof FilteredLookupOrderDetailDialog;
        constructor(container: JQuery);
        categoryID: number;
        /**
         * This method is called to initialize an edit dialog created by
         * grid editor when Add button or an edit link is clicked
         * We have an opportunity here to pass CategoryID to edit dialog
         */
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace coromendal.BasicSamples {
    /**
     * Basic order dialog with a category selection
     */
    class FilteredLookupInDetailDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        private form;
        constructor();
    }
}
declare namespace coromendal.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
     */
    class FilteredLookupInDetailGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof FilteredLookupInDetailDialog;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.BasicSamples {
    /**
     * Our subclass of order detail dialog with a CategoryID property
     * that will be used to set CascadeValue of product editor
     */
    class FilteredLookupOrderDetailDialog extends Northwind.OrderDetailDialog {
        constructor();
        /**
         * This method is called just before an entity is loaded to dialog
         * This is also called for new record mode with an empty entity
         */
        protected beforeLoadEntity(entity: any): void;
        categoryID: number;
    }
}
declare namespace coromendal.BasicSamples {
    class SerialAutoNumberDialog extends Northwind.CustomerDialog {
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber();
    }
}
declare namespace coromendal.BasicSamples {
    /**
     * Subclass of CustomerGrid to override dialog type to SerialAutoNumberDialog
     */
    class SerialAutoNumberGrid extends Northwind.CustomerGrid {
        protected getDialogType(): typeof SerialAutoNumberDialog;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.BasicSamples {
    /**
     * Adding Responsive attribute makes this dialog use full screen in mobile devices.
     */
    class ResponsiveDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        constructor();
    }
}
declare namespace coromendal.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to ResponsiveDialog
     */
    class ResponsiveGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof ResponsiveDialog;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.BasicSamples {
    class ReadOnlyDialog extends Northwind.SupplierDialog {
        /**
         * This is the method that gets list of tool
         * buttons to be created in a dialog.
         *
         * Here we'll remove save and close button, and
         * apply changes buttons.
         */
        protected getToolbarButtons(): Serenity.ToolButton[];
        /**
         * This method is a good place to update states of
         * interface elements. It is called after dialog
         * is initialized and an entity is loaded into dialog.
         * This is also called in new item mode.
         */
        protected updateInterface(): void;
        /**
         * This method is called when dialog title needs to be updated.
         * Base class returns something like 'Edit xyz' for edit mode,
         * and 'New xyz' for new record mode.
         *
         * But our dialog is readonly, so we should change it to 'View xyz'
         */
        protected getEntityTitle(): string;
        /**
         * This method is actually the one that calls getEntityTitle()
         * and updates the dialog title. We could do it here too...
         */
        protected updateTitle(): void;
    }
}
declare namespace coromendal.BasicSamples {
    /**
     * A readonly grid that launches ReadOnlyDialog
     */
    class ReadOnlyGrid extends Northwind.SupplierGrid {
        protected getDialogType(): typeof ReadOnlyDialog;
        constructor(container: JQuery);
        /**
         * Removing add button from grid using its css class
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace coromendal.BasicSamples {
    class PopulateLinkedDataDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PopulateLinkedDataForm;
        constructor();
        private setCustomerDetails(details);
        /**
         * This dialog will have CSS class "s-PopulateLinkedDataDialog"
         * We are changing it here to "s-OrderDialog", to make it use default OrderDialog styles
         * This has no effect other than looks on populate linked data demonstration
         */
        protected getCssClass(): string;
    }
}
declare namespace coromendal.BasicSamples {
    /**
     * A subclass of OrderGrid that launches PopulateLinkedDataDialog
     */
    class PopulateLinkedDataGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof PopulateLinkedDataDialog;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.BasicSamples {
    /**
     * Styling for columns is done with CSS in site.basicsamples.less file.
     * When comparing this to MultiColumnDialog sample, you may notice that
     * this version requires much less JS and CSS code.
     */
    class MultiColumnResponsiveDialog extends Northwind.OrderDialog {
        constructor();
    }
}
declare namespace coromendal.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to MultiColumnResponsiveDialog
     */
    class MultiColumnResponsiveGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof MultiColumnResponsiveDialog;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.BasicSamples {
    class GetInsertedRecordIdDialog extends Northwind.CategoryDialog {
        /**
         * This method is called after the save request to service
         * is completed succesfully. This can be an insert or update.
         *
         * @param response Response that is returned from server
         */
        protected onSaveSuccess(response: Serenity.SaveResponse): void;
    }
}
declare namespace coromendal.BasicSamples {
    /**
     * Subclass of CategoryGrid to override dialog type to GetInsertedRecordIdDialog
     */
    class GetInsertedRecordIdGrid extends Northwind.CategoryGrid {
        protected getDialogType(): typeof GetInsertedRecordIdDialog;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.BasicSamples.DialogBoxes {
    function initializePage(): void;
}
declare namespace coromendal.BasicSamples {
    class DefaultValuesInNewGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * This method is called when New Item button is clicked.
         * By default, it calls EditItem with an empty entity.
         * This is a good place to fill in default values for New Item button.
         */
        protected addButtonClick(): void;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace coromendal.BasicSamples {
    class CloneableEntityDialog extends Northwind.ProductDialog {
        protected updateInterface(): void;
        /**
         * Overriding this method is optional to customize cloned entity
         */
        protected getCloningEntity(): Northwind.ProductRow;
    }
}
declare namespace coromendal.BasicSamples {
    /**
     * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
     */
    class CloneableEntityGrid extends Northwind.ProductGrid {
        protected getDialogType(): typeof CloneableEntityDialog;
        constructor(container: JQuery);
    }
}
declare var Morris: any;
declare namespace coromendal.BasicSamples {
    class ChartInDialog extends Serenity.TemplatedDialog<any> {
        private areaChart;
        static initializePage(): void;
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace coromendal.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace coromendal.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace coromendal.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        private rolePermissions;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        get_value(): UserPermissionRow[];
        set_value(value: UserPermissionRow[]): void;
        get_rolePermissions(): string[];
        set_rolePermissions(value: string[]): void;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace coromendal.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace coromendal.Administration {
    class AcnListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace coromendal.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace coromendal.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace coromendal.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace coromendal.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): RSVP.Promise<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace coromendal.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace coromendal.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace coromendal.Administration {
    class RoleFormater implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace coromendal.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace coromendal.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace coromendal.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace coromendal.ACN {
    class SuggestionDialog extends Serenity.EntityDialog<SuggestionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SuggestionForm;
    }
}
declare namespace coromendal.ACN {
    class SuggestionEditor extends Common.GridEditorBase<SuggestionRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SuggestionEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class SuggestionEditorDialog extends Common.GridEditorDialog<SuggestionRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: SuggestionForm;
    }
}
declare namespace coromendal.ACN {
    class SuggestionGrid extends Serenity.EntityGrid<SuggestionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SuggestionDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class ScopeDialog extends Serenity.EntityDialog<ScopeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ScopeForm;
    }
}
declare namespace coromendal.ACN {
    class ScopeEditor extends Common.GridEditorBase<ScopeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ScopeEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class ScopeEditorDialog extends Common.GridEditorDialog<ScopeRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ScopeForm;
    }
}
declare namespace coromendal.ACN {
    class SatisfactionratingDialog extends Serenity.EntityDialog<SatisfactionratingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SatisfactionratingForm;
    }
}
declare namespace coromendal.ACN {
    class SatisfactionratingEditor extends Common.GridEditorBase<SatisfactionratingRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SatisfactionratingEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class SatisfactionratingEditorDialog extends Common.GridEditorDialog<SatisfactionratingRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: SatisfactionratingForm;
    }
}
declare namespace coromendal.ACN {
    class SatisfactionratingGrid extends Serenity.EntityGrid<SatisfactionratingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SatisfactionratingDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class RootcauseDialog extends Serenity.EntityDialog<RootcauseRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RootcauseForm;
    }
}
declare namespace coromendal.ACN {
    class RootcauseEditor extends Common.GridEditorBase<RootcauseRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RootcauseEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class RootcauseEditorDialog extends Common.GridEditorDialog<RootcauseRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: RootcauseForm;
    }
}
declare namespace coromendal.ACN {
    class RootcauseGrid extends Serenity.EntityGrid<RootcauseRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RootcauseDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class RiskratingDialog extends Serenity.EntityDialog<RiskratingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RiskratingForm;
    }
}
declare namespace coromendal.ACN {
    class RiskratingEditor extends Common.GridEditorBase<RiskratingRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RiskratingEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class RiskratingEditorDialog extends Common.GridEditorDialog<RiskratingRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: RiskratingForm;
    }
}
declare namespace coromendal.ACN {
    class RiskratingGrid extends Serenity.EntityGrid<RiskratingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RiskratingDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class RiskmatrixDialog extends Serenity.EntityDialog<RiskmatrixRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RiskmatrixForm;
    }
}
declare namespace coromendal.ACN {
    class RiskmatrixEditor extends Common.GridEditorBase<RiskmatrixRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RiskmatrixEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class RiskmatrixEditorDialog extends Common.GridEditorDialog<RiskmatrixRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: RiskmatrixForm;
    }
}
declare namespace coromendal.ACN {
    class RiskmatrixGrid extends Serenity.EntityGrid<RiskmatrixRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RiskmatrixDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class QuestionsDialog extends Serenity.EntityDialog<QuestionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: QuestionsForm;
    }
}
declare namespace coromendal.ACN {
    class QuestionsEditor extends Common.GridEditorBase<QuestionsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof QuestionsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class QuestionsEditorDialog extends Common.GridEditorDialog<QuestionsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: QuestionsForm;
    }
}
declare namespace coromendal.ACN {
    class QuestionsGrid extends Serenity.EntityGrid<QuestionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof QuestionsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class ObservationpreviousauditDialog extends Serenity.EntityDialog<ObservationpreviousauditRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ObservationpreviousauditForm;
    }
}
declare namespace coromendal.ACN {
    class ObservationpreviousauditEditor extends Common.GridEditorBase<ObservationpreviousauditRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ObservationpreviousauditEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class ObservationpreviousauditEditorDialog extends Common.GridEditorDialog<ObservationpreviousauditRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ObservationpreviousauditForm;
    }
}
declare namespace coromendal.ACN {
    class ObservationpreviousauditGrid extends Serenity.EntityGrid<ObservationpreviousauditRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ObservationpreviousauditDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class ObservationpendingDialog extends Serenity.EntityDialog<ObservationpendingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ObservationpendingForm;
    }
}
declare namespace coromendal.ACN {
    class ObservationpendingEditor extends Common.GridEditorBase<ObservationpendingRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ObservationpendingEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class ObservationpendingEditorDialog extends Common.GridEditorDialog<ObservationpendingRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ObservationpendingForm;
    }
}
declare namespace coromendal.ACN {
    class ObservationpendingGrid extends Serenity.EntityGrid<ObservationpendingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ObservationpendingDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class NewiprovementsDialog extends Serenity.EntityDialog<NewiprovementsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: NewiprovementsForm;
    }
}
declare namespace coromendal.ACN {
    class NewiprovementsEditor extends Common.GridEditorBase<NewiprovementsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NewiprovementsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class NewiprovementsEditorDialog extends Common.GridEditorDialog<NewiprovementsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: NewiprovementsForm;
    }
}
declare namespace coromendal.ACN {
    class NewiprovementsGrid extends Serenity.EntityGrid<NewiprovementsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NewiprovementsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class NewchangesDialog extends Serenity.EntityDialog<NewchangesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: NewchangesForm;
    }
}
declare namespace coromendal.ACN {
    class NewchangesEditor extends Common.GridEditorBase<NewchangesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NewchangesEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class NewchangesEditorDialog extends Common.GridEditorDialog<NewchangesRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: NewchangesForm;
    }
}
declare namespace coromendal.ACN {
    class NewchangesGrid extends Serenity.EntityGrid<NewchangesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NewchangesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AuditorListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace coromendal.ACN {
    class MinutesofmeetingDialog extends Serenity.EntityDialog<MinutesofmeetingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MinutesofmeetingForm;
        constructor();
        private setCustomerDetails(details);
    }
}
declare namespace coromendal.ACN {
    class MinutesofmeetingEditor extends Common.GridEditorBase<MinutesofmeetingRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MinutesofmeetingEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class MinutesofmeetingEditorDialog extends Common.GridEditorDialog<MinutesofmeetingRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: MinutesofmeetingForm;
    }
}
declare namespace coromendal.ACN {
    class MinutesofmeetingGrid extends Serenity.EntityGrid<MinutesofmeetingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MinutesofmeetingDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class MeetingPointsDialog extends Serenity.EntityDialog<MeetingPointsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MeetingPointsForm;
    }
}
declare namespace coromendal.ACN {
    class MeetingPointsEditor extends Common.GridEditorBase<MeetingPointsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingPointsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class MeetingPointsEditorDialog extends Common.GridEditorDialog<MeetingPointsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: MeetingPointsForm;
    }
}
declare namespace coromendal.ACN {
    class MeetingPointsGrid extends Serenity.EntityGrid<MeetingPointsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingPointsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class MeetingIssueDialog extends Serenity.EntityDialog<MeetingIssueRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MeetingIssueForm;
    }
}
declare namespace coromendal.ACN {
    class MeetingIssueEditor extends Common.GridEditorBase<MeetingIssueRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingIssueEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class MeetingIssueEditorDialog extends Common.GridEditorDialog<MeetingIssueRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: MeetingIssueForm;
    }
}
declare namespace coromendal.ACN {
    class MeetingIssueGrid extends Serenity.EntityGrid<MeetingIssueRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingIssueDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class MeetingAbsentDialog extends Serenity.EntityDialog<MeetingAbsentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MeetingAbsentForm;
    }
}
declare namespace coromendal.ACN {
    class MeetingAbsentEditor extends Common.GridEditorBase<MeetingAbsentRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingAbsentEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class MeetingAbsentEditorDialog extends Common.GridEditorDialog<MeetingAbsentRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: MeetingAbsentForm;
    }
}
declare namespace coromendal.ACN {
    class MeetingAbsentGrid extends Serenity.EntityGrid<MeetingAbsentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingAbsentDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class LikeliwoodvalueDialog extends Serenity.EntityDialog<LikeliwoodvalueRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LikeliwoodvalueForm;
    }
}
declare namespace coromendal.ACN {
    class LikeliwoodvalueEditor extends Common.GridEditorBase<LikeliwoodvalueRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LikeliwoodvalueEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class LikeliwoodvalueEditorDialog extends Common.GridEditorDialog<LikeliwoodvalueRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: LikeliwoodvalueForm;
    }
}
declare namespace coromendal.ACN {
    class LikeliwoodvalueGrid extends Serenity.EntityGrid<LikeliwoodvalueRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LikeliwoodvalueDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class KeyfactsDialog extends Serenity.EntityDialog<KeyfactsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: KeyfactsForm;
    }
}
declare namespace coromendal.ACN {
    class KeyfactsEditor extends Common.GridEditorBase<KeyfactsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof KeyfactsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class KeyfactsEditorDialog extends Common.GridEditorDialog<KeyfactsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: KeyfactsForm;
    }
}
declare namespace coromendal.ACN {
    class KeyfactsGrid extends Serenity.EntityGrid<KeyfactsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof KeyfactsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class InputfromauditeeDialog extends Serenity.EntityDialog<InputfromauditeeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: InputfromauditeeForm;
    }
}
declare namespace coromendal.ACN {
    class InputfromauditeeEditor extends Common.GridEditorBase<InputfromauditeeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InputfromauditeeEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class InputfromauditeeEditorDialog extends Common.GridEditorDialog<InputfromauditeeRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: InputfromauditeeForm;
    }
}
declare namespace coromendal.ACN {
    class InputfromauditeeGrid extends Serenity.EntityGrid<InputfromauditeeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InputfromauditeeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class FeedbackvalueDialog extends Serenity.EntityDialog<FeedbackvalueRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: FeedbackvalueForm;
    }
}
declare namespace coromendal.ACN {
    class FeedbackvalueEditor extends Common.GridEditorBase<FeedbackvalueRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FeedbackvalueEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class FeedbackvalueEditorDialog extends Common.GridEditorDialog<FeedbackvalueRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: FeedbackvalueForm;
    }
}
declare namespace coromendal.ACN {
    class FeedbackvalueGrid extends Serenity.EntityGrid<FeedbackvalueRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FeedbackvalueDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class FeedbackDialog extends Serenity.EntityDialog<FeedbackRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: FeedbackForm;
    }
}
declare namespace coromendal.ACN {
    class FeedbackEditor extends Common.GridEditorBase<FeedbackRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FeedbackEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class FeedbackEditorDialog extends Common.GridEditorDialog<FeedbackRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: FeedbackForm;
    }
}
declare namespace coromendal.ACN {
    class FeedbackGrid extends Serenity.EntityGrid<FeedbackRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FeedbackDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class CurrentauditobservationDialog extends Serenity.EntityDialog<CurrentauditobservationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CurrentauditobservationForm;
    }
}
declare namespace coromendal.ACN {
    class CurrentauditobservationEditor extends Common.GridEditorBase<CurrentauditobservationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CurrentauditobservationEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class CurrentauditobservationEditorDialog extends Common.GridEditorDialog<CurrentauditobservationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: CurrentauditobservationForm;
    }
}
declare namespace coromendal.ACN {
    class CurrentauditobservationGrid extends Serenity.EntityGrid<CurrentauditobservationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CurrentauditobservationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class ConformationDialog extends Serenity.EntityDialog<ConformationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ConformationForm;
    }
}
declare namespace coromendal.ACN {
    class ConformationEditor extends Common.GridEditorBase<ConformationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConformationEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class ConformationEditorDialog extends Common.GridEditorDialog<ConformationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ConformationForm;
    }
}
declare namespace coromendal.ACN {
    class ConformationGrid extends Serenity.EntityGrid<ConformationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConformationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CategoryForm;
    }
}
declare namespace coromendal.ACN {
    class CategoryEditor extends Common.GridEditorBase<CategoryRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoryEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class CategoryEditorDialog extends Common.GridEditorDialog<CategoryRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: CategoryForm;
    }
}
declare namespace coromendal.ACN {
    class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoryDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AuditobservationDialog extends Serenity.EntityDialog<AuditobservationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AuditobservationForm;
        constructor();
    }
}
declare namespace coromendal.ACN {
    class AuditobservationEditor extends Common.GridEditorBase<AuditobservationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AuditobservationEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AuditobservationEditorDialog extends Common.GridEditorDialog<AuditobservationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: AuditobservationForm;
    }
}
declare namespace coromendal.ACN {
    class AuditobservationGrid extends Serenity.EntityGrid<AuditobservationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AuditobservationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AodDialog extends Serenity.EntityDialog<AodRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AodForm;
        constructor();
        private setMeetingDetails(meetingdetails);
    }
}
declare namespace coromendal.ACN {
    class AodEditor extends Common.GridEditorBase<AodRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AodEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AodEditorDialog extends Common.GridEditorDialog<AodRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: AodForm;
    }
}
declare namespace coromendal.ACN {
    class AodGrid extends Serenity.EntityGrid<AodRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AodDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AcnreportDialog extends Serenity.EntityDialog<AcnreportRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AcnreportForm;
    }
}
declare namespace coromendal.ACN {
    class AcnreportEditor extends Common.GridEditorBase<AcnreportRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcnreportEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AcnreportEditorDialog extends Common.GridEditorDialog<AcnreportRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: AcnreportForm;
    }
}
declare namespace coromendal.ACN {
    class AcnreportGrid extends Serenity.EntityGrid<AcnreportRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcnreportDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace coromendal.ACN {
    class AcnFeedbackRetailDialog extends Serenity.EntityDialog<AcnFeedbackRetailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AcnFeedbackRetailForm;
    }
}
declare namespace coromendal.ACN {
    class AcnFeedbackRetailEditor extends Common.GridEditorBase<AcnFeedbackRetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcnFeedbackRetailEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AcnFeedbackRetailEditorDialog extends Common.GridEditorDialog<AcnFeedbackRetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: AcnFeedbackRetailForm;
    }
}
declare namespace coromendal.ACN {
    class AcnFeedbackRetailGrid extends Serenity.EntityGrid<AcnFeedbackRetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcnFeedbackRetailDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AcnFeedbackDialog extends Serenity.EntityDialog<AcnFeedbackRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AcnFeedbackForm;
    }
}
declare namespace coromendal.ACN {
    class AcnFeedbackEditor extends Common.GridEditorBase<AcnFeedbackRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcnFeedbackEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AcnFeedbackEditorDialog extends Common.GridEditorDialog<AcnFeedbackRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: AcnFeedbackForm;
    }
}
declare namespace coromendal.ACN {
    class AcnFeedbackGrid extends Serenity.EntityGrid<AcnFeedbackRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcnFeedbackDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AcnAuditorRefDialog extends Serenity.EntityDialog<AcnAuditorRefRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: AcnAuditorRefForm;
    }
}
declare namespace coromendal.ACN {
    class AcnAuditorRefEditor extends Common.GridEditorBase<AcnAuditorRefRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcnAuditorRefEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AcnAuditorRefEditorDialog extends Common.GridEditorDialog<AcnAuditorRefRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: AcnAuditorRefForm;
    }
}
declare namespace coromendal.ACN {
    class AcnAuditorRefGrid extends Serenity.EntityGrid<AcnAuditorRefRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcnAuditorRefDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AcnAuditorDialog extends Serenity.EntityDialog<AcnAuditorRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AcnAuditorForm;
    }
}
declare namespace coromendal.ACN {
    class AcnAuditorEditor extends Common.GridEditorBase<AcnAuditorRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcnAuditorEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AcnAuditorEditorDialog extends Common.GridEditorDialog<AcnAuditorRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: AcnAuditorForm;
    }
}
declare namespace coromendal.ACN {
    class AcnAuditorGrid extends Serenity.EntityGrid<AcnAuditorRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcnAuditorDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AcnAuditeeRefDialog extends Serenity.EntityDialog<AcnAuditeeRefRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: AcnAuditeeRefForm;
    }
}
declare namespace coromendal.ACN {
    class AcnAuditeeRefEditor extends Common.GridEditorBase<AcnAuditeeRefRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcnAuditeeRefEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AcnAuditeeRefEditorDialog extends Common.GridEditorDialog<AcnAuditeeRefRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: AcnAuditeeRefForm;
    }
}
declare namespace coromendal.ACN {
    class AcnAuditeeRefGrid extends Serenity.EntityGrid<AcnAuditeeRefRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcnAuditeeRefDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AcnAuditeeDialog extends Serenity.EntityDialog<AcnAuditeeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AcnAuditeeForm;
    }
}
declare namespace coromendal.ACN {
    class AcnAuditeeEditor extends Common.GridEditorBase<AcnAuditeeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcnAuditeeEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AcnAuditeeEditorDialog extends Common.GridEditorDialog<AcnAuditeeRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: AcnAuditeeForm;
    }
}
declare namespace coromendal.ACN {
    class AcnAuditeeGrid extends Serenity.EntityGrid<AcnAuditeeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcnAuditeeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AcnAuditeeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace coromendal.ACN {
    class AcnDialog extends Serenity.EntityDialog<AcnRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AcnForm;
    }
}
declare namespace coromendal.ACN {
    class AcnEditor extends Common.GridEditorBase<AcnRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcnEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace coromendal.ACN {
    class AcnEditorDialog extends Common.GridEditorDialog<AcnRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: AcnForm;
    }
}
declare namespace coromendal.ACN {
    class AcnGrid extends Serenity.EntityGrid<AcnRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcnDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
