
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
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            var fld = ACN.AcnRow.Fields;
            Q.first(columns, x => x.field == fld.Preview).format =
                ctx => `<a href="" class="send previewbtn"></a>`;
            Q.first(columns, x => x.field == fld.send).format =
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
                request.ContainsField = String(item.AcnId);
                request.ContainsText = "preview";
                Q.serviceCall({ service: 'ACN/Acn/Sendmail', request: request, onSuccess: this.preview });                
                //Q.postToService({ service: 'ACN/Acn/Sendmail', request: request, target: '_blank' });
            }
            if (target.hasClass("sendbtn")) {
                e.preventDefault();
                var request = Q.deepClone(this.getView().params) as Serenity.ListRequest;
                request.ContainsField = String(item.AcnId);
                request.ContainsText = "mail";
                //Q.serviceCall({ service: 'ACN/Acn/Sendmail', request: request, onSuccess: this.preview });
                Q.postToService({ service: 'ACN/Acn/Sendmail', request: request, target: '_blank' });
            }
        }
        protected preview(respose) {
            Q.iframeDialog({ html: respose });
           // console.log(respose);        
        }
       
        
    }
}