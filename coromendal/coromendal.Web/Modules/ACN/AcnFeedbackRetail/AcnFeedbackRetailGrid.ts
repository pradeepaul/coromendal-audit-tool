
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnFeedbackRetailGrid extends Serenity.EntityGrid<AcnFeedbackRetailRow, any> {
        protected getColumnsKey() { return 'ACN.AcnFeedbackRetail'; }
        protected getDialogType() { return AcnFeedbackRetailDialog; }
        protected getIdProperty() { return AcnFeedbackRetailRow.idProperty; }
        protected getLocalTextPrefix() { return AcnFeedbackRetailRow.localTextPrefix; }
        protected getService() { return AcnFeedbackRetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            var fld = ACN.AcnFeedbackRow.Fields;
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
            if (target.hasClass("sendbtn")) {
                e.preventDefault();
                var request = Q.deepClone(this.getView().params) as Serenity.ListRequest;
                request.ContainsField = String(item.AcnFeedbackRetailId);
                request.ContainsText = "mail";
                Q.postToService({ service: 'ACN/AcnFeedbackRetail/Sendmail', request: request, target: '_blank' });
            }
            if (target.hasClass("previewbtn")) {
                e.preventDefault();
                var request = Q.deepClone(this.getView().params) as Serenity.ListRequest;
                request.ContainsField = String(item.AcnFeedbackRetailId);
                request.ContainsText = "preview";
                //Q.serviceCall({ service: 'ACN/Acn/Sendmail', request: request, onSuccess: this.preview });
               // Q.postToService({ service: 'ACN/AcnFeedbackRetail/Sendmail', request: request, target: '_blank' });
                Q.serviceCall({ service: 'ACN/AcnFeedbackRetail/Sendmail', request: request, onSuccess: this.preview });      
            }
        }
        protected preview(respose) {
            Q.iframeDialog({ html: respose });
            // console.log(respose);        
        }
    }
}