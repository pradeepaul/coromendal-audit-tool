
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class FinalreportGrid extends Serenity.EntityGrid<FinalreportRow, any> {
        protected getColumnsKey() { return 'ACN.Finalreport'; }
        protected getDialogType() { return FinalreportDialog; }
        protected getIdProperty() { return FinalreportRow.idProperty; }
        protected getLocalTextPrefix() { return FinalreportRow.localTextPrefix; }
        protected getService() { return FinalreportService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}