
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnAuditeeGrid extends Serenity.EntityGrid<AcnAuditeeRow, any> {
        protected getColumnsKey() { return 'ACN.AcnAuditee'; }
        protected getDialogType() { return AcnAuditeeDialog; }
        protected getIdProperty() { return AcnAuditeeRow.idProperty; }
        protected getLocalTextPrefix() { return AcnAuditeeRow.localTextPrefix; }
        protected getService() { return AcnAuditeeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}