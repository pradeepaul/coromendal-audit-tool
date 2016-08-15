
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnGrid extends Serenity.EntityGrid<AcnRow, any> {
        protected getColumnsKey() { return 'ACN.Acn'; }
        protected getDialogType() { return AcnDialog; }
        protected getIdProperty() { return AcnRow.idProperty; }
        protected getLocalTextPrefix() { return AcnRow.localTextPrefix; }
        protected getService() { return AcnService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}