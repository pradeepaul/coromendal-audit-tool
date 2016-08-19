
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class QuestionsGrid extends Serenity.EntityGrid<QuestionsRow, any> {
        protected getColumnsKey() { return 'ACN.Questions'; }
        protected getDialogType() { return QuestionsDialog; }
        protected getIdProperty() { return QuestionsRow.idProperty; }
        protected getLocalTextPrefix() { return QuestionsRow.localTextPrefix; }
        protected getService() { return QuestionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}