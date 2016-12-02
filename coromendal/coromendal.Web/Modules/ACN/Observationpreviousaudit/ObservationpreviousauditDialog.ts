
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ObservationpreviousauditDialog extends Serenity.EntityDialog<ObservationpreviousauditRow, any> {
        protected getFormKey() { return ObservationpreviousauditForm.formKey; }
        protected getIdProperty() { return ObservationpreviousauditRow.idProperty; }
        protected getLocalTextPrefix() { return ObservationpreviousauditRow.localTextPrefix; }
        protected getNameProperty() { return ObservationpreviousauditRow.nameProperty; }
        protected getService() { return ObservationpreviousauditService.baseUrl; }

        protected form = new ObservationpreviousauditForm(this.idPrefix);
    }
}