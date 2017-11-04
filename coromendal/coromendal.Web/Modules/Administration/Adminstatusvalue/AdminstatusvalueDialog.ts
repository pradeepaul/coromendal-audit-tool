
namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AdminstatusvalueDialog extends Serenity.EntityDialog<AdminstatusvalueRow, any> {
        protected getFormKey() { return AdminstatusvalueForm.formKey; }
        protected getIdProperty() { return AdminstatusvalueRow.idProperty; }
        protected getLocalTextPrefix() { return AdminstatusvalueRow.localTextPrefix; }
        protected getNameProperty() { return AdminstatusvalueRow.nameProperty; }
        protected getService() { return AdminstatusvalueService.baseUrl; }

        protected form = new AdminstatusvalueForm(this.idPrefix);
    }
}