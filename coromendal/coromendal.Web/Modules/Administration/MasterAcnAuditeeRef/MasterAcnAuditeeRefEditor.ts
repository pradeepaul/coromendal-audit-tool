
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    export class MasterAcnAuditeeRefEditor extends Common.GridEditorBase<MasterAcnAuditeeRefRow> {
        protected getColumnsKey() { return 'Administration.MasterAcnAuditeeRef'; }
        protected getDialogType() { return MasterAcnAuditeeRefEditorDialog; }
                protected getLocalTextPrefix() { return MasterAcnAuditeeRefRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}