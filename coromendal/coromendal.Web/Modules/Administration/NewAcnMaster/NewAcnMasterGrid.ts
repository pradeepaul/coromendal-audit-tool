
namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    export class NewAcnMasterGrid extends Serenity.EntityGrid<NewAcnMasterRow, any> {
        protected getColumnsKey() { return 'Administration.NewAcnMaster'; }
        protected getDialogType() { return NewAcnMasterDialog; }
        protected getIdProperty() { return NewAcnMasterRow.idProperty; }
        protected getLocalTextPrefix() { return NewAcnMasterRow.localTextPrefix; }
        protected getService() { return NewAcnMasterService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            debugger;
            var fld = Administration.NewAcnMasterRow.Fields;
            Q.first(columns, x => x.field == fld.Status).format =
                ctx => `<a href="" class="send sendbtn"></a>`;
            
            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number): void {
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented()) {
                return;
            }
            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.hasClass("sendbtn")) {
                e.preventDefault();
                var request = Q.deepClone(this.getView().params) as Serenity.ListRequest;
                request.ContainsField = String(item.Id);
                request.ContainsText = "preview";
               // Q.serviceCall({ service: 'ACN/Acn/Sendmail', request: request, onSuccess: this.preview });
                Q.postToService({ service: 'Administration/NewAcnMaster/Send', request: request, target: '_blank' });
            }
           
        }
    }
}