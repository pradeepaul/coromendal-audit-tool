
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class RiskratingGrid extends Serenity.EntityGrid<RiskratingRow, any> {
        protected getColumnsKey() { return 'ACN.Riskrating'; }
        protected getDialogType() { return RiskratingDialog; }
        protected getIdProperty() { return RiskratingRow.idProperty; }
        protected getLocalTextPrefix() { return RiskratingRow.localTextPrefix; }
        protected getService() { return RiskratingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}