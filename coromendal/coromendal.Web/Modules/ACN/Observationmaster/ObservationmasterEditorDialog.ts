
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ObservationmasterEditorDialog extends Common.GridEditorDialog<ObservationmasterRow> {
        protected getFormKey() { return ObservationmasterForm.formKey; }
                protected getLocalTextPrefix() { return ObservationmasterRow.localTextPrefix; }
        protected getNameProperty() { return ObservationmasterRow.nameProperty; }
        protected form = new ObservationmasterForm(this.idPrefix);
    }
}