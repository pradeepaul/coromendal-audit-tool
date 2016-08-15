
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnAuditorEditorDialog extends Common.GridEditorDialog<AcnAuditorRow> {
        protected getFormKey() { return AcnAuditorForm.formKey; }
                protected getLocalTextPrefix() { return AcnAuditorRow.localTextPrefix; }
        protected getNameProperty() { return AcnAuditorRow.nameProperty; }
        protected form = new AcnAuditorForm(this.idPrefix);
    }
}