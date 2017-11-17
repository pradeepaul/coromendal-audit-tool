
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    export class MasterscopeEditor extends Common.GridEditorBase<MasterscopeRow> {
        protected getColumnsKey() { return 'Administration.Masterscope'; }
        protected getDialogType() { return MasterscopeEditorDialog; }
                protected getLocalTextPrefix() { return MasterscopeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}