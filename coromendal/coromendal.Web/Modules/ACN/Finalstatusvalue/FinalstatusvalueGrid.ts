
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class FinalstatusvalueGrid extends Serenity.EntityGrid<FinalstatusvalueRow, any> {
        protected getColumnsKey() { return 'ACN.Finalstatusvalue'; }
        protected getDialogType() { return FinalstatusvalueDialog; }
        protected getIdProperty() { return FinalstatusvalueRow.idProperty; }
        protected getLocalTextPrefix() { return FinalstatusvalueRow.localTextPrefix; }
        protected getService() { return FinalstatusvalueService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}