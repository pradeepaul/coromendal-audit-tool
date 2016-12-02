
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnFeedbackRetailEditor extends Common.GridEditorBase<AcnFeedbackRetailRow> {
        protected getColumnsKey() { return 'ACN.AcnFeedbackRetail'; }
        protected getDialogType() { return AcnFeedbackRetailEditorDialog; }
                protected getLocalTextPrefix() { return AcnFeedbackRetailRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}