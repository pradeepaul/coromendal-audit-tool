
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class MeetingIssueEditor extends Common.GridEditorBase<MeetingIssueRow> {
        protected getColumnsKey() { return 'ACN.MeetingIssue'; }
        protected getDialogType() { return MeetingIssueDialog; }
                protected getLocalTextPrefix() { return MeetingIssueRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}