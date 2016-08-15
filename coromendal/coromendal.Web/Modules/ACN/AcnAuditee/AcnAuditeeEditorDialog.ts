
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnAuditeeEditorDialog extends Common.GridEditorDialog<AcnAuditeeRow> {
        protected getFormKey() { return AcnAuditeeForm.formKey; }
                protected getLocalTextPrefix() { return AcnAuditeeRow.localTextPrefix; }
        protected getNameProperty() { return AcnAuditeeRow.nameProperty; }
        protected form = new AcnAuditeeForm(this.idPrefix);
    }
}