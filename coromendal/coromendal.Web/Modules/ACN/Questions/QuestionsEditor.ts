
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class QuestionsEditor extends Common.GridEditorBase<QuestionsRow> {
        protected getColumnsKey() { return 'ACN.Questions'; }
        protected getDialogType() { return QuestionsEditorDialog; }
                protected getLocalTextPrefix() { return QuestionsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}