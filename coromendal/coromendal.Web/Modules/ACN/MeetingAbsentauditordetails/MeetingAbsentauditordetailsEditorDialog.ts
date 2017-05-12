
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingAbsentauditordetailsEditorDialog extends Common.GridEditorDialog<MeetingAbsentauditordetailsRow> {
        protected getFormKey() { return MeetingAbsentauditordetailsForm.formKey; }
                protected getLocalTextPrefix() { return MeetingAbsentauditordetailsRow.localTextPrefix; }
        protected getNameProperty() { return MeetingAbsentauditordetailsRow.nameProperty; }
        protected form = new MeetingAbsentauditordetailsForm(this.idPrefix);
    }
}