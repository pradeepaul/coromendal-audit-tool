
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    export class AdminstatusvalueEditor extends Common.GridEditorBase<AdminstatusvalueRow> {
        protected getColumnsKey() { return 'Administration.Adminstatusvalue'; }
        protected getDialogType() { return AdminstatusvalueEditorDialog; }
                protected getLocalTextPrefix() { return AdminstatusvalueRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}