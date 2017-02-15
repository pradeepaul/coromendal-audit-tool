
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class SbuGrid extends Serenity.EntityGrid<SbuRow, any> {
        protected getColumnsKey() { return 'ACN.Sbu'; }
        protected getDialogType() { return SbuDialog; }
        protected getIdProperty() { return SbuRow.idProperty; }
        protected getLocalTextPrefix() { return SbuRow.localTextPrefix; }
        protected getService() { return SbuService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}