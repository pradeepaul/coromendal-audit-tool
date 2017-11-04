
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ScopeexcludeDialog extends Serenity.EntityDialog<ScopeexcludeRow, any> {
        protected getFormKey() { return ScopeexcludeForm.formKey; }
        protected getIdProperty() { return ScopeexcludeRow.idProperty; }
        protected getLocalTextPrefix() { return ScopeexcludeRow.localTextPrefix; }
        protected getService() { return ScopeexcludeService.baseUrl; }

        protected form = new ScopeexcludeForm(this.idPrefix);
    }
}