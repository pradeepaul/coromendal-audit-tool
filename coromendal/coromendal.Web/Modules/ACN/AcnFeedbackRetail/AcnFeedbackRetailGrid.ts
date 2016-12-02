
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnFeedbackRetailGrid extends Serenity.EntityGrid<AcnFeedbackRetailRow, any> {
        protected getColumnsKey() { return 'ACN.AcnFeedbackRetail'; }
        protected getDialogType() { return AcnFeedbackRetailDialog; }
        protected getIdProperty() { return AcnFeedbackRetailRow.idProperty; }
        protected getLocalTextPrefix() { return AcnFeedbackRetailRow.localTextPrefix; }
        protected getService() { return AcnFeedbackRetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}