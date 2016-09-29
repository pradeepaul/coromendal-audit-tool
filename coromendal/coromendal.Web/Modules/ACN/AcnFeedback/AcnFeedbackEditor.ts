
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnFeedbackEditor extends Common.GridEditorBase<AcnFeedbackRow> {
        protected getColumnsKey() { return 'ACN.AcnFeedback'; }
        protected getDialogType() { return AcnFeedbackEditorDialog; }
                protected getLocalTextPrefix() { return AcnFeedbackRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}