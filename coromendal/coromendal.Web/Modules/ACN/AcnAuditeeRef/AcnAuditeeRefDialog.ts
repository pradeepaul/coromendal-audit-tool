
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnAuditeeRefDialog extends Serenity.EntityDialog<AcnAuditeeRefRow, any> {
        protected getFormKey() { return AcnAuditeeRefForm.formKey; }
        protected getIdProperty() { return AcnAuditeeRefRow.idProperty; }
        protected getLocalTextPrefix() { return AcnAuditeeRefRow.localTextPrefix; }
        protected getService() { return AcnAuditeeRefService.baseUrl; }

        protected form = new AcnAuditeeRefForm(this.idPrefix);
    }
}