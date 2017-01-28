
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class MeetingAbsentauditeeGrid extends Serenity.EntityGrid<MeetingAbsentauditeeRow, any> {
        protected getColumnsKey() { return 'ACN.MeetingAbsentauditee'; }
        protected getDialogType() { return MeetingAbsentauditeeDialog; }
        protected getIdProperty() { return MeetingAbsentauditeeRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAbsentauditeeRow.localTextPrefix; }
        protected getService() { return MeetingAbsentauditeeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}