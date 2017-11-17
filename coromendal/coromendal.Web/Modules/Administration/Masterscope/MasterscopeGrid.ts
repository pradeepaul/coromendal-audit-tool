
namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    export class MasterscopeGrid extends Serenity.EntityGrid<MasterscopeRow, any> {
        protected getColumnsKey() { return 'Administration.Masterscope'; }
        protected getDialogType() { return MasterscopeDialog; }
        protected getIdProperty() { return MasterscopeRow.idProperty; }
        protected getLocalTextPrefix() { return MasterscopeRow.localTextPrefix; }
        protected getService() { return MasterscopeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}