
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ObservationmasterDialog extends Serenity.EntityDialog<ObservationmasterRow, any> {
        protected getFormKey() { return ObservationmasterForm.formKey; }
        protected getIdProperty() { return ObservationmasterRow.idProperty; }
        protected getLocalTextPrefix() { return ObservationmasterRow.localTextPrefix; }
        protected getNameProperty() { return ObservationmasterRow.nameProperty; }
        protected getService() { return ObservationmasterService.baseUrl; }

        protected form = new ObservationmasterForm(this.idPrefix);
       
    }
}