
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class FinalreportGrid extends Serenity.EntityGrid<FinalreportRow, any> {
        protected getColumnsKey() { return 'ACN.Finalreport'; }
        protected getDialogType() { return FinalreportDialog; }
        protected getIdProperty() { return FinalreportRow.idProperty; }
        protected getLocalTextPrefix() { return FinalreportRow.localTextPrefix; }
        protected getService() { return FinalreportService.baseUrl; }

       
        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            var fld = ACN.AcnreportRow.Fields;            
            Q.first(columns, x => x.field == fld.Download).format =
                ctx => `<div class="down-button"></div>`;
            return columns;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number): void {
            //  var c = confirm("Are you sure you want to Generate report,once done Audit will clomplete?");
            // if (c == true) {
            //  super.onClick(e, row, cell);
            //   if (e.isDefaultPrevented()) {
            // return;
            //  }
            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.hasClass("previewbtn")) {
                e.preventDefault();
                var request = Q.deepClone(this.getView().params) as Serenity.ListRequest;
                request.ContainsField = String(item.ReportId);
                request.ContainsText = "preview";
                Q.postToService({ service: 'ACN/Acnreport/ReportStatus', request: request, target: '_blank' });
                //Q.postToService({ service: 'ACN/Acn/Sendmail', request: request, target: '_blank' });
            }
            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.hasClass("down-button")) {
                e.preventDefault();
                var request = Q.deepClone(this.getView().params) as Serenity.ListRequest;
                request.ContainsField = String(item.Acnid);
                Q.serviceCall({ service: 'ACN/Acnreport/Download', request: request, onSuccess: this.preview });
                //Q.postToService({ service: 'ACN/Acnreport/DownloadWord', request: request, target: '_blank' });                    
                //console.log(item.Meetingid);
                // }
            }
        }
        protected preview(respose) {

            //debugger;
            var total = respose[2];
            var completed = respose[1];
            var acnid = respose[0];
            var st1 = " Total Observarions : ";
            var st2 = "Competed Observations :";
            var str = st1.concat(total);
            var str1 = st2.concat(completed);
            var str2 = str.concat(str1);
            var msg = " Are you sure you want to do Report ?";
            var finalmsg = str2.concat(msg);
            var c = confirm(finalmsg);
            if (c == true) {
                // alert(respose[0]);

                // var request = Q.deepClone(this.getView().params) as Serenity.ListRequest;
                //request.ContainsField = respose[0];
                Q.postToService({ service: 'ACN/Acnreport/DownloadWord', request: this.request, target: '_blank' })
                //Q.serviceCall({ service: 'ACN/Acnreport/DownloadWord', request: request, onSuccess: this.preview });
            }

            console.log(respose);
        }
    }
}