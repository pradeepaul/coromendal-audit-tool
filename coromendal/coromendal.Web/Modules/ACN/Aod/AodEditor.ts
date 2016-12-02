
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AodEditor extends Common.GridEditorBase<AodRow> {
        protected getColumnsKey() { return 'ACN.Aod'; }
        protected getDialogType() { return AodEditorDialog; }
                protected getLocalTextPrefix() { return AodRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}