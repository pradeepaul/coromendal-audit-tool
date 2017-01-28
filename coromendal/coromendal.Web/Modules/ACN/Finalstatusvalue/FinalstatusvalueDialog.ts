
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class FinalstatusvalueDialog extends Serenity.EntityDialog<FinalstatusvalueRow, any> {
        protected getFormKey() { return FinalstatusvalueForm.formKey; }
        protected getIdProperty() { return FinalstatusvalueRow.idProperty; }
        protected getLocalTextPrefix() { return FinalstatusvalueRow.localTextPrefix; }
        protected getNameProperty() { return FinalstatusvalueRow.nameProperty; }
        protected getService() { return FinalstatusvalueService.baseUrl; }

        protected form = new FinalstatusvalueForm(this.idPrefix);
    }
}