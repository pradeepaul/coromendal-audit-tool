
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class KeyfactsDialog extends Serenity.EntityDialog<KeyfactsRow, any> {
        protected getFormKey() { return KeyfactsForm.formKey; }
        protected getIdProperty() { return KeyfactsRow.idProperty; }
        protected getLocalTextPrefix() { return KeyfactsRow.localTextPrefix; }
        protected getNameProperty() { return KeyfactsRow.nameProperty; }
        protected getService() { return KeyfactsService.baseUrl; }

        protected form = new KeyfactsForm(this.idPrefix);
    }
}