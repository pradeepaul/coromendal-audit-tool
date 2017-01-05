
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
                ctx => `<a href="" class="send">Send</a>`;
            return columns;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number): void {
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented()) {
                return;
            }
            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.hasClass("send")) {
                e.preventDefault();
                var request = Q.deepClone(this.getView().params) as Serenity.ListRequest;
                request.ContainsField = String(item.AcnId);
                Q.postToService({ service: 'ACN/Acn/Sendmail', request: request, target: '_blank' });
            }
        }
    }
}