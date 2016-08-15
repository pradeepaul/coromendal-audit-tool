
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnAuditorRefEditorDialog extends Common.GridEditorDialog<AcnAuditorRefRow> {
        protected getFormKey() { return AcnAuditorRefForm.formKey; }
                protected getLocalTextPrefix() { return AcnAuditorRefRow.localTextPrefix; }
        protected form = new AcnAuditorRefForm(this.idPrefix);
    }
}