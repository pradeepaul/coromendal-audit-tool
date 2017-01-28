
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AodGrid extends Serenity.EntityGrid<AodRow, any> {
        protected getColumnsKey() { return 'ACN.Aod'; }
        protected getDialogType() { return AodDialog; }
        protected getIdProperty() { return AodRow.idProperty; }
        protected getLocalTextPrefix() { return AodRow.localTextPrefix; }
        protected getService() { return AodService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            var fld = ACN.AodRow.Fields;
            Q.first(columns, x => x.field == fld.Preview).format =
                ctx => `<a href="" class="send previewbtn"></a>`;
            Q.first(columns, x => x.field == fld.Send).format =
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
            if (target.hasClass("previewbtn")) {
                e.preventDefault();
                var request = Q.deepClone(this.getView().params) as Serenity.ListRequest;
                request.ContainsField = String(item.AodId);
                request.ContainsText = "preview";
                Q.serviceCall({ service: 'ACN/Aod/Sendmail', request: request, onSuccess: this.preview });  
            }
            if (target.hasClass("sendbtn")) {
                e.preventDefault();
                var request = Q.deepClone(this.getView().params) as Serenity.ListRequest;
                request.ContainsField = String(item.AodId);
                request.ContainsText = "mail";
                //Q.serviceCall({ service: 'ACN/Acn/Sendmail', request: request, onSuccess: this.preview });
                Q.postToService({ service: 'ACN/Aod/Sendmail', request: request, target: '_blank' });
            }
        }
        protected preview(respose) {
            Q.iframeDialog({ html: respose });
            // console.log(respose);        
        }
    }
}