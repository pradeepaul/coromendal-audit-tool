
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
                request.ContainsField = String(item.AodId);
                Q.postToService({ service: 'ACN/Aod/Sendmail', request: request, target: '_blank' });
            }
        }
    }
}