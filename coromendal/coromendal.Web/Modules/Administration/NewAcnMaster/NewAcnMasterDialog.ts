
namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class NewAcnMasterDialog extends Serenity.EntityDialog<NewAcnMasterRow, any> {
        protected getFormKey() { return NewAcnMasterForm.formKey; }
        protected getIdProperty() { return NewAcnMasterRow.idProperty; }
        protected getLocalTextPrefix() { return NewAcnMasterRow.localTextPrefix; }
        protected getNameProperty() { return NewAcnMasterRow.nameProperty; }
        protected getService() { return NewAcnMasterService.baseUrl; }

        protected form = new NewAcnMasterForm(this.idPrefix);
    }
}