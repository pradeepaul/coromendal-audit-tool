
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class FeedbackGrid extends Serenity.EntityGrid<FeedbackRow, any> {
        protected getColumnsKey() { return 'ACN.Feedback'; }
        protected getDialogType() { return FeedbackDialog; }
        protected getIdProperty() { return FeedbackRow.idProperty; }
        protected getLocalTextPrefix() { return FeedbackRow.localTextPrefix; }
        protected getService() { return FeedbackService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}