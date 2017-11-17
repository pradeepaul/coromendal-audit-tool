
namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MasterAcnAuditeeRefDialog extends Serenity.EntityDialog<MasterAcnAuditeeRefRow, any> {
        protected getFormKey() { return MasterAcnAuditeeRefForm.formKey; }
        protected getIdProperty() { return MasterAcnAuditeeRefRow.idProperty; }
        protected getLocalTextPrefix() { return MasterAcnAuditeeRefRow.localTextPrefix; }
        protected getService() { return MasterAcnAuditeeRefService.baseUrl; }

        protected form = new MasterAcnAuditeeRefForm(this.idPrefix);
    }
}