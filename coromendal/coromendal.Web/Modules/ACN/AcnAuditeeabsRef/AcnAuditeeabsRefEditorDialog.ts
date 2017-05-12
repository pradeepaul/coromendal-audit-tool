
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnAuditeeabsRefEditorDialog extends Common.GridEditorDialog<AcnAuditeeabsRefRow> {
        protected getFormKey() { return AcnAuditeeabsRefForm.formKey; }
                protected getLocalTextPrefix() { return AcnAuditeeabsRefRow.localTextPrefix; }
        protected form = new AcnAuditeeabsRefForm(this.idPrefix);
    }
}