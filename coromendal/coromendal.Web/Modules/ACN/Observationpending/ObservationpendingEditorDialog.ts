
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ObservationpendingEditorDialog extends Common.GridEditorDialog<ObservationpendingRow> {
        protected getFormKey() { return ObservationpendingForm.formKey; }
                protected getLocalTextPrefix() { return ObservationpendingRow.localTextPrefix; }
        protected getNameProperty() { return ObservationpendingRow.nameProperty; }
        protected form = new ObservationpendingForm(this.idPrefix);
    }
}