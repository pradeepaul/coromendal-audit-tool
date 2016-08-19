
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class QuestionsEditorDialog extends Common.GridEditorDialog<QuestionsRow> {
        protected getFormKey() { return QuestionsForm.formKey; }
                protected getLocalTextPrefix() { return QuestionsRow.localTextPrefix; }
        protected getNameProperty() { return QuestionsRow.nameProperty; }
        protected form = new QuestionsForm(this.idPrefix);
    }
}