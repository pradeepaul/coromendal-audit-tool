
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
            Q.first(columns, x => x.field == fld.Download).format =
                ctx => `<a href="javascript:;" class="customer-link">click</a>`;
            return columns;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number): void {
            var c = confirm("Are you sure you want to Generate report,once done Audit will clomplete?");
            if (c == true) {
                super.onClick(e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.hasClass("customer-link")) {
                    e.preventDefault();
                    var request = Q.deepClone(this.getView().params) as Serenity.ListRequest;
                    Q.postToService({ service: 'ACN/Acnreport/DownloadWord', request: request, target: '_blank' });                    
                    console.log(item.Meetingid);
                }
            }
        }
    }
}