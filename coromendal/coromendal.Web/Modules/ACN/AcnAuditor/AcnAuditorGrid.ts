
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnAuditorGrid extends Serenity.EntityGrid<AcnAuditorRow, any> {
        protected getColumnsKey() { return 'ACN.AcnAuditor'; }
        protected getDialogType() { return AcnAuditorDialog; }
        protected getIdProperty() { return AcnAuditorRow.idProperty; }
        protected getLocalTextPrefix() { return AcnAuditorRow.localTextPrefix; }
        protected getService() { return AcnAuditorService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}