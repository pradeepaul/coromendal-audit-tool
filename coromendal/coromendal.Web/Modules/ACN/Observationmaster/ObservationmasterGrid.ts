
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class ObservationmasterGrid extends Serenity.EntityGrid<ObservationmasterRow, any> {
        protected getColumnsKey() { return 'ACN.Observationmaster'; }
        protected getDialogType() { return ObservationmasterDialog; }
        protected getIdProperty() { return ObservationmasterRow.idProperty; }
        protected getLocalTextPrefix() { return ObservationmasterRow.localTextPrefix; }
        protected getService() { return ObservationmasterService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}