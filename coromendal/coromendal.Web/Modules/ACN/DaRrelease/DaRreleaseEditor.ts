
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class DaRreleaseEditor extends Common.GridEditorBase<DaRreleaseRow> {
        protected getColumnsKey() { return 'ACN.DaRrelease'; }
        protected getDialogType() { return DaRreleaseEditorDialog; }
                protected getLocalTextPrefix() { return DaRreleaseRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}