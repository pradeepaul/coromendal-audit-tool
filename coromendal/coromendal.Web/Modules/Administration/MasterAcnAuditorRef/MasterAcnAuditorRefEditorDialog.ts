
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MasterAcnAuditorRefEditorDialog extends Common.GridEditorDialog<MasterAcnAuditorRefRow> {
        protected getFormKey() { return MasterAcnAuditorRefForm.formKey; }
                protected getLocalTextPrefix() { return MasterAcnAuditorRefRow.localTextPrefix; }
        protected form = new MasterAcnAuditorRefForm(this.idPrefix);
    }
}