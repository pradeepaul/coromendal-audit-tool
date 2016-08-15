
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnAuditorDialog extends Serenity.EntityDialog<AcnAuditorRow, any> {
        protected getFormKey() { return AcnAuditorForm.formKey; }
        protected getIdProperty() { return AcnAuditorRow.idProperty; }
        protected getLocalTextPrefix() { return AcnAuditorRow.localTextPrefix; }
        protected getNameProperty() { return AcnAuditorRow.nameProperty; }
        protected getService() { return AcnAuditorService.baseUrl; }

        protected form = new AcnAuditorForm(this.idPrefix);
    }
}