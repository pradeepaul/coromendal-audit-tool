
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class LikeliwoodvalueEditorDialog extends Common.GridEditorDialog<LikeliwoodvalueRow> {
        protected getFormKey() { return LikeliwoodvalueForm.formKey; }
                protected getLocalTextPrefix() { return LikeliwoodvalueRow.localTextPrefix; }
        protected getNameProperty() { return LikeliwoodvalueRow.nameProperty; }
        protected form = new LikeliwoodvalueForm(this.idPrefix);
    }
}