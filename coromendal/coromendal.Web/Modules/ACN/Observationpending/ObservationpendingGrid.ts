
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class ObservationpendingGrid extends Serenity.EntityGrid<ObservationpendingRow, any> {
        protected getColumnsKey() { return 'ACN.Observationpending'; }
        protected getDialogType() { return ObservationpendingDialog; }
        protected getIdProperty() { return ObservationpendingRow.idProperty; }
        protected getLocalTextPrefix() { return ObservationpendingRow.localTextPrefix; }
        protected getService() { return ObservationpendingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}