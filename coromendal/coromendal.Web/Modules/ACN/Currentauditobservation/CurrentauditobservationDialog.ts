
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CurrentauditobservationDialog extends Serenity.EntityDialog<CurrentauditobservationRow, any> {
        protected getFormKey() { return CurrentauditobservationForm.formKey; }
        protected getIdProperty() { return CurrentauditobservationRow.idProperty; }
        protected getLocalTextPrefix() { return CurrentauditobservationRow.localTextPrefix; }
        protected getNameProperty() { return CurrentauditobservationRow.nameProperty; }
        protected getService() { return CurrentauditobservationService.baseUrl; }

        protected form = new CurrentauditobservationForm(this.idPrefix);
        protected afterLoadEntity() {
            alert("hi");

        }
    }
}