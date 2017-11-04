
namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    export class AdminstatusvalueGrid extends Serenity.EntityGrid<AdminstatusvalueRow, any> {
        protected getColumnsKey() { return 'Administration.Adminstatusvalue'; }
        protected getDialogType() { return AdminstatusvalueDialog; }
        protected getIdProperty() { return AdminstatusvalueRow.idProperty; }
        protected getLocalTextPrefix() { return AdminstatusvalueRow.localTextPrefix; }
        protected getService() { return AdminstatusvalueService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}