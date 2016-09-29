
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class RootcauseEditor extends Common.GridEditorBase<RootcauseRow> {
        protected getColumnsKey() { return 'ACN.Rootcause'; }
        protected getDialogType() { return RootcauseEditorDialog; }
                protected getLocalTextPrefix() { return RootcauseRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}