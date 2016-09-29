
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ConformationDialog extends Serenity.EntityDialog<ConformationRow, any> {
        protected getFormKey() { return ConformationForm.formKey; }
        protected getIdProperty() { return ConformationRow.idProperty; }
        protected getLocalTextPrefix() { return ConformationRow.localTextPrefix; }
        protected getNameProperty() { return ConformationRow.nameProperty; }
        protected getService() { return ConformationService.baseUrl; }

        protected form = new ConformationForm(this.idPrefix);
    }
}