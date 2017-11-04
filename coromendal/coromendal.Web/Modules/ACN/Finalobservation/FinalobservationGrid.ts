
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class FinalobservationGrid extends Serenity.EntityGrid<FinalobservationRow, any> {
        protected getColumnsKey() { return 'ACN.Finalobservation'; }
        protected getDialogType() { return FinalobservationDialog; }
        protected getIdProperty() { return FinalobservationRow.idProperty; }
        protected getLocalTextPrefix() { return FinalobservationRow.localTextPrefix; }
        protected getService() { return FinalobservationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}