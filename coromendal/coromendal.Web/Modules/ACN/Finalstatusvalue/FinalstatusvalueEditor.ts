
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class FinalstatusvalueEditor extends Common.GridEditorBase<FinalstatusvalueRow> {
        protected getColumnsKey() { return 'ACN.Finalstatusvalue'; }
        protected getDialogType() { return FinalstatusvalueEditorDialog; }
                protected getLocalTextPrefix() { return FinalstatusvalueRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}