
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SuggestionDialog extends Serenity.EntityDialog<SuggestionRow, any> {
        protected getFormKey() { return SuggestionForm.formKey; }
        protected getIdProperty() { return SuggestionRow.idProperty; }
        protected getLocalTextPrefix() { return SuggestionRow.localTextPrefix; }
        protected getNameProperty() { return SuggestionRow.nameProperty; }
        protected getService() { return SuggestionService.baseUrl; }

        protected form = new SuggestionForm(this.idPrefix);
    }
}