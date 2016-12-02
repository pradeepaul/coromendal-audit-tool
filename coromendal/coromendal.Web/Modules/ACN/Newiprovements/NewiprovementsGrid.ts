
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class NewiprovementsGrid extends Serenity.EntityGrid<NewiprovementsRow, any> {
        protected getColumnsKey() { return 'ACN.Newiprovements'; }
        protected getDialogType() { return NewiprovementsDialog; }
        protected getIdProperty() { return NewiprovementsRow.idProperty; }
        protected getLocalTextPrefix() { return NewiprovementsRow.localTextPrefix; }
        protected getService() { return NewiprovementsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}