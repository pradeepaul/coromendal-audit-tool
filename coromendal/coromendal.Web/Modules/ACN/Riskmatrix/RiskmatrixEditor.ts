
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class RiskmatrixEditor extends Common.GridEditorBase<RiskmatrixRow> {
        protected getColumnsKey() { return 'ACN.Riskmatrix'; }
        protected getDialogType() { return RiskmatrixEditorDialog; }
                protected getLocalTextPrefix() { return RiskmatrixRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}