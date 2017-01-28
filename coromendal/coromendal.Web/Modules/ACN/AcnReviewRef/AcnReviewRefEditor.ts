
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnReviewRefEditor extends Common.GridEditorBase<AcnReviewRefRow> {
        protected getColumnsKey() { return 'ACN.AcnReviewRef'; }
        protected getDialogType() { return AcnReviewRefEditorDialog; }
                protected getLocalTextPrefix() { return AcnReviewRefRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}