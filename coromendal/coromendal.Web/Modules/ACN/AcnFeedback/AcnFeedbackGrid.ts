
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnFeedbackGrid extends Serenity.EntityGrid<AcnFeedbackRow, any> {
        protected getColumnsKey() { return 'ACN.AcnFeedback'; }
        protected getDialogType() { return AcnFeedbackDialog; }
        protected getIdProperty() { return AcnFeedbackRow.idProperty; }
        protected getLocalTextPrefix() { return AcnFeedbackRow.localTextPrefix; }
        protected getService() { return AcnFeedbackService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}