
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AodDialog extends Serenity.EntityDialog<AodRow, any> {
        protected getFormKey() { return AodForm.formKey; }
        protected getIdProperty() { return AodRow.idProperty; }
        protected getLocalTextPrefix() { return AodRow.localTextPrefix; }
        protected getNameProperty() { return AodRow.nameProperty; }
        protected getService() { return AodService.baseUrl; }

        protected form = new AodForm(this.idPrefix);
    }
}