
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class MeetingAbsentGrid extends Serenity.EntityGrid<MeetingAbsentRow, any> {
        protected getColumnsKey() { return 'ACN.MeetingAbsent'; }
        protected getDialogType() { return MeetingAbsentDialog; }
        protected getIdProperty() { return MeetingAbsentRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAbsentRow.localTextPrefix; }
        protected getService() { return MeetingAbsentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}