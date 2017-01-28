
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnReviewRefGrid extends Serenity.EntityGrid<AcnReviewRefRow, any> {
        protected getColumnsKey() { return 'ACN.AcnReviewRef'; }
        protected getDialogType() { return AcnReviewRefDialog; }
        protected getIdProperty() { return AcnReviewRefRow.idProperty; }
        protected getLocalTextPrefix() { return AcnReviewRefRow.localTextPrefix; }
        protected getService() { return AcnReviewRefService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}