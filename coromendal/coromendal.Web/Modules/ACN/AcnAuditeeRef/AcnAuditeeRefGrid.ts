
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnAuditeeRefGrid extends Serenity.EntityGrid<AcnAuditeeRefRow, any> {
        protected getColumnsKey() { return 'ACN.AcnAuditeeRef'; }
        protected getDialogType() { return AcnAuditeeRefDialog; }
        protected getIdProperty() { return AcnAuditeeRefRow.idProperty; }
        protected getLocalTextPrefix() { return AcnAuditeeRefRow.localTextPrefix; }
        protected getService() { return AcnAuditeeRefService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}