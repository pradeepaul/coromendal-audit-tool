
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class ScopeexcludeGrid extends Serenity.EntityGrid<ScopeexcludeRow, any> {
        protected getColumnsKey() { return 'ACN.Scopeexclude'; }
        protected getDialogType() { return ScopeexcludeDialog; }
        protected getIdProperty() { return ScopeexcludeRow.idProperty; }
        protected getLocalTextPrefix() { return ScopeexcludeRow.localTextPrefix; }
        protected getService() { return ScopeexcludeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}