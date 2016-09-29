
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class FeedbackvalueEditor extends Common.GridEditorBase<FeedbackvalueRow> {
        protected getColumnsKey() { return 'ACN.Feedbackvalue'; }
        protected getDialogType() { return FeedbackvalueEditorDialog; }
                protected getLocalTextPrefix() { return FeedbackvalueRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}