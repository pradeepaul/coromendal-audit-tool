
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnEditor extends Common.GridEditorBase<AcnRow> {
        protected getColumnsKey() { return 'ACN.Acn'; }
        protected getDialogType() { return AcnEditorDialog; }
                protected getLocalTextPrefix() { return AcnRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}