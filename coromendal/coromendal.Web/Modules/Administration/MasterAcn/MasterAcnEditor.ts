
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    export class MasterAcnEditor extends Common.GridEditorBase<MasterAcnRow> {
        protected getColumnsKey() { return 'Administration.MasterAcn'; }
        protected getDialogType() { return MasterAcnEditorDialog; }
                protected getLocalTextPrefix() { return MasterAcnRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}