
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CurrentauditobservationEditorDialog extends Common.GridEditorDialog<CurrentauditobservationRow> {
        protected getFormKey() { return CurrentauditobservationForm.formKey; }
                protected getLocalTextPrefix() { return CurrentauditobservationRow.localTextPrefix; }
        protected getNameProperty() { return CurrentauditobservationRow.nameProperty; }
        protected form = new CurrentauditobservationForm(this.idPrefix);
    }
}