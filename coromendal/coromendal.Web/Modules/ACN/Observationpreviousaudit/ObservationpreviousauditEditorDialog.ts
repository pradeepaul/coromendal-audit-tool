
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ObservationpreviousauditEditorDialog extends Common.GridEditorDialog<ObservationpreviousauditRow> {
        protected getFormKey() { return ObservationpreviousauditForm.formKey; }
                protected getLocalTextPrefix() { return ObservationpreviousauditRow.localTextPrefix; }
        protected getNameProperty() { return ObservationpreviousauditRow.nameProperty; }
        protected form = new ObservationpreviousauditForm(this.idPrefix);
    }
}