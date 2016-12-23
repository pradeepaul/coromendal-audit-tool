
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class RiskmatrixGrid extends Serenity.EntityGrid<RiskmatrixRow, any> {
        protected getColumnsKey() { return 'ACN.Riskmatrix'; }
        protected getDialogType() { return RiskmatrixDialog; }
        protected getIdProperty() { return RiskmatrixRow.idProperty; }
        protected getLocalTextPrefix() { return RiskmatrixRow.localTextPrefix; }
        protected getService() { return RiskmatrixService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}