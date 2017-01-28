
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class DarClarificationsGrid extends Serenity.EntityGrid<DarClarificationsRow, any> {
        protected getColumnsKey() { return 'ACN.DarClarifications'; }
        protected getDialogType() { return DarClarificationsDialog; }
        protected getIdProperty() { return DarClarificationsRow.idProperty; }
        protected getLocalTextPrefix() { return DarClarificationsRow.localTextPrefix; }
        protected getService() { return DarClarificationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}