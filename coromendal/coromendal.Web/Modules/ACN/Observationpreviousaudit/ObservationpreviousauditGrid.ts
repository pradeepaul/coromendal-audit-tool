
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class ObservationpreviousauditGrid extends Serenity.EntityGrid<ObservationpreviousauditRow, any> {
        protected getColumnsKey() { return 'ACN.Observationpreviousaudit'; }
        protected getDialogType() { return ObservationpreviousauditDialog; }
        protected getIdProperty() { return ObservationpreviousauditRow.idProperty; }
        protected getLocalTextPrefix() { return ObservationpreviousauditRow.localTextPrefix; }
        protected getService() { return ObservationpreviousauditService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}