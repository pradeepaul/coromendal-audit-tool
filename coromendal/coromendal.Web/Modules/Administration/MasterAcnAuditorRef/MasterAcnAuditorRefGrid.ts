
namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    export class MasterAcnAuditorRefGrid extends Serenity.EntityGrid<MasterAcnAuditorRefRow, any> {
        protected getColumnsKey() { return 'Administration.MasterAcnAuditorRef'; }
        protected getDialogType() { return MasterAcnAuditorRefDialog; }
        protected getIdProperty() { return MasterAcnAuditorRefRow.idProperty; }
        protected getLocalTextPrefix() { return MasterAcnAuditorRefRow.localTextPrefix; }
        protected getService() { return MasterAcnAuditorRefService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}