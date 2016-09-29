
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class RiskratingEditor extends Common.GridEditorBase<RiskratingRow> {
        protected getColumnsKey() { return 'ACN.Riskrating'; }
        protected getDialogType() { return RiskratingEditorDialog; }
                protected getLocalTextPrefix() { return RiskratingRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}