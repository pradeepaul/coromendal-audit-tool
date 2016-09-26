
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class MinutesofmeetingGrid extends Serenity.EntityGrid<MinutesofmeetingRow, any> {
        protected getColumnsKey() { return 'ACN.Minutesofmeeting'; }
        protected getDialogType() { return MinutesofmeetingDialog; }
        protected getIdProperty() { return MinutesofmeetingRow.idProperty; }
        protected getLocalTextPrefix() { return MinutesofmeetingRow.localTextPrefix; }
        protected getService() { return MinutesofmeetingService.baseUrl; }
        private rowSelection: Serenity.GridRowSelectionMixin;
        constructor(container: JQuery){
            super(container);
        }
        /*getButtons() {
            var buttons = super.getButtons();

            buttons.push(coromendal.Common.WordExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'ACN/Minutesofmeeting/DownloadWord',
                separator: true
            }));
            
            return buttons;
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            var fld = ACN.MinutesofmeetingRow.Fields;
            Q.first(columns, x => x.field == fld.Download).format =
                ctx => `<a href="javascript:;" class="customer-link">Click</a>`;
            return columns;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number): void {

            super.onClick(e, row, cell);
            if (e.isDefaultPrevented()) {
                return;
            }
            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.hasClass("customer-link")) {
                e.preventDefault();
                var request = Q.deepClone(this.getView().params) as Serenity.ListRequest;
                Q.postToService({ service: 'ACN/Minutesofmeeting/DownloadWord', request: request, target: '_blank'});
                console.log(item.Meetingid);
            }
        }*/


    }
}