
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnAuditeeabsRefDialog extends Serenity.EntityDialog<AcnAuditeeabsRefRow, any> {
        protected getFormKey() { return AcnAuditeeabsRefForm.formKey; }
        protected getIdProperty() { return AcnAuditeeabsRefRow.idProperty; }
        protected getLocalTextPrefix() { return AcnAuditeeabsRefRow.localTextPrefix; }
        protected getService() { return AcnAuditeeabsRefService.baseUrl; }

        protected form = new AcnAuditeeabsRefForm(this.idPrefix);
    }
}