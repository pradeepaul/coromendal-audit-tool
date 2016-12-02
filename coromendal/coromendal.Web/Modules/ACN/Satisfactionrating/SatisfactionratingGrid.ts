
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class SatisfactionratingGrid extends Serenity.EntityGrid<SatisfactionratingRow, any> {
        protected getColumnsKey() { return 'ACN.Satisfactionrating'; }
        protected getDialogType() { return SatisfactionratingDialog; }
        protected getIdProperty() { return SatisfactionratingRow.idProperty; }
        protected getLocalTextPrefix() { return SatisfactionratingRow.localTextPrefix; }
        protected getService() { return SatisfactionratingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}