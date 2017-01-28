
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnReviewRefEditorDialog extends Common.GridEditorDialog<AcnReviewRefRow> {
        protected getFormKey() { return AcnReviewRefForm.formKey; }
                protected getLocalTextPrefix() { return AcnReviewRefRow.localTextPrefix; }
        protected form = new AcnReviewRefForm(this.idPrefix);
    }
}