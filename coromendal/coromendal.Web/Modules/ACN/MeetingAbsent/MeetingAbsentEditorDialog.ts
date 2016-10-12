
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingAbsentEditorDialog extends Common.GridEditorDialog<MeetingAbsentRow> {
        protected getFormKey() { return MeetingAbsentForm.formKey; }
                protected getLocalTextPrefix() { return MeetingAbsentRow.localTextPrefix; }
        protected getNameProperty() { return MeetingAbsentRow.nameProperty; }
        protected form = new MeetingAbsentForm(this.idPrefix);
    }
}