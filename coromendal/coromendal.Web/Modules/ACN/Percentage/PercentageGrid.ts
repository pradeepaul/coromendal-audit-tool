
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class PercentageGrid extends Serenity.EntityGrid<PercentageRow, any> {
        protected getColumnsKey() { return 'ACN.Percentage'; }
        protected getDialogType() { return PercentageDialog; }
        protected getIdProperty() { return PercentageRow.idProperty; }
        protected getLocalTextPrefix() { return PercentageRow.localTextPrefix; }
        protected getService() { return PercentageService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}