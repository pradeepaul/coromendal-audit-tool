
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class KeyfactsEditorDialog extends Common.GridEditorDialog<KeyfactsRow> {
        protected getFormKey() { return KeyfactsForm.formKey; }
                protected getLocalTextPrefix() { return KeyfactsRow.localTextPrefix; }
        protected getNameProperty() { return KeyfactsRow.nameProperty; }
        protected form = new KeyfactsForm(this.idPrefix);
    }
}