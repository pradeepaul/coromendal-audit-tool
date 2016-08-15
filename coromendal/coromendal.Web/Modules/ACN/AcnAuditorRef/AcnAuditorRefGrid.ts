
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnAuditorRefGrid extends Serenity.EntityGrid<AcnAuditorRefRow, any> {
        protected getColumnsKey() { return 'ACN.AcnAuditorRef'; }
        protected getDialogType() { return AcnAuditorRefDialog; }
        protected getIdProperty() { return AcnAuditorRefRow.idProperty; }
        protected getLocalTextPrefix() { return AcnAuditorRefRow.localTextPrefix; }
        protected getService() { return AcnAuditorRefService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}