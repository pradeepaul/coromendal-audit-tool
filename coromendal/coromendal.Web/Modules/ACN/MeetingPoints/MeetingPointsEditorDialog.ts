
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingPointsEditorDialog extends Common.GridEditorDialog<MeetingPointsRow> {
        protected getFormKey() { return MeetingPointsForm.formKey; }
                protected getLocalTextPrefix() { return MeetingPointsRow.localTextPrefix; }
        protected getNameProperty() { return MeetingPointsRow.nameProperty; }
        protected form = new MeetingPointsForm(this.idPrefix);
    }
}