
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnFeedbackGrid extends Serenity.EntityGrid<AcnFeedbackRow, any> {
        protected getColumnsKey() { return 'ACN.AcnFeedback'; }
        protected getDialogType() { return AcnFeedbackDialog; }
        protected getIdProperty() { return AcnFeedbackRow.idProperty; }
        protected getLocalTextPrefix() { return AcnFeedbackRow.localTextPrefix; }
        protected getService() { return AcnFeedbackService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            var fld = ACN.AcnFeedbackRow.Fields;
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
                request.ContainsField = String(item.AcnFeedbackId);
                Q.postToService({ service: 'ACN/AcnFeedback/Sendmail', request: request, target: '_blank' });
            }
        }
    }
}