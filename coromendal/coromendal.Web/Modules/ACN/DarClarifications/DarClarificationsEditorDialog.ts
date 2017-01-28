
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class DarClarificationsEditorDialog extends Common.GridEditorDialog<DarClarificationsRow> {
        protected getFormKey() { return DarClarificationsForm.formKey; }
                protected getLocalTextPrefix() { return DarClarificationsRow.localTextPrefix; }
        protected form = new DarClarificationsForm(this.idPrefix);
    }
}