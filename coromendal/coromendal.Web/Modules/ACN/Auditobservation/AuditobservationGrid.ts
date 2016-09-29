
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AuditobservationGrid extends Serenity.EntityGrid<AuditobservationRow, any> {
        protected getColumnsKey() { return 'ACN.Auditobservation'; }
        protected getDialogType() { return AuditobservationDialog; }
        protected getIdProperty() { return AuditobservationRow.idProperty; }
        protected getLocalTextPrefix() { return AuditobservationRow.localTextPrefix; }
        protected getService() { return AuditobservationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}