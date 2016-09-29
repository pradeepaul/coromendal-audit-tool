
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AuditobservationEditorDialog extends Common.GridEditorDialog<AuditobservationRow> {
        protected getFormKey() { return AuditobservationForm.formKey; }
                protected getLocalTextPrefix() { return AuditobservationRow.localTextPrefix; }
        protected getNameProperty() { return AuditobservationRow.nameProperty; }
        protected form = new AuditobservationForm(this.idPrefix);
    }
}