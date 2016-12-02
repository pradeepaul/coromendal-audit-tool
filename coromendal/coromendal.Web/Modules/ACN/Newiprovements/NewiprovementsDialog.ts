
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class NewiprovementsDialog extends Serenity.EntityDialog<NewiprovementsRow, any> {
        protected getFormKey() { return NewiprovementsForm.formKey; }
        protected getIdProperty() { return NewiprovementsRow.idProperty; }
        protected getLocalTextPrefix() { return NewiprovementsRow.localTextPrefix; }
        protected getNameProperty() { return NewiprovementsRow.nameProperty; }
        protected getService() { return NewiprovementsService.baseUrl; }

        protected form = new NewiprovementsForm(this.idPrefix);
    }
}