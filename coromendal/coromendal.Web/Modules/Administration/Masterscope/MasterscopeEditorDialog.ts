
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MasterscopeEditorDialog extends Common.GridEditorDialog<MasterscopeRow> {
        protected getFormKey() { return MasterscopeForm.formKey; }
                protected getLocalTextPrefix() { return MasterscopeRow.localTextPrefix; }
        protected getNameProperty() { return MasterscopeRow.nameProperty; }
        protected form = new MasterscopeForm(this.idPrefix);
    }
}