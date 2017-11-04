
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MasterAcnEditorDialog extends Common.GridEditorDialog<MasterAcnRow> {
        protected getFormKey() { return MasterAcnForm.formKey; }
                protected getLocalTextPrefix() { return MasterAcnRow.localTextPrefix; }
        protected getNameProperty() { return MasterAcnRow.nameProperty; }
        protected form = new MasterAcnForm(this.idPrefix);
    }
}