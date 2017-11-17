
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class PreobservationGrid extends Serenity.EntityGrid<PreobservationRow, any> {
        protected getColumnsKey() { return 'ACN.Preobservation'; }
        protected getDialogType() { return PreobservationDialog; }
        protected getIdProperty() { return PreobservationRow.idProperty; }
        protected getLocalTextPrefix() { return PreobservationRow.localTextPrefix; }
        protected getService() { return PreobservationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}