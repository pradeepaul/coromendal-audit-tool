
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingAbsentauditeeEditorDialog extends Common.GridEditorDialog<MeetingAbsentauditeeRow> {
        protected getFormKey() { return MeetingAbsentauditeeForm.formKey; }
                protected getLocalTextPrefix() { return MeetingAbsentauditeeRow.localTextPrefix; }
        protected getNameProperty() { return MeetingAbsentauditeeRow.nameProperty; }
        protected form = new MeetingAbsentauditeeForm(this.idPrefix);
    }
}