
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnAuditeeRefEditorDialog extends Common.GridEditorDialog<AcnAuditeeRefRow> {
        protected getFormKey() { return AcnAuditeeRefForm.formKey; }
                protected getLocalTextPrefix() { return AcnAuditeeRefRow.localTextPrefix; }
        protected form = new AcnAuditeeRefForm(this.idPrefix);
    }
}