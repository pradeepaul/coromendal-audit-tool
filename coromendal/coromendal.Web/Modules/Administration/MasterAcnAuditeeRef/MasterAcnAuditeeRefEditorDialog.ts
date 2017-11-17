
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MasterAcnAuditeeRefEditorDialog extends Common.GridEditorDialog<MasterAcnAuditeeRefRow> {
        protected getFormKey() { return MasterAcnAuditeeRefForm.formKey; }
                protected getLocalTextPrefix() { return MasterAcnAuditeeRefRow.localTextPrefix; }
        protected form = new MasterAcnAuditeeRefForm(this.idPrefix);
    }
}