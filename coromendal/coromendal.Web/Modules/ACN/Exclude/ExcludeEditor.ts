
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class ExcludeEditor extends Common.GridEditorBase<ExcludeRow> {
        protected getColumnsKey() { return 'ACN.Exclude'; }
        protected getDialogType() { return ExcludeEditorDialog; }
                protected getLocalTextPrefix() { return ExcludeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}