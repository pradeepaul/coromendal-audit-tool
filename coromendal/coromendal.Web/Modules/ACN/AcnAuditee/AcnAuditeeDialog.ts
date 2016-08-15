
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnAuditeeDialog extends Serenity.EntityDialog<AcnAuditeeRow, any> {
        protected getFormKey() { return AcnAuditeeForm.formKey; }
        protected getIdProperty() { return AcnAuditeeRow.idProperty; }
        protected getLocalTextPrefix() { return AcnAuditeeRow.localTextPrefix; }
        protected getNameProperty() { return AcnAuditeeRow.nameProperty; }
        protected getService() { return AcnAuditeeService.baseUrl; }

        protected form = new AcnAuditeeForm(this.idPrefix);
    }
}