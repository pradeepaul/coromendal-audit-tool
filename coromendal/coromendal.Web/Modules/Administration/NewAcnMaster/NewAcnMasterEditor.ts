
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    export class NewAcnMasterEditor extends Common.GridEditorBase<NewAcnMasterRow> {
        protected getColumnsKey() { return 'Administration.NewAcnMaster'; }
        protected getDialogType() { return NewAcnMasterEditorDialog; }
                protected getLocalTextPrefix() { return NewAcnMasterRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}