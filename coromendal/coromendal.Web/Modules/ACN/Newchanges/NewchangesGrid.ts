
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class NewchangesGrid extends Serenity.EntityGrid<NewchangesRow, any> {
        protected getColumnsKey() { return 'ACN.Newchanges'; }
        protected getDialogType() { return NewchangesDialog; }
        protected getIdProperty() { return NewchangesRow.idProperty; }
        protected getLocalTextPrefix() { return NewchangesRow.localTextPrefix; }
        protected getService() { return NewchangesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}