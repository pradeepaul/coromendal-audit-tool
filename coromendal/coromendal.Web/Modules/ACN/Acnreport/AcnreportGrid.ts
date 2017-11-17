
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnreportGrid extends Serenity.EntityGrid<AcnreportRow, any> {
        protected getColumnsKey() { return 'ACN.Acnreport'; }
        protected getDialogType() { return AcnreportDialog; }
        protected getIdProperty() { return AcnreportRow.idProperty; }
        protected getLocalTextPrefix() { return AcnreportRow.localTextPrefix; }
        protected getService() { return AcnreportService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            var fld = ACN.AcnreportRow.Fields;            
            Q.first(columns, x => x.field == fld.status).format =
                ctx => `<div class="previewbtn"></div>`;
            Q.first(columns, x => x.field == fld.Download).format =
                ctx => `<div class="down-button"></div>`;
            return columns;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number): void {
          
            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.hasClass("previewbtn")) {
                e.preventDefault();
                var request = Q.deepClone(this.getView().params) as Serenity.ListRequest;
                request.ContainsField = String(item.ReportId);
                request.ContainsText = "preview";
                Q.postToService({ service: 'ACN/Acnreport/ReportStatus', request: request, target: '_blank'});
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
            var msg = " Total Audit Observation approved and not approved information here";
            var finalmsg = msg.concat(str2);
            var c = confirm(finalmsg);           
            if (c == true) {
                if (respose[1] != 0) {
                    Q.postToService({ service: 'ACN/Acnreport/DownloadWord', request: this.request, target: '_blank' })
                    //Q.serviceCall({ service: 'ACN/Acnreport/DownloadWord', request: request, onSuccess: this.preview });
                }
                else {
                    alert("No Audit Observations have been reported.  Cannot generate Report");
                }
            } 
            
            console.log(respose);        
        }
    }
}