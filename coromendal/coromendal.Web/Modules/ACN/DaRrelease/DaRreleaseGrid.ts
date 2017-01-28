
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class DaRreleaseGrid extends Serenity.EntityGrid<DaRreleaseRow, any> {
        protected getColumnsKey() { return 'ACN.DaRrelease'; }
        protected getDialogType() { return DaRreleaseDialog; }
        protected getIdProperty() { return DaRreleaseRow.idProperty; }
        protected getLocalTextPrefix() { return DaRreleaseRow.localTextPrefix; }
        protected getService() { return DaRreleaseService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}