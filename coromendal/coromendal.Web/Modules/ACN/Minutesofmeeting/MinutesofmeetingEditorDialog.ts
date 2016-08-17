
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MinutesofmeetingEditorDialog extends Common.GridEditorDialog<MinutesofmeetingRow> {
        protected getFormKey() { return MinutesofmeetingForm.formKey; }
                protected getLocalTextPrefix() { return MinutesofmeetingRow.localTextPrefix; }
        protected getNameProperty() { return MinutesofmeetingRow.nameProperty; }
        protected form = new MinutesofmeetingForm(this.idPrefix);
    }
}