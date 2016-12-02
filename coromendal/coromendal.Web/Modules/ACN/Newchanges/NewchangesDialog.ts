
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class NewchangesDialog extends Serenity.EntityDialog<NewchangesRow, any> {
        protected getFormKey() { return NewchangesForm.formKey; }
        protected getIdProperty() { return NewchangesRow.idProperty; }
        protected getLocalTextPrefix() { return NewchangesRow.localTextPrefix; }
        protected getNameProperty() { return NewchangesRow.nameProperty; }
        protected getService() { return NewchangesService.baseUrl; }

        protected form = new NewchangesForm(this.idPrefix);
    }
}