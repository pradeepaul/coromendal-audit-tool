
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class FinalobservationEditorDialog extends Common.GridEditorDialog<FinalobservationRow> {
        protected getFormKey() { return FinalobservationForm.formKey; }
                protected getLocalTextPrefix() { return FinalobservationRow.localTextPrefix; }
        protected getNameProperty() { return FinalobservationRow.nameProperty; }
        protected form = new FinalobservationForm(this.idPrefix);
    }
}