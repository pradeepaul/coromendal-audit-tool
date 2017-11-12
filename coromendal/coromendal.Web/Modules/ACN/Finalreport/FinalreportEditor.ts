
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class FinalreportEditor extends Common.GridEditorBase<FinalreportRow> {
        protected getColumnsKey() { return 'ACN.Finalreport'; }
        protected getDialogType() { return FinalreportEditorDialog; }
                protected getLocalTextPrefix() { return FinalreportRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}