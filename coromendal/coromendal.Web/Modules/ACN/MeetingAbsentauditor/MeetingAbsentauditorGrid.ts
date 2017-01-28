
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class MeetingAbsentauditorGrid extends Serenity.EntityGrid<MeetingAbsentauditorRow, any> {
        protected getColumnsKey() { return 'ACN.MeetingAbsentauditor'; }
        protected getDialogType() { return MeetingAbsentauditorDialog; }
        protected getIdProperty() { return MeetingAbsentauditorRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAbsentauditorRow.localTextPrefix; }
        protected getService() { return MeetingAbsentauditorService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}