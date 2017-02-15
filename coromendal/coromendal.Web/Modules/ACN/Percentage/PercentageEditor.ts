
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class PercentageEditor extends Common.GridEditorBase<PercentageRow> {
        protected getColumnsKey() { return 'ACN.Percentage'; }
        protected getDialogType() { return PercentageEditorDialog; }
                protected getLocalTextPrefix() { return PercentageRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}