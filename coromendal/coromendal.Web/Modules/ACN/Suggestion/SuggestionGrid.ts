
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class SuggestionGrid extends Serenity.EntityGrid<SuggestionRow, any> {
        protected getColumnsKey() { return 'ACN.Suggestion'; }
        protected getDialogType() { return SuggestionDialog; }
        protected getIdProperty() { return SuggestionRow.idProperty; }
        protected getLocalTextPrefix() { return SuggestionRow.localTextPrefix; }
        protected getService() { return SuggestionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}