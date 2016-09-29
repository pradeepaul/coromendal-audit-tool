
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class ConformationGrid extends Serenity.EntityGrid<ConformationRow, any> {
        protected getColumnsKey() { return 'ACN.Conformation'; }
        protected getDialogType() { return ConformationDialog; }
        protected getIdProperty() { return ConformationRow.idProperty; }
        protected getLocalTextPrefix() { return ConformationRow.localTextPrefix; }
        protected getService() { return ConformationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}