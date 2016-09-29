
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SuggestionEditorDialog extends Common.GridEditorDialog<SuggestionRow> {
        protected getFormKey() { return SuggestionForm.formKey; }
                protected getLocalTextPrefix() { return SuggestionRow.localTextPrefix; }
        protected getNameProperty() { return SuggestionRow.nameProperty; }
        protected form = new SuggestionForm(this.idPrefix);
    }
}