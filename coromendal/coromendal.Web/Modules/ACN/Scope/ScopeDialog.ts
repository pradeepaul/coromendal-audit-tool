
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ScopeDialog extends Serenity.EntityDialog<ScopeRow, any> {
        protected getFormKey() { return ScopeForm.formKey; }
        protected getIdProperty() { return ScopeRow.idProperty; }
        protected getLocalTextPrefix() { return ScopeRow.localTextPrefix; }
        protected getNameProperty() { return ScopeRow.nameProperty; }
        protected getService() { return ScopeService.baseUrl; }

        protected form = new ScopeForm(this.idPrefix);
    }
}