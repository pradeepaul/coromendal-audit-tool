
namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MasterscopeDialog extends Serenity.EntityDialog<MasterscopeRow, any> {
        protected getFormKey() { return MasterscopeForm.formKey; }
        protected getIdProperty() { return MasterscopeRow.idProperty; }
        protected getLocalTextPrefix() { return MasterscopeRow.localTextPrefix; }
        protected getNameProperty() { return MasterscopeRow.nameProperty; }
        protected getService() { return MasterscopeService.baseUrl; }

        protected form = new MasterscopeForm(this.idPrefix);
    }
}