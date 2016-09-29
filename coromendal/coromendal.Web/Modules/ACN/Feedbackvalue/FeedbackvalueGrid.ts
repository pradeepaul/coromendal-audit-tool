
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class FeedbackvalueGrid extends Serenity.EntityGrid<FeedbackvalueRow, any> {
        protected getColumnsKey() { return 'ACN.Feedbackvalue'; }
        protected getDialogType() { return FeedbackvalueDialog; }
        protected getIdProperty() { return FeedbackvalueRow.idProperty; }
        protected getLocalTextPrefix() { return FeedbackvalueRow.localTextPrefix; }
        protected getService() { return FeedbackvalueService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}