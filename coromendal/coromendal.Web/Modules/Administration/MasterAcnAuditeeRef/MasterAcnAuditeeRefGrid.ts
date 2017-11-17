
namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    export class MasterAcnAuditeeRefGrid extends Serenity.EntityGrid<MasterAcnAuditeeRefRow, any> {
        protected getColumnsKey() { return 'Administration.MasterAcnAuditeeRef'; }
        protected getDialogType() { return MasterAcnAuditeeRefDialog; }
        protected getIdProperty() { return MasterAcnAuditeeRefRow.idProperty; }
        protected getLocalTextPrefix() { return MasterAcnAuditeeRefRow.localTextPrefix; }
        protected getService() { return MasterAcnAuditeeRefService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}