
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class FeedbackEditor extends Common.GridEditorBase<FeedbackRow> {
        protected getColumnsKey() { return 'ACN.Feedback'; }
        protected getDialogType() { return FeedbackEditorDialog; }
                protected getLocalTextPrefix() { return FeedbackRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}