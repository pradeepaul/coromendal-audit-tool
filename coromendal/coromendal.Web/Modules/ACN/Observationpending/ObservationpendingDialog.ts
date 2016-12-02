
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ObservationpendingDialog extends Serenity.EntityDialog<ObservationpendingRow, any> {
        protected getFormKey() { return ObservationpendingForm.formKey; }
        protected getIdProperty() { return ObservationpendingRow.idProperty; }
        protected getLocalTextPrefix() { return ObservationpendingRow.localTextPrefix; }
        protected getNameProperty() { return ObservationpendingRow.nameProperty; }
        protected getService() { return ObservationpendingService.baseUrl; }

        protected form = new ObservationpendingForm(this.idPrefix);
    }
}