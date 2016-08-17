
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MinutesofmeetingDialog extends Serenity.EntityDialog<MinutesofmeetingRow, any> {
        protected getFormKey() { return MinutesofmeetingForm.formKey; }
        protected getIdProperty() { return MinutesofmeetingRow.idProperty; }
        protected getLocalTextPrefix() { return MinutesofmeetingRow.localTextPrefix; }
        protected getNameProperty() { return MinutesofmeetingRow.nameProperty; }
        protected getService() { return MinutesofmeetingService.baseUrl; }

        protected form = new MinutesofmeetingForm(this.idPrefix);
    }
}