
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class RootcauseGrid extends Serenity.EntityGrid<RootcauseRow, any> {
        protected getColumnsKey() { return 'ACN.Rootcause'; }
        protected getDialogType() { return RootcauseDialog; }
        protected getIdProperty() { return RootcauseRow.idProperty; }
        protected getLocalTextPrefix() { return RootcauseRow.localTextPrefix; }
        protected getService() { return RootcauseService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}