
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class InputfromauditeeEditorDialog extends Common.GridEditorDialog<InputfromauditeeRow> {
        protected getFormKey() { return InputfromauditeeForm.formKey; }
                protected getLocalTextPrefix() { return InputfromauditeeRow.localTextPrefix; }
        protected getNameProperty() { return InputfromauditeeRow.nameProperty; }
        protected form = new InputfromauditeeForm(this.idPrefix);
    }
}