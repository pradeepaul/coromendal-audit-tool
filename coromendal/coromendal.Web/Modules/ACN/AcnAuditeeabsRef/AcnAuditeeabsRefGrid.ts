
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnAuditeeabsRefGrid extends Serenity.EntityGrid<AcnAuditeeabsRefRow, any> {
        protected getColumnsKey() { return 'ACN.AcnAuditeeabsRef'; }
        protected getDialogType() { return AcnAuditeeabsRefDialog; }
        protected getIdProperty() { return AcnAuditeeabsRefRow.idProperty; }
        protected getLocalTextPrefix() { return AcnAuditeeabsRefRow.localTextPrefix; }
        protected getService() { return AcnAuditeeabsRefService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}