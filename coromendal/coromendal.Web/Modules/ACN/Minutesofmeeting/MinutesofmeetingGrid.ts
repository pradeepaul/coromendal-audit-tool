
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
    }
}