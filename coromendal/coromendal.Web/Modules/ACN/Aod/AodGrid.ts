
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AodGrid extends Serenity.EntityGrid<AodRow, any> {
        protected getColumnsKey() { return 'ACN.Aod'; }
        protected getDialogType() { return AodDialog; }
        protected getIdProperty() { return AodRow.idProperty; }
        protected getLocalTextPrefix() { return AodRow.localTextPrefix; }
        protected getService() { return AodService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}