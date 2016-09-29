
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AuditobservationDialog extends Serenity.EntityDialog<AuditobservationRow, any> {
        protected getFormKey() { return AuditobservationForm.formKey; }
        protected getIdProperty() { return AuditobservationRow.idProperty; }
        protected getLocalTextPrefix() { return AuditobservationRow.localTextPrefix; }
        protected getNameProperty() { return AuditobservationRow.nameProperty; }
        protected getService() { return AuditobservationService.baseUrl; }

        protected form = new AuditobservationForm(this.idPrefix);
    }
}