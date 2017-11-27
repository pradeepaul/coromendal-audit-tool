
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ExcludeDialog extends Serenity.EntityDialog<ExcludeRow, any> {
        protected getFormKey() { return ExcludeForm.formKey; }
        protected getIdProperty() { return ExcludeRow.idProperty; }
        protected getLocalTextPrefix() { return ExcludeRow.localTextPrefix; }
        protected getService() { return ExcludeService.baseUrl; }

        protected form = new ExcludeForm(this.idPrefix);
    }
}