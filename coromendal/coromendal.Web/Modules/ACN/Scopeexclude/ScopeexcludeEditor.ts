
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class ScopeexcludeEditor extends Common.GridEditorBase<ScopeexcludeRow> {
        protected getColumnsKey() { return 'ACN.Scopeexclude'; }
        protected getDialogType() { return ScopeexcludeEditorDialog; }
                protected getLocalTextPrefix() { return ScopeexcludeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}