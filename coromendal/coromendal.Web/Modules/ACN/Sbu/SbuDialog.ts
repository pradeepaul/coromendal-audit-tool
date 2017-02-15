
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SbuDialog extends Serenity.EntityDialog<SbuRow, any> {
        protected getFormKey() { return SbuForm.formKey; }
        protected getIdProperty() { return SbuRow.idProperty; }
        protected getLocalTextPrefix() { return SbuRow.localTextPrefix; }
        protected getNameProperty() { return SbuRow.nameProperty; }
        protected getService() { return SbuService.baseUrl; }

        protected form = new SbuForm(this.idPrefix);
    }
}