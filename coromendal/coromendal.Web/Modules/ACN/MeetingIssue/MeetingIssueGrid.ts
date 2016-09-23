
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class MeetingIssueGrid extends Serenity.EntityGrid<MeetingIssueRow, any> {
        protected getColumnsKey() { return 'ACN.MeetingIssue'; }
        protected getDialogType() { return MeetingIssueDialog; }
        protected getIdProperty() { return MeetingIssueRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingIssueRow.localTextPrefix; }
        protected getService() { return MeetingIssueService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}