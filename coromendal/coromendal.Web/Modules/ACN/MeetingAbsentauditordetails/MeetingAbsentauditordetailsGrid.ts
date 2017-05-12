
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class MeetingAbsentauditordetailsGrid extends Serenity.EntityGrid<MeetingAbsentauditordetailsRow, any> {
        protected getColumnsKey() { return 'ACN.MeetingAbsentauditordetails'; }
        protected getDialogType() { return MeetingAbsentauditordetailsDialog; }
        protected getIdProperty() { return MeetingAbsentauditordetailsRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAbsentauditordetailsRow.localTextPrefix; }
        protected getService() { return MeetingAbsentauditordetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}