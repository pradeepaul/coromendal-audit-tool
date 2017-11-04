
namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    export class MasterAcnGrid extends Serenity.EntityGrid<MasterAcnRow, any> {
        protected getColumnsKey() { return 'Administration.MasterAcn'; }
        protected getDialogType() { return MasterAcnDialog; }
        protected getIdProperty() { return MasterAcnRow.idProperty; }
        protected getLocalTextPrefix() { return MasterAcnRow.localTextPrefix; }
        protected getService() { return MasterAcnService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns(): Slick.Column[] {
            //alert(fld.Statusid);
            var columns = super.getColumns();
            var fld = Administration.MasterAcnRow.Fields;
           // alert(fld.Id);
            if (fld.Id == 1) {
                alert(fld.Statusid);
                Q.first(columns, x => x.field == fld.Statusid).format =
                    ctx => `<a href="" class="pendingbtn"></a>`;
            }
            return columns;
        }
    }
}