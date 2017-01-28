
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class DarClarificationsDialog extends Serenity.EntityDialog<DarClarificationsRow, any> {
        protected getFormKey() { return DarClarificationsForm.formKey; }
        protected getIdProperty() { return DarClarificationsRow.idProperty; }
        protected getLocalTextPrefix() { return DarClarificationsRow.localTextPrefix; }
        protected getService() { return DarClarificationsService.baseUrl; }

        protected form = new DarClarificationsForm(this.idPrefix);
    }
}