
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PreobservationEditorDialog extends Common.GridEditorDialog<PreobservationRow> {
        protected getFormKey() { return PreobservationForm.formKey; }
                protected getLocalTextPrefix() { return PreobservationRow.localTextPrefix; }
        protected getNameProperty() { return PreobservationRow.nameProperty; }
        protected form = new PreobservationForm(this.idPrefix);
    }
}