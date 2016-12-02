
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class CurrentauditobservationGrid extends Serenity.EntityGrid<CurrentauditobservationRow, any> {
        protected getColumnsKey() { return 'ACN.Currentauditobservation'; }
        protected getDialogType() { return CurrentauditobservationDialog; }
        protected getIdProperty() { return CurrentauditobservationRow.idProperty; }
        protected getLocalTextPrefix() { return CurrentauditobservationRow.localTextPrefix; }
        protected getService() { return CurrentauditobservationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}