
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class ScopeEditor extends Common.GridEditorBase<ScopeRow> {
        protected getColumnsKey() { return 'ACN.Scope'; }
        protected getDialogType() { return ScopeEditorDialog; }
                protected getLocalTextPrefix() { return ScopeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}