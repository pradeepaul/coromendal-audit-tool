
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class KeyfactsGrid extends Serenity.EntityGrid<KeyfactsRow, any> {
        protected getColumnsKey() { return 'ACN.Keyfacts'; }
        protected getDialogType() { return KeyfactsDialog; }
        protected getIdProperty() { return KeyfactsRow.idProperty; }
        protected getLocalTextPrefix() { return KeyfactsRow.localTextPrefix; }
        protected getService() { return KeyfactsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}