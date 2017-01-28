﻿
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class MinutesofmeetingGrid extends Serenity.EntityGrid<MinutesofmeetingRow, any> {
        protected getColumnsKey() { return 'ACN.Minutesofmeeting'; }
        protected getDialogType() { return MinutesofmeetingDialog; }
        protected getIdProperty() { return MinutesofmeetingRow.idProperty; }
        protected getLocalTextPrefix() { return MinutesofmeetingRow.localTextPrefix; }
        protected getService() { return MinutesofmeetingService.baseUrl; }
        
        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            var fld = ACN.MinutesofmeetingRow.Fields;            
            Q.first(columns, x => x.field == fld.Auditscope).format =
                ctx => `<a href="" class="send previewbtn"></a>`;
            Q.first(columns, x => x.field == fld.Venue).format =
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
                request.ContainsField = String(item.Meetingid);
                request.ContainsText = "preview";
                Q.serviceCall({ service: 'ACN/Minutesofmeeting/Sendmail', request: request, onSuccess: this.preview });      
            }
            if (target.hasClass("sendbtn")) {
                e.preventDefault();
                var request = Q.deepClone(this.getView().params) as Serenity.ListRequest;
                request.ContainsField = String(item.Meetingid);
                request.ContainsText = "mail";
                //Q.serviceCall({ service: 'ACN/Acn/Sendmail', request: request, onSuccess: this.preview });
                Q.postToService({ service: 'ACN/Minutesofmeeting/Sendmail', request: request, target: '_blank' });
            }

        }
        protected preview(respose) {
            Q.iframeDialog({ html: respose });
            // console.log(respose);        
        }
    }
}