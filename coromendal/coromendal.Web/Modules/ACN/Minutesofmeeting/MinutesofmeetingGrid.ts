
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class MinutesofmeetingGrid extends Serenity.EntityGrid<MinutesofmeetingRow, any> {
        protected getColumnsKey() { return 'ACN.Minutesofmeeting'; }
        protected getDialogType() { return MinutesofmeetingDialog; }
        protected getIdProperty() { return MinutesofmeetingRow.idProperty; }
        protected getLocalTextPrefix() { return MinutesofmeetingRow.localTextPrefix; }
        protected getService() { return MinutesofmeetingService.baseUrl; }

        constructor(container: JQuery){
            super(container);
        }
        getButtons() {
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
            Q.first(columns, x => x.field == fld.Auditee).format =
                ctx => `<a href="javascript:;" class="customer-link">${Q.htmlEncode(ctx.value)}</a>`;
            return columns;
        }

        
       

        


    }
}