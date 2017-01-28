
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingAbsentauditorEditorDialog extends Common.GridEditorDialog<MeetingAbsentauditorRow> {
        protected getFormKey() { return MeetingAbsentauditorForm.formKey; }
                protected getLocalTextPrefix() { return MeetingAbsentauditorRow.localTextPrefix; }
        protected getNameProperty() { return MeetingAbsentauditorRow.nameProperty; }
        protected form = new MeetingAbsentauditorForm(this.idPrefix);
    }
}