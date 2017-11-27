
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class ExcludeGrid extends Serenity.EntityGrid<ExcludeRow, any> {
        protected getColumnsKey() { return 'ACN.Exclude'; }
        protected getDialogType() { return ExcludeDialog; }
        protected getIdProperty() { return ExcludeRow.idProperty; }
        protected getLocalTextPrefix() { return ExcludeRow.localTextPrefix; }
        protected getService() { return ExcludeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}