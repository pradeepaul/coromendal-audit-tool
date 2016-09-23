
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingIssueEditorDialog extends Common.GridEditorDialog<MeetingIssueRow> {
        protected getFormKey() { return MeetingIssueForm.formKey; }
                protected getLocalTextPrefix() { return MeetingIssueRow.localTextPrefix; }
        protected getNameProperty() { return MeetingIssueRow.nameProperty; }
        protected form = new MeetingIssueForm(this.idPrefix);
    }
}